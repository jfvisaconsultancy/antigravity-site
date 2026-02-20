import Link from "next/link";
import { CONFIG } from "@/lib/config";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* PHASE 1 — HERO AUTHORITY SECTION */}
      <section className="relative min-h-[700px] flex items-center bg-[var(--color-primary)] overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary-light)] to-transparent opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl"></div>

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Your Trusted Visa & <span className="text-[var(--color-accent)]">Immigration</span> Consultants
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed">
                Professional guidance for Study, Visit, Work & Immigration pathways worldwide. We turn refusals into approvals.
              </p>

              {/* Trust Indicators Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                <div className="border-l-2 border-[var(--color-accent)] pl-4">
                  <div className="text-[var(--color-accent)] text-2xl font-bold">10+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-4">
                  <div className="text-[var(--color-accent)] text-2xl font-bold">98%</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Approval Rate</div>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-4">
                  <div className="text-[var(--color-accent)] text-2xl font-bold">50+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Countries Served</div>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-4">
                  <div className="text-[var(--color-accent)] text-2xl font-bold">500+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Success Cases</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#assessment" className="btn btn-primary text-lg px-8 py-4 !mt-0 rounded-full">
                  Free Eligibility Assessment
                </Link>
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline border-white/20 text-lg px-8 py-4 !mt-0 rounded-full flex items-center justify-center gap-2 hover:bg-white hover:text-[var(--color-primary)] transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i> Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/20 to-transparent rounded-3xl p-1">
                <div className="bg-[var(--color-primary-light)] w-full h-full rounded-[22px] flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/hero_background_travel_1769525881776.png"
                    alt="Immigration Consultation"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay"
                  />
                  <div className="relative z-10 text-center p-12">
                    <i className="fa-solid fa-passport text-8xl text-[var(--color-accent)] mb-6 opacity-80"></i>
                    <h3 className="text-2xl font-bold text-white mb-2 italic">Global Mobility Experts</h3>
                    <p className="text-white/60">JF Visa Consultancy & Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 2 — DESTINATION DECISION SECTION */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Where Do You Want To Go?</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">Select your dream destination and let us handle the complexities of the visa process.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Europe", icon: "fa-earth-europe", href: "/visit-visa/schengen" },
              { title: "United Kingdom", icon: "fa-landmark", href: "/visit-visa/uk" },
              { title: "UAE / Gulf", icon: "fa-mosque", href: "/work-permit" },
              { title: "Work Abroad", icon: "fa-briefcase", href: "/work-permit" },
              { title: "Immigration", icon: "fa-passport", href: "/immigration" },
            ].map((dst, i) => (
              <Link
                key={i}
                href={dst.href}
                className="group p-8 bg-[var(--color-off-white)] border border-[var(--color-border)] rounded-2xl text-center hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--color-accent)] transition-colors shadow-sm">
                  <i className={`fa-solid ${dst.icon} text-2xl text-[var(--color-primary)] group-hover:text-white`}></i>
                </div>
                <h3 className="font-bold text-[var(--color-primary)] group-hover:text-white transition-colors">{dst.title}</h3>
                <span className="text-[var(--color-accent)] text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">EXPLORE →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 3 — PROOF & TRUST SECTION */}
      <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-30"></div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Helping Clients Build Their Future Abroad</h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                At JF Visa, we don’t just process applications — we build successful cases. Our team carefully evaluates your profile, prepares strong documentation, and guides you through every step until visa approval.
              </p>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 italic">
                "Our approach is profile-based. We don't just file papers; we prepare a comprehensive case study to ensure the highest probability of success."
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Applications Guided", value: "2,500+", icon: "fa-file-signature" },
                { label: "Success Rate", value: "98%", icon: "fa-award" },
                { label: "Countries Processed", value: "50+", icon: "fa-globe-americas" },
                { label: "Happy Clients", value: "1,200+", icon: "fa-face-smile" },
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-[var(--color-accent)]/50 transition-colors">
                  <i className={`fa-solid ${stat.icon} text-3xl text-[var(--color-accent)] mb-4`}></i>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/40 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 4 — SERVICES (RESTRUCTURED) */}
      <section className="py-24 bg-[var(--color-off-white)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Our Premium Services</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto">Comprehensive visa and immigration solutions tailored to solve specific trajectory challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Study Visa",
                problem: "Worried about admission & funding?",
                benefit: "Get admitted to Top European & Western universities with scholarship guidance.",
                for: "Students seeking global degree pathways.",
                href: "/study-visa",
                icon: "fa-user-graduate"
              },
              {
                title: "Visit Visa",
                problem: "Struggling with complex documentation?",
                benefit: "We handle the entire dossier preparation for UK, Canada, and Schengen states.",
                for: "Families and tourists wanting hassle-free travel.",
                href: "/visit-visa",
                icon: "fa-map-location-dot"
              },
              {
                title: "Work Permit",
                problem: "Difficulty finding legal work abroad?",
                benefit: "Direct pathways for skilled and general work permits in Gulf & Europe.",
                for: "Professionals seeking career growth abroad.",
                href: "/work-permit",
                icon: "fa-briefcase"
              },
              {
                title: "Immigration",
                problem: "Facing uncertainty in residency status?",
                benefit: "Professional consultation for PR, Settlement, and Citizenship pathways.",
                for: "Individuals looking for a permanent move.",
                href: "/immigration",
                icon: "fa-passport"
              },
              {
                title: "Travel Insurance",
                problem: "Visa rejection due to insurance?",
                benefit: "Schengen-approved insurance with high coverage at lowest rates.",
                for: "Mandatory requirement for most visa types.",
                href: "/travel-insurance",
                icon: "fa-shield-heart"
              },
              {
                title: "Refusal Help",
                problem: "Previously refused? Don't lose hope.",
                benefit: "We analyze refusal reasons and rebuild cases for a stronger re-application.",
                for: "Applicants seeking a second chance.",
                href: "/contact",
                icon: "fa-rotate-right"
              }
            ].map((srv, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-[var(--color-border)] hover:shadow-premium group transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${srv.icon} text-xl`}></i>
                  </div>
                  <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-widest">{srv.title}</span>
                </div>
                <h4 className="text-primary font-bold mb-2 italic">"{srv.problem}"</h4>
                <p className="text-[var(--color-text-dark)] font-semibold mb-4 text-sm leading-relaxed">{srv.benefit}</p>
                <p className="text-[var(--color-text-light)] text-xs mb-8">{srv.for}</p>
                <Link href={srv.href} className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm group-hover:text-[var(--color-accent)] transition-colors">
                  CHECK ELIGIBILITY <i className="fa-solid fa-arrow-right text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 5 — PROCESS TIMELINE */}
      <section className="py-24 bg-white border-y border-[var(--color-border)]">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--color-primary)]">Your Journey to Approval</h2>
          <div className="relative">
            {/* Connector Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[var(--color-accent)]/20 via-[var(--color-accent)] to-[var(--color-accent)]/20"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { title: "Profile Evaluation", desc: "We analyze your academic and financial background.", icon: "fa-user-magnifying-glass" },
                { title: "Document Preparation", desc: "Expert guidance for professional case filing.", icon: "fa-file-signature" },
                { title: "Submission", desc: "Strategic application processing at relevant embassies.", icon: "fa-paper-plane" },
                { title: "Decision", desc: "Support for interviews and final visa collection.", icon: "fa-passport" },
              ].map((step, i) => (
                <div key={i} className="relative z-10 group">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] text-2xl font-bold mb-6 mx-auto shadow-lg group-hover:ring-8 ring-[var(--color-accent)]/10 transition-all">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{step.title}</h3>
                  <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 6 — SOCIAL PROOF / RESULTS */}
      <section className="py-24 bg-[var(--color-off-white)]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4 font-heading italic">Real Clients. Real Approvals.</h2>
            <p className="text-[var(--color-text-light)]">Transparency is our core value. See our latest success stories.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-video bg-white rounded-2xl shadow-sm border border-[var(--color-border)] overflow-hidden flex items-center justify-center relative group">
                <Image
                  src={`/images/service_europe_visa_1769526116284.png`}
                  alt="Success Story"
                  fill
                  className="object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="text-center p-8 relative z-10">
                  <i className="fa-solid fa-circle-check text-4xl text-[var(--color-accent)] mb-4"></i>
                  <h4 className="font-bold text-[var(--color-primary)] mb-2">Visa Approved</h4>
                  <p className="text-xs text-[var(--color-text-light)] uppercase tracking-widest">Schengen Visit - Dec 2025</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/about" className="btn btn-primary rounded-full">Explore More Success Stories</Link>
          </div>
        </div>
      </section>

      {/* PHASE 7 — CONSULTATION CONVERSION BLOCK */}
      <section className="py-20 bg-[var(--color-primary)] text-white relative" id="assessment">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                Profile Evaluation
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight font-heading italic">
                Not Sure Where You Qualify?
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Applying for a visa without evaluation is a risk. We evaluate your profile based on academic history, travel records, and financial status before applying to avoid refusal.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Detailed eligibility check",
                  "Document gap analysis",
                  "Trajectory planning",
                  "Risk mitigation strategies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <i className="fa-solid fa-circle-check text-[var(--color-accent)]"></i>
                    <span className="font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <a
                  href={`https://wa.me/${CONFIG.whatsapp}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform shadow-lg">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest">WhatsApp Now</div>
                    <div className="text-white font-bold text-xl uppercase">+92 306 5870215</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <ContactForm title="Start Free Assessment" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
        style={{ width: '60px', height: '60px' }}
      >
        <span className="absolute right-full mr-4 bg-white text-[var(--color-primary)] px-4 py-2 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Advisor
        </span>
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </>
  );
}

