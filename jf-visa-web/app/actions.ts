'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactFormSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be valid'),
    interest: z.string(),
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
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email,
            subject: `New Lead: ${interest} - ${fullName}`,
            text: `
        New Lead Received:
        
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Interest: ${interest}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Lead Received</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        }

        await transporter.sendMail(mailOptions)

        return {
            success: true,
            message: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
        }
    } catch (error) {
        console.error('Email Error:', error)
        return {
            success: false,
            message: 'Failed to send message. Please try again later or contact us directly on WhatsApp.',
        }
    }
}
