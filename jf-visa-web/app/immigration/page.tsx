import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Immigration & PR Strategy | Canada, Australia, UK Settlement Experts",
    description: "Your professional pathway to permanent residency. Strategic trajectory mapping for Canada PR, Australia Skilled Migration, and UK Settlement.",
};

export default function ImmigrationPage() {
    const countries = [
        { name: "Canada Immigration (Express Entry)", id: "canada-pr", desc: "Federal Skilled Worker and PNP pathways for long-term settlement in Canada." },
        { name: "Australia Skilled Migration", id: "australia-pr", desc: "Points-based visas (189, 190, 491) for professionals seeking an Australian future." },
        { name: "UK Settlement", id: "uk-settlement", desc: "ILR, Family reunion, and professional settlement routes in the United Kingdom." },
    ];

    return (
        <main className="min-h-screen">
            {/* 1. HERO — HOOK */}
            <section className="relative pt-32 pb-20 bg-[var(--color-primary)] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-accent)] opacity-5 blur-[120px]"></div>
                <div className="container relative z-10">
                    <div className="max-w-[800px]">
                        <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full mb-8 uppercase tracking-widest">
                            Settlement & PR Strategy
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                            Immigrate with a Strategy, <br />
                            <span className="text-[var(--color-accent)]">Not Just an Application.</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-[640px]">
                            Permanent Residency is a high-stakes points game. We provide specialized trajectory mapping to maximize your CRS or points score, ensuring you aren't just in the pool, but on the path to an invitation.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#selector" className="btn btn-primary lg:px-10">
                                View PR Programs
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Talk to PR Consultant
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PROBLEMS — SYSTEM COMPLEXITY */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">The Hidden Challenges of PR</h2>
                            <p className="text-lg text-white/50 mb-10">
                                Modern immigration systems are competitive. Many qualified professionals fail to get an ITA (Invitation to Apply) simply due to technical miscalculations or lack of strategic planning.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Point Calculation Errors", desc: "Misunderstanding age, experience, or education factors that lead to score inflation and later rejection." },
                                    { title: "Low CRS Draws", desc: "Waiting in the pool without a PNP or additional strategy while your age points decrease month by month." },
                                    { title: "Ineligible NOC Codes", desc: "Failing to document work experience in a way that aligns with the target country's high-demand lists." }
                                ].map((problem, i) => (
                                    <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[var(--color-off-white)] border-l-4 border-[var(--color-primary)]">
                                        <i className="fa-solid fa-circle-exclamation text-[var(--color-primary)] mt-1"></i>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)] mb-1">{problem.title}</h4>
                                            <p className="text-sm text-white/60">{problem.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[var(--color-primary)] p-12 rounded-[2rem] text-white">
                            <h3 className="text-2xl font-bold mb-6 text-[var(--color-accent)]">Our Expertise</h3>
                            <p className="mb-8 text-white/70 italic">
                                "We don't just fill forms; we optimize your profile. From ECA/WES guidance to occupation list mapping, we ensure you have the highest possible points."
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Detailed CRS/Points Score Analysis</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>PNP & State Nomination Strategy</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Document Gap Analysis & Recovery</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                                    <span>Verified Work Experience Certification Guidance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PROGRAM SELECTOR */}
            <section className="section-padding bg-[var(--color-off-white)]" id="selector">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Permanent Residency Pathways</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg leading-relaxed">
                            Structured pathways for skilled professionals seeking a stable future in a second home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countries.map((country, idx) => (
                            <Link key={idx} href={`/immigration/${country.id}`} className="group">
                                <div className="h-full p-10 bg-white rounded-2xl border border-transparent hover:border-[var(--color-accent)] hover:shadow-premium transition-all duration-300">
                                    <div className="text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-4">Immigration</div>
                                    <h3 className="text-2xl font-bold mb-4 font-heading">{country.name}</h3>
                                    <p className="text-white/60 mb-8 text-sm leading-relaxed">{country.desc}</p>
                                    <span className="text-[var(--color-primary)] font-bold flex items-center gap-2 group-hover:text-[var(--color-accent)] transition-colors text-sm uppercase tracking-widest">
                                        View Program Details <i className="fa-solid fa-arrow-right"></i>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Settlement Success</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg">
                            Dozens of families have successfully migrated using our strategic trajectory mapping.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Family of 3", program: "Canada Express Entry", status: "ITA Received / PR Issued" },
                            { name: "IT Professional", program: "Australia 190 Visa", status: "Visa Granted" },
                            { name: "Senior Manager", program: "UK Skilled Worker to ILR", status: "Grant Approved" }
                        ].map((proof, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[var(--color-off-white)] border border-slate-100 text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <i className="fa-solid fa-passport text-[var(--color-accent)] text-2xl"></i>
                                </div>
                                <h4 className="text-xl font-bold mb-1">{proof.name}</h4>
                                <div className="text-sm text-[var(--color-primary)] font-semibold mb-4">{proof.program}</div>
                                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
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
                                Your Future Awaits. <br />
                                <span className="text-[var(--color-accent)]">Let's Calculate Your Score.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Immigration is a complex puzzle. Don't waste time on hearsay—get a professional point calculation and trajectory map today.
                            </p>
                            <div className="flex flex-col gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">WhatsApp PR Expert</div>
                                        <div className="text-2xl font-bold">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <p className="text-sm text-white/50 italic flex items-center gap-2">
                                    <i className="fa-solid fa-circle-info text-[var(--color-accent)]"></i>
                                    Point calculations are based on current Express Entry & State criteria.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
                            <ContactForm title="Check Immigration Eligibility" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
