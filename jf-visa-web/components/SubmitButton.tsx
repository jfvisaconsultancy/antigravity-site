'use client'

import { useFormStatus } from 'react-dom'

interface SubmitButtonProps {
    label?: string
}

export function SubmitButton({ label = 'Send Message' }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full btn btn-primary flex items-center justify-center gap-2"
        >
            {pending ? (
                <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Sending...
                </>
            ) : (
                <>
                    <i className="fa-solid fa-paper-plane"></i> {label}
                </>
            )}
        </button>
    )
}
