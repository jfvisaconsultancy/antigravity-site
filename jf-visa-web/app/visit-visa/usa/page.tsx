import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "USA Visit Visa Consultants | B1/B2 Visa",
    description: "Apply for USA B1/B2 Tourist Visa. Expert consultation for interview preparation and DS-160 application. Improve your chances of approval.",
};

export default function USAVisitVisaPage() {
    return (
        <CountryPageLayout
            countryName="United Kingdom"
            visaType="Visit Visa (B1/B2)"
            heroImage="/images/service_usa_visa_1769526245585.png"
            overview="The B1/B2 Visitor Visa is for people traveling to the United States temporarily for business (B-1) or for pleasure or medical treatment (B-2). We help you present a strong case."
            eligibility={[
                "Purpose of trip is temporary visit",
                "Intent to return to home country",
                "Ability to cover expenses",
                "Residence outside USA"
            ]}
            documents={[
                "Valid Passport",
                "DS-160 Confirmation Page",
                "Appointment Confirmation",
                "Bank Statement",
                "Employment Letter",
                "Invitation Letter (if applicable)",
                "Property/Business Details"
            ]}
            bankStatement="Proof of sufficient funds is critical. No specific amount, but must cover trip + show stability."
            processingTime="Interview Appointment Dependent"
            fees={{
                government: "$185 (Visa Fee)",
                service: "Consultancy Fee varies. Contact for details."
            }}
            processSteps={[
                { title: "Complete DS-160", description: "Filling out the online nonimmigrant visa application." },
                { title: "Pay Fee", description: "Paying the visa application fee." },
                { title: "Schedule Interview", description: "Booking appointment at the US Embassy/Consulate." },
                { title: "Interview Prep", description: "Mock interview session with our experts." },
                { title: "Attend Interview", description: "Visa decision is usually made immediately after interview." }
            ]}
            faqs={[
                { question: "How long is the visa valid?", answer: "Usually 5 years multiple entry for Pakistani nationals." },
                { question: "Do I need an invitation?", answer: "It helps but is not mandatory for tourism." },
                { question: "What if I was refused before?", answer: "You can reapply if your circumstances have changed significantly." }
            ]}
        />
    );
}
