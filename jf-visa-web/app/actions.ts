'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'
import twilio from 'twilio'

const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be valid'),
    interest: z.enum([
        'Visit Visa',
        'Study Visa',
        'Work Visa',
        'Umrah Visa',
        'Immigration',
        'Travel Insurance',
        'Qatar Azad / Freelance Visa',
        'Life Insurance'
    ] as const),
    country: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

const travelInsuranceSchema = z.object({
    // Personal Info
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    dob: z.string().min(1, 'Date of Birth is required'),
    passportNumber: z.string().min(5, 'Passport Number is required'),
    nationality: z.string().min(2, 'Nationality is required'),
    phone: z.string().min(10, 'Phone number must be valid'),
    email: z.string().email('Invalid email address'),

    // Travel Details
    destination: z.string().min(2, 'Destination is required'),
    visaType: z.enum(['Visit Visa', 'Study Visa', 'Work Visa', 'Immigration', 'Other']),
    startDate: z.string().min(1, 'Start Date is required'),
    endDate: z.string().min(1, 'End Date is required'),

    // Insurance Selection
    coverageAmount: z.enum(['30000', '50000', '100000']),
    planType: z.enum(['Individual', 'Family', 'Student', 'Multi-Trip', 'Long Stay']),
    duration: z.string().optional(), // Can be calculated or selected

    // Travelers
    travelersCount: z.string().optional(),
    travelersAges: z.string().optional(),

    // Options
    urgentProcessing: z.string().optional(),

    // Conditional
    universityName: z.string().optional(),
    multiTripFreq: z.string().optional(),

    // Family Members
    familyMembers: z.string().optional(),
})

export async function sendEmail(prevState: any, formData: FormData) {
    // Honeypot check
    const honeypot = formData.get('website_url')
    if (honeypot) {
        return { success: false, message: 'Spam detected. Submission ignored.' }
    }

    const rawData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        interest: formData.get('interest'),
        country: formData.get('country'),
        message: formData.get('message'),
    }

    const validatedFields = contactFormSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const data = validatedFields.data

    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials are not set.")
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'jfvisaconsultancy@gmail.com',
            replyTo: data.email,
            subject: `New Inquiry from ${data.fullName} - ${data.interest}`,
            text: `
                Name: ${data.fullName}
                Email: ${data.email}
                Phone: ${data.phone}
                Interested In: ${data.interest}
                Country: ${data.country || 'N/A'}
                Message: ${data.message}
            `,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.fullName}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Interested In:</strong> ${data.interest}</p>
                <p><strong>Country:</strong> ${data.country || 'N/A'}</p>
                <p><strong>Message:</strong> ${data.message}</p>
            `,
        }

        await transporter.sendMail(mailOptions)

        // WhatsApp Notification
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            try {
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
                await client.messages.create({
                    body: `🚀 *New Inquiry*\n*Name:* ${data.fullName}\n*Service:* ${data.interest}\n*Phone:* ${data.phone}\n*Msg:* ${data.message.substring(0, 100)}...`,
                    from: process.env.TWILIO_FROM_WHATSAPP || 'whatsapp:+14155238886',
                    to: process.env.WHATSAPP_TO_NUMBER || `whatsapp:+923065870215`
                })
            } catch (waError) {
                console.error('WhatsApp Error:', waError)
            }
        }

        return {
            success: true,
            message: 'Your message has been sent successfully!',
        }
    } catch (error: any) {
        console.error('Email Error:', error)
        return {
            success: false,
            message: `Something went wrong: ${error.message}`,
        }
    }
}

export async function submitTravelInsurance(prevState: any, formData: FormData) {
    // Honeypot check
    const honeypot = formData.get('website_url')
    if (honeypot) {
        return { success: false, message: 'Spam detected. Submission ignored.' }
    }

    // Parse plain FormData to object for Zod helper
    const rawData: Record<string, any> = {}
    formData.forEach((value, key) => {
        rawData[key] = value
    })

    const validatedFields = travelInsuranceSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const data = validatedFields.data

    try {
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials are not set.")
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // Format Family Members if present
        let familyMembersHtml = ''
        let familyMembersText = ''
        if (data.familyMembers) {
            try {
                const members = JSON.parse(data.familyMembers)
                if (Array.isArray(members) && members.length > 0) {
                    familyMembersText = `\nFAMILY MEMBERS:\n` + members.map((m: any, i: number) => `Member ${i + 1}: ${m.name}, DOB: ${m.dob}`).join('\n')
                    familyMembersHtml = `
                        <div style="background: #f8f9fa; padding: 15px; border: 1px solid #dee2e6; margin-top: 20px; border-radius: 8px;">
                            <strong style="color: #004488; display: block; margin-bottom: 10px;">Family Members:</strong>
                            <ul style="margin: 0; padding-left: 20px;">
                                ${members.map((m: any) => `<li style="margin-bottom: 5px;">${m.name} (DOB: ${m.dob})</li>`).join('')}
                            </ul>
                        </div>
                    `
                }
            } catch (e) { /* ignore */ }
        }

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'jfvisaconsultancy@gmail.com',
            replyTo: data.email,
            subject: `🚀 TRAVEL INSURANCE: ${data.planType} (€${data.coverageAmount}) - ${data.fullName}`,
            text: `
                NEW TRAVEL INSURANCE APPLICATION
                ================================
                
                PERSONAL DETAILS
                ----------------
                Name: ${data.fullName}
                DOB: ${data.dob}
                Passport: ${data.passportNumber}
                Nationality: ${data.nationality}
                Phone: ${data.phone}
                Email: ${data.email}

                TRAVEL DETAILS
                --------------
                Destination: ${data.destination}
                Visa Type: ${data.visaType}
                Dates: ${data.startDate} to ${data.endDate}
                Duration: ${data.duration} Days
                
                INSURANCE PLAN
                --------------
                Coverage: €${data.coverageAmount}
                Type: ${data.planType}
                Travelers: ${data.travelersCount || '1'} 
                Traveler Ages: ${data.travelersAges || 'N/A'}
                ${data.universityName ? `University: ${data.universityName}` : ''}
                ${data.multiTripFreq ? `Frequency: ${data.multiTripFreq}` : ''}
                Urgent Processing: ${data.urgentProcessing ? 'YES (PRIORITY)' : 'No'}

                ${familyMembersText}
            `,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e0e0e0; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                    <div style="text-align: center; border-bottom: 2px solid #004488; padding-bottom: 15px; margin-bottom: 20px;">
                        <h2 style="color: #004488; margin: 0; text-transform: uppercase;">Travel Insurance Application</h2>
                        <p style="color: #666; margin: 5px 0 0 0;">Received via Website Form</p>
                    </div>
                    
                    <div style="margin-bottom: 25px;">
                        <h3 style="background: #004488; color: white; padding: 8px 15px; border-radius: 4px; font-size: 16px;">Personal Details</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 5px 0; color: #555; width: 150px;"><strong>Full Name:</strong></td><td style="padding: 5px 0;">${data.fullName}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Date of Birth:</strong></td><td style="padding: 5px 0;">${data.dob}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Passport No:</strong></td><td style="padding: 5px 0;">${data.passportNumber}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Nationality:</strong></td><td style="padding: 5px 0;">${data.nationality}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Phone:</strong></td><td style="padding: 5px 0;">${data.phone}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Email:</strong></td><td style="padding: 5px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                        </table>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h3 style="background: #004488; color: white; padding: 8px 15px; border-radius: 4px; font-size: 16px;">Travel & Coverage</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 5px 0; color: #555; width: 150px;"><strong>Destination:</strong></td><td style="padding: 5px 0;">${data.destination}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Visa Type:</strong></td><td style="padding: 5px 0;">${data.visaType}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Travel Dates:</strong></td><td style="padding: 5px 0;">${data.startDate} <strong>to</strong> ${data.endDate} (${data.duration} Days)</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Coverage:</strong></td><td style="padding: 5px 0; font-weight: bold; color: #28a745;">€${data.coverageAmount}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Plan Type:</strong></td><td style="padding: 5px 0;">${data.planType}</td></tr>
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Travelers:</strong></td><td style="padding: 5px 0;">${data.travelersCount || '1'} (${data.travelersAges || 'N/A'})</td></tr>
                            ${data.universityName ? `<tr><td style="padding: 5px 0; color: #555;"><strong>University:</strong></td><td style="padding: 5px 0;">${data.universityName}</td></tr>` : ''}
                            ${data.multiTripFreq ? `<tr><td style="padding: 5px 0; color: #555;"><strong>Frequency:</strong></td><td style="padding: 5px 0;">${data.multiTripFreq}</td></tr>` : ''}
                            <tr><td style="padding: 5px 0; color: #555;"><strong>Urgent:</strong></td><td style="padding: 5px 0;"><span style="color: ${data.urgentProcessing ? '#d9534f' : '#333'}; font-weight: bold;">${data.urgentProcessing ? 'YES - PRIORITY' : 'No'}</span></td></tr>
                        </table>
                    </div>

                    ${familyMembersHtml}
                    
                    <div style="margin-top: 30px; text-align: center; color: #888; font-size: 12px; border-top: 1px solid #eee; padding-top: 15px;">
                        This inquiry was submitted from the JF Visa Consultancy Travel Insurance page.
                    </div>
                </div>
            `,
        }

        await transporter.sendMail(mailOptions)

        // WhatsApp Notification
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            try {
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

                let whatsappMsg = `*🚀 NEW TRAVEL INSURANCE APP*\n\n` +
                    `*Client:* ${data.fullName}\n` +
                    `*Phone:* ${data.phone}\n` +
                    `*Plan:* ${data.planType} (€${data.coverageAmount})\n` +
                    `*Dest:* ${data.destination}\n` +
                    `*Dates:* ${data.startDate} to ${data.endDate}\n` +
                    `*Days:* ${data.duration}\n` +
                    `*Travelers:* ${data.travelersCount || '1'} (${data.travelersAges || 'N/A'})\n` +
                    `*Urgent:* ${data.urgentProcessing ? '🔴 YES' : 'No'}`

                await client.messages.create({
                    body: whatsappMsg,
                    from: process.env.TWILIO_FROM_WHATSAPP || 'whatsapp:+14155238886',
                    to: process.env.WHATSAPP_TO_NUMBER || `whatsapp:+923065870215`
                })
            } catch (waError) {
                console.error('WhatsApp Error:', waError)
            }
        }

        return {
            success: true,
            message: 'Application submitted successfully! Your advisor will contact you within 5 minutes.',
        }

    } catch (error: any) {
        console.error('Submission Error:', error)
        return {
            success: false,
            message: `Submission failed: ${error.message}`,
        }
    }
}
