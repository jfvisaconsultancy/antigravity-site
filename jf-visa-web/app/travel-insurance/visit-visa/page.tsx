import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Visit Visa Travel Insurance | UK, USA, Canada & UAE | JF Visa",
    description: "Get affordable visit visa travel insurance for any destination. Fast policy issuance for family visits, tourism, and business trips. Accepted by all embassies.",
    keywords: "visit visa insurance Pakistan, tourist insurance, family travel insurance Pakistan, UK visit visa insurance, USA visit insurance",
};

export default function VisitVisaInsurance() {
    return (
        <InsurancePageLayout
            title="Visit & Tourist Visa Insurance"
            visaType="Visit Visa"
            description="Flexible travel protection for tourists and family visitors. Whether you're heading to the UK, Canada, USA, or the Middle East, our visit visa plans ensure you stay protected against unexpected medical costs."
            whyRequired="International medical costs can be extremely high. Embassies require visit visa insurance to ensure that travelers have the financial means to cover any medical emergencies without burdening the host country's public healthcare system."
            embassyRequirements={[
                "Medical treatment and hospitalization coverage",
                "Accidental death and disability coverage",
                "Emergency medical evacuation and repatriation",
                "Loss of passport and checked baggage (optional but recommended)"
            ]}
            minCoverage="$30,000 to $50,000 USD"
            validityRules={[
                "Must cover the entire duration of the stay specified in the visa application",
                "Required for all ages (infants to seniors)",
                "Policy must be active before departure from Pakistan"
            ]}
            rejectionReasons={[
                "Incorrect traveler details (name/passport number mismatch)",
                "Policy duration shorter than the return flight date",
                "Excluding pre-existing conditions where mandatory"
            ]}
            recommendedPlan="Standard Worldwide Coverage"
            faqs={[
                {
                    question: "Is travel insurance mandatory for UAE visit visa?",
                    answer: "Yes, the UAE government requires all visitors to have health insurance that covers COVID-19 and emergency medical expenses during their stay."
                }
            ]}
        />
    );
}
