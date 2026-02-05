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
                <Link href="/" className="logo">
                    <i className="fa-solid fa-plane-departure"></i>
                    JF Visa <span>Consultancy</span>
                </Link>

                <div className="nav-toggle" onClick={toggleMenu}>
                    <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-menu" style={{ flexDirection: isMenuOpen ? 'column' : 'row' }}>
                        <li><Link href="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/about" className={`nav-link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
                        <li><Link href="/services" className={`nav-link ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link href="/process" className={`nav-link ${isActive('/process')}`} onClick={() => setIsMenuOpen(false)}>Process</Link></li>
                        <li><Link href="/travel-insurance" className={`nav-link ${isActive('/travel-insurance')}`} onClick={() => setIsMenuOpen(false)}>Travel Insurance</Link></li>
                        <li><Link href="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                        <li><Link href="/contact" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Apply Now</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
