import Link from "next/link";
import { CONFIG } from "@/lib/config";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import VisaQuiz from "@/components/VisaQuiz";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. HERO — TARGETED HOOK */}
      <Section variant="contrast" className="relative overflow-hidden" padding="none" style={{ padding: '0px' }}>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none lg:w-1/2">
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-accent)]/20 to-transparent"></div>
        </div>

        <div className="relative z-10 lg:min-h-[85vh] flex items-center py-20 lg:py-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center w-full">
            <div className="fade-in">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Expert Visa Strategy</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 italic font-heading text-text-inverse">
                Stop Guessing. <br />
                <span className="text-[var(--color-accent)]">Start Your Journey</span> With Certainty.
              </h1>

              <p className="text-xl text-text-inverse mb-10 leading-relaxed max-w-[620px]">
                Stop risking your future with general advice. Get a clear, case-based strategy designed to prevent refusals and navigate complex documentation with ease.
              </p>

              <div className="flex flex-wrap gap-5">
                <Link href="#assessment" className="btn btn-primary lg:px-10">
                  Check Your Eligibility
                </Link>
                <a href={`https://wa.me/${CONFIG.whatsapp}`} className="btn btn-outline lg:px-10">
                  Talk on WhatsApp
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                  <span className="text-sm font-semibold text-text-inverse">Case Based Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                  <span className="text-sm font-semibold text-text-inverse">Documentation Preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-[var(--color-accent)]"></i>
                  <span className="text-sm font-semibold text-text-inverse">Refusal Prevention Strategy</span>
                </div>
              </div>
            </div>

            {/* Desktop Visual Block */}
            <div className="hidden lg:block fade-in">
              <div className="relative p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-accent)] opacity-20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-heading italic text-[var(--color-accent)] mb-6">Why JF Visa?</h3>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-shield-check text-xl text-[var(--color-accent)]"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">98% Approval Rate</h4>
                        <p className="text-sm text-text-inverse/60">Strictly following embassy guidelines and case-based strategy.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-clock-rotate-left text-xl text-[var(--color-accent)]"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">10+ Years Experience</h4>
                        <p className="text-sm text-text-inverse/60">Over a decade of handling complex visa refusal cases.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-users text-xl text-[var(--color-accent)]"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">5,000+ Success Stories</h4>
                        <p className="text-sm text-text-inverse/60">Helping families and students achieve their global dreams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. VISITOR PATH SELECTOR */}
      <Section variant="surface">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-text-primary">Tell Us Your Goal</h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-[680px] mx-auto lg:mx-0">
              Select the path that matches your ambition. Each journey is unique, and our strategy is built entirely around your profile.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/study-visa" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-bg-contrast flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors">
                    <i className="fa-solid fa-graduation-cap text-text-inverse text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Study Abroad</h3>
                  <p className="text-text-secondary mb-6 text-sm">Top universities in UK, Canada, Australia, and Europe with full scholarship guidance.</p>
                  <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    Start My Strategy <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>

              <Link href="/visit-visa" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-bg-contrast flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors">
                    <i className="fa-solid fa-passport text-text-inverse text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Visit Visa</h3>
                  <p className="text-text-secondary mb-6 text-sm">UK standard visitor, Schengen/Europe, and USA/Canada tourist visa solutions.</p>
                  <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    Check Requirements <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>

              {/* Other cards similarly updated for 2-col desktop grid feel */}
              <Link href="/work-permit" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-bg-contrast flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors">
                    <i className="fa-solid fa-briefcase text-text-inverse text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Work Abroad</h3>
                  <p className="text-text-secondary mb-6 text-sm">Legal work permits and job-seeker visas for Europe, UAE, and Gulf countries.</p>
                  <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    View Opportunities <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>

              <Link href="/immigration" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-bg-contrast flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors">
                    <i className="fa-solid fa-earth-americas text-text-inverse text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Immigration / PR</h3>
                  <p className="text-text-secondary mb-6 text-sm">Permanent residency pathways for Canada, Australia, and European settled status.</p>
                  <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    Explore Pathways <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>

              <Link href="/refusal-case" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-red-900/10 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <i className="fa-solid fa-circle-exclamation text-2xl text-red-600 group-hover:text-text-inverse transition-colors"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Visa Refused</h3>
                  <p className="text-text-secondary mb-6 text-sm">Had a previous refusal? We specialize in recovering and justifying complex refusal cases.</p>
                  <span className="text-red-500 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    Recover My Case <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>

              <Link href="/travel-insurance" className="group">
                <div className="h-full p-8 rounded-[var(--border-radius-lg)] bg-bg-base border border-transparent hover:border-[var(--color-accent)] hover:bg-bg-surface hover:shadow-premium transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-bg-contrast flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors">
                    <i className="fa-solid fa-shield-halved text-text-inverse text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">Travel Insurance</h3>
                  <p className="text-text-secondary mb-6 text-sm">Instant, Schengen-compliant travel insurance policies for all visa types and ages.</p>
                  <span className="text-[var(--color-accent)] font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-[10px]">
                    Get Quick Quote <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* 2.5 INTERACTIVE QUIZ SECTION */}
      <Section variant="contrast" padding="section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-text-inverse">
            <div className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-bg-contrast text-[10px] font-bold rounded-full mb-8 uppercase tracking-[3px]">
              Instant Evaluation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
              Calculate Your <span className="text-[var(--color-accent)]">Visa Success</span> Probability.
            </h2>
            <p className="text-xl text-text-inverse/80 mb-10 leading-relaxed max-w-[540px]">
              Answer 4 simple questions about your profile and get an instant score on your chances of approval. This is the first step to a successful application.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-bg-contrast bg-slate-200 flex items-center justify-center text-[10px] font-bold text-bg-contrast">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm font-semibold text-text-inverse/40">
                <span className="text-[var(--color-accent)]">2,400+</span> evaluations completed this month
              </div>
            </div>
          </div>
          <div>
            <VisaQuiz />
          </div>
        </div>
      </Section>

      {/* 3. PROBLEM IDENTIFICATION SECTION */}
      <Section variant="base">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-heading text-text-primary leading-tight">Why Most Visa Applications Get Rejected</h2>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-[620px]">
              Applying for a visa is more than just filling out forms. Without a strategic approach, even minor errors can lead to a lifetime refusal record.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
                    <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
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
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-bg-contrast p-1 shadow-2xl">
              <div className="w-full h-full rounded-[2.9rem] bg-bg-contrast flex flex-col items-center justify-center p-12 text-center border border-white/5">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  <i className="fa-solid fa-file-circle-exclamation text-4xl text-[var(--color-accent)]"></i>
                </div>
                <h4 className="text-2xl font-bold text-text-inverse mb-4">Did You Know?</h4>
                <p className="text-text-inverse/60 text-lg italic leading-relaxed">
                  "Over 65% of Pakistani visa refusals are due to 'Intent' and 'Financial Sufficiency' — both of which are avoidable with proper trajectory mapping."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. AUTHORITY POSITIONING */}
      <Section variant="surface">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-4 mb-16 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-text-primary leading-tight">How Visa Officers Review</h2>
            <p className="text-text-secondary max-w-[600px] mx-auto lg:mx-0 text-lg leading-relaxed">
              We reverse-engineer our strategies based on the actual criteria used by entry clearance officers.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Purpose Clarity", desc: "Is the intent logical and consistent with history?", icon: "fa-bullseye" },
                { title: "Financial Logic", desc: "Are the funds genuine and proportionate?", icon: "fa-calculator" },
                { title: "Home Ties", desc: "Proof that the applicant will return to Pakistan.", icon: "fa-house-lock" },
                { title: "Credibility", desc: "Are all certificates and letters verifiable?", icon: "fa-shield-check" }
              ].map((factor, idx) => (
                <div key={idx} className="p-6 rounded-[var(--border-radius-md)] bg-bg-base border-l-4 border-[var(--color-accent)] shadow-sm">
                  <i className={`fa-solid ${factor.icon} text-2xl text-[var(--color-accent)] mb-4`}></i>
                  <h4 className="text-lg font-bold mb-2 text-text-primary">{factor.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 5. PROOF SECTION */}
      <Section variant="contrast">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-heading italic text-text-inverse">Approval Confidence</h2>
          <p className="text-text-inverse/60 max-w-[680px] mx-auto text-lg">
            Our results speak louder than brochures. We specialize in hard-to-get approvals and refusal recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)] mb-4">950+</div>
            <h4 className="text-xl font-bold uppercase tracking-widest text-text-inverse/80">Students Approved</h4>
            <p className="text-sm text-text-inverse/40 mt-4 leading-relaxed">UK, Canada, and Europe study visa success stories.</p>
          </div>
          <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)] mb-4">1,800+</div>
            <h4 className="text-xl font-bold uppercase tracking-widest text-text-inverse/80">Visit Visas Approved</h4>
            <p className="text-sm text-text-inverse/40 mt-4 leading-relaxed">Schengen, USA, and UK tourist visa successes.</p>
          </div>
          <div className="p-10 rounded-[var(--border-radius-lg)] bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
            <div className="text-5xl lg:text-6xl font-bold text-[var(--color-accent)] mb-4">400+</div>
            <h4 className="text-xl font-bold uppercase tracking-widest text-text-inverse/80">Refusals Recovered</h4>
            <p className="text-sm text-text-inverse/40 mt-4 leading-relaxed">Turning initial rejections into final approvals.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/5">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-text-inverse">5,000+</div>
            <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Files Prepared</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-text-inverse">25+</div>
            <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Countries Done</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-text-inverse">10+</div>
            <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1 text-text-inverse">12,000+</div>
            <div className="text-[10px] uppercase tracking-[3px] text-[var(--color-accent)] font-bold">Counseling Hours</div>
          </div>
        </div>
      </Section>

      {/* 6. PROCESS SIMPLIFICATION */}
      <Section variant="base">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 mb-16 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-text-primary leading-tight">The 4-Step Journey to Approval</h2>
            <p className="text-text-secondary max-w-[580px] mx-auto lg:mx-0 text-lg leading-relaxed">
              We make the complex visa process safe, understandable, and predictable by following a proven authority-led strategic roadmap.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12 relative z-10">
              {[
                { title: "Free Case Review", desc: "We evaluate your academic and financial background to map your best path.", icon: "fa-magnifying-glass-chart" },
                { title: "Document Strategy", desc: "Expert guidance for professional case filing and intention letters.", icon: "fa-folder-tree" },
                { title: "Application Preparation", desc: "Strategic application processing at relevant embassies with full tracking.", icon: "fa-file-invoice" },
                { title: "Visa Decision Support", desc: "Pre-interview prep and final guidance for successful visa collection.", icon: "fa-plane-arrival" }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-bg-surface border-2 border-[var(--color-accent)] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[var(--color-accent)] group-hover:text-text-inverse transition-all duration-300">
                    <i className={`fa-solid ${step.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-[var(--color-accent)] mb-1 uppercase tracking-[2px]">Step 0{idx + 1}</div>
                    <h4 className="text-lg font-bold mb-2 font-heading text-text-primary">{step.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. URGENCY BLOCK & 8. FINAL CTA */}
      <Section variant="base" className="border-t border-border-soft">
        <div className="p-12 md:p-20 rounded-[3rem] bg-bg-contrast text-text-inverse relative overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

          <div className="relative z-10 text-center" id="assessment">
            <div className="inline-block px-4 py-1.5 bg-red-600/20 text-red-500 text-xs font-bold rounded-full mb-8 uppercase tracking-[3px] border border-red-600/30">
              Time Sensitive
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight font-heading italic text-text-inverse">
              Professional Evaluation <br className="hidden md:block" /> Before Applying.
            </h2>

            <p className="text-xl text-text-inverse/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Visa rules change frequently. An incorrect first attempt increases your refusal history forever. Start your assessment today for a safe application.
            </p>

            <div className="mb-12">
              <ContactForm title="Start Free Assessment" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-12 border-t border-white/5">
              <a href={`https://wa.me/${CONFIG.whatsapp}`} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-text-inverse text-3xl group-hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-text-inverse/40">WhatsApp Advisor</div>
                  <div className="text-xl font-bold text-text-inverse">{CONFIG.phone}</div>
                </div>
              </a>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-text-inverse/40 text-center md:text-left">Typical Response Time</div>
                <div className="text-lg font-bold text-[var(--color-accent)]">Within 15 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
