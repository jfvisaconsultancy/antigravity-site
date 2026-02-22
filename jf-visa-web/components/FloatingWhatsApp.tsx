'use client';

import { CONFIG } from '@/lib/config';

export default function FloatingWhatsApp() {
    return (
        <a
            href={`https://wa.me/${CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[1001] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group lg:bottom-10 lg:right-10 mb-[env(safe-area-inset-bottom)] lg:mb-0 max-lg:bottom-[80px]"
            aria-label="Chat on WhatsApp"
        >
            <i className="fa-brands fa-whatsapp text-3xl"></i>

            {/* Tooltip for desktop */}
            <span className="absolute right-full mr-4 bg-white text-text-primary px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap hidden lg:block border border-gray-100">
                Chat with an Expert
            </span>

            {/* Pulsing effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10 group-hover:hidden"></span>
        </a>
    );
}
