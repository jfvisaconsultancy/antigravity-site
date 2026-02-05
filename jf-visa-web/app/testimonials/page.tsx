export default function Testimonials() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Success Stories</h1>
                    <p>Real stories from our happy clients</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Review 1 */}
                        <div className="review-card bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                            <p className="mb-4 italic line-clamp-4">"I was rejected twice before coming to JS Visa Consultancy. Their team analyzed my profile, fixed the gaps, and I got my Malta study visa in just 3 weeks! Highly recommended."</p>
                            <div className="client-info flex flex-col items-center">
                                <div className="client-avatar w-[80px] h-[80px] rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-2xl border-4 border-[var(--color-accent)] mb-4">
                                    AH
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-primary)]">Ali Hassan</h4>
                                    <small className="text-[var(--color-accent)] font-semibold">Malta Study Visa</small>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="review-card bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                            <p className="mb-4 italic line-clamp-4">"The interview preparation for my USA F1 visa was exceptional. They asked me the exact questions that the visa officer asked. I felt so confident. Thank you JS Visa!"</p>
                            <div className="client-info flex flex-col items-center">
                                <div className="client-avatar w-[80px] h-[80px] rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-2xl border-4 border-[var(--color-accent)] mb-4">
                                    SK
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-primary)]">Sana Khan</h4>
                                    <small className="text-[var(--color-accent)] font-semibold">USA F1 Visa</small>
                                </div>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="review-card bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                            <p className="mb-4 italic line-clamp-4">"Professional and transparent. No hidden charges. They helped me get a freelance visa for Dubai, and now I'm working happily there."</p>
                            <div className="client-info flex flex-col items-center">
                                <div className="client-avatar w-[80px] h-[80px] rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-2xl border-4 border-[var(--color-accent)] mb-4">
                                    MR
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-primary)]">Muhammad Rizwan</h4>
                                    <small className="text-[var(--color-accent)] font-semibold">Dubai Freelance Visa</small>
                                </div>
                            </div>
                        </div>

                        {/* Review 4 */}
                        <div className="review-card bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
                            <p className="mb-4 italic line-clamp-4">"My Portugal PSW process offered by them was very smooth. The team is very knowledgeable about European immigration laws."</p>
                            <div className="client-info flex flex-col items-center">
                                <div className="client-avatar w-[80px] h-[80px] rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-2xl border-4 border-[var(--color-accent)] mb-4">
                                    FA
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--color-primary)]">Fatima Ahmed</h4>
                                    <small className="text-[var(--color-accent)] font-semibold">Portugal PSW</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
