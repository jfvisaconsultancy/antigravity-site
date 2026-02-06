'use client'

import React from 'react'
import * as XLSX from 'xlsx'

interface ExportButtonProps {
    data: any[]
}

export default function ExportButton({ data }: ExportButtonProps) {
    const handleExport = () => {
        const exportData = data.map(msg => ({
            'Date': new Date(msg.createdAt).toLocaleDateString(),
            'Time': new Date(msg.createdAt).toLocaleTimeString(),
            'Full Name': msg.fullName,
            'Email': msg.email,
            'Phone': msg.phone,
            'Interested In': msg.interest,
            'Country of Interest': msg.country || 'N/A',
            'Message': msg.message
        }))

        const worksheet = XLSX.utils.json_to_sheet(exportData)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Inquiries')

        // Generate filename with current date
        const dateStr = new Date().toISOString().split('T')[0]
        const filename = `JF_Visa_Inquiries_${dateStr}.xlsx`

        XLSX.writeFile(workbook, filename)
    }

    return (
        <button
            onClick={handleExport}
            className="btn btn-outline flex items-center gap-2 border-green-600 text-green-700 hover:bg-green-50"
        >
            <i className="fa-solid fa-file-excel"></i>
            Export to Excel
        </button>
    )
}
