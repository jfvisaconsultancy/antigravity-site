import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Work Permit Travel Insurance | Mandatory Employment Cover | JF Visa",
    description: "Get embassy-approved travel insurance for work permit applications. Meets mandatory health insurance requirements for employees traveling abroad.",
    keywords: "work permit insurance Pakistan, employment travel insurance, health insurance for foreign workers, Romania work visa insurance, Poland work visa insurance",
};

export default function WorkPermitInsurance() {
    return (
        <InsurancePageLayout
            title="Work Permit & Employment Insurance"
            visaType="Work Permit"
            description="Essential medical and accident coverage for individuals traveling abroad for employment. Our work permit insurance plans meet the specific mandatory health benchmarks required by labor departments and embassies."
            whyRequired="Most countries require foreign workers to have private health insurance that covers them from their day of arrival until their employer-sponsored health insurance becomes active. It is a critical component of the work visa file and protects the employee against high medical costs in a new country."
            embassyRequirements={[
                "Minimum medical coverage as per destination country labor laws",
                "Includes accidental death and disability benefits",
                "Repatriation of remains in case of emergency",
                "Coverage for the initial 3 to 6 months of employment"
            ]}
            minCoverage="$30,000 to $50,000 USD"
            validityRules={[
                "Policy must start on the expected date of entry into the destination country",
                "Must be valid for the duration specified by the embassy (usually 90-180 days initial cover)",
                "Policy must be accepted by the VFS or Embassy at the time of submission"
            ]}
            rejectionReasons={[
                "Insufficient accidental death benefit amount",
                "Policy not specifically mentioning employment/work category",
                "Validity period shorter than the initial visa grant duration"
            ]}
            recommendedPlan="Extended Employment Protection"
            faqs={[
                {
                    question: "Do I need this if my employer provides insurance?",
                    answer: "Yes, you typically need travel insurance for the 'gap' period—the time from your arrival until your local employer-provided insurance is officially processed and active."
                }
            ]}
        />
    );
}
