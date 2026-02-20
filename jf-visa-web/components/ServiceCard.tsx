import Link from 'next/link';
import Image from 'next/image';

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
        <article className="service-card" id={id}>
            <div className="relative h-[200px] w-full">
                <img src={image} alt={title} className="service-img" />
            </div>
            <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={finalHref} className="service-link">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </article>
    );
}
