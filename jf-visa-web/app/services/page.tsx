import Link from "next/link";

export default function Services() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>Our Premium Services</h1>
                    <p>Comprehensive visa solutions for Education, Visit, and Work</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container space-y-16">

                    {/* Europe */}
                    <div id="europe" className="service-detail flex flex-col md:flex-row items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_europe_visa_1769526116284.png" alt="Study in Europe" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">Europe Study & Visit Visas</h2>
                            <p className="mb-4">Unlock world-class education and travel opportunities in Europe. We specialize in:</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-graduation-cap text-accent mt-1"></i> <span><strong>Study Visas:</strong> Malta, Lisbon, Germany (Diploma, Bachelor, Master, PSW).</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-plane text-accent mt-1"></i> <span><strong>Visit Visas:</strong> Schengen & Non-Schengen Countries short-stay.</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-business-time text-accent mt-1"></i> <span><strong>Internships:</strong> Career exposure options available.</span></li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Apply for Europe</Link>
                        </div>
                    </div>

                    {/* USA */}
                    <div id="usa" className="service-detail flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_usa_visa_1769526245585.png" alt="USA Visa" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">USA Visit Visa (B1/B2)</h2>
                            <p className="mb-4">Expert interview preparation and documentation services. Required Docs:</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Valid Passport & 2x2 Photo</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Parents/Spouse CNIC</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Professional Proof (Job/Business) & Educational Docs</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Supporting Docs as per profile</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Apply for USA</Link>
                        </div>
                    </div>

                    {/* Canada */}
                    <div id="canada" className="service-detail flex flex-col md:flex-row items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_canada.png" alt="Canada Visit Visa" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">Canada Visit Visa</h2>
                            <p className="mb-4">We provide comprehensive support for Canadian Visitor Visas.</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-file-invoice text-accent mt-1"></i> <span><strong>Financials:</strong> Bank Statements & Financial Proofs.</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-passport text-accent mt-1"></i> <span><strong>Docs:</strong> Passport, FRC/MRC, Photos.</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-briefcase text-accent mt-1"></i> <span><strong>Proof:</strong> Business/Job evidence & Travel History (if any).</span></li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Apply for Canada</Link>
                        </div>
                    </div>

                    {/* GCC */}
                    <div id="gcc" className="service-detail flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_gcc_visa_1769526468980.png" alt="GCC Visas" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">GCC Freelance & Work Visas</h2>
                            <p className="mb-4">Secure long-term residency and work options in the Gulf.</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-star text-accent mt-1"></i> <span><strong>Qatar (Azad Visa):</strong> 2 Years. Benefits: Work flexibility, No fixed employer dependency, Business opportunities.</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-star text-accent mt-1"></i> <span><strong>UAE Freelance:</strong> 2 Years residency.</span></li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-star text-accent mt-1"></i> <span><strong>Saudi Arabia:</strong> 1 Year Freelance & Business Visit Visas.</span></li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Apply for GCC</Link>
                        </div>
                    </div>

                    {/* Australia/NZ */}
                    <div id="australia" className="service-detail flex flex-col md:flex-row items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_australia.jpg" alt="Australia & New Zealand" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">Australia & New Zealand</h2>
                            <p className="mb-4">Tourist and Visit pathways for individuals and families.</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Passport & Photographs</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Financial Proof & Employment Evidence</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-accent mt-1"></i> Travel History & Invitation letters (if applicable)</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Apply for Australia</Link>
                        </div>
                    </div>

                    {/* Appointments */}
                    <div id="appointments" className="service-detail flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="service-image-container flex-1 flex justify-center">
                            <img src="/images/service_appointment.png" alt="Early Appointments" className="rounded-lg shadow-lg max-h-[300px] object-cover w-full" />
                        </div>
                        <div className="service-info flex-1">
                            <h2 className="text-primary text-2xl font-bold mb-4">Early Appointments</h2>
                            <p className="mb-4">Don't wait for months! We assist in securing early dates for:</p>
                            <ul className="service-list space-y-2 mb-6">
                                <li className="flex items-start gap-2"><i className="fa-solid fa-clock text-accent mt-1"></i> Embassy Appointments (All Countries)</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-user-nurse text-accent mt-1"></i> Medical Appointments</li>
                                <li className="flex items-start gap-2"><i className="fa-solid fa-file-signature text-accent mt-1"></i> Document Attestation slots</li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">Book Appointment</Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
