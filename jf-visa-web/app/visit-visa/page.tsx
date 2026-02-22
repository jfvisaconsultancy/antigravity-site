import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';

export const metadata = {
    title: "Visit Visa Strategy | UK, USA, Schengen, Canada Experts",
    description: "Expert visit visa consultation to prevent refusals. High-success case preparation for tourism, business, and family visits.",
};

export default function VisitVisaPage() {
    const countries = [
        { name: "United Kingdom", id: "uk", desc: "Expert guidance for Standard Visitor visas (Tourism, Family, Business)." },
        { name: "Schengen Area", id: "schengen", desc: "Comprehensive documentation for Europe/Schengen member states." },
        { name: "USA", id: "usa", desc: "B1/B2 visa interview preparation and DS-160 processing specialist." },
        { name: "Canada", id: "canada", desc: "Strategic Visitor Visa (TRV) filing with strong return-tie justification." },
        { name: "UAE / Dubai", id: "uae", desc: "Quick processing for tourist and family visit visas to the Emirates." },
    ];

    return (
        <main className="min-h-screen">
            {/* 1. HERO — HOOK */}
            <Section variant="contrast" padding="none" className="relative lg:min-h-[70vh] flex items-center overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[var(--color-accent)] opacity-5 blur-[100px]"></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center w-full py-20 lg:py-0">
                    <div className="fade-in">
                        <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-bg-contrast text-[10px] font-bold rounded-full mb-8 uppercase tracking-[3px]">
                            Tourism & Business Visa Strategy
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
                            Don't Just Apply. <br />
                            <span className="text-[var(--color-accent)]">Prepare a Case.</span>
                        </h1>
                        <p className="text-xl text-text-inverse/70 mb-10 leading-relaxed max-w-[640px]">
                            90% of visit visa rejections are due to 'Lack of Home Ties' and 'Weak Financials'. We build bulletproof dossiers that convince visa officers of your genuine intent.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#selector" className="btn btn-primary lg:px-10">
                                Explore Destinations
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Chat with Visa Expert
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-20 rounded-full blur-2xl"></div>
                            <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">Visit Visa Metrics</h3>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-sm font-semibold">UK Approval Rate</span>
                                    <span className="text-xl font-bold text-[var(--color-accent)]">94%</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                    <span className="text-sm font-semibold">Schengen Success</span>
                                    <span className="text-xl font-bold text-[var(--color-accent)]">91%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold">USA B1/B2 success</span>
                                    <span className="text-xl font-bold text-[var(--color-accent)]">88%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. PROBLEMS — WHY APPLICATIONS FAIL */}
            <Section variant="surface">
                <div className="grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading text-text-primary leading-tight">The Truth About Refusals</h2>
                        <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-[540px]">
                            Most applicants assume their bank balance is enough. It's not. Visa officers look for "Economic and Social Ties" to Pakistan.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Weak Social Ties", desc: "Failing to prove you have a compelling reason to return to Pakistan." },
                                { title: "Unexplained Wealth", desc: "Large deposits without tax records or clear income sources." },
                                { title: "Inconsistent Itinerary", desc: "Hotel bookings that don't match your financial capacity." }
                            ].map((problem, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg-base border-l-4 border-amber-500 shadow-sm">
                                    <i className="fa-solid fa-triangle-exclamation text-amber-500 mt-1"></i>
                                    <div>
                                        <h4 className="font-bold text-text-primary mb-1">{problem.title}</h4>
                                        <p className="text-xs text-text-secondary">{problem.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 bg-bg-contrast p-10 lg:p-16 rounded-[3rem] text-text-inverse shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-accent)] opacity-5 group-hover:opacity-10 transition-opacity"></div>
                        <h3 className="text-3xl font-bold mb-8 text-[var(--color-accent)] relative z-10">Our Approval Strategy</h3>
                        <p className="mb-10 text-text-inverse/70 italic text-lg leading-relaxed relative z-10">
                            "We reverse-engineer the visa officer’s checklist to ensure every 'red flag' is addressed before submission."
                        </p>
                        <ul className="space-y-6 relative z-10">
                            {[
                                "Economic Ties Justification",
                                "Professional Documentation Filing",
                                "Travel History Assessment",
                                "Mock Interview Preparation (UK/USA)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg">
                                    <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                                        <i className="fa-solid fa-check text-[var(--color-accent)] text-xs"></i>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* 3. DESTINATION SELECTOR */}
            <Section variant="soft" id="selector">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-text-primary">Where is Your Next Destination?</h2>
                        <p className="text-text-secondary max-w-[600px] mx-auto lg:mx-0 text-lg leading-relaxed">
                            Select a destination to explore specific documentation needs and approval statistics.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {countries.map((country, idx) => (
                                <Link key={idx} href={`/visit-visa/${country.id}`} className="group">
                                    <div className="h-full p-8 bg-bg-surface rounded-2xl border border-border-soft hover:border-[var(--color-accent)] hover:shadow-premium transition-all duration-300">
                                        <div className="text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[3px] mb-4">Visit Visa</div>
                                        <h3 className="text-xl font-bold mb-4 font-heading text-text-primary">{country.name}</h3>
                                        <p className="text-text-secondary mb-8 text-xs leading-relaxed">{country.desc}</p>
                                        <span className="text-text-primary font-bold flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors text-[10px] uppercase tracking-widest">
                                            Check Requirements <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. PROOF / CONFIDENCE */}
            <Section variant="surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-text-primary">Approved Visit Cases</h2>
                        <p className="text-text-secondary max-w-[680px] mx-auto text-lg">
                            We've secured over 1,800 visit visa approvals for families, individuals, and business travelers.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: "Family of 4", dest: "UK Standard Visit", result: "Approved" },
                            { title: "Solo Traveler", dest: "Schengen (Germany)", result: "Approved" },
                            { title: "Business Case", dest: "USA B1/B2", result: "Approved" },
                            { title: "Refusal Recovery", dest: "Canada Visit", result: "Approved" }
                        ].map((proof, i) => (
                            <div key={i} className="p-6 rounded-xl bg-bg-base border border-border-soft text-center">
                                <i className="fa-solid fa-circle-check text-[var(--color-accent)] text-2xl mb-4"></i>
                                <h4 className="font-bold mb-1 text-text-primary">{proof.title}</h4>
                                <div className="text-xs text-text-muted mb-3">{proof.dest}</div>
                                <div className="text-[10px] font-bold text-green-600 bg-green-50 py-1 px-3 rounded-full inline-block uppercase tracking-widest">
                                    {proof.result}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. FINAL CTA FUNNEL */}
            <Section variant="contrast" id="assessment">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-text-inverse mb-6 leading-tight font-heading italic">
                                Ready to Explore? <br />
                                <span className="text-[var(--color-accent)]">Let's Secure Your Visa.</span>
                            </h2>
                            <p className="text-xl text-text-inverse/70 mb-10 leading-relaxed">
                                Avoid the risk of rejection. Our experts will evaluate your current profile and provide a professional case filing strategy.
                            </p>
                            <div className="flex flex-col gap-5">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-text-inverse text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-text-inverse/40 text-xs font-bold uppercase tracking-widest">WhatsApp Expert</div>
                                        <div className="text-2xl font-bold text-text-inverse">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <div className="mt-8 flex items-center gap-4 text-text-inverse/60 text-sm italic">
                                    <i className="fa-solid fa-shield-halved text-[var(--color-accent)]"></i>
                                    <span>Confidential Profile Evaluation & Documentation Strategy</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-bg-surface p-2 rounded-[2.5rem] shadow-2xl">
                            <ContactForm title="Check Visit Eligibility" />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
