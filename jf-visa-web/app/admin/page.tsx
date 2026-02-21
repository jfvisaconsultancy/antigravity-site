'use client'

import { useActionState } from 'react'
import { adminLogin } from './actions'

const initialState = {
    success: false,
    message: '',
}

export default function AdminLoginPage() {
    const [state, formAction] = useActionState(adminLogin, initialState)

    return (
        <div className="min-h-screen flex items-center justify-center bg-bg-base py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-bg-surface rounded-3xl shadow-premium border border-border-soft">
                <div>
                    <h2 className="text-center text-3xl font-black text-text-primary font-heading italic">
                        Admin Login
                    </h2>
                    <p className="mt-4 text-center text-sm text-text-secondary">
                        Please enter your password to access messages
                    </p>
                </div>

                {state?.message && (
                    <div className={`p-4 rounded-xl text-center text-sm font-bold ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {state.message}
                    </div>
                )}

                <form className="mt-8 space-y-6" action={formAction}>
                    <div>
                        <label htmlFor="password" title="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="form-input text-center tracking-widest"
                            placeholder="Admin Password"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full py-4 rounded-xl shadow-xl shadow-black/10"
                        >
                            Sign In to Portal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
