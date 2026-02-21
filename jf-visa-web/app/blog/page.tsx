import Link from "next/link";
import Section from "@/components/Section";

export const metadata = {
    title: "Expert Visa Insights & Blog | JF Visa Consultancy",
    description: "Read the latest news, tips, and expert guides on study visas, work permits, and global immigration. Stay updated with JF Visa Consultancy.",
};

export default function Blog() {
    const blogPosts = [
        {
            title: "5 Essential Tips for Pakistani Students Studying in Europe",
            date: "Oct 12, 2025",
            category: "Study Visa",
            image: "/images/blog_study_abroad_tips_1769527208261.png",
            excerpt: "Moving to a new country can be overwhelming. Here are the top 5 things you need to know before your flight...",
            link: "#"
        },
        {
            title: "How to Crack the F1 Visa Interview: A Complete Guide",
            date: "Sep 28, 2025",
            category: "USA Visa",
            image: "/images/service_usa_visa_1769526245585.png",
            excerpt: "The interview is the most critical part of your US application. Learn the DOs and DON'Ts from our experts...",
            link: "#"
        },
        {
            title: "Top High-Demand Jobs in Saudi Arabia for 2026",
            date: "Sep 15, 2025",
            category: "Work Visa",
            image: "/images/service_gcc_visa_1769526468980.png",
            excerpt: "Saudi Arabia's Vision 2030 is opening up new sectors. Discover which skills are in highest demand...",
            link: "#"
        }
    ];

    return (
        <main className="min-h-screen">
            <Section variant="contrast" className="pt-32 pb-24 text-center relative overflow-hidden">
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 font-heading italic text-text-inverse">Expert Insights</h1>
                    <p className="text-xl text-text-inverse/80 max-w-2xl mx-auto">Latest news, tips, and guides for your international journey</p>
                </div>
            </Section>

            <Section variant="surface">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className="bg-bg-base rounded-2xl overflow-hidden shadow-premium border border-border-soft hover:-translate-y-2 transition-all duration-300 group">
                                <div className="h-[240px] w-full relative overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-bg-contrast text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="text-xs text-text-muted mb-4 flex items-center gap-2 font-bold uppercase tracking-widest">
                                        <i className="fa-regular fa-calendar text-[var(--color-accent)]"></i> {post.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight group-hover:text-[var(--color-accent)] transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <Link href={post.link} className="inline-flex items-center gap-2 text-text-primary font-bold group-hover:gap-4 transition-all">
                                        Read Article <i className="fa-solid fa-arrow-right text-[var(--color-accent)]"></i>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Section>
        </main>
    );
}
