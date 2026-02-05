import Link from "next/link";
import { Metadata } from "next";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
    title: "Travel Insurance Services | JF Visa Consultancy",
    description: "Get reliable travel insurance with JF Visa. Worldwide medical coverage, trip protection, baggage insurance, and emergency assistance. Travel with peace of mind today.",
    keywords: "travel insurance Pakistan, visa travel insurance, international travel insurance, medical travel coverage, trip protection, JF Visa",
};

export default function TravelInsurancePage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="hero"
                style={{ backgroundImage: "url('/images/hero_travel_insurance.png')" }}
            >
                <div className="container hero-content">
                    <h1>Travel Smart. Travel Safe. Travel Insured.</h1>
                    <p className="tagline" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                        Comprehensive travel insurance plans that protect your journey, your health, and your peace of mind — anywhere in the world.
                    </p>
                    <div className="hero-buttons flex flex-wrap gap-4 mt-8">
                        <Link href="/contact" className="btn btn-primary">Get Insured Today</Link>
                        <Link href="/contact" className="btn btn-outline">Request a Free Quote</Link>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-padding">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-6">Travel with Confidence</h2>
                        <p className="text-lg mb-8">
                            At JF Visa, we understand that every journey matters. That’s why we offer reliable travel insurance solutions designed to protect you from unforeseen events and ensure a worry-free travel experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="section-padding bg-[var(--color-background-alt)]">
                <div className="container">
                    <h2 className="section-title text-3xl font-bold text-center text-[var(--color-primary)] mb-12">Key Benefits of Our Coverage</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card p-6 bg-white rounded-lg shadow-md">
                            <i className="fa-solid fa-earth-americas text-4xl text-[var(--color-accent)] mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Worldwide Medical Coverage</h3>
                            <p>Comprehensive medical protection wherever your travels take you.</p>
                        </div>
                        <div className="card p-6 bg-white rounded-lg shadow-md">
                            <i className="fa-solid fa-plane-slash text-4xl text-[var(--color-accent)] mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Trip Cancellation</h3>
                            <p>Protection against unexpected cancellations and trip interruptions.</p>
                        </div>
                        <div className="card p-6 bg-white rounded-lg shadow-md">
                            <i className="fa-solid fa-suitcase text-4xl text-[var(--color-accent)] mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Baggage Coverage</h3>
                            <p>Coverage for lost, delayed, or damaged baggage during your journey.</p>
                        </div>
                        <div className="card p-6 bg-white rounded-lg shadow-md">
                            <i className="fa-solid fa-truck-medical text-4xl text-[var(--color-accent)] mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Emergency Evacuation</h3>
                            <p>24/7 assistance and emergency evacuation support when you need it.</p>
                        </div>
                        <div className="card p-6 bg-white rounded-lg shadow-md">
                            <i className="fa-solid fa-clock text-4xl text-[var(--color-accent)] mb-4"></i>
                            <h3 className="text-xl font-bold mb-3">Flexible Plans</h3>
                            <p>Coverage options available for both short-term and long-term travel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-4">Why Choose JF Visa?</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-[var(--color-accent)]"></i> Trusted insurance partners</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-[var(--color-accent)]"></i> Affordable and flexible plans</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-[var(--color-accent)]"></i> Fast, hassle-free application process</li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-check-circle text-[var(--color-accent)]"></i> Expert guidance and dedicated support</li>
                        </ul>
                        <div className="flex justify-center items-center">
                            <img src="/images/service_travel_insurance.png" alt="Travel Insurance" className="rounded-lg shadow-lg max-h-64 object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding text-center bg-[var(--color-primary)] text-white">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6 text-white">Ready to travel with confidence?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Get Insured Today</Link>
                        <Link href="/contact" className="btn btn-outline">Request a Free Quote</Link>
                    </div>
                    <div className="mt-8">
                        <p className="mb-4 text-lg">Need travel insurance? Chat with JF Visa now and get covered today!</p>
                        <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline whatsapp-link inline-flex items-center gap-2">
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
