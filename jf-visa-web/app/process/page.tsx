import Link from "next/link";
import Section from "@/components/Section";

export const metadata = {
    title: "Our Visa Process | How It Works - JF Visa Consultancy",
    description: "Discover our step-by-step visa application protocol. From initial consultation to departure briefing, we ensure a smooth and successful journey.",
};

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Expert Consultation",
            description: "Meet with our senior advisors to discuss your goals, background, and eligibility. We provide a comprehensive profile assessment for free.",
            icon: "fa-comments-dollar",
            side: "left"
        },
        {
            number: "02",
            title: "Institution & Role Alignment",
            description: "We help you select the ideal university or target job roles that match your profile. Our team handles the entire admission or application process.",
            icon: "fa-university",
            side: "right"
        },
        {
            number: "03",
            title: "Document Finalization",
            description: "Gathering the right evidence is the difference between approval and refusal. We guide you on financial proofs, educational attestations, and SOPs.",
            icon: "fa-file-signature",
            side: "left"
        },
        {
            number: "04",
            title: "Strategic Visa Filing",
            description: "Our compliance team expertly prepares and files your visa application, ensuring all narratives are consistent and error-free for maximum success.",
            icon: "fa-passport",
            side: "right"
        },
        {
            number: "05",
            title: "Simulated Interview Prep",
            description: "Confidence is key. For countries requiring interviews, we conduct high-intensity mock sessions that mirror embassy protocols.",
            icon: "fa-user-tie",
            side: "left"
        },
        {
            number: "06",
            title: "Pre-Departure Briefing",
            description: "Success achieved! We finalize your travel arrangements and provide essential guidance on settling into your new destination.",
            icon: "fa-plane-arrival",
            side: "right"
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Header */}
            <Section variant="contrast" className="pt-32 pb-24 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-heading italic text-text-inverse">Our Proven Protocol</h1>
                    <p className="text-xl text-text-inverse/80 max-w-2xl mx-auto">A transparent, step-by-step roadmap to your international success</p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/10 rounded-bl-full filter blur-3xl"></div>
            </Section>

            {/* Timeline Section */}
            <Section variant="surface" className="relative overflow-hidden">
                <div className="container relative">
                    {/* Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border-soft md:-translate-x-1/2"></div>

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative flex items-center justify-between md:mb-24 last:mb-0 ${step.side === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                {/* Empty space for desktop */}
                                <div className="hidden md:block w-[45%]"></div>

                                {/* Timeline Dot */}
                                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-bg-contrast border-4 border-bg-surface shadow-premium z-10 -translate-x-1/2 flex items-center justify-center">
                                    <i className={`fa-solid ${step.icon} text-[var(--color-accent)] text-sm`}></i>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] ml-16 md:ml-0 bg-bg-base p-8 md:p-10 rounded-[2.5rem] border border-border-soft shadow-premium hover:border-[var(--color-accent)] transition-all duration-500 group`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-4xl md:text-5xl font-black text-text-muted/20 font-heading italic group-hover:text-[var(--color-accent)]/20 transition-colors">
                                            {step.number}
                                        </span>
                                        <h3 className="text-2xl font-bold text-text-primary font-heading italic">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-lg">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="soft" className="text-center pt-20 pb-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto bg-bg-contrast p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
                        <h2 className="text-3xl md:text-4xl font-black text-text-inverse mb-8 font-heading italic uppercase">Start Your Success Journey Today</h2>
                        <p className="text-text-inverse/70 text-lg mb-12 leading-relaxed font-medium">
                            Don't navigate the complex visa landscape alone. Partner with Pakistan's most reliable consultancy for a result-oriented experience.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/contact" className="btn btn-primary px-10 py-5 text-xl font-black shadow-xl">
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
