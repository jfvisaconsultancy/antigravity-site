import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from './ContactForm';

interface CountryPageProps {
    countryName: string;
    visaType: string;
    heroImage: string;
    overview: string;
    eligibility: string[];
    documents: string[];
    bankStatement: string;
    processingTime: string;
    fees: {
        government: string;
        service: string;
    };
    processSteps: { title: string; description: string }[];
    faqs: { question: string; answer: string }[];
}

export default function CountryPageLayout({
    countryName,
    visaType,
    heroImage,
    overview,
    eligibility,
    documents,
    bankStatement,
    processingTime,
    fees,
    processSteps,
    faqs
}: CountryPageProps) {
    return (
        <>
            {/* 1. Hero Section */}
            <section className="hero relative min-h-[500px] flex items-center justify-center text-center text-white" style={{ backgroundImage: `url('${heroImage}')`, backgroundColor: '#112240', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">{countryName} {visaType}</h1>
                    <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
                        Expert Guidance for High Visa Success Rate
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary text-lg px-8">Apply Now</Link>
                        <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline flex items-center gap-2 justify-center">
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Overview */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">Overview</h2>
                    <p className="text-lg text-[var(--color-text-dark)] leading-relaxed max-w-4xl mx-auto text-center">
                        {overview}
                    </p>
                </div>
            </section>

            {/* 3. Eligibility Criteria */}
            <section className="section-padding bg-[var(--color-off-white)]">
                <div className="container">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">Eligibility Criteria</h2>
                    <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {eligibility.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <i className="fa-solid fa-check-circle text-[var(--color-accent)] mt-1"></i>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 4. Required Documents */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">Required Documents</h2>
                    <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {documents.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 bg-[var(--color-off-white)] p-4 rounded-lg border border-gray-200">
                                <i className="fa-solid fa-file-alt text-[var(--color-primary)] mt-1 opacity-70"></i>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 5. Bank Statement & Financials */}
            <section className="section-padding bg-[var(--color-primary)] text-white">
                <div className="container text-center max-w-3xl mx-auto">
                    <i className="fa-solid fa-sack-dollar text-5xl text-[var(--color-accent)] mb-6"></i>
                    <h2 className="text-3xl font-bold mb-6">Bank Statement Requirement</h2>
                    <p className="text-xl leading-relaxed opacity-90 mb-8 border-l-4 border-[var(--color-accent)] pl-6 text-left bg-white/5 p-6 rounded-r-lg">
                        {bankStatement}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-white/10 p-6 rounded-lg">
                        <div>
                            <h4 className="font-bold text-[var(--color-accent)] uppercase text-sm mb-1">Processing Time</h4>
                            <p className="text-2xl">{processingTime}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--color-accent)] uppercase text-sm mb-1">Government Fees</h4>
                            <p className="text-xl">{fees.government}</p>
                            <h4 className="font-bold text-[var(--color-accent)] uppercase text-sm mb-1 mt-3">Service Fees</h4>
                            <p className="text-xl">{fees.service}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Step-by-Step Process */}
            <section className="section-padding">
                <div className="container">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-12 text-center">Application Process</h2>
                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-[15px] top-0 bottom-0 w-1 bg-[var(--color-accent)] opacity-30 hidden md:block"></div>

                        {processSteps.map((step, index) => (
                            <div key={index} className="flex gap-6 mb-10 relative">
                                <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)] items-center justify-center text-white font-bold z-10">
                                    {index + 1}
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-grow hover:shadow-md transition">
                                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 inline-flex items-center gap-2">
                                        <span className="md:hidden w-6 h-6 rounded-full bg-[var(--color-accent)] text-white text-sm flex items-center justify-center">{index + 1}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-[var(--color-text-dark)]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Why Choose JF Visa */}
            <section className="section-padding bg-[var(--color-off-white)]">
                <div className="container text-center max-w-4xl mx-auto">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-8">Why Choose JF Visa for {countryName}?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "98% Success Rate for " + countryName,
                            "Expert Documentation Review",
                            "Interview Preparation Assistance",
                            "Dedicated Case Manager",
                            "Transparent & Ethical Process",
                            "Post-Landing Support"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <i className="fa-solid fa-star text-[var(--color-accent)]"></i>
                                <span className="font-semibold text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section */}
            <section className="section-padding">
                <div className="container max-w-3xl mx-auto">
                    <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-[var(--color-off-white)] p-6 rounded-lg">
                                <h4 className="font-bold text-lg text-[var(--color-primary)] mb-2">{faq.question}</h4>
                                <p className="text-[var(--color-text-dark)]">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Strong Final CTA and Form */}
            <section className="py-20 bg-[var(--color-primary)] text-white relative">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply for {countryName}?</h2>
                            <p className="text-xl mb-8 opacity-90">
                                Don't risk a refusal. Get your file prepared by experts. Fill out the form to get started.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline text-lg px-8 flex items-center justify-center gap-2">
                                    <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                        <div>
                            <ContactForm title={`Check ${countryName} Eligibility`} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
