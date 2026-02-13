import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Hungary Work Permit | Schengen Visa Consultants",
    description: "Get a Hungary Work Permit (Type D Visa) with complete assistance. High success rate for skilled workers. Pathway to permanent residency.",
};

export default function HungaryWorkPermitPage() {
    return (
        <CountryPageLayout
            countryName="Hungary"
            visaType="Work Visa (Type D)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Hungary is an emerging European destination offering excellent work opportunities in manufacturing, construction, and IT sectors. With a Hungary Work Visa, you can enjoy a high standard of living and travel across the Schengen Area."
            eligibility={[
                "Valid Passport (Minimum 1 year validity)",
                "Job Offer or Preliminary Agreement",
                "Proof of Accommodation in Hungary",
                "Clear Police Character Certificate",
                "Basic educational or vocational certificates"
            ]}
            documents={[
                "Valid Passport",
                "Employment Contract",
                "Proof of Accommodation (Registered Address)",
                "Fully filled Visa Application Form",
                "Two Passport Size Photos",
                "Travel Insurance",
                "Flight Itinerary"
            ]}
            bankStatement="Proof of sufficient funds for initial stay, typically around €1,500 - €2,000."
            processingTime="Work Permit: 70 Days | Visa: 15-20 Days"
            fees={{
                government: "€60 (Visa Fee) + Admin Charges",
                service: "Competitive rates. Contact for details."
            }}
            processSteps={[
                { title: "Employer Sourcing", description: "Finding a suitable employer in Hungary." },
                { title: "Labor Marketing Test", description: "Employer proves no local candidate is available (if required)." },
                { title: "Work Permit Filing", description: "Submitting application at the local immigration office." },
                { title: "Permit Approval", description: "Receiving the work permit decision." },
                { title: "Visa Appointment", description: "Booking slot at the Hungarian Consulate." },
                { title: "Travel", description: "Flying to Hungary upon visa approval." }
            ]}
            faqs={[
                { question: "Is language a barrier?", answer: "Many international companies operate in English, but basic Hungarian is an asset." },
                { question: "Can I switch jobs?", answer: "Yes, but you need to update your work permit with the new employer." },
                { question: "Is family visa allowed?", answer: "Yes, after obtaining your residence card and meeting income requirements." }
            ]}
        />
    );
}
