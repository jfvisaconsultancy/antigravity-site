import Link from 'next/link';

export const metadata = {
    title: "Immigration & PR Consultants | Canada, Australia, UK",
    description: "Expert guidance for permanent residency (PR) and immigration. Pathways for Canada Express Entry, Australia Skilled Migration, and UK Settlement.",
};

export default function ImmigrationPage() {
    const countries = [
        { name: "Canada Immigration (Express Entry)", id: "canada-pr", img: "/images/service_canada.png" },
        { name: "Australia Skilled Migration", id: "australia-pr", img: "/images/service_australia.jpg" },
        { name: "UK Settlement", id: "uk-settlement", img: "/images/service_europe_visa_1769526116284.png" },
    ];

    return (
        <>
            <section className="hero relative min-h-[400px] flex items-center justify-center text-center text-white" style={{ backgroundImage: "url('/images/hero_background_travel_1769525881776.png')", backgroundColor: '#112240' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Settle Abroad Permanently</h1>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">Your pathway to Permanent Residency and Citizenship in top global destinations.</p>
                    <Link href="/contact" className="btn btn-primary">Check PR Eligibility</Link>
                </div>
            </section>

            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Immigration Programs</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {countries.map((country) => (
                            <div key={country.id} className="service-card group">
                                <div className="relative h-[200px] overflow-hidden rounded-t-lg">
                                    <img src={country.img} alt={`Immigration to ${country.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 border border-t-0 rounded-b-lg shadow-sm group-hover:shadow-md transition bg-white">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{country.name}</h3>
                                    <Link href={`/immigration/${country.id}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                                        Program Details <i className="fa-solid fa-arrow-right ml-1"></i>
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
