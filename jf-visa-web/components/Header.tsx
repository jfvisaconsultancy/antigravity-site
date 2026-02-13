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
                    <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)', lineHeight: '1.2' }}>
                        JF Visa <span style={{ color: 'var(--color-accent)' }}>Consultancy</span>
                    </span>
                </Link>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-menu" style={{ flexDirection: isMenuOpen ? 'column' : 'row' }}>
                        <li><Link href="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/study-visa" className={`nav-link ${isActive('/study-visa')}`} onClick={() => setIsMenuOpen(false)}>Study Visa</Link></li>
                        <li><Link href="/visit-visa" className={`nav-link ${isActive('/visit-visa')}`} onClick={() => setIsMenuOpen(false)}>Visit Visa</Link></li>
                        <li><Link href="/work-permit" className={`nav-link ${isActive('/work-permit')}`} onClick={() => setIsMenuOpen(false)}>Work Permit</Link></li>
                        <li><Link href="/immigration" className={`nav-link ${isActive('/immigration')}`} onClick={() => setIsMenuOpen(false)}>Immigration</Link></li>
                        <li><Link href="/testimonials" className={`nav-link ${isActive('/testimonials')}`} onClick={() => setIsMenuOpen(false)}>Success Stories</Link></li>
                        <li><Link href="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link href="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
