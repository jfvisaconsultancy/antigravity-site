import Link from "next/link";
import { CONFIG } from "@/lib/config";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import VisaQuiz from "@/components/VisaQuiz";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO — TARGETED HOOK */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white" style={{ padding: '160px 0 110px' }}>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-accent)]/20 to-transparent"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 fade-in">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Expert Visa Strategy</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 fade-in italic font-heading text-white">
              Stop Guessing. <br />
              <span className="text-[var(--color-accent)]">Start Your Journey</span> With Certainty.
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed fade-in max-w-[620px]">
              Stop risking your future with general advice. Get a clear, case-based strategy designed to prevent refusals and navigate complex documentation with ease.
            </p>

            <div className="flex flex-wrap gap-5 fade-in">
              <Link href="#assessment" className="btn btn-primary lg:px-10">
                Check Your Eligibility
              </Link>
              <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                Talk on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 fade-in">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                <span className="text-sm font-semibold text-white/80">Case Based Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                <span className="text-sm font-semibold text-white/80">Documentation Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                <span className="text-sm font-semibold text-white/80">Refusal Prevention Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISITOR PATH SELECTOR */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Tell us your goal</h2>
            <p className="text-white/60 max-w-[680px] mx-auto text-lg">
              Select the path that matches your ambition. Each journey is unique, and our strategy is built entirely around your profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/study-visa" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <i className="fa-solid fa-graduation-cap text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Study Abroad</h3>
                <p className="text-white/60 mb-8">Top universities in UK, Canada, Australia, and Europe with full scholarship guidance.</p>
                <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Start My Strategy <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/visit-visa" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <i className="fa-solid fa-passport text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Visit Visa</h3>
                <p className="text-white/60 mb-8">UK standard visitor, Schengen/Europe, and USA/Canada tourist visa solutions.</p>
                <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Check Requirements <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/work-permit" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <i className="fa-solid fa-briefcase text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Work Abroad</h3>
                <p className="text-white/60 mb-8">Legal work permits and job-seeker visas for Europe, UAE, and Gulf countries.</p>
                <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  View Opportunities <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/immigration" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <i className="fa-solid fa-earth-americas text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Immigration</h3>
                <p className="text-white/60 mb-8">Permanent residency pathways for Canada, Australia, and European settled status.</p>
                <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Explore Pathways <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/refusal-case" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-red-900/10 flex items-center justify-center mb-8 group-hover:bg-red-600 transition-colors">
                  <i className="fa-solid fa-circle-exclamation text-3xl text-red-600 group-hover:text-white transition-colors"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Refusal Case</h3>
                <p className="text-white/60 mb-8">Had a previous refusal? We specialize in recovering and justifying complex refusal cases.</p>
                <span className="text-red-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Recover My Case <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>

            <Link href="/travel-insurance" className="group">
              <div className="h-full p-10 rounded-[var(--border-radius-lg)] bg-[var(--color-off-white)] border border-transparent hover:border-[var(--color-accent)] hover:bg-white hover:shadow-premium transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--color-accent)] transition-colors">
                  <i className="fa-solid fa-shield-halved text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 font-heading">Travel Insurance</h3>
                <p className="text-white/60 mb-8">Instant, Schengen-compliant travel insurance policies for all visa types and ages.</p>
                <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
                  Get Quick Quote <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2.5 INTERACTIVE QUIZ SECTION */}
      <section className="section-padding bg-[var(--color-primary)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-primary)] text-[10px] font-bold rounded-full mb-8 uppercase tracking-[3px]">
                Instant Evaluation
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-heading italic text-white">
                Calculate Your <span className="text-[var(--color-accent)]">Visa Success</span> Probability.
              </h2>
              <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-[540px]">
                Answer 4 simple questions about your profile and get an instant score on your chances of approval. This is the first step to a successful application.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3 overflow-hidden">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-[var(--color-primary)] bg-slate-200 flex items-center justify-center text-[10px] font-bold text-[var(--color-primary)]">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-semibold text-white/40">
                  <span className="text-[var(--color-accent)]">2,400+</span> evaluations completed this month
                </div>
              </div>
            </div>
            <div>
              <VisaQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM IDENTIFICATION SECTION */}
      <section className="section-padding bg-[var(--color-off-white)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading">Why Most Visa Applications Get Rejected</h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Applying for a visa is more than just filling out forms. Without a strategic approach, even minor errors can lead to a lifetime refusal record.
              </p>

              <ul className="space-y-6">
                {[
                  { title: "Weak Financial Logic", desc: "Funds shown without clear source or consistency leads to immediate doubt." },
                  { title: "Wrong Trajectory", desc: "Applying for a course or purpose that doesn't align with your profile." },
                  { title: "Agent Mistyping", desc: "Generic, copy-pasted SOPs and intent letters that visa officers spot instantly." },
                  { title: "Incomplete Evidence", desc: "Missing the 'unspoken' document requirements that prove your ties." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                      <i className="fa-solid fa-xmark text-red-600 text-xs"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Link href="#assessment" className="btn btn-primary">
                  Don't Risk Refusal — Evaluate My Case
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[2rem] overflow-hidden bg-[var(--color-primary)] p-1">
                <div className="w-full h-full rounded-[1.9rem] bg-[var(--color-primary-light)] flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                    <i className="fa-solid fa-file-circle-exclamation text-4xl text-[var(--color-accent)]"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Did You Know?</h4>
                  <p className="text-white/60 text-lg italic">
                    "Over 65% of Pakistani visa refusals are due to 'Intent' and 'Financial Sufficiency' — both of which are avoidable with proper trajectory mapping."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHORITY POSITIONING */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">How Visa Officers Review Applications</h2>
            <p className="text-white/60 max-w-[680px] mx-auto text-lg">
              We reverse-engineer our strategies based on the actual criteria used by entry clearance officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Purpose Clarity", desc: "Is the intent logical and consistent with the applicant's background?", icon: "fa-bullseye" },
              { title: "Financial Logic", desc: "Are the funds genuine, accessible, and proportionate to the purpose?", icon: "fa-calculator" },
              { title: "Home Ties", desc: "Is there enough proof that the applicant will return to Pakistan?", icon: "fa-house-lock" },
              { title: "Document Credibility", desc: "Are all certificates and supporting letters verifiable?", icon: "fa-shield-check" }
            ].map((factor, idx) => (
              <div key={idx} className="p-8 rounded-[var(--border-radius-md)] bg-[var(--color-off-white)] border-l-4 border-[var(--color-accent)]">
                <i className={`fa-solid ${factor.icon} text-3xl text-[var(--color-accent)] mb-6`}></i>
                <h4 className="text-xl font-bold mb-3">{factor.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROOF SECTION */}
      <section className="section-padding bg-[var(--color-primary)] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white italic">Approval Confidence</h2>
            <p className="text-white/60 max-w-[680px] mx-auto text-lg">
              Our results speak louder than brochures. We specialize in hard-to-get approvals and refusal recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center">
              <div className="text-5xl font-bold text-[var(--color-accent)] mb-4">950+</div>
              <h4 className="text-xl font-bold uppercase tracking-widest text-white/80">Students Approved</h4>
              <p className="text-sm text-white/40 mt-4 leading-relaxed">UK, Canada, and Europe study visa success stories.</p>
            </div>
            <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center">
              <div className="text-5xl font-bold text-[var(--color-accent)] mb-4">1,800+</div>
              <h4 className="text-xl font-bold uppercase tracking-widest text-white/80">Visit Visas Approved</h4>
              <p className="text-sm text-white/40 mt-4 leading-relaxed">Schengen, USA, and UK tourist visa successes.</p>
            </div>
            <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center">
              <div className="text-5xl font-bold text-[var(--color-accent)] mb-4">400+</div>
              <h4 className="text-xl font-bold uppercase tracking-widest text-white/80">Refusals Recovered</h4>
              <p className="text-sm text-white/40 mt-4 leading-relaxed">Turning initial rejections into final approvals.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">5,000+</div>
              <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Files Prepared</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">25+</div>
              <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Countries Done</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">10+</div>
              <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">12,000+</div>
              <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Counseling Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SIMPLIFICATION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">The 4-Step Journey to Approval</h2>
            <p className="text-white/60 max-w-[680px] mx-auto text-lg">
              We make the complex visa process safe, understandable, and predictable.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-[135px] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { title: "Free Case Review", desc: "We evaluate your academic and financial background to map your best path.", icon: "fa-magnifying-glass-chart" },
                { title: "Document Strategy", desc: "Expert guidance for professional case filing and intention letters.", icon: "fa-folder-tree" },
                { title: "Application Preparation", desc: "Strategic application processing at relevant embassies with full tracking.", icon: "fa-file-invoice" },
                { title: "Visa Decision Support", desc: "Pre-interview prep and final guidance for successful visa collection.", icon: "fa-plane-arrival" }
              ].map((step, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[var(--color-accent)] flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                    <i className={`fa-solid ${step.icon} text-3xl`}></i>
                  </div>
                  <div className="px-4">
                    <div className="text-xs font-bold text-[var(--color-accent)] mb-2 uppercase tracking-widest">Step 0{idx + 1}</div>
                    <h4 className="text-xl font-bold mb-4 font-heading">{step.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. URGENCY BLOCK & 8. FINAL CTA */}
      <section className="section-padding bg-[var(--color-off-white)] border-t border-slate-200">
        <div className="container">
          <div className="p-12 md:p-20 rounded-[3rem] bg-[var(--color-primary)] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center" id="assessment">
              <div className="inline-block px-4 py-1.5 bg-red-600/20 text-red-500 text-xs font-bold rounded-full mb-8 uppercase tracking-[3px] border border-red-600/30">
                Time Sensitive
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight font-heading italic text-white">
                Get Professional Evaluation <br className="hidden md:block" /> Before Applying.
              </h2>

              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Visa rules change frequently. An incorrect first attempt increases your refusal history forever. Start your assessment today for a safe application.
              </p>

              <div className="mb-12">
                <ContactForm title="Start Free Assessment" />
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-white/5">
                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">WhatsApp Advisor</div>
                    <div className="text-xl font-bold">{CONFIG.phone}</div>
                  </div>
                </a>
                <div className="hidden md:block w-px h-12 bg-white/10"></div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 text-center md:text-left">Typical Response Time</div>
                  <div className="text-lg font-bold text-[var(--color-accent)]">Within 15 Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp for Mobile */}
      <a
        href={`https://wa.me/${CONFIG.whatsapp}`}
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </main>
  );
}
