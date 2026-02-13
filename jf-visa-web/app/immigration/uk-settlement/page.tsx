import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "UK Settlement Visa | Spouse Visa | EUSS Consultants",
    description: "Join your family in the UK. Expert assistance for Spouse Visa, Fiance Visa, and EUSS Family Permit. 98% success rate.",
};

export default function UKSettlementPage() {
    return (
        <CountryPageLayout
            countryName="United Kingdom"
            visaType="Settlement / Spouse Visa"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="UK Family Visas allow you to join your partner, parent, or child who is settled in the UK. We specialize in Spouse Visas, Fiance Visas, and EUSS Family Permits, ensuring you meet the strict financial and relationship requirements."
            eligibility={[
                "Partner must be British Citizen or Settled Person",
                "Genuine and Subsisting Relationship",
                "Minimum Income Requirement (£29,000 from April 2024)",
                "Adequate Accommodation",
                "A1 English Language Requirement"
            ]}
            documents={[
                "Valid Passports (Applicant & Sponsor)",
                "Marriage Certificate",
                "Proof of Relationship (Photos, Chats, Calls)",
                "Sponsor's Financial Docs (Payslips/P60/Bank Statements)",
                "Accommodation Proof (Tenancy Agreement/Property Deed)",
                "English Language Certificate (IELTS Life Skills A1)",
                "TB Test Certificate"
            ]}
            bankStatement="Sponsor must meet financial requirement (e.g., annual income of £29,000). Savings can be used to meet shortfall (requires holding £88,500 for non-working applicants)."
            processingTime="3 to 6 Months (Standard) | 30 Working Days (Priority)"
            fees={{
                government: "£1,846 (Overseas) + IHS Surcharge",
                service: "Call for package details."
            }}
            processSteps={[
                { title: "Initial Assessment", description: "Reviewing eligibility against financial threshold." },
                { title: "Document Compilation", description: "Gathering and organizing relationship + financial evidence." },
                { title: "Online Application", description: "Completing Appendix FM application form." },
                { title: "Biometrics", description: "Attending appointment at VFS Global." },
                { title: "Interview", description: "Spouse interview (if requested by ECO/ECM)." }
            ]}
            faqs={[
                { question: "Can I switch from visit to spouse visa?", answer: "Generally, you cannot switch from a visit visa to a spouse visa within the UK; you must apply from your home country." },
                { question: "What if I don't meet income requirement?", answer: "You might be able to use cash savings or other sources of income (pension, property income) to meet the requirement." },
                { question: "Is English test mandatory for spouse?", answer: "Yes, applicant needs A1 level English for initial entry." }
            ]}
        />
    );
}
