import { Metadata } from 'next';
import InsurancePageLayout from '@/components/InsurancePageLayout';

export const metadata: Metadata = {
    title: "Student Travel Insurance for UK, USA, Europe & Canada | JF Visa",
    description: "Specialized student travel insurance for long-term study visa applications. Meets mandatory university and embassy medical coverage requirements worldwide.",
    keywords: "student travel insurance Pakistan, UK study visa insurance, USA student insurance, medical insurance for students abroad",
};

export default function StudentVisaInsurance() {
    return (
        <InsurancePageLayout
            title="Student Study Visa Insurance"
            visaType="Study Visa"
            description="Comprehensive long-term medical protection designed specifically for international students. Our student plans provide the extensive coverage required for university enrollments and visa approvals."
            whyRequired="Most countries require international students to have health insurance for the entire first year of their studies. Unlike regular travel insurance, student plans often include coverage for outpatient care and recurring medical needs, which are mandatory for many university health clearances."
            embassyRequirements={[
                "Long-term coverage (usually 3 months, 6 months, or 1 year)",
                "Meets University-specific medical coverage limits",
                "Includes emergency medical evacuation and repatriation",
                "Accepted for CAS (UK) or I-20 (USA) health requirements"
            ]}
            minCoverage="$50,000 to $100,000 USD"
            validityRules={[
                "Should start from the day of departure to the study destination",
                "Must be renewable from within the destination country if required",
                "Must cover the initial period until the student is eligible for local health systems (like NHS in UK)"
            ]}
            rejectionReasons={[
                "Insufficient coverage duration for the study program",
                "Missing repatriation of remains coverage",
                "Policy not meeting the specific university health insurance waiver requirements"
            ]}
            recommendedPlan="1-Year Comprehensive Student Cover"
            faqs={[
                {
                    question: "Do I need insurance if the UK has NHS?",
                    answer: "Yes, even for the UK, you typically need travel insurance for the initial period of travel and stay until your IHS (Immigration Health Surcharge) activation is finalized and you are fully registered."
                }
            ]}
        />
    );
}
