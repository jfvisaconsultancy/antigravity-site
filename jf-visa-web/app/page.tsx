import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { CONFIG } from "@/lib/config";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section
        className="hero relative min-h-[600px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/hero_background_travel_1769525881776.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative z-10 px-4 py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            Trusted Visa & Immigration Consultants in Pakistan
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto">
            Study, Work, Visit, or Settle Abroad with Expert Guidance & High Approval Success.
          </p>
          <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
            We help Pakistani applicants secure visas for Europe, UK, Canada, GCC, and more — with transparent process, professional documentation support, and step-by-step assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-lg px-8 py-4">
              Get Free Eligibility Assessment
            </Link>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-2 text-lg px-8 py-4 flex items-center justify-center gap-2 hover:bg-white hover:text-primary transition"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Trust Indicators Bar */}
      <section className="bg-[var(--color-primary)] text-white py-8 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <i className="fa-solid fa-check-circle text-4xl text-[var(--color-accent)] mb-3"></i>
              <h3 className="text-2xl font-bold">98%</h3>
              <p className="text-sm opacity-80">Application Success Rate</p>
            </div>
            <div className="p-4">
              <i className="fa-solid fa-users text-4xl text-[var(--color-accent)] mb-3"></i>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm opacity-80">Clients Assisted</p>
            </div>
            <div className="p-4">
              <i className="fa-solid fa-file-invoice text-4xl text-[var(--color-accent)] mb-3"></i>
              <h3 className="text-xl font-bold">Transparent</h3>
              <p className="text-sm opacity-80">Process</p>
            </div>
            <div className="p-4">
              <i className="fa-solid fa-handshake text-4xl text-[var(--color-accent)] mb-3"></i>
              <h3 className="text-xl font-bold">Dedicated</h3>
              <p className="text-sm opacity-80">Case Handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-4xl font-bold text-[var(--color-primary)] mb-6">
                Why Choose JF Visa Consultancy?
              </h2>
              <p className="text-lg text-[var(--color-text-dark)] mb-6 leading-relaxed">
                At JF Visa, we don’t just process applications — we build successful cases. Our team carefully evaluates your profile, prepares strong documentation, and guides you through every step until visa approval.
              </p>
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">We specialize in:</h3>
              <ul className="space-y-3 mb-8">
                {[
                  "Europe Study Visas",
                  "Work Permits",
                  "UK & Canada Visit Visas",
                  "GCC Employment Visas",
                  "Travel & Life Insurance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn btn-primary">
                Read More About Us
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/testimonial_group_1769526647625.png"
                alt="JF Visa Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl font-bold text-[var(--color-primary)] mb-4">Our Premium Services</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your specific needs and goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              id="study-visa"
              image="/images/service_europe_visa_1769526116284.png"
              title="Study Visa Assistance"
              description="Get admission and visa support for Europe, UK, and beyond."
              linkHash="study-visa"
            />
            <ServiceCard
              id="work-visa"
              image="/images/service_gcc_visa_1769526468980.png"
              title="Work Visa & Work Permits"
              description="Explore legal employment opportunities abroad."
              linkHash="work-visa"
            />
            <ServiceCard
              id="visit-visa"
              image="/images/service_canada.png"
              title="Visit Visa Services"
              description="Hassle-free visit visa processing with documentation guidance."
              linkHash="visit-visa"
            />
            <ServiceCard
              id="immigration"
              image="/images/service_usa_visa_1769526245585.png"
              title="Immigration & Residency"
              description="Professional pathway consultation."
              linkHash="immigration"
            />
            <ServiceCard
              id="travel-insurance"
              image="/images/service_travel_insurance.png"
              title="Travel Insurance"
              description="Worldwide medical and travel coverage for safe journeys."
              linkHash="travel-insurance"
            />
            <ServiceCard
              id="life-insurance"
              image="/images/service_australia.jpg" // Placeholder for Life Insurance
              title="Life Insurance Solutions"
              description="Secure your family’s future."
              linkHash="life-insurance"
            />
          </div>
        </div>
      </section>

      {/* 5. 5-Step Process */}
      <section className="section-padding bg-[var(--color-primary)] text-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our 5-Step Visa Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: 1, title: "Free Profile Evaluation", icon: "fa-user-magnifying-glass" },
              { step: 2, title: "Eligibility Assessment", icon: "fa-clipboard-check" },
              { step: 3, title: "Document Preparation", icon: "fa-file-signature" },
              { step: 4, title: "Application Submission", icon: "fa-paper-plane" },
              { step: 5, title: "Interview & Approval Guidance", icon: "fa-passport" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="mb-4">
                  <i className={`fa-solid ${item.icon} text-4xl text-[var(--color-accent)] opacity-80`}></i>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Refusal Cases Section */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[var(--color-accent)]">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Visa Refused? We Can Help.</h2>
            <p className="text-xl text-[var(--color-text-dark)] mb-8">
              We analyze refusal reasons and rebuild your case professionally for re-application.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Get Re-Evaluation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Placeholder */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Our Success Stories</h2>
            <p className="text-[var(--color-text-light)]">Real clients. Real approvals. Real results.</p>
          </div>
          {/* Placeholder Gallery */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 font-medium">Testimonial Image/Video {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How much does the consultation cost?", a: "Our initial profile evaluation is completely free." },
              { q: "Do you guarantee visa approval?", a: "No one can guarantee approval, but our 98% success rate speaks to our expertise in preparing strong cases." },
              { q: "Which countries do you deal with?", a: "We specialize in Europe (Schengen), UK, USA, Canada, Australia, NZ, and GCC countries." },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-lg mb-2 text-[var(--color-primary)]">{faq.q}</h4>
                <p className="text-[var(--color-text-dark)] opacity-90">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center relative overflow-hidden">
        {/* Background decorative elements could go here */}
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Your Visa Process?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Get a free assessment today and know your chances within minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="btn btn-primary text-lg px-10">
              Get Free Assessment
            </Link>
            <a
              href={`https://wa.me/${CONFIG.whatsapp}`}
              className="btn btn-outline border-2 text-lg px-10 flex items-center justify-center gap-2 hover:bg-white hover:text-primary"
            >
              <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        style={{ width: '60px', height: '60px' }}
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </>
  );
}
