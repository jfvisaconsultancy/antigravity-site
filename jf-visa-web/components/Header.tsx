'use client';

import Link from 'next/link';
import DesktopNavbar from './navigation/DesktopNavbar';
import MobileNavbar from './navigation/MobileNavbar';

export default function Header() {
    return (
        <header className="header sticky top-0 z-[1000] bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center bg-white">
                {/* Logo Section - Shared but simplified */}
                <Link href="/" className="logo flex items-center gap-2">
                    <img
                        src="/images/logo.png"
                        alt="JF Visa Consultancy"
                        className="h-10 md:h-12 w-auto"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-lg md:text-xl font-black text-text-primary font-heading">
                            JF Visa
                        </span>
                        <span className="text-[10px] md:text-xs font-black text-[var(--color-accent)] uppercase tracking-widest -mt-1">
                            Consultancy
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation System (lg+) */}
                <DesktopNavbar />

                {/* Mobile Navigation System (<lg) */}
                <MobileNavbar />
            </div>
        </header>
    );
}
