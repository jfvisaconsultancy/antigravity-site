import Link from 'next/link';
import { CONFIG } from '@/lib/config';

export const metadata = {
    title: "Visit Visa Services | UK, USA, Schengen, UAE",
    description: "Hassle-free visit visa processing for major tourist destinations. Expert documentation and application support.",
};

export default function VisitVisaPage() {
    const countries = [
        { name: "United Kingdom", id: "uk", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "Schengen Area", id: "schengen", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "USA", id: "usa", img: "/images/service_usa_visa_1769526245585.png" },
        { name: "Canada", id: "canada", img: "/images/service_canada.png" },
        { name: "UAE / Dubai", id: "uae", img: "/images/service_gcc_visa_1769526468980.png" },
    ];

    return (
        <>
            <section className="hero relative min-h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero_background_travel_1769525881776.png')", backgroundColor: '#112240' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World</h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Seamless visit visa processing for tourism, family visits, or business trips.</p>
                    <Link href="/contact" className="btn btn-primary">Start Application</Link>
                </div>
            </section>

            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Tourist & Visit Visas</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {countries.map((country) => (
                            <div key={country.id} className="service-card group">
                                <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                                    <img src={country.img} alt={`Visit ${country.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 border border-t-0 rounded-b-lg shadow-sm group-hover:shadow-md transition bg-white">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{country.name}</h3>
                                    <Link href={`/visit-visa/${country.id}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                                        View Requirements <i className="fa-solid fa-arrow-right ml-1"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
