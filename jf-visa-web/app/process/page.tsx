import Link from "next/link";

export default function Process() {
    return (
        <>
            <style>{`
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 4rem auto;
            padding: 0 2rem;
        }

        .timeline::after {
            content: '';
            position: absolute;
            width: 4px;
            background-color: var(--color-accent);
            top: 0;
            bottom: 0;
            left: 50%;
            margin-left: -2px;
        }

        .timeline-item {
            padding: 10px 40px;
            position: relative;
            background-color: inherit;
            width: 50%;
        }

        .timeline-item::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            right: -10px;
            background-color: white;
            border: 4px solid var(--color-accent);
            top: 25px;
            border-radius: 50%;
            z-index: 1;
        }

        .left {
            left: 0;
        }

        .right {
            left: 50%;
        }

        .right::after {
            left: -10px;
        }

        .timeline-content {
            padding: 20px 30px;
            background-color: white;
            position: relative;
            border-radius: 6px;
            box-shadow: var(--shadow-sm);
        }

        @media (max-width: 768px) {
            .timeline::after {
                left: 31px;
            }

            .timeline-item {
                width: 100%;
                padding-left: 70px;
                padding-right: 25px;
            }

            .timeline-item::after {
                left: 21px;
            }

            .right {
                left: 0%;
            }
        }
      `}</style>

            <div className="page-header">
                <div className="container">
                    <h1>Our Process</h1>
                    <p>A simple step-by-step guide to your visa success</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container timeline">

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">1. Initial Consultation</h3>
                            <p>Meet with our experts to discuss your goals, preferences, and eligibility. We assess your profile for free.</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">2. University/Job Application</h3>
                            <p>We help you select the right university or apply for jobs. We handle the admission application process entirely.</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">3. Documentation</h3>
                            <p>Gathering the right documents is crucial. We guide you on financial proofs, educational certificates, and more.</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">4. Visa Filing</h3>
                            <p>Our team expertly fills your visa application forms, ensuring zero errors to maximize success chances.</p>
                        </div>
                    </div>

                    <div className="timeline-item left">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">5. Interview Prep</h3>
                            <p>For countries like the USA, the interview is key. We conduct mock interviews to build your confidence.</p>
                        </div>
                    </div>

                    <div className="timeline-item right">
                        <div className="timeline-content">
                            <h3 className="text-primary text-xl font-bold mb-2">6. Departure Briefing</h3>
                            <p>Visa approved! We help you with travel arrangements and pre-departure guidance.</p>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-16">
                    <Link href="/contact" className="btn btn-primary">Start Your Process Now</Link>
                </div>
            </section>
        </>
    );
}
