import Link from 'next/link';
import { CONFIG } from '@/lib/config';
import ContactForm from './ContactForm';
import Section from './Section';

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
        <main className="min-h-screen">
            {/* 1. Hero Section */}
            <Section variant="contrast" padding="none" className="relative min-h-[500px] flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: `url('${heroImage}')`, padding: '160px 0 110px' }}>
                <div className="absolute inset-0 bg-bg-contrast/70"></div>
                <div className="container relative z-10">
                    <div className="max-w-[800px] mx-auto">
                        <h1 className="text-4xl md:text-6xl font-black mb-6 font-heading italic text-text-inverse leading-tight">{countryName} {visaType}</h1>
                        <p className="text-xl md:text-2xl mb-10 font-medium text-text-inverse/90">
                            Expert Guidance for High Visa Success Rate
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <Link href="/contact" className="btn btn-primary text-lg px-10">Apply For Assessment</Link>
                            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline flex items-center gap-2 justify-center px-10 text-lg">
                                <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 2. Overview */}
            <Section variant="surface">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-8 font-heading italic uppercase">Overview</h2>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {overview}
                        </p>
                    </div>
                </div>
            </Section>

            {/* 3. Eligibility Criteria */}
            <Section variant="soft">
                <div className="container">
                    <h3 className="text-3xl font-black text-text-primary mb-12 text-center font-heading">Eligibility Criteria</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {eligibility.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 bg-bg-surface p-6 rounded-2xl shadow-premium border border-border-soft">
                                <div className="w-8 h-8 rounded-full bg-bg-contrast text-text-inverse flex items-center justify-center shrink-0 mt-0.5">
                                    <i className="fa-solid fa-check text-xs"></i>
                                </div>
                                <span className="text-text-primary font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 4. Required Documents */}
            <Section variant="surface">
                <div className="container">
                    <h3 className="text-3xl font-black text-text-primary mb-12 text-center font-heading">Required Documents</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {documents.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 bg-bg-base p-5 rounded-2xl border border-border-soft hover:border-[var(--color-accent)] transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center shrink-0">
                                    <i className="fa-solid fa-file-invoice"></i>
                                </div>
                                <span className="text-text-secondary text-sm font-semibold mt-2">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. Bank Statement & Financials */}
            <Section variant="contrast">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-[var(--color-accent)] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                            <i className="fa-solid fa-sack-dollar text-4xl text-bg-contrast"></i>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 text-text-inverse font-heading italic">Financial Requirements</h2>
                        <div className="text-xl leading-relaxed text-text-inverse/90 mb-12 border-l-4 border-[var(--color-accent)] pl-8 text-left bg-white/5 p-8 rounded-r-[2rem]">
                            {bankStatement}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                            <div className="bg-white/10 p-8 rounded-[2rem] border border-white/10">
                                <h4 className="font-bold text-[var(--color-accent)] uppercase text-xs tracking-widest mb-3">Processing Time</h4>
                                <p className="text-3xl font-black text-text-inverse">{processingTime}</p>
                            </div>
                            <div className="bg-white/10 p-8 rounded-[2rem] border border-white/10">
                                <h4 className="font-bold text-[var(--color-accent)] uppercase text-xs tracking-widest mb-3">Fee Structure</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-[10px] text-text-inverse/50 uppercase font-black">Embassy/Govt</p>
                                        <p className="text-xl font-bold text-text-inverse">{fees.government}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-text-inverse/50 uppercase font-black">Consultancy</p>
                                        <p className="text-xl font-bold text-text-inverse">{fees.service}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. Step-by-Step Process */}
            <Section variant="surface">
                <div className="container">
                    <h2 className="text-4xl font-black text-text-primary mb-16 text-center font-heading italic uppercase">Application Protocol</h2>
                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-border-soft hidden md:block"></div>

                        {processSteps.map((step, index) => (
                            <div key={index} className="flex gap-8 mb-12 relative group">
                                <div className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-bg-contrast text-text-inverse items-center justify-center font-black z-10 group-hover:scale-110 transition-transform">
                                    {index + 1}
                                </div>
                                <div className="bg-bg-base p-8 rounded-[2rem] shadow-premium border border-border-soft flex-grow hover:border-[var(--color-accent)] transition-all">
                                    <h3 className="text-2xl font-bold text-text-primary mb-3 flex items-center gap-3">
                                        <span className="md:hidden w-8 h-8 rounded-full bg-bg-contrast text-text-inverse text-sm flex items-center justify-center">{index + 1}</span>
                                        {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 7. Why Choose JF Visa */}
            <Section variant="soft">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-black text-text-primary mb-12 font-heading uppercase">Why JF Visa for {countryName}?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "98% Success Rate for " + countryName,
                                "Expert Documentation Review",
                                "Interview Preparation Assistance",
                                "Dedicated Case Manager",
                                "Transparent & Ethical Process",
                                "Post-Landing Support"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-bg-surface p-6 rounded-2xl shadow-premium border border-border-soft group hover:bg-bg-contrast transition-all">
                                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-bg-contrast flex items-center justify-center shrink-0">
                                        <i className="fa-solid fa-star text-xs"></i>
                                    </div>
                                    <span className="font-bold text-lg text-text-primary group-hover:text-text-inverse transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 8. FAQ Section */}
            <Section variant="surface">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-black text-text-primary mb-12 text-center uppercase tracking-tight">Key Inquiries (FAQs)</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-bg-base p-8 rounded-2xl border border-border-soft shadow-sm">
                                <h4 className="font-bold text-xl text-text-primary mb-3 flex items-start gap-3">
                                    <span className="text-[var(--color-accent)] font-black">Q.</span>
                                    {faq.question}
                                </h4>
                                <div className="flex items-start gap-3 text-text-secondary italic">
                                    <span className="text-[var(--color-primary)] font-black">A.</span>
                                    <p className="leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 9. Strong Final CTA and Form */}
            <Section variant="contrast">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
                                Ready to Secure Your <br />
                                <span className="text-[var(--color-accent)]">{countryName} {visaType.split(' ')[0]}?</span>
                            </h2>
                            <p className="text-xl mb-12 text-text-inverse/70 leading-relaxed max-w-lg">
                                Don't risk a refusal through guesswork. Let our specialist case managers guide you with a 98% proven approval protocol.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-6 group bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-text-inverse text-3xl group-hover:scale-110 transition-all">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </div>
                                    <div>
                                        <div className="text-text-inverse/40 text-xs font-bold uppercase tracking-widest">WhatsApp Hotline</div>
                                        <div className="text-2xl font-bold text-text-inverse">{CONFIG.phone}</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="bg-bg-surface p-2 rounded-[3rem] shadow-2xl relative">
                            <ContactForm title={`Verify My ${countryName} Eligibility`} />
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
