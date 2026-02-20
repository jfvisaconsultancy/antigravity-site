import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Schengen Visa Travel Insurance Pakistan | Embassy Approved €30,000 Cover",
    description: "Get mandatory €30,000 Schengen visa travel insurance for Germany, Italy, France & all 27+ countries. Instant policy issuance, accepted by all Schengen embassies.",
    keywords: "Schengen travel insurance Pakistan, Germany visa insurance, Italy visa insurance, €30000 travel insurance Pakistan, embassy approved insurance",
};

export default function SchengenVisaInsurance() {
    return (
        <InsurancePageLayout
            title="Schengen Visa Travel Insurance"
            visaType="Schengen Visa"
            description="Mandatory embassy-approved medical coverage for travel to any of the 27+ Schengen member states. Our policies meet the strict €30,000 minimum requirement with zero deductible options."
            whyRequired="For any Schengen visa application, having valid travel insurance is not optional—it is a legal requirement. The policy ensures that the host country is not responsible for your medical or repatriation costs during your stay. Without a policy that meets the specific Schengen criteria, your visa will be rejected immediately."
            embassyRequirements={[
                "Minimum medical coverage of €30,000 (roughly $34,000 USD)",
                "Must be valid for the entire duration of the requested visa",
                "Must cover all member states of the Schengen Area",
                "Must cover emergency medical, hospitalization, and repatriation",
                "Must be issued by an embassy-approved insurance provider"
            ]}
            minCoverage="€30,000 (Minimum Required)"
            validityRules={[
                "Must cover the exact period of the trip (from entry to exit)",
                "Policy should ideally include an extra 15-day grace period as per recent embassy guidelines",
                "Must be presented at the border upon request"
            ]}
            rejectionReasons={[
                "Coverage amount less than €30,000",
                "Policy not covering 'All Schengen States'",
                "Insurance not covering repatriation of remains",
                "Validity dates not matching the flight itinerary",
                "Policy issued by an blacklisted/unrecognized provider"
            ]}
            recommendedPlan="€50,000 Platinum Coverage"
            faqs={[
                {
                    question: "Can I use this for any Schengen country embassy?",
                    answer: "Yes, our policies are accepted by the German Embassy, Italian Embassy, Spanish Embassy, Polish Embassy, and all other Schengen member state consulates in Pakistan."
                },
                {
                    question: "What if my visa is rejected?",
                    answer: "In the unfortunate case of visa rejection, you can often apply for a refund of the insurance premium (subject to terms) by providing the official rejection letter before the policy start date."
                }
            ]}
        />
    );
}
