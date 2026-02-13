import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in USA | F1 Visa Consultants | Scholarships",
    description: "Apply for USA Study Visa (F1). Expert guidance for university selection, I-20, and visa interview preparation. High success rate.",
};

export default function USAStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="USA"
            visaType="Study Visa (F1)"
            heroImage="/images/service_usa_visa_1769526245585.png"
            overview="The USA is the top destination for international students, offering world-class education and diverse cultural experiences. The F1 visa allows you to study at accredited US institutions."
            eligibility={[
                "Acceptance at a SEVP-approved school",
                "Form I-20 issued by the institution",
                "Payment of SEVIS I-901 fee",
                "Proof of financial support",
                "Strong ties to home country"
            ]}
            documents={[
                "Valid Passport",
                "Form I-20",
                "DS-160 Confirmation Page",
                "SEVIS Fee Receipt",
                "Financial Documents (Bank Statement/Affidavit)",
                "Academic Transcripts",
                "Standardized Test Scores (SAT/GRE/TOEFL)"
            ]}
            bankStatement="Proof of liquid funds covering at least 1 year of tuition and living expenses as stated on the I-20."
            processingTime="Variable (Appointment-based)"
            fees={{
                government: "$185 (Visa Fee) + $350 (SEVIS Fee)",
                service: "Competitive rates. Contact for details."
            }}
            processSteps={[
                { title: "University Application", description: "Applying to US universities and receiving acceptance." },
                { title: "Receive I-20", description: "Getting the Form I-20 from the university." },
                { title: "Pay SEVIS Fee", description: "Paying the I-901 SEVIS fee online." },
                { title: "DS-160 & Appointment", description: "Filling DS-160 form and booking visa interview." },
                { title: "Visa Interview", description: "Attending the interview at the US Embassy/Consulate." }
            ]}
            faqs={[
                { question: "Can I work on F1 visa?", answer: "Yes, up to 20 hours per week on-campus during term." },
                { question: "Is interview difficult?", answer: "The interview is crucial. We prepare you to answer questions confidently." },
                { question: "What is OPT?", answer: "Optional Practical Training (OPT) allows you to work for 1-3 years after graduation." }
            ]}
        />
    );
}
