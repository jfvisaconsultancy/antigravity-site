import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import Section from './Section';

interface InsurancePageProps {
    title: string;
    description: string;
    heroImage?: string;
    visaType?: string;
    countryName?: string;
    whyRequired: string;
    embassyRequirements: string[];
    minCoverage: string;
    validityRules: string[];
    rejectionReasons: string[];
    recommendedPlan: string;
    faqs?: { question: string; answer: string }[];
}

export default function InsurancePageLayout({
    title,
    description,
    heroImage = '/images/hero_travel_insurance.png',
    visaType,
    countryName,
    whyRequired,
    embassyRequirements,
    minCoverage,
    validityRules,
    rejectionReasons,
    recommendedPlan,
    faqs = []
}: InsurancePageProps) {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <Section variant="contrast" padding="none" className="relative overflow-hidden pt-32 pb-24">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src={heroImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-xs mb-8 uppercase tracking-widest font-bold">
                            <Link href="/" className="text-text-inverse/60 hover:text-[var(--color-accent)]">Home</Link>
                            <i className="fa-solid fa-chevron-right text-[8px] text-text-inverse/30"></i>
                            <Link href="/travel-insurance" className="text-text-inverse/60 hover:text-[var(--color-accent)]">Insurance</Link>
                            <i className="fa-solid fa-chevron-right text-[8px] text-text-inverse/30"></i>
                            <span className="text-[var(--color-accent)]">{countryName || visaType || 'Details'}</span>
                        </nav>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
                            {title}
                        </h1>
                        <p className="text-xl text-text-inverse/80 mb-10 leading-relaxed font-medium">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="/travel-insurance#apply-form" className="btn btn-primary px-10 py-4 text-lg font-bold shadow-xl">
                                Get Instant Quote <i className="fa-solid fa-bolt ml-2 text-[var(--color-accent)]"></i>
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline border-white/30 text-white px-10 py-4 text-lg flex items-center gap-2 bg-white/5 backdrop-blur-sm">
                                <i className="fa-brands fa-whatsapp text-green-400"></i> WhatsApp Expert
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Why Required Section */}
            <Section variant="surface">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-text-primary mb-6 font-heading italic uppercase">Why Insurance is Mandatory</h2>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    {whyRequired}
                                </p>
                            </div>
                            <div className="bg-bg-soft p-8 rounded-3xl border-l-4 border-[var(--color-accent)] shadow-sm">
                                <h4 className="font-bold text-text-primary flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-bg-contrast flex items-center justify-center text-xs">
                                        <i className="fa-solid fa-lightbulb"></i>
                                    </div>
                                    Advisor Insight
                                </h4>
                                <p className="text-sm font-semibold text-text-secondary italic leading-relaxed">
                                    "Embassies strictly verify travel insurance policies. A missing or non-compliant policy is one of the most common reasons for instant visa refusal."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-bg-base p-8 rounded-3xl border border-border-soft flex items-start gap-6 shadow-premium group hover:border-red-200 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-circle-xmark text-2xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-2 text-lg">Risk of Rejection</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Without proper embassy-specific insurance, your application will likely be rejected immediately.</p>
                                </div>
                            </div>
                            <div className="bg-bg-base p-8 rounded-3xl border border-border-soft flex items-start gap-6 shadow-premium group hover:border-green-200 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <i className="fa-solid fa-shield-check text-2xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-primary mb-2 text-lg">Embassy Compliant</h4>
                                    <p className="text-sm text-text-secondary leading-relaxed">Our policies are pre-approved and guaranteed to be accepted by all major international embassies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Requirements & Rules Grid */}
            <Section variant="soft" className="border-y border-border-soft">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Embassy Requirements */}
                        <div className="bg-bg-base p-10 rounded-[2.5rem] shadow-premium border border-border-soft">
                            <h3 className="text-xl font-black text-text-primary mb-8 flex items-center gap-3">
                                <i className="fa-solid fa-building-columns text-[var(--color-accent)]"></i> Embassy Reqs
                            </h3>
                            <ul className="space-y-5">
                                {embassyRequirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-4 text-sm font-bold text-text-secondary">
                                        <i className="fa-solid fa-check-circle text-green-500 mt-0.5"></i>
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Minimum Coverage & Validity */}
                        <div className="bg-bg-contrast p-10 rounded-[2.5rem] shadow-2xl text-text-inverse relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
                            <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-[var(--color-accent)]">
                                <i className="fa-solid fa-shield-heart"></i> Policy Essentials
                            </h3>
                            <div className="mb-8 pb-8 border-b border-white/10">
                                <span className="text-[10px] font-black uppercase tracking-widest text-text-inverse/40">Min. Medical Coverage</span>
                                <div className="text-4xl font-black text-[var(--color-accent)] mt-2">{minCoverage}</div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="font-bold text-xs uppercase tracking-[2px] text-text-inverse/60 italic">Validity Protocols:</h4>
                                <ul className="space-y-4">
                                    {validityRules.map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-inverse/90 italic font-medium">
                                            <i className="fa-solid fa-calendar-check text-[var(--color-accent)] mt-1"></i>
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Rejection Reasons */}
                        <div className="bg-bg-base p-10 rounded-[2.5rem] shadow-premium border border-border-soft">
                            <h3 className="text-xl font-black text-red-600 mb-8 flex items-center gap-3">
                                <i className="fa-solid fa-triangle-exclamation"></i> Refusal Risks
                            </h3>
                            <ul className="space-y-5">
                                {rejectionReasons.map((reason, i) => (
                                    <li key={i} className="flex items-start gap-4 text-sm font-bold text-text-muted">
                                        <i className="fa-solid fa-circle-xmark text-red-400 mt-0.5"></i>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Recommended Plan / Psychology */}
            <Section variant="surface">
                <div className="container text-center">
                    <div className="max-w-3xl mx-auto bg-bg-base p-12 md:p-16 rounded-[4rem] border border-border-soft shadow-premium relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-bl-full pointer-events-none"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-text-primary mb-8 font-heading italic uppercase">Expert Recommendation</h2>
                        <div className="inline-block bg-[var(--color-accent)] text-bg-contrast px-8 py-2 rounded-full text-xs font-black uppercase tracking-[3px] mb-6">Best Approval Rate</div>
                        <div className="text-4xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">{recommendedPlan}</div>
                        <p className="text-text-secondary text-lg mb-12 leading-relaxed font-bold max-w-lg mx-auto">
                            Based on 2026 embassy success metrics, we highly recommend this coverage level to minimize rejection risk.
                        </p>
                        <Link href="/travel-insurance#apply-form" className="btn btn-primary px-12 py-5 text-xl font-black rounded-2xl shadow-premium">
                            GENERATE POLICY QUOTE
                        </Link>
                        <div className="mt-12 pt-8 border-t border-border-soft">
                            <Link href="/travel-insurance" className="text-text-primary font-black hover:text-[var(--color-accent)] transition-colors flex items-center justify-center gap-3 group">
                                <i className="fa-solid fa-arrow-left group-hover:-translate-x-2 transition-transform"></i> EXPLORE ALL PLAN TYPES
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <Section variant="soft" className="border-t border-border-soft">
                    <div className="container max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black text-center text-text-primary mb-16 font-heading italic uppercase">Key Inquiries (FAQs)</h2>
                        <div className="grid gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-bg-base p-10 rounded-3xl border border-border-soft shadow-premium group hover:border-[var(--color-accent)] transition-colors">
                                    <h4 className="font-bold text-xl text-text-primary mb-4 flex gap-3">
                                        <span className="text-[var(--color-accent)] font-black">?</span>
                                        {faq.question}
                                    </h4>
                                    <p className="text-text-secondary leading-relaxed font-medium pl-6 border-l-2 border-border-soft italic">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>
            )}
        </main>
    );
}
