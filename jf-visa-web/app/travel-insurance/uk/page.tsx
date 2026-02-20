import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Travel Insurance for UK Visa from Pakistan | UK Embassy Approved",
    description: "Get officially accepted UK visa travel insurance. Mandatory medical cover for UK visit, study, and family visas. Instant issuance and affordable rates.",
    keywords: "UK visa insurance Pakistan, UK embassy travel insurance, medical insurance for UK visitor visa Pakistan",
};

export default function UkInsurance() {
    return (
        <InsurancePageLayout
            title="United Kingdom (UK) Visa Insurance"
            countryName="United Kingdom"
            description="Embassy-approved travel insurance for the UK. Whether you're visiting family in London or applying for a student visa, our plans meet the specific high-standard requirements of the UK Home Office."
            whyRequired="While the UK has the NHS, short-term visitors are not eligible for free healthcare. The UK Home Office highly recommends travelers to have private medical insurance to cover emergency costs and repatriation. For many visa categories, having insurance significantly strengthens your financial profile for approval."
            embassyRequirements={[
                "Medical treatment and hospitalization cover",
                "Emergency medical evacuation and repatriation of remains",
                "Coverage for the entire duration of the stay",
                "Sufficient limits for private healthcare in the UK"
            ]}
            minCoverage="$50,000 USD (Recommended)"
            validityRules={[
                "Must be active from the day of departure",
                "Policy must cover all parts of the UK (England, Scotland, Wales, N. Ireland)",
                "Should match the duration of the visit requested in the visa application"
            ]}
            rejectionReasons={[
                "Missing repatriation coverage",
                "Coverage limits too low for UK medical costs",
                "Insurance not covering the full duration of the return journey"
            ]}
            recommendedPlan="UK Elite Worldwide Plan"
            faqs={[
                {
                    question: "Is IHS different from travel insurance?",
                    answer: "Yes, IHS (Immigration Health Surcharge) is for long-term visas. For Visit Visas (6 months), you don't pay IHS and instead must have private travel insurance."
                }
            ]}
        />
    );
}
