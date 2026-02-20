import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Travel Insurance for Germany Visa from Pakistan | €30,000 Cover",
    description: "Get embassy-approved German visa travel insurance. Mandatory €30,000 coverage for Schengen visa applications. Instant issuance, accepted by German Consulate.",
    keywords: "Germany visa insurance Pakistan, German embassy travel insurance, Schengen insurance for Germany, travel insurance for Germany study visa",
};

export default function GermanyInsurance() {
    return (
        <InsurancePageLayout
            title="Germany Visa Travel Insurance"
            countryName="Germany"
            description="Embassy-approved travel insurance specifically optimized for German visa categories (Schengen, Student, National Visa). Our plans meet all the latest German Consulate requirements in Islamabad and Karachi."
            whyRequired="The German Embassy is strict about travel insurance. Your policy must be issued by a recognized company and must cover all Schengen states with a minimum of €30,000. For students heading to Germany, specific health insurance (Sperrkonto-related) or incoming insurance is mandatory."
            embassyRequirements={[
                "Minimum coverage of €30,000",
                "Valid for all Schengen member states",
                "Covers emergency medical, hospital treatment, and repatriation",
                "Must include a 15-day grace period (extension)"
            ]}
            minCoverage="€30,000 (Mandatory)"
            validityRules={[
                "Must cover the travel period plus 15 additional days",
                "Policy must be presented in original and copy at the consulate",
                "Must cover the entire duration of stay for D-type visas"
            ]}
            rejectionReasons={[
                "Missing the 15-day additional grace period",
                "Policy from a company not on the German Embassy's approved list",
                "Insufficient coverage for the National Visa duration"
            ]}
            recommendedPlan="€50,000 Premium Schengen Plan"
            faqs={[
                {
                    question: "Does the German Embassy accept this policy?",
                    answer: "Yes, our policies are issued through embassy-approved providers and are 100% accepted by German consular offices across Pakistan."
                }
            ]}
        />
    );
}
