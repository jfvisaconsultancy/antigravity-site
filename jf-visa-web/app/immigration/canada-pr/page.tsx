import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Canada Immigration Consultants | Express Entry PR | PNP",
    description: "Immigrate to Canada with your family. Expert consultation for Express Entry, PNP, and Family Sponsorship. Maximize your CRS score.",
};

export default function CanadaPRPage() {
    return (
        <CountryPageLayout
            countryName="Canada"
            visaType="Immigration (PR)"
            heroImage="/images/service_canada.png"
            overview="Canada offers one of the most welcoming immigration systems in the world. Through Express Entry and Provincial Nominee Programs (PNP), skilled workers can obtain Permanent Residency (PR) and eventually citizenship."
            eligibility={[
                "Age (Maximum points for 20-29)",
                "Education (Masters/PhD preferred)",
                "Work Experience (Minimum 1 year skilled)",
                "Language Proficiency (IELTS/CELPIP/TEF)",
                "Adaptability (Siblings/Spouse/Canadian Education)"
            ]}
            documents={[
                "Valid Passport",
                "ECA Report (WES/ICES)",
                "IELTS/CELPIP Score Card",
                "Work Experience Letters",
                "Bank Statement (Settlement Funds)",
                "Police Clearance Certificate",
                "Medical Examination"
            ]}
            bankStatement="Proof of settlement funds based on family size (e.g., approx CAD 14,690 for a single applicant). These funds must be unencumbered."
            processingTime="6 to 12 Months (Express Entry)"
            fees={{
                government: "CAD 1,525 (single) / CAD 3,050 (couple)",
                service: "Call for assessment and package."
            }}
            processSteps={[
                { title: "Profile Evaluation", description: "Assessing your CRS score and eligibility." },
                { title: "ECA & IELTS", description: "Obtaining Education Credential Assessment and language test results." },
                { title: "Express Entry Profile", description: "Creating profile in the IRCC pool." },
                { title: "ITA", description: "Receiving Invitation to Apply based on CRS cut-off." },
                { title: "PR Application", description: "Submitting full application with all documents." },
                { title: "PPR & COPR", description: "Passport Request and Confirmation of Permanent Residence." }
            ]}
            faqs={[
                { question: "What is a good CRS score?", answer: "Historically, scores above 480-500 have been competitive, but category-based draws target specific professions with lower scores." },
                { question: "Can I apply without a job offer?", answer: "Yes, a job offer is not mandatory for Express Entry FSW program." },
                { question: "Can I sponsor my parents?", answer: "Yes, PR holders can sponsor parents and grandparents under the PGP program." }
            ]}
        />
    );
}
