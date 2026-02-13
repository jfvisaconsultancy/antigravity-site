import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { CONFIG } from '@/lib/config';

export const metadata = {
    title: "Study Visa Consultants | UK, USA, Canada, Australia, Europe",
    description: "Expert study visa consultation for top destinations. We help students secure admission and visas with a 98% success rate.",
};

export default function StudyVisaPage() {
    const countries = [
        { name: "United Kingdom", id: "uk", img: "/images/service_europe_visa_1769526116284.png" }, // Placeholder img
        { name: "Australia", id: "australia", img: "/images/service_australia.jpg" },
        { name: "Canada", id: "canada", img: "/images/service_canada.png" },
        { name: "USA", id: "usa", img: "/images/service_usa_visa_1769526245585.png" },
        { name: "Europe (Schengen)", id: "europe", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "Georgia", id: "georgia", img: "/images/service_europe_visa_1769526116284.png" }, // Placeholder
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero relative min-h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero_background_travel_1769525881776.png')", backgroundColor: '#112240' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Abroad with Experts</h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Get admission in top universities worldwide. We guide you from course selection to visa approval.</p>
                    <Link href="/contact" className="btn btn-primary">Get Free Assessment</Link>
                </div>
            </section>

            {/* Intro */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Choose Your Destination</h2>
                    <p className="max-w-3xl mx-auto text-[var(--color-text-dark)] mb-12">
                        We provide specialized study visa services for the world's most sought-after education destinations. Select a country to learn more about requirements and process.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {countries.map((country) => (
                            <div key={country.id} className="service-card group">
                                <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                                    <img src={country.img} alt={`Study in ${country.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 border border-t-0 rounded-b-lg shadow-sm group-hover:shadow-md transition bg-white">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{country.name}</h3>
                                    <Link href={`/study-visa/${country.id}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                                        View Details <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[var(--color-off-white)] text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Not sure where to apply?</h2>
                    <p className="mb-8">Book a free consultation session with our education counselors.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
                        <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white">
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
