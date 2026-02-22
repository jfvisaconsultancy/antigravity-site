'use client';

import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export default function MobileStickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] pb-safe pt-2 px-4">
            <div className="flex gap-3 pb-2 max-w-md mx-auto">
                {/* Free Assessment Button - High Contrast */}
                <Link
                    href="/contact"
                    className="flex-1 bg-[var(--color-primary)] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-black shadow-lg active:scale-95 transition-transform"
                >
                    <i className="fa-solid fa-clipboard-check"></i>
                    FREE ASSESSMENT
                </Link>

                {/* Call Now Button - Professional Secondary */}
                <a
                    href={`tel:${CONFIG.phone}`}
                    className="flex-1 bg-[var(--bg-contrast)] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-black shadow-lg active:scale-95 transition-transform"
                >
                    <i className="fa-solid fa-phone"></i>
                    CALL NOW
                </a>
            </div>
        </div>
    );
}
