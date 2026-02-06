import { isAdminAuthenticated } from '../actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { adminLogout } from '../actions'

export const dynamic = 'force-dynamic'

export default async function AdminMessagesPage() {
    const isAuthenticated = await isAdminAuthenticated()
    if (!isAuthenticated) {
        redirect('/admin')
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Inquiry Log</h1>
                    <div className="flex gap-4">
                        <Link href="/" className="btn btn-outline text-gray-700 border-gray-300">Back to Site</Link>
                        <form action={adminLogout}>
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#dc2626' }}>Logout</button>
                        </form>
                    </div>
                </div>

                <div className="bg-white p-12 rounded-lg shadow-md text-center">
                    <div className="mb-6">
                        <i className="fa-solid fa-database text-6xl text-gray-300"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Message Storage Disabled</h2>
                    <p className="text-gray-600 max-w-md mx-auto mb-8">
                        The database storage for inquiries has been disabled. All new messages are now delivered directly via <strong>Email</strong> and <strong>WhatsApp</strong> only.
                    </p>
                    <Link href="/" className="btn btn-primary">Return Home</Link>
                </div>
            </div>
        </div>
    )
}
