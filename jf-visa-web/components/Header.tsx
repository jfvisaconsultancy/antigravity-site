'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <header className="header">
            <div className="container navbar">
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img
                        src="/images/logo.png"
                        alt="JF Visa Consultancy"
                        style={{ height: '55px', width: 'auto' }}
                        className="logo-img"
                    />
                    <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: '1.2' }}>
                        JF Visa <span style={{ color: 'var(--color-accent)' }}>Consultancy</span>
                    </span>
                </Link>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-menu" style={{ flexDirection: isMenuOpen ? 'column' : 'row', alignItems: 'center' }}>
                        <li><Link href="/study-visa" className={`nav-link ${isActive('/study-visa')}`} onClick={() => setIsMenuOpen(false)}>Study Abroad</Link></li>
                        <li><Link href="/visit-visa" className={`nav-link ${isActive('/visit-visa')}`} onClick={() => setIsMenuOpen(false)}>Visit Visa</Link></li>
                        <li><Link href="/work-permit" className={`nav-link ${isActive('/work-permit')}`} onClick={() => setIsMenuOpen(false)}>Work Abroad</Link></li>
                        <li><Link href="/immigration" className={`nav-link ${isActive('/immigration')}`} onClick={() => setIsMenuOpen(false)}>Immigration / PR</Link></li>
                        <li><Link href="/refusal-case" className={`nav-link ${isActive('/refusal-case')}`} onClick={() => setIsMenuOpen(false)}>Visa Refused</Link></li>
                        <li><Link href="/travel-insurance" className={`nav-link ${isActive('/travel-insurance')}`} onClick={() => setIsMenuOpen(false)}>Travel Insurance</Link></li>
                        <li className="ml-4">
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 0, padding: '10px 20px', fontSize: '0.8rem' }} onClick={() => setIsMenuOpen(false)}>
                                Free Assessment
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
