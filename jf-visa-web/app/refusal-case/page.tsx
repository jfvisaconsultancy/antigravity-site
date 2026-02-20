import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Visa Refusal Recovery | Recover Your Rejected Case with Experts",
    description: "Had a visa refusal? Don't lose hope. We specialize in justifying complex rejections and recovering cases for UK, USA, Canada, and Europe.",
};

export default function RefusalCasePage() {
    return (
        <main className="min-h-screen">
            {/* 1. HERO — HOOK */}
            <section className="relative pt-32 pb-20 bg-[var(--color-primary)] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 opacity-5 blur-[150px]"></div>
                <div className="container relative z-10">
                    <div className="max-w-[800px]">
                        <div className="inline-block px-4 py-1.5 bg-red-600/20 text-red-500 text-xs font-bold rounded-full mb-8 uppercase tracking-widest border border-red-600/30">
                            Refusal Recovery Specialist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                            A Refusal is a Hurdle, <br />
                            <span className="text-[var(--color-accent)]">Not a Dead End.</span>
                        </h1>
                        <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-[640px]">
                            Most re-applications fail because they ignore the underlying logic of the initial rejection. We analyze your refusal letter, identify the "invisible" red flags, and build a technical justification for your next attempt.
                        </p>
                        <div className="flex flex-wrap gap-5">
                            <Link href="#strategy" className="btn btn-primary lg:px-10">
                                How We Recover Cases
                            </Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                                Share Refusal Letter on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE DANGER OF BLIND RE-APPLICATION */}
            <section className="section-padding bg-white">
                <div className="container text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Why Re-applying Fast is a Mistake</h2>
                    <p className="text-white/60 max-w-[720px] mx-auto text-lg leading-relaxed">
                        If you submit the same documents with a different letter, the visa officer will see it as "persistent intent to migrate" without profile improvement. This often leads to a second refusal.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-2xl bg-red-50 border border-red-100">
                        <i className="fa-solid fa-file-circle-xmark text-4xl text-red-600 mb-6"></i>
                        <h4 className="text-xl font-bold mb-4">Lack of New Evidence</h4>
                        <p className="text-sm text-red-900/60 leading-relaxed">Submitting the same evidence that was already rejected shows you haven't addressed the officer's concerns.</p>
                    </div>
                    <div className="p-10 rounded-2xl bg-red-50 border border-red-100">
                        <i className="fa-solid fa-circle-nodes text-4xl text-red-600 mb-6"></i>
                        <h4 className="text-xl font-bold mb-4">Inconsistent Info</h4>
                        <p className="text-sm text-red-900/60 leading-relaxed">Changing your story in the second application creates trust issues that are almost impossible to fix.</p>
                    </div>
                    <div className="p-10 rounded-2xl bg-red-50 border border-red-100">
                        <i className="fa-solid fa-clock-rotate-left text-4xl text-red-600 mb-6"></i>
                        <h4 className="text-xl font-bold mb-4">Urgent Filing</h4>
                        <p className="text-sm text-red-900/60 leading-relaxed">Filing immediately after a refusal suggests desperation, which is a major red flag for 'Intent'.</p>
                    </div>
                </div>
            </section>

            {/* 3. RECOVERY STRATEGY */}
            <section className="section-padding bg-[var(--color-off-white)]" id="strategy">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading">Our Recovery Protocol</h2>
                            <p className="text-lg text-white/50 mb-10">
                                We treat every refusal case like a legal appeal. Our process is designed to overturn the officer's doubts with hard evidence and logical justification.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { title: "Refusal Letter Analysis", desc: "Detailed breakdown of the specific paragraphs and 'hidden' logic used by the officer." },
                                    { title: "GCMS/ATIP Notes Guidance", desc: "Assistance in ordering internal officer notes to see exactly what they wrote about you." },
                                    { title: "Technical Justification Letter", desc: "A professional response addressing every single objection with documentary proof." },
                                    { title: "Profile Correction", desc: "Strategic changes to your course, funds, or ties to ensure a logical trajectory." }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 mt-1 font-bold text-xs">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--color-primary)] mb-1">{item.title}</h4>
                                            <p className="text-sm text-white/60">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-[var(--color-primary)] rounded-[3rem] p-12 text-white flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-6 text-[var(--color-accent)]">95% Success in Recovery</h3>
                                <p className="text-white/70 text-lg mb-8 italic">
                                    "When we handle a refusal case, we aren't just filing docs. We are changing the narrative of the applicant's profile."
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                                        <span>400+ Cases Recovered</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                                        <span>UK, USA, Canada & Schengen Experts</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                                        <span>Specialist in 'Intent' Justification</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROOF SECTION */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-red-600">They Said No. We Made It Yes.</h2>
                        <p className="text-white/60 max-w-[680px] mx-auto text-lg">
                            Real examples of complex refusals we turned into approvals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { case: "2 Canada Refusals", reason: "Weak Family Ties", result: "Approved on 3rd attempt" },
                            { case: "UK Study Refusal", reason: "Financial Source Doubt", result: "Approved after justification" },
                            { case: "Schengen Visa Gap", reason: "Inconsistent Itinerary", result: "Approval Secured" }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[var(--color-off-white)] border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
                                    <i className="fa-solid fa-rotate-left"></i>
                                </div>
                                <h4 className="text-lg font-bold mb-2">{item.case}</h4>
                                <div className="text-xs text-white/40 mb-4 uppercase tracking-widest">Initial Reason: {item.reason}</div>
                                <div className="px-4 py-1.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
                                    {item.result}
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
                                Let's Analyze Your <br />
                                <span className="text-[var(--color-accent)]">Refusal Letter.</span>
                            </h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Don't re-apply until you know exactly why you were rejected. Get a professional refusal recovery audit today.
                            </p>
                            <div className="flex flex-col gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs font-bold uppercase tracking-widest">WhatsApp Specialist</div>
                                        <div className="text-2xl font-bold">{CONFIG.phone}</div>
                                    </div>
                                </a>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 max-w-[450px]">
                                    <i className="fa-solid fa-eye text-[var(--color-accent)] text-2xl"></i>
                                    <div>
                                        <div className="text-sm font-bold">Confidential Review</div>
                                        <div className="text-xs text-white/50">Your refusal details are handled with strict privacy.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl">
                            <ContactForm title="Audit My Refusal Case" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
