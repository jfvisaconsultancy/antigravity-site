import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Travel Insurance for Italy Visa from Pakistan | Schengen Approved",
    description: "Official Italy visa travel insurance for Schengen applications. Low rates, instant policy, and guaranteed embassy acceptance for Italian visa applicants.",
    keywords: "Italy visa insurance Pakistan, Italian embassy travel insurance, Schengen insurance for Italy, business travel insurance Italy",
};

export default function ItalyInsurance() {
    return (
        <InsurancePageLayout
            title="Italy Visa Travel Insurance"
            countryName="Italy"
            description="Premium travel insurance for your Italian dream. Whether you're visiting Rome for tourism or Milan for business, our policies ensure your Italy visa application is compliant and secure."
            whyRequired="Italy, as a core Schengen member, requires all visa applicants to have medical insurance that covers any unforeseen medical expenses in the Eurozone. The Italian consulate verifies the policy to ensure the traveler won't face financial hardship during their trip."
            embassyRequirements={[
                "Minimum medical cover of €30,000",
                "Coverage for 'All Schengen States'",
                "Mandatory repatriation and emergency medical evacuation",
                "Accepted by Italian Consular offices in Islamabad and Karachi"
            ]}
            minCoverage="€30,000"
            validityRules={[
                "Policy must start on the day of departure from Pakistan",
                "Must cover the total number of days you intend to stay in the Schengen area",
                "Should include coverage for the return flight date"
            ]}
            rejectionReasons={[
                "Excluding emergency medical repatriation",
                "Policy not issued by an approved insurer",
                "Dates not aligned with the visa request"
            ]}
            recommendedPlan="€50,000 Comprehensive Italy Plan"
            faqs={[
                {
                    question: "Can I use this for an Italy Business Visa?",
                    answer: "Absolutely. Our plans are designed for both tourism and business visa categories and meet all requirements for Italian work and business trips."
                }
            ]}
        />
    );
}
