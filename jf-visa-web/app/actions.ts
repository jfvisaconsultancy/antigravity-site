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

export async function sendEmail(prevState: any, formData: FormData) {
    // 0. Honeypot check
    const honeypot = formData.get('website_url')
    if (honeypot) {
        return {
            success: false,
            message: 'Spam detected. Submission ignored.',
        }
    }

    const validatedFields = contactFormSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        interest: formData.get('interest'),
        country: formData.get('country'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const { fullName, email, phone, interest, country, message } = validatedFields.data

    try {
        // 1. Send Email
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            throw new Error("Email credentials (EMAIL_USER or EMAIL_PASS) are not set in Vercel environment variables. Please add them in Project Settings.")
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
            replyTo: email,
            subject: `New Inquiry: ${interest} - ${fullName}`,
            text: `
        New Inquiry Received:
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Interested In: ${interest}
        ${country ? `Country of Interest: ${country}` : ''}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
      `,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #003366;">New Inquiry Received</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Interested In:</strong> ${interest}</p>
            ${country ? `<p><strong>Country of Interest:</strong> ${country}</p>` : ''}
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #003366;">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
      `,
        }

        await transporter.sendMail(mailOptions)

        // 3. Send WhatsApp Notification
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            try {
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

                let whatsappMessage = `*New inquiry from JF Visa website*\n` +
                    `*Name:* ${fullName}\n` +
                    `*Email:* ${email}\n` +
                    `*Phone:* ${phone}\n` +
                    `*Interested In:* ${interest}`

                if (country) {
                    whatsappMessage += `\n*Country:* ${country}`
                }

                whatsappMessage += `\n*Message:* ${message}`

                await client.messages.create({
                    body: whatsappMessage,
                    from: process.env.TWILIO_FROM_WHATSAPP || 'whatsapp:+14155238886',
                    to: process.env.WHATSAPP_TO_NUMBER || `whatsapp:+923555127500`
                })
            } catch (waError) {
                console.error('WhatsApp Notification Error:', waError)
            }
        }

        return {
            success: true,
            message: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
        }
    } catch (error: any) {
        console.error('Submission Error Detailed:', error)
        return {
            success: false,
            message: `An error occurred while processing your request: ${error.message || 'Please try again later.'}`,
        }
    }
}
