import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Australia PR Consultants | Skilled Migration Subclass 189/190/491",
    description: "Permanent Residency in Australia for skilled workers. Apply for Subclass 189, 190, or 491 visas. Maximize your points with expert help.",
};

export default function AustraliaPRPage() {
    return (
        <CountryPageLayout
            countryName="Australia"
            visaType="Skilled Migration (PR)"
            heroImage="/images/service_australia.jpg"
            overview="Australia's General Skilled Migration (GSM) program allows skilled workers to live and work permanently in Australia. Visas like Subclass 189, 190, and 491 are points-tested and provide a pathway to citizenship."
            eligibility={[
                "Age (under 45 years)",
                "Occupation on Skilled Occupation List (SOL)",
                "Positive Skills Assessment",
                "Competent English (IELTS/PTE)",
                "Minimum 65 Points on Points Test"
            ]}
            documents={[
                "Valid Passport",
                "Skills Assessment Outcome Letter",
                "English Test Report (IELTS/PTE)",
                "Educational Degrees & Transcripts",
                "Work Experience Letters",
                "Police Clearance Certificate"
            ]}
            bankStatement="Proof of funds varies by state for Subclass 190/491 nomination. For Subclass 189, specific settlement funds are not mandatory but recommended."
            processingTime="8 to 12 Months (varies by subclass)"
            fees={{
                government: "AUD 4,640 (Main Applicant)",
                service: "Call for assessment and package."
            }}
            processSteps={[
                { title: "Eligibility Check", description: "Checking points against the 65-point threshold." },
                { title: "Skills Assessment", description: "Applying to relevant assessing authority (e.g., Engineers Australia, ACS, VETASSESS)." },
                { title: "English Test", description: "Appearing for IELTS or PTE Academic." },
                { title: "EOI Submission", description: "Submitting Expression of Interest in SkillSelect." },
                { title: "Invitation to Apply", description: "Receiving ITA from Department of Home Affairs." },
                { title: "Visa Filing", description: "Lodging final visa application within 60 days of ITA." }
            ]}
            faqs={[
                { question: "What is the difference between 189 and 190?", answer: "Subclass 189 is an independent visa (federal), while 190 requires state nomination and grants 5 extra points." },
                { question: "Is PTE accepted for PR?", answer: "Yes, PTE Academic is accepted for all skilled migration visas." },
                { question: "Can I include my family?", answer: "Yes, spouse and dependent children can be included in the PR application." }
            ]}
        />
    );
}
