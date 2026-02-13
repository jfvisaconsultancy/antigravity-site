import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "UK Visit Visa Consultants | Standard Visitor Visa",
    description: "Apply for UK Standard Visitor Visa with expert documentation support. Visit family, friends, or for tourism purposes. 98% approval rate.",
};

export default function UKVisitVisaPage() {
    return (
        <CountryPageLayout
            countryName="United Kingdom"
            visaType="Visit Visa"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="The UK Standard Visitor Visa allows you to visit the UK for tourism, business, study (courses up to 6 months), and other permitted activities. We ensure your application is strong and meets all immigration rules."
            eligibility={[
                "Genuine intent to leave the UK at the end of your visit",
                "Sufficient funds to support yourself during your trip",
                "Ability to pay for your return or onward journey",
                "Proof of business or other activities (if applicable)"
            ]}
            documents={[
                "Valid Passport",
                "Bank Statement (6 months)",
                "Employment Letter / Business Registration",
                "Salary Slips (if employed)",
                "Invitation Letter (if visiting family/friends)",
                "Hotel Booking & Flight Itinerary",
                "Property Documents (optional but recommended)"
            ]}
            bankStatement="Proof of sufficient funds for your trip. Recommended to show consistent closing balance and salary transfers."
            processingTime="3 to 4 Weeks"
            fees={{
                government: "£115 (approx. for 6 months)",
                service: "Consultancy Fee varies. Contact for details."
            }}
            processSteps={[
                { title: "Document Assessment", description: "Review of financial and personal documents." },
                { title: "Online Application", description: "Filling out the detailed visa application form." },
                { title: "Appointment Booking", description: "Scheduling biometric appointment at the Visa Application Center." },
                { title: "Submission", description: "Submission of passport and biometrics." },
                { title: "Decision", description: "Passport collection upon decision." }
            ]}
            faqs={[
                { question: "Can I work on a visit visa?", answer: "No, you cannot do paid or unpaid work." },
                { question: "How long can I stay?", answer: "Usually up to 6 months per visit." },
                { question: "Is an interview required?", answer: "Generally no, but UKVI may request one in rare cases." }
            ]}
        />
    );
}
