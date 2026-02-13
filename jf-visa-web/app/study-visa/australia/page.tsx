import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in Australia | Student Visa 500 | Consultants in Pakistan",
    description: "Get expert help for Australia Student Visa (Subclass 500). High success rate for G8 and Level 1 Universities. Check requirements for 2024.",
};

export default function AustraliaStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="Australia"
            visaType="Study Visa (Subclass 500)"
            heroImage="/images/service_australia.jpg"
            overview="Australia offers a world-class education system with a relaxed lifestyle. International students can gain qualifications that are recognized globally and enjoy post-study work rights of up to 4-6 years depending on the location and degree level."
            eligibility={[
                "Confirmation of Enrolment (CoE) from an Australian provider",
                "Evidence of English Language Proficiency (IELTS/PTE)",
                "Genuine Temporary Entrant (GTE) statement",
                "Overseas Student Health Cover (OSHC)",
                "Financial Capacity Evidence"
            ]}
            documents={[
                "Valid Passport",
                "Academic Transcripts & Certificates",
                "IELTS/PTE Score Card",
                "Work Experience Letters (if any)",
                "Financial Documents (Bank Statement/Loan)",
                "Statement of Purpose (GTE)",
                "Medical Examination Report"
            ]}
            bankStatement="You must demonstrate access to funds for 1 year of tuition fees + living costs (approx. AUD 24,505) + travel expenses. Funds should be genuinely available."
            processingTime="2 to 8 Weeks"
            fees={{
                government: "AUD 710 (Base Application Charge)",
                service: "Competitive service charges. Contact for quote."
            }}
            processSteps={[
                { title: "Apply for Admission", description: "Submit application to chosen university/college." },
                { title: "Receive Offer & Pay Fees", description: "Receive Letter of Offer, pay initial tuition deposit and OSHC." },
                { title: "Get CoE", description: "University issues Confirmation of Enrolment (CoE)." },
                { title: "Visa Filing", description: "Lodge visa application online with all supporting documents." },
                { title: "Biometrics & Medical", description: "Provide biometrics and undergo health check." }
            ]}
            faqs={[
                { question: "Can I bring my spouse?", answer: "Yes, you can include your partner and dependent children in your application." },
                { question: "How many hours can I work?", answer: "Currently, student visa holders can work up to 48 hours per fortnight during study terms and unlimited hours during breaks." },
                { question: "Is PTE accepted for Australia?", answer: "Yes, PTE Academic is widely accepted by Australian universities and the Department of Home Affairs." }
            ]}
        />
    );
}
