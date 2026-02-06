import prisma from '@/lib/prisma'
import { isAdminAuthenticated } from '../actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { adminLogout } from '../actions'

export const dynamic = 'force-dynamic'

export default async function AdminMessagesPage({
    searchParams,
}: {
    searchParams: { q?: string; interest?: string }
}) {
    const isAuthenticated = await isAdminAuthenticated()
    if (!isAuthenticated) {
        redirect('/admin')
    }

    const { q, interest } = await searchParams

    const messages = await prisma.message.findMany({
        where: {
            AND: [
                q ? {
                    OR: [
                        { fullName: { contains: q, mode: 'insensitive' } },
                        { email: { contains: q, mode: 'insensitive' } },
                        { message: { contains: q, mode: 'insensitive' } },
                    ]
                } : {},
                interest ? { interest } : {}
            ]
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    const interests = [
        'Visit Visa',
        'Study Visa',
        'Work Visa',
        'Umrah Visa',
        'Immigration',
        'Travel Insurance',
        'Qatar Azad / Freelance Visa',
        'Life Insurance'
    ]

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

                {/* Filters */}
                <div className="bg-white p-6 rounded-lg shadow-sm mb-8 flex flex-wrap gap-4 items-end">
                    <form className="flex flex-wrap gap-4 w-full">
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                            <input
                                type="text"
                                name="q"
                                defaultValue={q}
                                placeholder="Name, email, or message..."
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                            <select name="interest" defaultValue={interest} className="w-full p-2 border border-gray-300 rounded bg-white">
                                <option value="">All Interests</option>
                                {interests.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Filter</button>
                        <Link href="/admin/messages" className="btn btn-outline text-gray-500 border-gray-200">Reset</Link>
                    </form>
                </div>

                {/* Messages Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interested In</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {messages.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center text-gray-500">
                                            No messages found.
                                        </td>
                                    </tr>
                                ) : (
                                    messages.map((msg: any) => (
                                        <tr key={msg.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(msg.createdAt).toLocaleDateString()}<br />
                                                {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-bold text-gray-900">{msg.fullName}</div>
                                                <div className="text-sm text-gray-500">{msg.email}</div>
                                                <div className="text-sm text-gray-500 font-mono">{msg.phone}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {msg.interest}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {msg.country || '-'}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                                <p className="truncate" title={msg.message}>{msg.message}</p>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
