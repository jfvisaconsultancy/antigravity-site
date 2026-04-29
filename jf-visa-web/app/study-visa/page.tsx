import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';
import Section from '@/components/Section';
import MalaysiaSection from '@/components/MalaysiaSection';


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
            <Section variant="contrast" padding="none" className="relative lg:min-h-[75vh] flex items-center overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-accent)] opacity-5 blur-[120px]"></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center w-full py-20 lg:py-0">
                    <div className="fade-in">
                        <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-bg-contrast text-[10px] font-bold rounded-full mb-8 uppercase tracking-[3px]">
                            Academic Trajectory & Visa Strategy
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
                            Your Degree is Global. <br />
                            <span className="text-[var(--color-accent)]">Your Strategy Strategic.</span>
                        </h1>
                        <p className="text-xl text-text-inverse/70 mb-10 leading-relaxed max-w-[640px]">
                            98% of our students get admission and visa approval by following our profile-first strategy. We don't just file applications; we build academic careers.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#selector" className="btn btn-primary lg:px-10">
                                View Destinations
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Talk to Counselor
                            </a>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-20 -left-20 w-48 h-48 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-8 text-[var(--color-accent)]">Admission Success</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-2xl font-bold text-[var(--color-accent)]">98%</div>
                                    <div className="text-xs text-text-inverse/60 uppercase tracking-widest font-bold">Visa Success Rate</div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <div className="text-2xl font-bold text-[var(--color-accent)]">100%</div>
                                    <div className="text-xs text-text-inverse/60 uppercase tracking-widest font-bold">Offer Letter Guarantee*</div>
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading text-text-primary leading-tight">Why Most Student Visas Get Refused</h2>
                        <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-[540px]">
                            Pakistan has one of the highest study visa refusal rates. Most errors come from lack of trajectory logic, not lack of academic merit.
                        </p>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: "Generic SOPs", desc: "Copy-pasted SOPs that fail to justify 'Why this course' or 'Why this country' specifically for you." },
                                { title: "Financial Inconsistency", desc: "Funds not aligned with the embassy's logic of spending power and ties." },
                                { title: "Wrong Course Choice", desc: "Selecting courses that don't logically follow your previous education or future goals." }
                            ].map((problem, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-bg-base border-l-4 border-red-500 shadow-sm">
                                    <i className="fa-solid fa-circle-xmark text-red-500 mt-1"></i>
                                    <div>
                                        <h4 className="font-bold text-text-primary mb-1 text-sm">{problem.title}</h4>
                                        <p className="text-[10px] text-text-secondary">{problem.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-6 bg-bg-contrast p-10 lg:p-16 rounded-[3rem] text-text-inverse shadow-2xl relative overflow-hidden group">
                        <h3 className="text-3xl font-bold mb-6 text-[var(--color-accent)] relative z-10 font-heading italic">The JF Strategy</h3>
                        <p className="mb-8 text-text-inverse/70 italic text-lg leading-relaxed relative z-10">
                            "We treat your admission as a financial and career roadmap, not just a document filing process."
                        </p>
                        <ul className="space-y-4 relative z-10">
                            {[
                                "Profile-Based University Selection",
                                "Professional SOP Writing Support",
                                "CAS/i20/COE Interview Preparation",
                                "Financial Documentation Guidance"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-base">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* NEW: MALAYSIA STUDY SECTION */}
            <MalaysiaSection />

            {/* 3. DESTINATION SELECTOR */}
            <Section variant="soft" id="selector">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-text-primary leading-tight">Map Your Academic Journey</h2>
                        <p className="text-text-secondary max-w-[600px] mx-auto lg:mx-0 text-lg leading-relaxed">
                            We bridge your background with world-class education hubs. Explore our top-tier study pathways.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {countries.map((country, idx) => (
                                <Link key={idx} href={`/study-visa/${country.id}`} className="group">
                                    <div className="h-full p-8 bg-bg-surface rounded-2xl border border-border-soft hover:border-[var(--color-accent)] hover:shadow-premium transition-all duration-300">
                                        <div className="text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-[3px] mb-4">Study in</div>
                                        <h3 className="text-xl font-bold mb-4 font-heading text-text-primary">{country.name}</h3>
                                        <p className="text-text-secondary mb-8 text-xs leading-relaxed">{country.desc}</p>
                                        <span className="text-text-primary font-bold flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors text-[10px] uppercase tracking-widest">
                                            View Requirements <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. PROOF / SUCCESS STORIES */}
            <Section variant="surface">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-text-primary">Student Success Stories</h2>
                        <p className="text-text-secondary max-w-[680px] mx-auto text-lg">
                            We've helped over 950 students secure their futures in top global universities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Ahmed R.", uni: "University of Leicester, UK", status: "MSc Engineering - Visa Approved" },
                            { name: "Sana K.", uni: "Monash University, Australia", status: "MBA - Visa Approved" },
                            { name: "Zain A.", uni: "University of Toronto, Canada", status: "Bachelors - Visa Approved" }
                        ].map((testi, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-bg-base border border-border-soft flex flex-col items-center text-center">
                                <i className="fa-solid fa-quote-left text-[var(--color-accent)] text-3xl mb-6 opacity-30"></i>
                                <h4 className="text-xl font-bold mb-2 text-text-primary">{testi.name}</h4>
                                <div className="text-sm font-semibold text-text-primary mb-2">{testi.uni}</div>
                                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    {testi.status}
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
                            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight font-heading italic text-text-inverse">
                                Map Your Global <br /> Academic Success Today.
                            </h2>
                            <p className="text-xl text-text-inverse/70 mb-10 leading-relaxed">
                                Don't leave your education to chance. Our counselors will evaluate your profile and provide a clear roadmap for admission and visa success.
                            </p>
                            <div className="flex flex-col gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-text-inverse text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-text-inverse/40 text-xs font-bold uppercase tracking-widest">Connect on WhatsApp</div>
                                        <div className="text-2xl font-bold text-text-inverse">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 max-w-[400px]">
                                    <i className="fa-solid fa-clock text-[var(--color-accent)] text-2xl"></i>
                                    <div>
                                        <div className="text-sm font-bold text-text-inverse">Fast Response</div>
                                        <div className="text-xs text-text-inverse/50">Couseling available Mon-Sat (9am-6pm)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-bg-surface p-2 rounded-[2rem] shadow-2xl">
                            <ContactForm title="Check Study Eligibility" />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
