import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>{CONFIG.brandName}</h3>
                        <p>Where dreams become a reality! Your trusted partner for international mobility.</p>
                    </div>
                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/travel-insurance">Travel Insurance</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="footer-links">
                            <li>
                                <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="contact-phone">
                                    <i className="fa-solid fa-phone text-accent"></i> {CONFIG.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONFIG.email}`} className="contact-email">
                                    <i className="fa-solid fa-envelope text-accent"></i> {CONFIG.email}
                                </a>
                            </li>
                            <li>
                                <span className="contact-address">
                                    <i className="fa-solid fa-location-dot text-accent"></i> {CONFIG.address}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} {CONFIG.brandName}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
