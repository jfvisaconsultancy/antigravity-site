import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in UK | Student Visa Consultants in Pakistan",
    description: "Get expert guidance for UK Study Visa. 98% success rate for Bachelors, Masters, and PhD programs. No IELTS options available.",
};

export default function UKStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="United Kingdom"
            visaType="Study Visa"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="The UK is home to some of the world's oldest and most prestigious universities. A UK degree is recognized globally and offers excellent career prospects. With the introduction of the Graduate Route (PSW), students can now stay and work in the UK for 2 years after completing their degree."
            eligibility={[
                "Confirmed Offer Letter (CAS) from a UK University",
                "Proof of English Proficiency (IELTS/PTE or Waiver)",
                "Sufficient Funds to cover tuition and living expenses",
                "Tuberculosis (TB) Test Results",
                "Valid Travel Document (Passport)"
            ]}
            documents={[
                "Academic Transcripts & Degrees",
                "Valid Passport",
                "IELTS/PTE Certificate (if applicable)",
                "Bank Statement (28 days mature)",
                "TB Test Certificate from IOM",
                "Statement of Purpose (SOP)",
                "CAS Statement"
            ]}
            bankStatement="You must show you have enough money to pay for your course and support yourself. For London, approx. £1,334 per month (for up to 9 months). Outside London, approx. £1,023 per month. Funds must be held for 28 consecutive days."
            processingTime="3 to 4 Weeks"
            fees={{
                government: "£490 (Visa Fee) + IHS Surcharge",
                service: "Consultancy Fee varies. Contact for details."
            }}
            processSteps={[
                { title: "University Selection", description: "We help you choose the right university and course based on your profile and career goals." },
                { title: "Admission Application", description: "Submission of admission application with SOP and references." },
                { title: "CAS Letter", description: "Upon acceptance and deposit payment, the university issues the Confirmation of Acceptance for Studies (CAS)." },
                { title: "Visa Application", description: "Targeted visa application filing with financial evidence and TB test." },
                { title: "Biometrics & Interview", description: "Submission of biometrics at the Visa Application Center. Interview preparation if required." }
            ]}
            faqs={[
                { question: "Can I work while studying in the UK?", answer: "Yes, students on a Tier 4 visa can work 20 hours per week during term time and full-time during holidays." },
                { question: "Is IELTS mandatory for UK?", answer: "Not always. Many universities accept students with good English marks in Intermediate/A-Levels or offer internal tests." },
                { question: "What is the Graduate Route?", answer: "It allows international students to stay in the UK and work, or look for work, for 2 years (3 years for PhD) after graduating." }
            ]}
        />
    );
}
