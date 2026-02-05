import Link from "next/link";
import { CONFIG } from "@/lib/config";

export default function About() {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <h1>About {CONFIG.brandName}</h1>
                    <p>Where dreams become a reality!</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2 className="text-primary">Who We Are</h2>
                            <p className="mb-4">
                                {CONFIG.brandName} is a premier international visa advisory firm based in Pakistan. With years of experience and a deep understanding of international visa regulations, we have successfully helped hundreds of students and professionals achieve their global dreams.
                            </p>
                            <p>
                                Our philosophy is simple: <strong>Transparency, Integrity, and Excellence.</strong> We treat every case as our own, ensuring that you get the best possible advice and representation through legal pathways.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/images/testimonial_group_1769526647625.png" alt="Our Team" className="about-img w-full rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <div className="mission-grid mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="mission-card bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="mission-icon text-4xl text-[var(--color-accent)] mb-4"><i className="fa-solid fa-bullseye"></i></div>
                            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                            <p>To provide transparent, professional, and client-focused visa consultancy services that help individuals and families achieve global mobility through legal and ethical pathways.</p>
                        </div>
                        <div className="mission-card bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="mission-icon text-4xl text-[var(--color-accent)] mb-4"><i className="fa-solid fa-eye"></i></div>
                            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                            <p>To become one of Pakistan’s most trusted international visa consultancies with a global reputation for excellence and integrity.</p>
                        </div>
                        <div className="mission-card bg-white p-8 rounded-lg shadow-sm text-center">
                            <div className="mission-icon text-4xl text-[var(--color-accent)] mb-4"><i className="fa-solid fa-gem"></i></div>
                            <h3 className="text-xl font-bold mb-2">Our Values</h3>
                            <p>Honesty in assessment, dedication in processing, and commitment to your success are the pillars of our organization.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="leadership-section mt-16 text-center">
                <h2 className="text-primary text-3xl font-bold mb-8">Our Leadership</h2>
                <div className="leadership-grid flex flex-wrap justify-center gap-12 mt-8">
                    <div className="leader-card bg-white p-8 rounded-lg shadow-md max-w-[300px]">
                        <div className="leader-avatar w-[150px] h-[150px] rounded-full mx-auto mb-4 overflow-hidden border-4 border-[var(--color-accent)] shadow-md">
                            <img src="/images/ceo.jpg" alt={CONFIG.leadership.ceo} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="leader-name font-heading text-2xl text-[var(--color-primary)] mb-1 font-bold">{CONFIG.leadership.ceo}</div>
                        <div className="leader-title text-[var(--color-accent)] font-semibold text-sm uppercase">CEO</div>
                    </div>
                    <div className="leader-card bg-white p-8 rounded-lg shadow-md max-w-[300px]">
                        <div className="leader-avatar w-[150px] h-[150px] rounded-full mx-auto mb-4 overflow-hidden border-4 border-[var(--color-accent)] shadow-md">
                            <img src="/images/md.jpg" alt={CONFIG.leadership.md} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="leader-name font-heading text-2xl text-[var(--color-primary)] mb-1 font-bold">{CONFIG.leadership.md}</div>
                        <div className="leader-title text-[var(--color-accent)] font-semibold text-sm uppercase">Managing Director</div>
                    </div>
                </div>
            </div>

            {/* Spacer for bottom margin matching original layout */}
            <div className="mb-16"></div>
        </>
    );
}
