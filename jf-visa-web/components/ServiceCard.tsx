import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    linkHash: string; // e.g., 'europe' for /services#europe
}

export default function ServiceCard({ id, image, title, description, linkHash }: ServiceCardProps) {
    return (
        <article className="service-card" id={id}>
            <div className="relative h-[200px] w-full">
                {/* Using Next.js Image for optimization, but standard img tag is also fine if layout CSS handles it well. 
             Given existing CSS .service-img { height: 200px; width: 100%; object-fit: cover; }, 
             Next.js Image needs 'fill' or width/height. 'fill' is best for object-fit: cover behavior container. */}
                <img src={image} alt={title} className="service-img" />
            </div>
            <div className="service-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href={`/services#${linkHash}`} className="service-link">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </article>
    );
}
