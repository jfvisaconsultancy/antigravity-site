'use client'

import { useActionState, useState } from 'react'
import { sendEmail } from '@/app/actions'
import { SubmitButton } from './SubmitButton'
import CountrySelect from './CountrySelect'

const initialState = {
    success: false,
    message: '',
    errors: {},
}

export default function ContactForm({ title = "Send us a message" }: { title?: string }) {
    const [state, formAction] = useActionState(sendEmail, initialState)
    const [selectedInterest, setSelectedInterest] = useState('')
    const [country, setCountry] = useState('')

    const visaOptions = [
        'Visit Visa',
        'Study Visa',
        'Work Visa',
        'Umrah Visa',
        'Immigration',
        'Qatar Azad / Freelance Visa'
    ]

    const isVisaSelected = visaOptions.includes(selectedInterest)

    return (
        <div className="contact-form bg-white p-8 rounded-2xl shadow-premium border border-[var(--color-border)] h-fit">
            <h3 className="text-primary text-2xl font-bold mb-2 font-heading">{title}</h3>
            <p className="text-[var(--color-text-light)] mb-8 text-sm">Fill in your details for a professional profile evaluation.</p>

            {state?.message && (
                <div className={`p-4 mb-8 rounded-lg border ${state.success ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                    <div className="flex items-center gap-3">
                        <i className={`fa-solid ${state.success ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                        <p className="font-medium">{state.message}</p>
                    </div>
                </div>
            )}

            <form action={formAction} className="space-y-5">
                {/* Honeypot Field for Spam Protection */}
                <div style={{ display: 'none' }}>
                    <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="John Doe"
                            required
                            className="form-input"
                        />
                        {state?.errors?.fullName && <p className="text-red-500 text-xs mt-1">{state.errors.fullName}</p>}
                    </div>

                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+92 306..."
                            required
                            className="form-input"
                        />
                        {state?.errors?.phone && <p className="text-red-500 text-xs mt-1">{state.errors.phone}</p>}
                    </div>
                </div>

                <div className="form-group">
                    <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full p-3 bg-[var(--color-off-white)] border border-[var(--color-border)] rounded-lg focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all outline-none"
                    />
                    {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="interest">Service Interested</label>
                        <select
                            id="interest"
                            name="interest"
                            required
                            value={selectedInterest}
                            onChange={(e) => {
                                setSelectedInterest(e.target.value)
                                if (!visaOptions.includes(e.target.value)) {
                                    setCountry('')
                                }
                            }}
                            className="form-select appearance-none"
                        >
                            <option value="" disabled>Select a service</option>
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

                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="country">Destination</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="e.g. UK, Canada, UAE"
                            className="form-input"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="educationLevel">Education Level</label>
                        <select
                            id="educationLevel"
                            name="educationLevel"
                            className="form-select appearance-none"
                        >
                            <option value="">Select Education</option>
                            <option value="Matric/O-Level">Matric / O-Level</option>
                            <option value="Intermediate/A-Level">Intermediate / A-Level</option>
                            <option value="Bachelors">Bachelors</option>
                            <option value="Masters">Masters</option>
                            <option value="PhD">PhD</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="travelHistory">Travel History</label>
                        <select
                            id="travelHistory"
                            name="travelHistory"
                            className="form-select appearance-none"
                        >
                            <option value="">Select History</option>
                            <option value="Fresh Passport">Fresh Passport</option>
                            <option value="1-2 Countries">1-2 Countries</option>
                            <option value="3+ Countries">3+ Countries</option>
                            <option value="Frequent Traveler">Frequent Traveler</option>
                        </select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="passportStatus">Passport Status</label>
                        <select
                            id="passportStatus"
                            name="passportStatus"
                            className="form-select appearance-none"
                        >
                            <option value="">Select Status</option>
                            <option value="Valid">Valid</option>
                            <option value="Expired">Expired</option>
                            <option value="Applied/In-Process">Applied / In-Process</option>
                            <option value="No Passport">No Passport</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="urgency">Urgency</label>
                        <select
                            id="urgency"
                            name="urgency"
                            className="form-select appearance-none"
                        >
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent (Immediate)</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label className="block mb-1.5 text-sm font-semibold text-[var(--color-primary)]" htmlFor="message">Message / Additional Info</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Briefly describe your requirements or any past refusals..."
                        required
                        className="form-textarea min-h-[100px] resize-y text-sm"
                    ></textarea>
                    {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
                </div>

                <div className="pt-2">
                    <SubmitButton />
                </div>
            </form>
        </div>
    )
}
