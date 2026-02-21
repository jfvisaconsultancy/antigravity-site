'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONFIG } from '@/lib/config';

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Close on navigation
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <div className="mobile-navbar lg:hidden">
            {/* Mobile Header elements that trigger the menu */}
            <div className="flex items-center gap-4">
                <Link
                    href="/contact"
                    className="btn btn-primary px-4 py-2 text-[10px] font-black rounded-full shadow-lg"
                >
                    ASSESSMENT
                </Link>
                <button
                    className="nav-toggle-btn"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    style={{ fontSize: '1.5rem', color: 'var(--color-primary)', background: 'none', border: 'none', padding: '8px' }}
                >
                    <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Slide menu */}
            <nav className={`mobile-slide-menu ${isOpen ? 'active' : ''}`}>
                <div className="p-8 pb-32">
                    {/* SECTION 1: SERVICES */}
                    <div className="mb-10">
                        <span className="mobile-section-label">Visa Services</span>
                        <ul className="space-y-1">
                            <li><Link href="/study-visa" className={`mobile-nav-link ${isActive('/study-visa')}`}>Study Abroad</Link></li>
                            <li><Link href="/visit-visa" className={`mobile-nav-link ${isActive('/visit-visa')}`}>Visit Visa</Link></li>
                            <li><Link href="/work-permit" className={`mobile-nav-link ${isActive('/work-permit')}`}>Work Abroad</Link></li>
                            <li><Link href="/immigration" className={`mobile-nav-link ${isActive('/immigration')}`}>Immigration / PR</Link></li>
                        </ul>
                    </div>

                    {/* SECTION 2: HELP */}
                    <div className="mb-10">
                        <span className="mobile-section-label">Application Help</span>
                        <Link href="/refusal-case" className={`mobile-nav-link refusal-item ${isActive('/refusal-case')}`}>
                            <i className="fa-solid fa-triangle-exclamation mr-3 text-[var(--color-accent)]"></i>
                            Visa Refusal Help
                        </Link>
                    </div>

                    {/* SECTION 3: EXTRAS */}
                    <div className="mb-12">
                        <span className="mobile-section-label">Requirements</span>
                        <Link href="/travel-insurance" className={`mobile-nav-link ${isActive('/travel-insurance')}`}>Travel Insurance</Link>
                    </div>

                    {/* SECTION 4: ACTION BUTTONS */}
                    <div className="mobile-action-stack">
                        <Link href="/contact" className="btn btn-primary w-full py-5 text-sm font-black rounded-2xl shadow-xl mb-6">
                            FREE ELIGIBILITY ASSESSMENT
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn bg-[#25D366] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black">
                                <i className="fa-brands fa-whatsapp text-lg"></i> WHATSAPP
                            </a>
                            <a href={`tel:${CONFIG.phone}`} className="btn bg-[var(--bg-contrast)] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-[10px] font-black">
                                <i className="fa-solid fa-phone"></i> CALL NOW
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
