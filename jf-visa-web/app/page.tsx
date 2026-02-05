import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { CONFIG } from "@/lib/config";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: "url('/images/hero_background_travel_1769525881776.png')" }}
      >
        <div className="container hero-content">
          <h1>{CONFIG.brandName}</h1>
          <p className="tagline" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1rem', color: 'var(--color-accent)' }}>
            {CONFIG.tagline}
          </p>
          <p>Expert guidance for Study & Visit Visas in Europe, USA, Canada, Australia/NZ, and GCC Work Visas.</p>
          <div className="hero-buttons flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="btn btn-primary">Apply Now</Link>
            <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline whatsapp-link flex items-center gap-2">
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-outline">Book Consultation</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl font-bold text-[var(--color-primary)] mb-4">Our Premium Services</h2>
            <p className="section-subtitle text-[var(--color-text-light)]">Comprehensive visa solutions tailored to your goals</p>
          </div>

          <div className="services-grid">
            {/* Europe */}
            <ServiceCard
              id="europe-card"
              image="/images/service_europe_visa_1769526116284.png"
              title="Study in Europe"
              description="Unlock opportunities in Malta, Portugal, and more. Bachelors, Masters, and Diploma programs with high success rates."
              linkHash="europe"
            />

            {/* USA */}
            <ServiceCard
              id="usa-card"
              image="/images/service_usa_visa_1769526245585.png"
              title="USA Study Visa"
              description="Expert interview preparation and documentation for F1 Study Visas and B1/B2 Visitor Visas to the United States."
              linkHash="usa"
            />

            {/* GCC */}
            <ServiceCard
              id="gcc-card"
              image="/images/service_gcc_visa_1769526468980.png"
              title="GCC Visas"
              description="Freelance & Work Visas for Qatar (2 Years), UAE, and Saudi Arabia. Secure your future in the Gulf."
              linkHash="gcc"
            />

            {/* Canada */}
            <ServiceCard
              id="canada-card"
              image="/images/service_canada.png"
              title="Canada Visit Visa"
              description="Expert assistance for Canadian Visitor Visas including profile assessment and documentation."
              linkHash="canada"
            />

            {/* Australia/NZ */}
            <ServiceCard
              id="australia-card"
              image="/images/service_australia.jpg"
              title="Australia & NZ"
              description="Visit Visas for Australia and New Zealand. Clear pathways for tourism and family visits."
              linkHash="australia"
            />

            {/* Travel Insurance */}
            <ServiceCard
              id="travel-insurance-card"
              image="/images/service_travel_insurance.png"
              title="Travel Insurance"
              description="Travel with confidence. Comprehensive plans protecting you from medical emergencies, trip cancellations, and lost baggage."
              linkHash="travel-insurance"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us / About Preview */}
      <section className="section-padding about-preview">
        <div className="container about-grid">
          <div className="about-text">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Why Choose {CONFIG.brandName}?</h2>
            <p className="mb-6">We provide transparent, ethical, and legal visa consultancy. Led by industry experts {CONFIG.leadership.ceo} (CEO) and {CONFIG.leadership.md} (MD).</p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-accent"></i> 98% Visa Success Rate</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-accent"></i> Transparent Documentation</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-accent"></i> Expert Interview Preparation</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-accent"></i> End-to-End Support</li>
            </ul>
            <Link href="/about" className="btn btn-primary">Read More About Us</Link>
          </div>
          <div className="about-image">
            <img src="/images/testimonial_group_1769526647625.png" alt="Happy Students" className="about-img w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center bg-[var(--color-primary)] text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">Book a free consultation with our experts today and take the first step towards your dream destination.</p>
          <Link href="/contact" className="btn btn-primary">Book Consultation</Link>
        </div>
      </section>
    </>
  );
}
