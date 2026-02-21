import Link from 'next/link';

interface ServiceCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    linkHash?: string; // e.g., 'europe' for /services#europe
    href?: string;     // e.g., '/travel-insurance'
}

export default function ServiceCard({ id, image, title, description, linkHash, href }: ServiceCardProps) {
    const finalHref = href || `/services#${linkHash}`;

    return (
        <article
            className="group flex flex-col bg-bg-base rounded-[2.5rem] overflow-hidden border border-border-soft shadow-premium hover:border-[var(--color-accent)] hover:-translate-y-2 transition-all duration-500"
            id={id}
        >
            <div className="relative h-[240px] w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-text-primary mb-4 font-heading group-hover:text-[var(--color-accent)] transition-colors italic">
                    {title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8 flex-grow">
                    {description}
                </p>
                <Link
                    href={finalHref}
                    className="inline-flex items-center gap-2 text-text-primary font-black uppercase text-xs tracking-[2px] group-hover:gap-4 transition-all"
                >
                    Learn More <i className="fa-solid fa-arrow-right text-[var(--color-accent)]"></i>
                </Link>
            </div>
        </article>
    );
}
