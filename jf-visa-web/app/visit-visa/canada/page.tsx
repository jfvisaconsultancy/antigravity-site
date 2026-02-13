import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Canada Visit Visa Consultants | TRV Application",
    description: "Apply for Canada Visitor Visa (TRV). Expert file preparation to demonstrate strong ties to home country. High success rate.",
};

export default function CanadaVisitVisaPage() {
    return (
        <CountryPageLayout
            countryName="Canada"
            visaType="Visit Visa (TRV)"
            heroImage="/images/service_canada.png"
            overview="A Temporary Resident Visa (TRV) allows you to visit Canada for tourism, family, or business. We ensure your application highlights your financial stability and ties to your home country."
            eligibility={[
                "Valid Travel Document",
                "Good Health",
                "No Criminal or Immigration-related convictions",
                "Ties to Home Country (Job, Family, Assets)",
                "Sufficient Funds"
            ]}
            documents={[
                "Valid Passport",
                "Bank Statement (Last 4-6 months)",
                "Employment Letter / Business Proof",
                "Travel History",
                "Invitation Letter (if applicable)",
                "Hotel Booking & Flight Itinerary"
            ]}
            bankStatement="Consistent balance and transaction history. Large unexplained deposits can lead to refusal."
            processingTime="30 to 60 Days (varies)"
            fees={{
                government: "CAD 100 (Visa) + CAD 85 (Biometrics)",
                service: "Competitive rates. Contact for details."
            }}
            processSteps={[
                { title: "Document Review", description: "Assessing your profile and financial documents." },
                { title: "Online Application", description: "Creating GCKey and submitting application." },
                { title: "Biometrics", description: "Giving fingerprints at VFS Global." },
                { title: "Passport Request", description: "Submitting passport for stamping upon approval." }
            ]}
            faqs={[
                { question: "Can I convert visitor visa to work permit?", answer: "Generally no, unless under specific temporary public policies." },
                { question: "Is interview required?", answer: "Interviews are rare for Canadian visit visas." },
                { question: "How long can I stay?", answer: "Usually up to 6 months per visit." }
            ]}
        />
    );
}
