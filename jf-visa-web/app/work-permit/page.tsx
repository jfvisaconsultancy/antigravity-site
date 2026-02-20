import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Legal Work Permits & Visas | Europe & Gulf Employment Strategy",
    description: "Don't risk illegal routes. Secure your future with legal work permits for Romania, Poland, Hungary, and Gulf countries. Expert guidance.",
};

export default function WorkPermitPage() {
    const countries = [
        { name: "Romania", id: "romania", desc: "Fast-growing European market for skilled and general labor with a clear path to residency." },
        { name: "Poland", id: "poland", desc: "Major industrial hub in EU seeking technical, logistics, and manufacturing professionals." },
        { name: "Hungary", id: "hungary", desc: "Emerging destination for long-term work permits in the heart of Europe." },
        { name: "Malta", id: "malta", desc: "Stable English-speaking environment with high demand in hospitality and healthcare." },
        { name: "Gulf Jobs (Qatar/KSA)", id: "gulf-jobs", desc: "Direct recruitment pathways for professional and technical roles in the Gulf." },
    ];

    return (
        <main className="min-h-screen">
            {/* 1. HERO — HOOK */}
            <section className="relative pt-32 pb-20 bg-[var(--color-primary)] text-white overflow-hidden">
                <div className="absolute top-0 right-1/4 w-1/4 h-full bg-[var(--color-accent)] opacity-5 blur-[100px]"></div>
                <div className="container relative z-10">
                    <div className="max-w-[800px]">
                        <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full mb-8 uppercase tracking-widest">
                            Legal Employment Trajectory
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                            Build a Career, <br />
                            <span className="text-[var(--color-accent)]">Not Just a Migration Record.</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-[640px]">
                            Stop risking your life and assets on illegal routes. We provide 100% legal, documented pathways for work permits in Europe and the Gulf with a focus on long-term career growth.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#selector" className="btn btn-primary lg:px-10">
                                View Job Destinations
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Talk to Work Permit Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEMS — THE RISK OF SCAMS */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">The Dangers of the 'Grey Market'</h2>
                            <p className="text-lg text-white/50 mb-10">
                                Every year, thousands of Pakistani workers lose their savings to fraudulent agents and illegal travel routes. A single fake document can ban you from Europe for life.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Fake Job Offers", desc: "Agents promising high-salary jobs without any verifiable employer contracts." },
                                    { title: "Illegal Routes", desc: "Dangerous, undocumented travel that puts your life and legal record at risk." },
                                    { title: "Drafty Documentation", desc: "Using forged certificates or bank statements that visa officers flag instantly." }
                                ].map((problem, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-red-50 border-l-4 border-red-600">
                                        <i className="fa-solid fa-shield-virus text-red-600 mt-1"></i>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)] mb-1">{problem.title}</h4>
                                            <p className="text-sm text-red-900/60">{problem.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[var(--color-primary)] p-12 rounded-[2rem] text-white">
                            <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">The 100% Legal Path</h3>
                            <p className="mb-8 text-white/70 italic">
                                "Our mission is to provide Pakistani talent with legitimate access to global labor markets. We only process verified employer-backed permits."
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-file-contract text-[var(--color-accent)]"></i>
                                    <span>Verified Employer Demand Lists</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-file-contract text-[var(--color-accent)]"></i>
                                    <span>Legal EU Work Permit (Type D) Processing</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-file-contract text-[var(--color-accent)]"></i>
                                    <span>Biometric & Medical Appointment Support</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-file-contract text-[var(--color-accent)]"></i>
                                    <span>Pre-departure Compliance Training</span>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Targeted Work Opportunities</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg leading-relaxed">
                            We match your skills with the countries that demand them most.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countries.map((country, idx) => (
                            <Link key={idx} href={`/work-permit/${country.id}`} className="group">
                                <div className="h-full p-10 bg-white rounded-2xl border border-transparent hover:border-[var(--color-accent)] hover:shadow-premium transition-all duration-300">
                                    <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">Work Permit</div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{country.name}</h3>
                                    <p className="text-white/60 mb-8 text-sm leading-relaxed">{country.desc}</p>
                                    <span className="text-[var(--color-primary)] font-bold flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors text-sm uppercase tracking-widest">
                                        View Permit Process <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROOF / CONFIDENCE */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Recent Work Permit Approvals</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg">
                            We have a proven track record of placing professionals and technicians in global roles.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { role: "Technical Supervisor", dest: "Romania (EU)", status: "Visa Issued" },
                            { role: "Logistics Specialist", dest: "Poland (EU)", status: "Visa Issued" },
                            { role: "Skilled Technician", dest: "UAE (Gulf)", status: "Visa Issued" }
                        ].map((proof, i) => (
                            <div key={i} className="p-10 rounded-2xl bg-[var(--color-off-white)] border border-slate-100 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <i className="fa-solid fa-briefcase text-[var(--color-accent)] text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{proof.role}</h4>
                                <div className="text-sm text-white/50 mb-4">{proof.dest}</div>
                                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
                                    {proof.status}
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
                                Secure Your Global <br />
                                <span className="text-[var(--color-accent)]">Career Path Today.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Don't wait until work opportunities disappear. Get your profile evaluated today to see which legal work permits match your experience.
                            </p>
                            <div className="flex flex-col gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Connect with Work Expert</div>
                                        <div className="text-2xl font-bold">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <div className="inline-flex items-center gap-3 text-sm text-[var(--color-accent)] font-semibold border border-[var(--color-accent)]/20 px-6 py-4 rounded-xl">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    <span>Verified Legal Pathways Only</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
                            <ContactForm title="Check Work Eligibility" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
