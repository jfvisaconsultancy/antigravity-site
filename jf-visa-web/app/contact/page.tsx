import { CONFIG } from "@/lib/config";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us | JF Visa Consultancy - Get Expert Visa Advice",
    description: "Connect with Pakistan's leading visa advisors. Visit our Rawalpindi office or talk to us on WhatsApp for study, visit, work, or immigration consultancy.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* HERO SECTION */}
            <section className="pt-32 pb-24 bg-[var(--color-primary)] text-white relative">
                <div className="container relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-[10px] font-bold rounded-full mb-8 uppercase tracking-[3px]">
                        Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                        Your Journey <br className="hidden md:block" />
                        Starts with a <span className="text-[var(--color-accent)]">Conversation.</span>
                    </h1>
                </div>
            </section>

            {/* CONTACT CONTENT */}
            <section className="section-padding bg-white -mt-16">
                <div className="container">
                    <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-16 items-start">
                        {/* INFO COLUMN */}
                        <div className="space-y-10">
                            <div className="p-10 rounded-[2.5rem] bg-[var(--color-off-white)] border border-slate-100 shadow-premium">
                                <h3 className="text-2xl font-bold mb-10 font-heading italic text-[var(--color-primary)]">Contact Details</h3>

                                <div className="space-y-12">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-location-dot text-[var(--color-accent)] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Visit Our Office</h4>
                                            <p className="text-lg font-bold text-[var(--color-primary)] leading-relaxed">
                                                {CONFIG.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-phone text-[var(--color-accent)] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Call Advisor</h4>
                                            <a href={`tel:${CONFIG.phone.replace(/\s/g, '')}`} className="text-2xl font-black text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors">
                                                {CONFIG.phone}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                                            <i className="fa-solid fa-envelope text-[var(--color-accent)] text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Email Us</h4>
                                            <a href={`mailto:${CONFIG.email}`} className="text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors break-all">
                                                {CONFIG.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-12 border-t border-slate-200">
                                    <a
                                        href={`https://wa.me/${CONFIG.whatsapp}`}
                                        className="btn btn-primary w-full bg-[#25D366] hover:bg-[#128C7E] border-none flex items-center justify-center gap-3 text-lg py-5 rounded-2xl shadow-xl"
                                    >
                                        <i className="fa-brands fa-whatsapp text-2xl"></i>
                                        Start WhatsApp Chat
                                    </a>
                                </div>
                            </div>

                            {/* MAP */}
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] border-8 border-white">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13269.176466986687!2d73.047882!3d33.6007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1b57406a4!2sAdam%20Jee%20Rd%2C%20Saddar%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                            </div>
                        </div>

                        {/* FORM COLUMN */}
                        <div className="bg-white p-2 md:p-4 rounded-[3rem] shadow-2xl border border-slate-50">
                            <ContactForm title="Request a Free Strategy Session" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
