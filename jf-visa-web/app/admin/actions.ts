'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function adminLogin(prevState: any, formData: FormData) {
    const password = formData.get('password')
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

    if (password === adminPassword) {
        // Set a secure HTTP-only cookie
        const cookieStore = await cookies()
        cookieStore.set('admin_session', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })

        redirect('/admin/messages')
    }

    return {
        success: false,
        message: 'Invalid password. Please try again.',
    }
}

export async function adminLogout() {
    const cookieStore = await cookies()
    cookieStore.delete('admin_session')
    redirect('/admin')
}

export async function isAdminAuthenticated() {
    const cookieStore = await cookies()
    return cookieStore.get('admin_session')?.value === 'true'
}
