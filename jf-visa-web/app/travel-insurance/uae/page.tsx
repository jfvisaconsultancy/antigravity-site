import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Travel Insurance for UAE Visit Visa from Pakistan | Instant Policy",
    description: "Get mandatory travel insurance for UAE / Dubai visit visa. Instant issuance, COVID-19 coverage included. Affordable rates for families and tourists.",
    keywords: "UAE visa insurance Pakistan, Dubai transit visa insurance, UAE visit visa health insurance, covid insurance Dubai",
};

export default function UaeInsurance() {
    return (
        <InsurancePageLayout
            title="UAE Visit Visa Travel Insurance"
            countryName="UAE (Dubai/Abu Dhabi)"
            description="Fast and affordable travel insurance for your trip to the United Arab Emirates. Our UAE plans include the mandatory health coverage required by immigration for entry into Dubai, Abu Dhabi, and other emirates."
            whyRequired="The UAE government requires all visitors on a visit or tourist visa to have valid health insurance. This insurance is verified upon arrival and is mandatory for the visa issuance process to cover any potential medical emergencies, including COVID-19 related hospitalization."
            embassyRequirements={[
                "Emergency medical treatment coverage",
                "Hospitalization and surgery costs",
                "COVID-19 medical expenses",
                "Valid for the entire duration of the UAE visit visa"
            ]}
            minCoverage="$30,000 (Recommended)"
            validityRules={[
                "Must cover the full 30, 60, or 90 days stay",
                "Policy must be digital and easily verifiable at immigration",
                "Coverage should include all emirates of the UAE"
            ]}
            rejectionReasons={[
                "Policy not covering COVID-19 (where mandatory)",
                "Dates not aligned with the visa duration",
                "Unrecognized insurer for UAE immigration"
            ]}
            recommendedPlan="UAE Express Travel Plan"
            faqs={[
                {
                    question: "Do I get the policy instantly?",
                    answer: "Yes, UAE policies are typically issued within 2-5 minutes and delivered to your WhatsApp for quick printing."
                }
            ]}
        />
    );
}
