import { isAdminAuthenticated } from '../actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { adminLogout } from '../actions'
import Section from '@/components/Section'

export const dynamic = 'force-dynamic'

export default async function AdminMessagesPage() {
    const isAuthenticated = await isAdminAuthenticated()
    if (!isAuthenticated) {
        redirect('/admin')
    }

    return (
        <main className="min-h-screen bg-bg-base">
            <Section variant="surface" className="pt-20 pb-12">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h1 className="text-4xl font-black text-text-primary font-heading italic">Inquiry Log</h1>
                            <p className="text-text-secondary mt-2">Administrative Dashboard</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/" className="btn btn-outline px-6 py-3 rounded-xl font-bold">Back to Site</Link>
                            <form action={adminLogout}>
                                <button type="submit" className="btn btn-primary bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold">Logout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Section>

            <Section variant="base">
                <div className="container">
                    <div className="bg-bg-surface p-16 rounded-[3rem] shadow-premium border border-border-soft text-center max-w-4xl mx-auto">
                        <div className="mb-8">
                            <div className="w-24 h-24 bg-bg-soft rounded-full flex items-center justify-center mx-auto text-text-muted">
                                <i className="fa-solid fa-database text-4xl"></i>
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary mb-6">Local Message Storage is Disabled</h2>
                        <p className="text-lg text-text-secondary max-w-lg mx-auto mb-10 leading-relaxed">
                            To ensure maximum reliability and privacy, inquiries are no longer stored in this database. All submissions are now transmitted instantly via <strong className="text-text-primary">Direct Email</strong> and <strong className="text-text-primary">WhatsApp Notification</strong>.
                        </p>
                        <Link href="/" className="btn btn-primary px-10 py-4 rounded-xl font-bold text-lg">
                            Return Home
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    )
}
