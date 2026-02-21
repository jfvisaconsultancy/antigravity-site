import Section from "@/components/Section";

export const metadata = {
    title: "Client Success Stories | JF Visa Consultancy Testimonials",
    description: "Read real stories from our satisfied clients. From student visa approvals to successful work permit applications, see why 1000+ people trust JF Visa.",
};

export default function Testimonials() {
    const reviews = [
        {
            initials: "AH",
            name: "Ali Hassan",
            subject: "Malta Study Visa",
            text: "I was rejected twice before coming to JF Visa Consultancy. Their team analyzed my profile, fixed the gaps, and I got my Malta study visa in just 3 weeks! Highly recommended for their professional approach.",
            rating: 5
        },
        {
            initials: "SK",
            name: "Sana Khan",
            subject: "USA F1 Visa",
            text: "The interview preparation for my USA F1 visa was exceptional. They asked me the exact questions that the visa officer asked. I felt so confident during the real interview. Thank you JF Visa for the dream come true!",
            rating: 5
        },
        {
            initials: "MR",
            name: "Muhammad Rizwan",
            subject: "Dubai Freelance Visa",
            text: "Professional and transparent. No hidden charges. They helped me get a freelance visa for Dubai, and now I'm working happily there. The entire process was digitized and very fast.",
            rating: 5
        },
        {
            initials: "FA",
            name: "Fatima Ahmed",
            subject: "Portugal PSW",
            text: "My Portugal PSW process offered by them was very smooth. The team is very knowledgeable about European immigration laws and provided correct guidance at every single step. Truly experts.",
            rating: 5
        }
    ];

    return (
        <main className="min-h-screen">
            {/* Header */}
            <Section variant="contrast" className="pt-32 pb-24 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-heading italic text-text-inverse">Client Success Stories</h1>
                    <p className="text-xl text-text-inverse/80 max-w-2xl mx-auto">Real journeys and transformations from individuals who achieved their global dreams with us.</p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-accent)] opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-500 opacity-20 rounded-full blur-2xl"></div>
            </Section>

            {/* Testimonials Grid */}
            <Section variant="surface">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {reviews.map((review, idx) => (
                            <article key={idx} className="bg-bg-base p-10 md:p-12 rounded-[3.5rem] shadow-premium border border-border-soft hover:shadow-2xl transition-all duration-500 flex flex-col group">
                                <div className="flex gap-1 mb-8">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <i key={i} className="fa-solid fa-star text-[var(--color-accent)] text-xs"></i>
                                    ))}
                                </div>
                                <blockquote className="text-xl text-text-primary leading-relaxed mb-10 italic font-medium flex-grow">
                                    "{review.text}"
                                </blockquote>
                                <div className="flex items-center gap-5 mt-auto pt-8 border-t border-border-soft">
                                    <div className="w-[70px] h-[70px] rounded-2xl bg-bg-contrast border-2 border-[var(--color-accent)] text-text-inverse flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-text-primary">{review.name}</h4>
                                        <p className="text-xs font-black uppercase tracking-widest text-[var(--color-accent)] mt-1">{review.subject}</p>
                                    </div>
                                    <div className="ml-auto opacity-10">
                                        <i className="fa-solid fa-quote-right text-5xl"></i>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <div className="inline-flex items-center gap-6 p-2 pr-6 bg-bg-soft rounded-full border border-border-soft shadow-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-surface bg-bg-contrast flex items-center justify-center text-[10px] font-bold text-text-inverse">
                                        {i === 4 ? '+1K' : ''}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm font-bold text-text-secondary">Join over 1,000+ satisfied clients worldwide</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Trust Badges */}
            <Section variant="soft" padding="md">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 items-center justify-items-center">
                        <i className="fa-brands fa-google text-4xl"></i>
                        <i className="fa-brands fa-facebook text-4xl"></i>
                        <i className="fa-brands fa-trustpilot text-4xl"></i>
                        <i className="fa-brands fa-linkedin text-4xl"></i>
                    </div>
                </div>
            </Section>
        </main>
    );
}
