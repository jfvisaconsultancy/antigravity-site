import Link from 'next/link';
import { CONFIG } from '@/lib/config';

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
        <main className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[var(--color-primary)] text-white py-16 md:py-24">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img src={heroImage} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <nav className="flex items-center gap-2 text-sm mb-6 opacity-70">
                            <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
                            <i className="fa-solid fa-chevron-right text-[10px]"></i>
                            <Link href="/travel-insurance" className="hover:text-[var(--color-accent)]">Travel Insurance</Link>
                            <i className="fa-solid fa-chevron-right text-[10px]"></i>
                            <span className="text-[var(--color-accent)] font-bold">{countryName || visaType || 'Details'}</span>
                        </nav>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase italic tracking-tight">
                            {title}
                        </h1>
                        <p className="text-xl opacity-90 mb-8 leading-relaxed">
                            {description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/travel-insurance#apply-form" className="btn btn-primary px-8 py-3 text-lg font-bold">
                                Apply Now <i className="fa-solid fa-arrow-right ml-2"></i>
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline border-white text-white px-8 py-3 text-lg flex items-center gap-2">
                                <i className="fa-brands fa-whatsapp"></i> WhatsApp Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Required Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-[var(--color-primary)] mb-6 uppercase italic">Why Insurance is Required</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                {whyRequired}
                            </p>
                            <div className="bg-[var(--color-accent-light)] p-6 rounded-2xl border border-[var(--color-accent)] space-y-4">
                                <h4 className="font-bold text-[var(--color-primary)] flex items-center gap-2">
                                    <i className="fa-solid fa-lightbulb text-[var(--color-accent)]"></i> Pro Tip
                                </h4>
                                <p className="text-sm font-medium text-gray-700 italic">
                                    "Embassies strictly verify travel insurance policies. A missing or incorrect policy is one of the most common reasons for instant visa refusal."
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                                    <i className="fa-solid fa-circle-xmark text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1 leading-tight">Risk of Rejection</h4>
                                    <p className="text-sm text-gray-500">Without proper insurance, your visa application will be rejected by the embassy immediately.</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                    <i className="fa-solid fa-circle-check text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1 leading-tight">Embassy Compliant</h4>
                                    <p className="text-sm text-gray-500">Our policies are pre-approved and guaranteed to be accepted by all major embassies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements & Rules Grid */}
            <section className="py-16 bg-gray-50 border-y">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Embassy Requirements */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-black text-[var(--color-primary)] mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-building-columns text-[var(--color-accent)]"></i> Embassy Reqs
                            </h3>
                            <ul className="space-y-4">
                                {embassyRequirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-600">
                                        <i className="fa-solid fa-square-check text-green-500 mt-1"></i>
                                        <span>{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Minimum Coverage & Validity */}
                        <div className="bg-[var(--color-primary)] p-8 rounded-3xl shadow-xl text-white">
                            <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-[var(--color-accent)]">
                                <i className="fa-solid fa-shield-heart"></i> Policy Essentials
                            </h3>
                            <div className="mb-6 pb-6 border-b border-white/10">
                                <span className="text-xs font-black uppercase tracking-widest opacity-60">Min. Coverage</span>
                                <div className="text-3xl font-black text-[var(--color-accent)]">{minCoverage}</div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-sm uppercase italic">Validity Rules:</h4>
                                <ul className="space-y-3">
                                    {validityRules.map((rule, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm opacity-90 italic">
                                            <i className="fa-solid fa-calendar-day text-[var(--color-accent)] mt-1"></i>
                                            <span>{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Rejection Reasons */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-black text-red-600 mb-6 flex items-center gap-3">
                                <i className="fa-solid fa-triangle-exclamation"></i> Refusal Risks
                            </h3>
                            <ul className="space-y-4">
                                {rejectionReasons.map((reason, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-500">
                                        <i className="fa-solid fa-xmark text-red-400 mt-1"></i>
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Plan / Psychology */}
            <section className="py-20 bg-white">
                <div className="container text-center">
                    <div className="max-w-2xl mx-auto bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-10 rounded-bl-full pointer-events-none"></div>
                        <h2 className="text-2xl md:text-3xl font-black text-[var(--color-primary)] mb-6 uppercase italic">Expert Recommendation</h2>
                        <div className="text-4xl font-black text-[var(--color-accent)] mb-4 tracking-tight">{recommendedPlan}</div>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
                            Based on current embassy success rates, we highly recommend this plan level to minimize your risk of rejection.
                        </p>
                        <Link href="/travel-insurance#apply-form" className="btn btn-primary px-12 py-4 text-xl font-black rounded-2xl shadow-2xl">
                            SELECT & APPLY NOW
                        </Link>
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <Link href="/travel-insurance" className="text-[var(--color-primary)] font-black hover:text-[var(--color-accent)] transition-colors flex items-center justify-center gap-2">
                                <i className="fa-solid fa-arrow-left"></i> BACK TO ALL PLANS
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {faqs.length > 0 && (
                <section className="py-20 bg-gray-50 border-t">
                    <div className="container max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black text-center text-[var(--color-primary)] mb-12 uppercase italic">Frequently Asked Questions</h2>
                        <div className="grid gap-6">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                    <h4 className="font-bold text-lg text-gray-800 mb-3">{faq.question}</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
