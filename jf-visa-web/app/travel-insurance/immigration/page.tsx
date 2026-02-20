import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Immigration Travel Insurance | PR & Settlement Medical Cover | JF Visa",
    description: "Mandatory travel insurance for immigration and PR applicants. Secure your resettlement with embassy-approved health coverage for Canada, Australia, and UK.",
    keywords: "immigration travel insurance Pakistan, PR visa insurance, Canada PR insurance, Australia PR insurance, UK settlement insurance",
};

export default function ImmigrationInsurance() {
    return (
        <InsurancePageLayout
            title="Immigration & Settlement Insurance"
            visaType="Immigration"
            description="Specialized medical insurance for permanent residency and settlement visa applicants. Ensure your transition to a new country is smooth and compliant with immigration health requirements."
            whyRequired="Immigration authorities require new settlers to have medical coverage for the initial period of their arrival. This ensures that new residents are not dependent on the public health system before they contribute through taxes or fulfill residency waiting periods (like OHIP in Canada)."
            embassyRequirements={[
                "Large coverage limits (often $50,000 to $100,000+)",
                "Mandatory accidental and emergency medical protection",
                "Repatriation and emergency evacuation cover",
                "Accepted by IRCC (Canada), Home Office (UK), and DHA (Australia)"
            ]}
            minCoverage="$50,000 to $100,000 USD"
            validityRules={[
                "Must cover the first 3 to 6 months of arrival",
                "Should ideally be a 'Waiting Period' policy for PR holders",
                "Must be active as soon as you land at the destination airport"
            ]}
            rejectionReasons={[
                "Low coverage limits not meeting PR standards",
                "Policy excluding pre-existing conditions (where required to be included)",
                "Missing repatriation coverage which is a core PR visa requirement"
            ]}
            recommendedPlan="Resettlement Gold Plan"
            faqs={[
                {
                    question: "Is this required for Canada PR landing?",
                    answer: "Yes, while Canada provides public healthcare, most provinces have a 3-month waiting period for new immigrants. Private insurance is highly recommended and often requested during the landing process."
                }
            ]}
        />
    );
}
