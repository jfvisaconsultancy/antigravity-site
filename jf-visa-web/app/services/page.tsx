import Link from "next/link";
import Section from "@/components/Section";

export const metadata = {
    title: "Our Visa Services | Expert Consultation - JF Visa Consultancy",
    description: "Explore our premium visa solutions for Europe, USA, Canada, GCC, and Australia. We specialize in study visas, work permits, and visit visas with high success rates.",
};

export default function Services() {
    const serviceList = [
        {
            id: "europe",
            title: "Europe Study & Visit Visas",
            description: "Unlock world-class education and travel opportunities across the Schengen area and beyond. We specialize in comprehensive academic and tourist pathways.",
            image: "/images/service_europe_visa_1769526116284.png",
            features: [
                { icon: "fa-graduation-cap", label: "Study Visas", detail: "Malta, Lisbon, Germany (Diploma, Bachelor, Master, PSW)." },
                { icon: "fa-plane", label: "Visit Visas", detail: "Schengen & Non-Schengen Countries short-stay options." },
                { icon: "fa-business-time", label: "Internships", detail: "Professional career exposure programs available." }
            ],
            reverse: false
        },
        {
            id: "usa",
            title: "USA Visit Visa (B1/B2)",
            description: "Navigate the complex US visa application with expert interview simulation and strategic documentation services.",
            image: "/images/service_usa_visa_1769526245585.png",
            features: [
                { icon: "fa-passport", label: "Passport Docs", detail: "Full audit of Passport, 2x2 Photos, and DS-160 support." },
                { icon: "fa-users", label: "Family Ties", detail: "Strategic representation of family roots (FRC/Spouse/Children)." },
                { icon: "fa-briefcase", label: "Professional Proof", detail: "Job or Business evidence audit to ensure high approval odds." }
            ],
            reverse: true
        },
        {
            id: "canada",
            title: "Canada Visit Visa",
            description: "Comprehensive support for Canadian Visitor Visas, ensuring all financial and personal narratives meet IRCC standards.",
            image: "/images/service_canada.png",
            features: [
                { icon: "fa-file-invoice", label: "Financial Mastery", detail: "Deep audit of Bank Statements & liquid asset proofs." },
                { icon: "fa-id-card", label: "Civil Documents", detail: "Passport, FRC/MRC, and digital photograph compliance." },
                { icon: "fa-map-location-dot", label: "Travel Intent", detail: "Custom itinerary and travel history representation." }
            ],
            reverse: false
        },
        {
            id: "gcc",
            title: "GCC Freelance & Work Visas",
            description: "Secure long-term residency and independent work authorization in the high-growth Gulf markets.",
            image: "/images/service_gcc_visa_1769526468980.png",
            features: [
                { icon: "fa-star", label: "Qatar (Azad Visa)", detail: "2-Year residency with total work flexibility and no fixed employer." },
                { icon: "fa-bolt", label: "UAE Freelance", detail: "Instant 2-Year residency processing for skilled professionals." },
                { icon: "fa-building-ngo", label: "Saudi Arabia", detail: "1-Year Freelance & Business Visit Visas for market entry." }
            ],
            reverse: true
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Header */}
            <Section variant="contrast" className="pt-32 pb-24 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-heading italic text-text-inverse leading-tight">Our Premium <span className="text-[var(--color-accent)]">Solutions.</span></h1>
                    <p className="text-xl text-text-inverse/80 max-w-2xl mx-auto">Precision-engineered visa services designed for success and reliability.</p>
                </div>
            </Section>

            {/* Service Details */}
            {serviceList.map((service, idx) => (
                <Section key={idx} variant={idx % 2 === 0 ? 'surface' : 'base'} id={service.id} className="scroll-mt-20">
                    <div className="container">
                        <div className={`flex flex-col ${service.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}>
                            {/* Image Part */}
                            <div className="w-full md:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-[var(--color-accent)]/10 rounded-[3rem] blur-2xl group-hover:bg-[var(--color-accent)]/20 transition-all duration-700"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-premium aspect-[4/3] border-8 border-bg-surface">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-xl text-bg-contrast text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <i className="fa-solid fa-arrow-up-right-from-square p-4"></i>
                                </div>
                            </div>

                            {/* Info Part */}
                            <div className="w-full md:w-1/2 space-y-8">
                                <div className="inline-block px-4 py-1.5 bg-bg-contrast text-[var(--color-accent)] text-[10px] font-black rounded-full uppercase tracking-[3px]">
                                    Specialist Category
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 font-heading italic leading-tight">
                                    {service.title}
                                </h2>
                                <p className="text-xl text-text-secondary leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <ul className="space-y-6">
                                    {service.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-5 group">
                                            <div className="w-12 h-12 rounded-2xl bg-bg-soft text-text-primary flex items-center justify-center shrink-0 group-hover:bg-[var(--color-accent)] group-hover:text-bg-contrast transition-all duration-300 shadow-sm">
                                                <i className={`fa-solid ${feature.icon}`}></i>
                                            </div>
                                            <div>
                                                <p className="font-bold text-text-primary text-lg">{feature.label}</p>
                                                <p className="text-text-secondary text-sm leading-relaxed">{feature.detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-6">
                                    <Link href="/contact" className="btn btn-primary px-10 py-5 text-xl font-black rounded-2xl shadow-xl">
                                        Expert Assessment
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* Final CTA Strip */}
            <Section variant="contrast" className="text-center py-20">
                <div className="container">
                    <h2 className="text-3xl md:text-4xl font-black mb-10 font-heading italic text-text-inverse uppercase tracking-tight">Need a customized visa strategy?</h2>
                    <Link href="/contact" className="btn btn-primary px-12 py-5 text-xl font-black rounded-full border-none">
                        TALK TO AN ADVISOR
                    </Link>
                </div>
            </Section>
        </main>
    );
}
