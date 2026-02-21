'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopNavbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <nav className="desktop-navbar lg:block hidden">
            <ul className="nav-item-list-desktop">
                <li><Link href="/study-visa" className={`nav-link ${isActive('/study-visa')}`}>Study Abroad</Link></li>
                <li><Link href="/visit-visa" className={`nav-link ${isActive('/visit-visa')}`}>Visit Visa</Link></li>
                <li><Link href="/work-permit" className={`nav-link ${isActive('/work-permit')}`}>Work Abroad</Link></li>
                <li><Link href="/immigration" className={`nav-link ${isActive('/immigration')}`}>Immigration / PR</Link></li>
                <li><Link href="/refusal-case" className={`nav-link ${isActive('/refusal-case')}`}>Visa Refused</Link></li>
                <li><Link href="/travel-insurance" className={`nav-link ${isActive('/travel-insurance')}`}>Travel Insurance</Link></li>
                <li className="ml-4">
                    <Link href="/contact" className="btn btn-primary px-6 py-2.5 text-xs font-black rounded-full shadow-lg">
                        FREE ASSESSMENT
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
