import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Study Abroad Strategy | High-Success Admission & Visa Guidance",
    description: "Don't risk your academic future. Get professional study visa strategy for UK, Canada, Australia and Europe. 98% Success Rate.",
};

export default function StudyVisaPage() {
    const countries = [
        { name: "United Kingdom", id: "uk", desc: "Top choice for Master's with 1-year duration and post-study work." },
        { name: "Australia", id: "australia", desc: "Excellent post-study work rights and high-quality lifestyle." },
        { name: "Canada", id: "canada", desc: "Direct pathway to PR with world-class education systems." },
        { name: "USA", id: "usa", desc: "The global gold standard for STEM and research opportunities." },
        { name: "Germany", id: "europe", desc: "Free education options and strong industrial job market." },
        { name: "Italy", id: "europe", desc: "Scholarship opportunities and low cost of living for students." },
    ];

    return (
        <main className="min-h-screen">
            {/* 1. HERO — HOOK */}
            <section className="relative pt-32 pb-20 bg-[var(--color-primary)] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-accent)] opacity-5 blur-[120px]"></div>
                <div className="container relative z-10">
                    <div className="max-w-[800px]">
                        <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full mb-8 uppercase tracking-widest">
                            Academic Trajectory & Visa Strategy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                            Your Degree is Global. <br />
                            <span className="text-[var(--color-accent)]">Your Strategy Should Be Professional.</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-[640px]">
                            98% of our students get admission and visa approval by following our profile-first strategy. We don't just file applications; we build academic careers.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#selector" className="btn btn-primary lg:px-10">
                                View Destinations
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Talk to Academic Counselor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEMS — WHY APPLICATIONS FAIL */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Why Most Student Visas Get Refused</h2>
                            <p className="text-lg text-white/50 mb-10">
                                Pakistan has one of the highest study visa refusal rates. Most errors come from lack of trajectory logic, not lack of academic merit.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { title: "Generic SOPs", desc: "Copy-pasted Statements of Purpose that fail to justify 'Why this course' or 'Why this country' specifically for your profile." },
                                    { title: "Financial Inconsistency", desc: "Funds not aligned with the embassy's logic of spending power and family ties." },
                                    { title: "Wrong Course Choice", desc: "Selecting courses that don't logically follow your previous education or future goals." }
                                ].map((problem, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[var(--color-off-white)] border-l-4 border-red-500">
                                        <i className="fa-solid fa-circle-xmark text-red-500 mt-1"></i>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)] mb-1">{problem.title}</h4>
                                            <p className="text-sm text-white/60">{problem.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[var(--color-primary)] p-12 rounded-[2rem] text-white">
                            <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">The JF Difference</h3>
                            <p className="mb-8 text-white/70 italic">
                                "We treat your admission as a business case. We justify why the embassy should grant you a visa based on return logic and career growth."
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Profile-Based University Selection</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Professional SOP Writing Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>CAS/i20/COE Interview Preparation</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Financial Documentation Guidance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DESTINATION SELECTOR */}
            <section className="section-padding bg-[var(--color-off-white)]" id="selector">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Choose Your Destination</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg leading-relaxed">
                            We bridge your background with world-class education hubs. Explore our top-tier study pathways.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countries.map((country, idx) => (
                            <Link key={idx} href={`/study-visa/${country.id}`} className="group">
                                <div className="h-full p-10 bg-white rounded-2xl border border-transparent hover:border-[var(--color-accent)] hover:shadow-premium transition-all duration-300">
                                    <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">Study in</div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{country.name}</h3>
                                    <p className="text-white/60 mb-8 text-sm leading-relaxed">{country.desc}</p>
                                    <span className="text-[var(--color-primary)] font-bold flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors text-sm">
                                        View Admission Requirements <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROOF / SUCCESS STORIES */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Student Success Stories</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg">
                            We've helped over 950 students secure their futures in top global universities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmed R.", uni: "University of Leicester, UK", status: "MSc Engineering - Visa Approved" },
                            { name: "Sana K.", uni: "Monash University, Australia", status: "MBA - Visa Approved" },
                            { name: "Zain A.", uni: "University of Toronto, Canada", status: "Bachelors - Visa Approved" }
                        ].map((testi, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[var(--color-off-white)] border border-slate-100 flex flex-col items-center text-center">
                                <i className="fa-solid fa-quote-left text-[var(--color-accent)] text-3xl mb-6 opacity-30"></i>
                                <h4 className="text-xl font-bold mb-2">{testi.name}</h4>
                                <div className="text-sm font-semibold text-[var(--color-primary)] mb-2">{testi.uni}</div>
                                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    {testi.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA FUNNEL */}
            <section className="section-padding bg-[var(--color-primary)] text-white relative" id="assessment">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight font-heading italic">
                                Map Your Global <br /> Academic Success Today.
                            </h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Don't leave your education to chance. Our counselors will evaluate your profile and provide a clear roadmap for admission and visa success.
                            </p>
                            <div className="flex flex-col gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Connect on WhatsApp</div>
                                        <div className="text-2xl font-bold">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 max-w-[400px]">
                                    <i className="fa-solid fa-clock text-[var(--color-accent)] text-2xl"></i>
                                    <div>
                                        <div className="text-sm font-bold">Fast Response</div>
                                        <div className="text-xs text-white/50">Couseling available Mon-Sat (9am-6pm)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-[2rem] shadow-2xl">
                            <ContactForm title="Check Study Eligibility" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
