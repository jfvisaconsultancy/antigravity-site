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

            {/* Browse by Purpose Section (Phase 1 & 2) */}
            <section className="py-16 bg-white border-b">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[var(--color-primary)] mb-4">INSURANCE BY PURPOSE</h2>
                        <p className="text-gray-600">Select your visa category to see specific insurance requirements.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Schengen Visa", path: "/travel-insurance/schengen-visa", icon: "fa-eu" },
                            { name: "Study Visa", path: "/travel-insurance/study-visa", icon: "fa-graduation-cap" },
                            { name: "Visit Visa", path: "/travel-insurance/visit-visa", icon: "fa-passport" },
                            { name: "Work Permit", path: "/travel-insurance/work-permit", icon: "fa-briefcase" },
                            { name: "Immigration", path: "/travel-insurance/immigration", icon: "fa-house-chimney-user" }
                        ].map((item, idx) => (
                            <Link key={idx} href={item.path} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border hover:border-[var(--color-primary)] hover:shadow-lg transition-all text-center group">
                                <i className={`fa-solid ${item.icon} text-3xl text-[var(--color-accent)] mb-4 group-hover:scale-110 transition-transform`}></i>
                                <span className="font-bold text-[var(--color-primary)]">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Embassy Insurance Requirements (Phase 4) */}
            <section className="py-16 bg-[var(--color-primary)] text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-black mb-8 text-center text-[var(--color-accent)] italic uppercase">Embassy Insurance Requirements</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Minimum Coverage Amount</h4>
                                        <p className="opacity-80">Most embassies (especially Schengen) require a minimum medical coverage of €30,000 (roughly $34,000 USD).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Valid for Entire Stay</h4>
                                        <p className="opacity-80">The policy must cover the exact duration of your travel from the day of departure to the day of return.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Repatriation Coverage</h4>
                                        <p className="opacity-80">Mandatory coverage for emergency medical evacuation and repatriation of remains to the home country.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                    <div>
                                        <h4 className="font-bold text-xl mb-2">Zero Deductible Preferred</h4>
                                        <p className="opacity-80">Embassies prefer policies where the applicant doesn't have to pay a deductible (excess) for medical claims.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Psychology Block (Phase 5) */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-sm overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-5 rounded-bl-full pointer-events-none"></div>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black text-[var(--color-primary)] mb-6 uppercase tracking-tight">AFFORDABLE PROTECTION FOR EVERY TRAVELER</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-bolt text-[var(--color-accent)] text-2xl"></i>
                                        <div>
                                            <h4 className="font-bold">Starting from low daily rates</h4>
                                            <p className="text-gray-600">Get covered for as low as the price of a coffee per day. Price depends on age and duration.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-chart-line text-[var(--color-accent)] text-2xl"></i>
                                        <div>
                                            <h4 className="font-bold">Age-Based Dynamic Pricing</h4>
                                            <p className="text-gray-600">Fair pricing models based on traveler age groups. Infants and Seniors have specialized plans.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <i className="fa-solid fa-crown text-[var(--color-accent)] text-2xl"></i>
                                        <div>
                                            <h4 className="font-bold">Recommended vs Minimum</h4>
                                            <p className="text-gray-600">While €30k is the minimum, 85% of our successful applicants choose the €50,000 plan for extra safety.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[var(--color-primary)] p-8 rounded-3xl text-white text-center shadow-2xl scale-105">
                                <h3 className="text-2xl font-bold mb-4">QUICK PRICE CHECK</h3>
                                <div className="text-5xl font-black text-[var(--color-accent)] mb-2 tracking-tighter">Starting low</div>
                                <p className="opacity-70 mb-8 uppercase text-xs font-bold tracking-widest">Affordable Daily Rates</p>
                                <ul className="text-left space-y-3 mb-8 text-sm">
                                    <li className="flex justify-between border-b border-white/10 pb-2"><span>Schengen (15 Days)</span> <span className="font-bold">Very Low Cost</span></li>
                                    <li className="flex justify-between border-b border-white/10 pb-2"><span>USA / Canada (30 Days)</span> <span className="font-bold">Competitive</span></li>
                                    <li className="flex justify-between pb-2"><span>Worldwide (1 Year)</span> <span className="font-bold">Best Value</span></li>
                                </ul>
                                <a href="#apply-form" className="btn btn-primary w-full py-4 rounded-xl font-black">GET MY EXACT PRICE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Browse by Country Section (Phase 1 & 3) */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-[var(--color-primary)] mb-4 uppercase italic">TOP DESTINATIONS</h2>
                        <p className="text-gray-600 text-lg">Specific insurance guides for the most popular travel destinations from Pakistan.</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { name: "Germany", path: "/travel-insurance/germany", img: "https://flagcdn.com/w160/de.png" },
                            { name: "Italy", path: "/travel-insurance/italy", img: "https://flagcdn.com/w160/it.png" },
                            { name: "Poland", path: "/travel-insurance/poland", img: "https://flagcdn.com/w160/pl.png" },
                            { name: "UAE", path: "/travel-insurance/uae", img: "https://flagcdn.com/w160/ae.png" },
                            { name: "United Kingdom", path: "/travel-insurance/uk", img: "https://flagcdn.com/w160/gb.png" }
                        ].map((country, idx) => (
                            <Link key={idx} href={country.path} className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                                <img src={country.img} alt={country.name} className="w-16 h-auto mx-auto mb-4 rounded shadow-sm grayscale group-hover:grayscale-0 transition-all" />
                                <h3 className="font-bold text-[var(--color-primary)]">{country.name}</h3>
                                <span className="text-xs text-[var(--color-accent)] font-bold mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">REQS & PRICING</span>
                            </Link>
                        ))}
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
