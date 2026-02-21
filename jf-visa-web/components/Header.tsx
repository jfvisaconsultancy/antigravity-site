'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONFIG } from '@/lib/config';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container navbar">
                {/* Logo Section */}
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img
                        src="/images/logo.png"
                        alt="JF Visa Consultancy"
                        style={{ height: '45px', width: 'auto' }}
                        className="logo-img"
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

                {/* Mobile Header Elements: CTA + Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="btn btn-primary px-4 py-2 text-[10px] md:text-xs font-black rounded-full shadow-lg md:hidden"
                    >
                        ASSESSMENT
                    </Link>
                    <div className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>
                )}

                {/* Navigation Menu */}
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-item-list">
                        {/* Section 1: Services */}
                        <div className="w-full">
                            <span className="menu-section-label mobile-only">Visa Services</span>
                            <li><Link href="/study-visa" className={`nav-link ${isActive('/study-visa')}`}>Study Abroad</Link></li>
                            <li><Link href="/visit-visa" className={`nav-link ${isActive('/visit-visa')}`}>Visit Visa</Link></li>
                            <li><Link href="/work-permit" className={`nav-link ${isActive('/work-permit')}`}>Work Abroad</Link></li>
                            <li><Link href="/immigration" className={`nav-link ${isActive('/immigration')}`}>Immigration / PR</Link></li>
                        </div>

                        {/* Section 2: Help (Visual Divider) */}
                        <div className="w-full">
                            <span className="menu-section-label mobile-only">Application Help</span>
                            <li>
                                <Link href="/refusal-case" className={`nav-link ${isActive('/refusal-case')} refusal-highlight`}>
                                    <i className="fa-solid fa-triangle-exclamation mr-2 text-[var(--color-accent)] mobile-only"></i>
                                    Visa Refusal Help
                                </Link>
                            </li>
                        </div>

                        {/* Section 3: Extras */}
                        <div className="w-full">
                            <span className="menu-section-label mobile-only">Requirements</span>
                            <li><Link href="/travel-insurance" className={`nav-link ${isActive('/travel-insurance')}`}>Travel Insurance</Link></li>
                        </div>

                        {/* Desktop Only Links (Hidden in mobile slide menu as they are replaced by CTA group) */}
                        <li className="desktop-only border-l border-border-soft pl-4">
                            <Link href="/contact" className="btn btn-primary px-6 py-2.5 text-xs font-black rounded-full">
                                FREE ASSESSMENT
                            </Link>
                        </li>

                        {/* Mobile CTA Group */}
                        <div className="mobile-cta-group mobile-only">
                            <Link href="/contact" className="btn btn-primary text-sm font-black shadow-xl">
                                FREE ELIGIBILITY ASSESSMENT
                            </Link>
                            <div className="mobile-secondary-actions">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-whatsapp flex items-center justify-center gap-2 text-xs">
                                    <i className="fa-brands fa-whatsapp text-lg"></i> WHATSAPP
                                </a>
                                <a href={`tel:${CONFIG.phone}`} className="btn btn-call flex items-center justify-center gap-2 text-xs">
                                    <i className="fa-solid fa-phone text-sm"></i> CALL NOW
                                </a>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
