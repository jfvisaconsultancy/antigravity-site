'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'
import twilio from 'twilio'
import prisma from '@/lib/prisma'

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
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function sendEmail(prevState: any, formData: FormData) {
    const validatedFields = contactFormSchema.safeParse({
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        interest: formData.get('interest'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please fix the errors in the form.',
        }
    }

    const { fullName, email, phone, interest, message } = validatedFields.data

    try {
        // 1. Save to Database
        await prisma.message.create({
            data: {
                fullName,
                email,
                phone,
                interest,
                message,
            },
        })

        // 2. Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'jfvisaconsultancy@gmail.com', // Explicitly set as requested
            replyTo: email,
            subject: `New Inquiry: ${interest} - ${fullName}`,
            text: `
        New Inquiry Received:
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Interested In: ${interest}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested In:</strong> ${interest}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        }

        await transporter.sendMail(mailOptions)

        // 3. Send WhatsApp Notification (Optional/Graceful)
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            try {
                const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

                const whatsappMessage = `*New inquiry from JF Visa website*
*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Interested In:* ${interest}
*Message:* ${message}`

                await client.messages.create({
                    body: whatsappMessage,
                    from: process.env.TWILIO_FROM_WHATSAPP || 'whatsapp:+14155238886', // Twilio Sandbox or registered number
                    to: process.env.WHATSAPP_TO_NUMBER || `whatsapp:+923001234567` // Fallback placeholder
                })
            } catch (waError) {
                console.error('WhatsApp Notification Error:', waError)
                // We don't fail the whole action if WhatsApp fails
            }
        }

        return {
            success: true,
            message: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
        }
    } catch (error) {
        console.error('Submission Error:', error)
        return {
            success: false,
            message: 'An error occurred while processing your request. Please try again later.',
        }
    }
}
