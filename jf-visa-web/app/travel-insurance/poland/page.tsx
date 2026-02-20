import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Travel Insurance for Poland Visa from Pakistan | Schengen Compliant",
    description: "Affordable €30,000 travel insurance for Poland work and visit visas. Instant policy issuance, embassy-approved, and valid for all Schengen states.",
    keywords: "Poland visa insurance Pakistan, Poland work permit insurance, travel insurance for Warsaw, Schengen insurance Poland",
};

export default function PolandInsurance() {
    return (
        <InsurancePageLayout
            title="Poland Visa Travel Insurance"
            countryName="Poland"
            description="Embassy-approved travel insurance for Poland, a top destination for Pakistani workers and travelers. Our plans are specifically designed to meet the mandatory €30,000 requirement for Poland Schengen and Work Visa applications."
            whyRequired="For anyone applying for a Poland visa (National D-type or Schengen C-type), valid travel insurance is a non-negotiable requirement. The Polish Consulate verifies the policy to ensure it covers medical emergencies and repatriation for the entire duration of the stay."
            embassyRequirements={[
                "Minimum coverage of €30,000",
                "Must cover all Schengen member states",
                "Includes emergency medical treatment and hospitalization",
                "Mandatory repatriation coverage"
            ]}
            minCoverage="€30,000"
            validityRules={[
                "Must be valid from the date of flight departure",
                "Duration must match or exceed the requested visa period",
                "Policy must be signed and stamped by the insurance company"
            ]}
            rejectionReasons={[
                "Coverage not valid for 'All Schengen States'",
                "Policy from a non-recognized insurance provider",
                "Missing repatriation of remains coverage"
            ]}
            recommendedPlan="€50,000 Platinum Plan"
            faqs={[
                {
                    question: "Is this accepted for a Poland Work Permit?",
                    answer: "Yes, our policies meet the specific insurance requirements for Poland National D-type (Work) visa applications."
                }
            ]}
        />
    );
}
