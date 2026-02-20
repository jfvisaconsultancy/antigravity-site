import Link from "next/link";
import { CONFIG } from "@/lib/config";

export const metadata = {
    title: "About Us | JF Visa Consultancy - Pakistan's Trusted Visa Experts",
    description: "Learn about JF Visa's legacy of excellence. Over a decade of helping Pakistanis achieve their global dreams through legal and transparent visa pathways.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* HERO SECTION */}
            <section className="pt-32 pb-20 bg-[var(--color-primary)] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--color-accent)] opacity-5 blur-[120px]"></div>
                <div className="container relative z-10 text-center">
                    <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 text-[var(--color-accent)]">
                        Our Legacy of Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic">
                        Where Dreams <br className="hidden md:block" />
                        Become a <span className="text-[var(--color-accent)]">Reality.</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-[720px] mx-auto leading-relaxed">
                        JF Visa Consultancy is Pakistan's premier international visa advisory firm, built on the foundations of transparency, integrity, and absolute excellence.
                    </p>
                </div>
            </section>

            {/* WHO WE ARE */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/images/testimonial_group_1769526647625.png"
                                    alt="JF Visa Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[var(--color-accent)] p-8 rounded-3xl shadow-xl hidden md:block">
                                <div className="text-4xl font-black text-[var(--color-primary)] mb-1 italic">10+</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]/60">Years of Experience</div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-heading italic">{CONFIG.brandName} Philosophy</h2>
                            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                                <p>
                                    Founded with a vision to simplify complex global migration, we have successfully helped thousands of students and professionals achieve their dreams.
                                </p>
                                <p>
                                    We don't just process files; we build careers and futures. Our team of experts analyzes every case with legal precision to ensure the highest possible approval rates.
                                </p>
                                <div className="pt-6 grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">98%</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Success Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">5,000+</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Visas Approved</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <Link href="/contact" className="btn btn-primary lg:px-10">Start Your Success Story</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="section-padding bg-[var(--color-off-white)]">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">Our Leadership</h2>
                        <p className="text-white/50 max-w-[600px] mx-auto text-lg leading-relaxed">
                            Guided by experienced professionals who are committed to ethical consultancy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
                        {/* CEO */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-premium text-center border border-slate-50 group hover:-translate-y-2 transition-all duration-500">
                            <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-slate-100 overflow-hidden ring-4 ring-[var(--color-accent)] ring-offset-4 shadow-xl">
                                <img src="/images/ceo.jpg" alt={CONFIG.leadership.ceo} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-heading">{CONFIG.leadership.ceo}</h3>
                            <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-6">CEO & Founder</p>
                            <div className="w-12 h-1 bg-slate-100 mx-auto rounded-full group-hover:bg-[var(--color-accent)] transition-all"></div>
                        </div>

                        {/* MD */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-premium text-center border border-slate-50 group hover:-translate-y-2 transition-all duration-500">
                            <div className="w-32 h-32 rounded-full mx-auto mb-8 bg-slate-100 overflow-hidden ring-4 ring-[var(--color-accent)] ring-offset-4 shadow-xl">
                                <img src="/images/md.jpg" alt={CONFIG.leadership.md} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-heading">{CONFIG.leadership.md}</h3>
                            <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest mb-6">Managing Director</p>
                            <div className="w-12 h-1 bg-slate-100 mx-auto rounded-full group-hover:bg-[var(--color-accent)] transition-all"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="section-padding bg-white relative overflow-hidden">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparency", desc: "No hidden costs, no false promises. Just honest legal advice regarding your visa chances.", icon: "fa-eye" },
                            { title: "Integrity", desc: "We follow 100% legal pathways. We do not engage in or encourage document fraud.", icon: "fa-shield-halved" },
                            { title: "Success", desc: "Our objective is simple: To get you that approval stamp. We fight for every single case.", icon: "fa-trophy" }
                        ].map((v, i) => (
                            <div key={i} className="p-10 rounded-[2rem] bg-[var(--color-off-white)] border border-slate-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl mb-8">
                                    <i className={`fa-solid ${v.icon} text-[var(--color-accent)]`}></i>
                                </div>
                                <h4 className="text-xl font-bold mb-4 font-heading">{v.title}</h4>
                                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
