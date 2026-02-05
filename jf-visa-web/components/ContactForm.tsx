'use client'

import { useActionState } from 'react'
import { sendEmail } from '@/app/actions'
import { SubmitButton } from './SubmitButton'

const initialState = {
    success: false,
    message: '',
    errors: {},
}

export default function ContactForm() {
    const [state, formAction] = useActionState(sendEmail, initialState)

    return (
        <div className="contact-form bg-white p-8 rounded-lg shadow-md h-fit">
            <h3 className="text-primary text-xl font-bold mb-6">Send us a message</h3>

            {state?.message && (
                <div className={`p-4 mb-6 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {state.message}
                </div>
            )}

            <form action={formAction}>
                <div className="form-group mb-6">
                    <label className="block mb-2 font-medium" htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        required
                        className="w-full p-2 border border-[var(--color-border)] rounded font-body"
                    />
                    {state?.errors?.fullName && <p className="text-red-500 text-sm mt-1">{state.errors.fullName}</p>}
                </div>

                <div className="form-group mb-6">
                    <label className="block mb-2 font-medium" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full p-2 border border-[var(--color-border)] rounded font-body"
                    />
                    {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
                </div>

                <div className="form-group mb-6">
                    <label className="block mb-2 font-medium" htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+92 306..."
                        required
                        className="w-full p-2 border border-[var(--color-border)] rounded font-body"
                    />
                    {state?.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
                </div>

                <div className="form-group mb-6">
                    <label className="block mb-2 font-medium" htmlFor="interest">Interested In</label>
                    <select
                        id="interest"
                        name="interest"
                        required
                        className="w-full p-2 border border-[var(--color-border)] rounded font-body bg-white"
                    >
                        <option value="" disabled selected>Select a service</option>
                        <option value="Visit Visa">Visit Visa</option>
                        <option value="Study Visa">Study Visa</option>
                        <option value="Work Visa">Work Visa</option>
                        <option value="Umrah Visa">Umrah Visa</option>
                        <option value="Immigration">Immigration</option>
                        <option value="Travel Insurance">Travel Insurance</option>
                        <option value="Qatar Azad / Freelance Visa">Qatar Azad / Freelance Visa</option>
                        <option value="Life Insurance">Life Insurance</option>
                    </select>
                </div>

                <div className="form-group mb-6">
                    <label className="block mb-2 font-medium" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        className="w-full p-2 border border-[var(--color-border)] rounded font-body min-h-[120px] resize-y"
                    ></textarea>
                    {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message}</p>}
                </div>

                <SubmitButton />
            </form>
        </div>
    )
}
