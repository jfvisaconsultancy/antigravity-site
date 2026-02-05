import Link from "next/link";

export default function Blog() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Expert Insights</h1>
                    <p>Latest news, tips, and guides for your international journey</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {/* Blog Post 1 */}
                        <article className="blog-card bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                            <div className="h-[200px] w-full relative">
                                <img src="/images/blog_study_abroad_tips_1769527208261.png" alt="Study Abroad Tips" className="w-full h-full object-cover" />
                            </div>
                            <div className="blog-content p-6">
                                <div className="blog-meta text-sm text-gray-500 mb-2 flex items-center gap-2">
                                    <i className="fa-regular fa-calendar"></i> Oct 12, 2025 | Study Visa
                                </div>
                                <h3 className="blog-title text-xl font-heading font-bold text-[var(--color-primary)] mb-4">5 Essential Tips for Pakistani Students Studying in Europe</h3>
                                <p className="blog-excerpt text-gray-600 mb-6 line-clamp-3">Moving to a new country can be overwhelming. Here are the top 5 things you need to know before your flight...</p>
                                <Link href="#" className="read-more text-[var(--color-accent)] font-semibold flex items-center gap-2 hover:ml-1 transition-all">
                                    Read Article <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </article>

                        {/* Blog Post 2 */}
                        <article className="blog-card bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                            <div className="h-[200px] w-full relative">
                                <img src="/images/service_usa_visa_1769526245585.png" alt="USA Visa Guide" className="w-full h-full object-cover" />
                            </div>
                            <div className="blog-content p-6">
                                <div className="blog-meta text-sm text-gray-500 mb-2 flex items-center gap-2">
                                    <i className="fa-regular fa-calendar"></i> Sep 28, 2025 | USA Visa
                                </div>
                                <h3 className="blog-title text-xl font-heading font-bold text-[var(--color-primary)] mb-4">How to Crack the F1 Visa Interview: A Complete Guide</h3>
                                <p className="blog-excerpt text-gray-600 mb-6 line-clamp-3">The interview is the most critical part of your US application. Learn the DOs and DON'Ts from our experts...</p>
                                <Link href="#" className="read-more text-[var(--color-accent)] font-semibold flex items-center gap-2 hover:ml-1 transition-all">
                                    Read Article <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </article>

                        {/* Blog Post 3 */}
                        <article className="blog-card bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
                            <div className="h-[200px] w-full relative">
                                <img src="/images/service_gcc_visa_1769526468980.png" alt="GCC Work Opportunities" className="w-full h-full object-cover" />
                            </div>
                            <div className="blog-content p-6">
                                <div className="blog-meta text-sm text-gray-500 mb-2 flex items-center gap-2">
                                    <i className="fa-regular fa-calendar"></i> Sep 15, 2025 | Work Visa
                                </div>
                                <h3 className="blog-title text-xl font-heading font-bold text-[var(--color-primary)] mb-4">Top High-Demand Jobs in Saudi Arabia for 2026</h3>
                                <p className="blog-excerpt text-gray-600 mb-6 line-clamp-3">Saudi Arabia's Vision 2030 is opening up new sectors. Discover which skills are in highest demand...</p>
                                <Link href="#" className="read-more text-[var(--color-accent)] font-semibold flex items-center gap-2 hover:ml-1 transition-all">
                                    Read Article <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
        </>
    );
}
