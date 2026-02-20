import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-[var(--color-primary)] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <h3 className="text-white text-xl font-bold mb-6 font-heading italic">{CONFIG.brandName}</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-6">
                            Where dreams become a reality! Pakistan's leading visa & immigration consultancy for global mobility.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors text-white">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors text-white">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-[var(--color-accent)]">Visa Types</h4>
                        <ul className="space-y-4">
                            <li><Link href="/visit-visa" className="text-white/60 hover:text-white text-sm transition-colors">Visit Visa</Link></li>
                            <li><Link href="/study-visa" className="text-white/60 hover:text-white text-sm transition-colors">Study Visa</Link></li>
                            <li><Link href="/work-permit" className="text-white/60 hover:text-white text-sm transition-colors">Work Permits</Link></li>
                            <li><Link href="/immigration" className="text-white/60 hover:text-white text-sm transition-colors">Immigration</Link></li>
                            <li><Link href="/travel-insurance" className="text-white/60 hover:text-white text-sm transition-colors">Travel Insurance</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-[var(--color-accent)]">Countries</h4>
                        <ul className="space-y-4">
                            <li><Link href="/visit-visa/uk" className="text-white/60 hover:text-white text-sm transition-colors">United Kingdom</Link></li>
                            <li><Link href="/visit-visa/schengen" className="text-white/60 hover:text-white text-sm transition-colors">Europe/Schengen</Link></li>
                            <li><Link href="/study-visa/canada" className="text-white/60 hover:text-white text-sm transition-colors">Canada</Link></li>
                            <li><Link href="/work-permit" className="text-white/60 hover:text-white text-sm transition-colors">UAE & Gulf</Link></li>
                            <li><Link href="/study-visa/australia" className="text-white/60 hover:text-white text-sm transition-colors">Australia</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-[var(--color-accent)]">Help Desk</h4>
                        <ul className="space-y-4">
                            <li><Link href="/refusal-case" className="text-white/60 hover:text-white text-sm transition-colors">Refusal Recovery</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-white text-sm transition-colors">Free Assessment</Link></li>
                            <li><Link href="/about" className="text-white/60 hover:text-white text-sm transition-colors">Success Stories</Link></li>
                            <li><a href={`https://wa.me/${CONFIG.whatsapp}`} className="text-white/60 hover:text-white text-sm transition-colors">Talk on WhatsApp</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest text-[var(--color-accent)]">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-phone text-[var(--color-accent)] mt-1"></i>
                                <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="text-white/60 hover:text-white text-sm transition-colors">
                                    {CONFIG.phone}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-envelope text-[var(--color-accent)] mt-1"></i>
                                <a href={`mailto:${CONFIG.email}`} className="text-white/60 hover:text-white text-sm transition-colors break-all">
                                    {CONFIG.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot text-[var(--color-accent)] mt-1"></i>
                                <span className="text-white/60 text-sm">{CONFIG.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/40 text-xs tracking-wide uppercase">
                        &copy; {currentYear} {CONFIG.brandName}. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
