import Link from 'next/link';

export const metadata = {
    title: "Work Permit & Visa Services | Europe, Gulf, Poland, Romania",
    description: "Secure detailed work permits for Romania, Poland, Hungary, and Gulf countries. Legal employment pathways with full documentation support.",
};

export default function WorkPermitPage() {
    const countries = [
        { name: "Romania", id: "romania", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "Poland", id: "poland", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "Hungary", id: "hungary", img: "/images/service_europe_visa_1769526116284.png" },
        { name: "Gulf Jobs (Qatar/KSA)", id: "gulf-jobs", img: "/images/service_gcc_visa_1769526468980.png" },
        { name: "Malta", id: "malta", img: "/images/service_europe_visa_1769526116284.png" },
    ];

    return (
        <>
            <section className="hero relative min-h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero_background_travel_1769525881776.png')", backgroundColor: '#112240' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Abroad Opportunities</h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Build your career internationally with legal work permits and employment visas.</p>
                    <Link href="/contact" className="btn btn-primary">Check Eligibility</Link>
                </div>
            </section>

            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Work Permits & Employment Visas</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {countries.map((country) => (
                            <div key={country.id} className="service-card group">
                                <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                                    <img src={country.img} alt={`Work in ${country.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 border border-t-0 rounded-b-lg shadow-sm group-hover:shadow-md transition bg-white">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{country.name}</h3>
                                    <Link href={`/work-permit/${country.id}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                                        Job Details <i className="fa-solid fa-arrow-right ml-1"></i>
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
