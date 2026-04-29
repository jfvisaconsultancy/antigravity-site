import Image from 'next/image';
import Link from 'next/link';

export default function MalaysiaSection() {
    return (
        <section className="py-16 lg:py-24 bg-bg-surface overflow-hidden border-y border-border-soft">
            <div className="container max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Content */}
                    <div className="flex flex-col lg:col-span-7 xl:col-span-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 text-[10px] font-bold rounded-full mb-6 uppercase tracking-[3px] w-fit">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                            Featured Destination
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight font-heading text-text-primary">
                            🇲🇾 Study in Malaysia – <br className="hidden md:block" />
                            <span className="text-[var(--color-primary)]">Your Gateway to Global Education</span>
                        </h2>
                        
                        <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl">
                            Build your future with <strong>JF Visa Consultancy</strong> and study at our affiliated institution: <br/>
                            <strong className="text-[var(--color-accent)] text-xl md:text-2xl mt-2 block font-heading italic">ALFA University College</strong>
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-10">
                            {/* Special Opportunities */}
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-border-soft hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold mb-5 text-text-primary flex items-center gap-3">
                                    <span className="text-2xl">🌍</span> Special Opportunities
                                </h3>
                                <ul className="space-y-4">
                                    {['Transfer programs to Europe', 'Pathway to continue studies in Europe', 'Global exposure & international career opportunities'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-snug">
                                            <i className="fa-solid fa-star text-[var(--color-accent)] mt-1 text-[10px] shrink-0"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Programs Offered */}
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-border-soft hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold mb-5 text-text-primary flex items-center gap-3">
                                    <span className="text-2xl">🎓</span> Programs Offered
                                </h3>
                                <ul className="space-y-4">
                                    {['Foundation Programs', 'Diploma Programs', 'Bachelor’s Degree', 'Master’s Degree', 'MBA Programs'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-snug">
                                            <i className="fa-solid fa-graduation-cap text-[var(--color-accent)] mt-1 text-[10px] shrink-0"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 md:gap-12 mb-12 bg-white/50 p-6 md:p-8 rounded-[2rem] border border-border-soft">
                            {/* Why Study */}
                            <div>
                                <h3 className="text-lg font-bold mb-5 text-text-primary flex items-center gap-3">
                                    <span className="text-2xl">✨</span> Why Study in Malaysia?
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Affordable tuition fees',
                                        'Internationally recognized degrees',
                                        'Student-friendly environment',
                                        'Multicultural lifestyle',
                                        'Safe country for students',
                                        'Post-study opportunities',
                                        'Strong career growth pathways'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                                            <i className="fa-solid fa-check-circle text-green-500 mt-0.5 text-sm shrink-0"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Required Documents */}
                            <div>
                                <h3 className="text-lg font-bold mb-5 text-text-primary flex items-center gap-3">
                                    <span className="text-2xl">📋</span> Required Documents
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Valid Passport',
                                        'Academic Documents',
                                        'Passport-size Photos',
                                        'Bank Statement',
                                        'Medical Report'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-medium">
                                            <i className="fa-solid fa-file-circle-check text-[var(--color-primary)] mt-0.5 text-sm shrink-0"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <Link href="/contact" className="btn btn-primary w-full sm:w-auto justify-center group flex items-center gap-2 text-base py-4 px-8 rounded-xl shadow-lg hover:shadow-xl">
                                👉 Apply for Malaysia Study Visa
                            </Link>
                            <Link href="/contact" className="btn btn-outline w-full sm:w-auto justify-center group flex items-center gap-2 bg-white text-base py-4 px-8 rounded-xl shadow-sm hover:shadow-md">
                                👉 Free Eligibility Assessment
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="lg:col-span-5 xl:col-span-4 w-full">
                        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90"></div>
                            <Image 
                                src="/images/malaysia-study.jpg" 
                                alt="Study in Malaysia – JF Visa Consultancy" 
                                fill 
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                                sizes="(max-width: 1024px) 100vw, 33vw"
                                priority
                            />
                            {/* Decorative Badge */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shrink-0 shadow-inner">
                                        <i className="fa-solid fa-award text-xl"></i>
                                    </div>
                                    <div>
                                        <div className="font-bold text-text-primary leading-tight">ALFA University College</div>
                                        <div className="text-xs text-text-secondary font-medium uppercase tracking-wider mt-1">Official Partner</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
