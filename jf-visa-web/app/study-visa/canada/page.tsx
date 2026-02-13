import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in Canada | Student Visa Consultants in Pakistan",
    description: "Apply for Canadian student visa with expert guidance. SDS and Non-SDS streams. Achieve your dream of studying in Canada.",
};

export default function CanadaStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="Canada"
            visaType="Study Visa (SDS/Non-SDS)"
            heroImage="/images/service_canada.png"
            overview="Canada is known for its high-quality education and welcoming immigration policies. The Post-Graduation Work Permit (PGWP) allows graduates to gain valuable work experience, which can lead to permanent residency (PR)."
            eligibility={[
                "Acceptance Letter from a Designated Learning Institution (DLI)",
                "Proof of English Proficiency (IELTS Academic 6.0 bands)",
                "Guaranteed Investment Certificate (GIC) of CAD 20,635",
                "Tuition Fee Payment (1st Year)",
                "Medical Exam Results"
            ]}
            documents={[
                "Valid Passport",
                "Offer Letter from DLI",
                "IELTS/PTE Score Card",
                "GIC Certificate",
                "Tuition Fee Receipt",
                "Statement of Purpose (SOP)",
                "Police Clearance Certificate"
            ]}
            bankStatement="For SDS stream, GIC of CAD 20,635 + 1st year fee payment is mandatory. For Non-SDS, additional liquid funds and sponsorship proof may be required."
            processingTime="20 Days (SDS) to 8 Weeks (Non-SDS)"
            fees={{
                government: "CAD 150 (Visa Fee) + CAD 85 (Biometrics)",
                service: "Consultancy Fee varies. Contact for details."
            }}
            processSteps={[
                { title: "Choose DLI & Program", description: "Select a Designated Learning Institution and apply for admission." },
                { title: "Receive LOA", description: "Get Letter of Acceptance (LOA) from the college/university." },
                { title: "Open GIC Account", description: "Open GIC account with Canadian bank and transfer funds." },
                { title: "Pay Tuition Fee", description: "Pay first year tuition fee directly to the DLI." },
                { title: "Apply for Visa", description: "Submit study permit application online." }
            ]}
            faqs={[
                { question: "Can I bring my spouse?", answer: "Yes, your spouse can apply for an Open Work Permit." },
                { question: "What is SDS?", answer: "Student Direct Stream (SDS) is an expedited study permit processing program for legal residents of Pakistan and other select countries." },
                { question: "Is PTE accepted for SDS?", answer: "Yes, as of August 2023, PTE Academic (overall 60) is accepted for SDS applications." }
            ]}
        />
    );
}
