import Link from "next/link";
import { Metadata } from "next";
import { CONFIG } from "@/lib/config";
import TravelInsuranceForm from "./TravelInsuranceForm";

export const metadata: Metadata = {
    title: "Travel Insurance for Schengen, UK & Worldwide | Instant Policy Pakistan",
    description: "Get embassy-approved travel insurance for visa applications. Instant policy issuance, affordable rates, family & student plans available. Accepted by all embassies.",
    keywords: "travel insurance Pakistan, visa travel insurance, Schengen insurance Pakistan, UK visa insurance, student travel insurance, JF Visa consultancy",
};

export default function TravelInsurancePage() {
    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is this travel insurance accepted by all embassies?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our travel insurance policies are embassy-approved and meet the mandatory requirements for Schengen, UK, USA, UAE, and other worldwide visa applications."
                }
            },
            {
                "@type": "Question",
                "name": "How long does it take to get the policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most policies are issued and delivered via Email and WhatsApp within 2 to 10 minutes after payment verification."
                }
            },
            {
                "@type": "Question",
                "name": "Does it cover COVID-19?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our plans include coverage for COVID-19 emergency medical treatment and hospitalization where applicable."
                }
            }
        ]
    };

    return (
        <main className="bg-gray-50">
            {/* SEO Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[var(--color-primary)] text-white py-16 md:py-24">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <img src="/images/hero_travel_insurance.png" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] font-bold px-4 py-1 rounded-full text-sm mb-6 animate-bounce">
                            EMBASSY APPROVED INSURANCE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Travel Insurance Accepted by <span className="text-[var(--color-accent)]">All Embassies</span> — Get Your Policy in Minutes
                        </h1>
                        <p className="text-xl opacity-90 mb-8 max-w-xl">
                            Schengen, UK, UAE & Worldwide Coverage with Instant Policy Issuance. Policy delivered directly to your WhatsApp.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: "fa-certificate", text: "Embassy Approved Insurance" },
                                { icon: "fa-tags", text: "Starting from low daily cost" },
                                { icon: "fa-file-pdf", text: "Instant PDF Policy Issuance" },
                                { icon: "fa-hospital", text: "Medical + Emergency + Trip Issues" }
                            ].map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/20">
                                    <i className={`fa-solid ${bullet.icon} text-[var(--color-accent)] text-lg`}></i>
                                    <span className="font-semibold text-sm">{bullet.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="#apply-form" className="btn btn-primary px-10 py-4 text-lg shadow-xl shadow-black/20">
                                Apply Now <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
                            </a>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline border-white text-white hover:bg-white hover:text-[var(--color-primary)] px-8 py-4 text-lg">
                                <i className="fa-brands fa-whatsapp mr-2 text-xl"></i> Get Quote on WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <TravelInsuranceForm />
                    </div>
                </div>
            </section>

            {/* Trust & Authority Section */}
            <section className="py-12 bg-white border-b overflow-hidden">
                <div className="container">
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <div className="flex flex-col items-center">
                            <img src="https://flagcdn.com/w80/eu.png" alt="Schengen" className="h-8 mb-3 grayscale opacity-70" />
                            <span className="font-bold text-gray-500 text-sm">Accepted for Schengen Visa</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <i className="fa-solid fa-graduation-cap text-3xl text-gray-400 mb-2"></i>
                            <span className="font-bold text-gray-500 text-sm">Accepted for Study Visa</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <i className="fa-solid fa-passport text-3xl text-gray-400 mb-2"></i>
                            <span className="font-bold text-gray-500 text-sm">Accepted for Visit Visa</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <i className="fa-solid fa-briefcase text-3xl text-gray-400 mb-2"></i>
                            <span className="font-bold text-gray-500 text-sm">Accepted for Work Permit</span>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        {["Verified Providers", "Fast Issuance", "Support Assistance"].map(badge => (
                            <span key={badge} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest border">
                                <i className="fa-solid fa-check-circle mr-2 text-green-500"></i> {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Explanation (Sales Block) */}
            <section className="section-padding bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl font-black text-[var(--color-primary)] mb-4 uppercase italic tracking-tight">Choice of Coverage</h2>
                        <p className="text-gray-600 text-lg">Select the protection level that fits your visa requirements and travel needs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Coverage Card 1 */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative h-full flex flex-col">
                            <div className="mb-6">
                                <span className="bg-gray-100 text-gray-500 font-bold px-3 py-1 rounded text-xs">BASIC</span>
                                <h3 className="text-3xl font-black text-gray-800 mt-2">€30,000</h3>
                                <p className="text-sm font-bold text-[var(--color-primary)] mt-1">Minimum Embassy Requirement</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {["Emergency Medical", "Hospitalization", "Repatriation", "Accident Coverage"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <i className="fa-solid fa-check text-green-500"></i> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#apply-form" className="btn btn-outline w-full rounded-xl py-3 font-bold">Select Basic Coverage</a>
                        </div>

                        {/* Coverage Card 2 (Recommended) */}
                        <div className="bg-[var(--color-primary)] rounded-3xl p-8 shadow-2xl relative h-full flex flex-col scale-105 z-10 text-white">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] font-black px-4 py-1 rounded-full text-xs shadow-lg">MOST POPULAR</span>
                            <div className="mb-6">
                                <span className="bg-white/10 text-white/70 font-bold px-3 py-1 rounded text-xs uppercase italic">Recommended</span>
                                <h3 className="text-3xl font-black text-white mt-2">€50,000</h3>
                                <p className="text-sm font-bold text-[var(--color-accent)] mt-1">Preferred for Visa Approval</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {["Enhanced Medical Protection", "Trip Cancellation Cover", "Lost Baggage Support", "All Basic Covers Included", "COVID-19 Coverage"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-white/90 font-medium">
                                        <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#apply-form" className="btn btn-primary bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-white w-full rounded-xl py-4 font-black text-lg">Get Premium Protection</a>
                        </div>

                        {/* Coverage Card 3 */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg relative h-full flex flex-col">
                            <div className="mb-6">
                                <span className="bg-gray-100 text-gray-500 font-bold px-3 py-1 rounded text-xs">PREMIUM</span>
                                <h3 className="text-3xl font-black text-gray-800 mt-2">€100,000+</h3>
                                <p className="text-sm font-bold text-[var(--color-primary)] mt-1">Total Peace of Mind</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {["Maximum Medical Coverage", "Extended Hospitalization", "Missed Flight Connection", "High-Value Trip Cover", "Global Priority Support"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <i className="fa-solid fa-check text-green-500"></i> {item}
                                    </li>
                                ))}
                            </ul>
                            <a href="#apply-form" className="btn btn-outline w-full rounded-xl py-3 font-bold">Select Gold Plan</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plan Types Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <h2 className="text-4xl font-black text-center text-[var(--color-primary)] mb-16">FIND THE RIGHT PLAN FOR YOU</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Individual Travel Insurance", desc: "Standard protection for solo travelers.", icon: "fa-user" },
                            { title: "Family Travel Insurance", desc: "Special discounted rates for families traveling together.", icon: "fa-users" },
                            { title: "Student Insurance", desc: "Mandatory coverage for study visa applications worldwide.", icon: "fa-graduation-cap" },
                            { title: "Multi-Trip / Annual", desc: "Frequent flyers save more with multiple trips on one policy.", icon: "fa-plane-circle-check" },
                            { title: "Long Stay / Visit", desc: "Extended coverage for stays from 3 months up to 1 year.", icon: "fa-house-chimney" },
                        ].map((plan, i) => (
                            <div key={i} className="group p-8 border rounded-3xl hover:border-[var(--color-primary)] hover:shadow-2xl transition-all duration-300 relative overflow-hidden bg-white">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity"></div>
                                <i className={`fa-solid ${plan.icon} text-4xl text-[var(--color-accent)] mb-6`}></i>
                                <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
                                <p className="text-gray-600 mb-6 font-medium">{plan.desc}</p>
                                <a href="#apply-form" className="text-[var(--color-primary)] font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                                    SELECT THIS PLAN <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Duration UI Indicator */}
                    <div className="mt-20 p-8 bg-[var(--color-primary)] rounded-[2.5rem] shadow-2xl text-white">
                        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Duration Flexibility</h3>
                                <p className="opacity-80">Choose exactly how long you need protection for.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["7–15 Days", "16–30 Days", "1–3 Months", "3–6 Months", "6–12 Months"].map(dur => (
                                    <span key={dur} className="px-5 py-2 bg-white/10 rounded-full font-bold border border-white/20">{dur}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section-padding bg-gray-50 border-y overflow-hidden">
                <div className="container">
                    <h2 className="text-4xl font-black text-center text-[var(--color-primary)] mb-16 uppercase italic">Quick 4-Step Process</h2>
                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line (desktop only) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10 px-24"></div>

                        {[
                            { icon: "fa-edit", step: "01", title: "Submit details", desc: "Fill out the quick online application form." },
                            { icon: "fa-check-square", step: "02", title: "Choose coverage", desc: "Select the plan that fits your visa type." },
                            { icon: "fa-credit-card", step: "03", title: "Pay Online", desc: "Complete the easy payment through multiple options." },
                            { icon: "fa-file-shield", step: "04", title: "Receive Policy", desc: "Get instant PDF on WhatsApp & Email (2-10 mins)." }
                        ].map((s, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-6">
                                <div className="w-24 h-24 bg-white rounded-3xl shadow-lg border border-gray-100 flex items-center justify-center mb-6 relative group transition-transform hover:scale-110">
                                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center font-black text-sm">{s.step}</span>
                                    <i className={`fa-solid ${s.icon} text-3xl text-[var(--color-primary)]`}></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                                <p className="text-gray-500 text-sm font-medium">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials or Psychology Triggers */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[var(--color-accent-light)] p-10 rounded-[3rem] border border-[var(--color-accent)]">
                            <i className="fa-solid fa-quote-left text-4xl text-[var(--color-accent)] mb-6 opacity-40"></i>
                            <h3 className="text-2xl font-black text-[var(--color-primary)] mb-4">Required for Visa Approval</h3>
                            <p className="text-gray-800 text-lg leading-relaxed font-medium mb-6">
                                "Policy delivered in 2–10 minutes. Used successfully by thousands of visa applicants for Schengen, UK, and UAE. Don't risk your visa with unverified insurance."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white">
                                    <i className="fa-solid fa-user-shield"></i>
                                </div>
                                <div>
                                    <div className="font-bold text-[var(--color-primary)]">Used by Thousands</div>
                                    <div className="text-xs text-gray-500 uppercase font-black">Verified Applicants</div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 flex flex-col justify-center">
                            <h2 className="text-4xl font-black text-[var(--color-primary)] leading-tight uppercase italic">WHY TAKE THE RISK?</h2>
                            <ul className="space-y-4">
                                {[
                                    "100% Embassy Acceptance Rate",
                                    "Lowest Market Rates Guaranteed",
                                    "Instant Claim Support Hotline",
                                    "No Visit Required - Online Process"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border hover:border-[var(--color-primary)] transition-all">
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        <span className="font-bold text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="container text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO GET INSURED?</h2>
                    <p className="text-xl mb-10 opacity-80 max-w-2xl mx-auto">
                        Don't leave your travel to chance. Join 10,000+ happy travelers who chose JF Visa.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#apply-form" className="btn btn-primary bg-[var(--color-accent)] text-[var(--color-primary)] px-12 py-5 text-xl font-black rounded-2xl shadow-2xl">
                            APPLY NOW
                        </a>
                        <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline border-white text-white px-12 py-5 text-xl font-black rounded-2xl">
                            TALK TO AN EXPERT
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
