import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Schengen Visit Visa Consultants | Europe Tourist Visa",
    description: "Travel to 27 European countries with a single Schengen Visa. Expert assistance for France, Germany, Italy, Spain, and more.",
};

export default function SchengenVisitVisaPage() {
    return (
        <CountryPageLayout
            countryName="Schengen Area (Europe)"
            visaType="Short-Stay Visa (Type C)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="The Schengen Area consists of 27 European countries. A Schengen Visa allows you to travel freely between member states for tourism, business, or family visits for up to 90 days within any 180-day period."
            eligibility={[
                "Valid purpose of travel (Tourism/Business/Visit)",
                "Sufficient financial means to cover the stay",
                "Travel Insurance covering at least €30,000",
                "Proof of accommodation and return flight",
                "Intention to return to home country"
            ]}
            documents={[
                "Valid Passport (issued within last 10 years)",
                "Completed Schengen Visa Application Form",
                "Two Passport Size Photos (Bio-metric)",
                "Travel Health Insurance Policy",
                "Flight Reservation (Return Ticket)",
                "Proof of Accommodation (Hotel Booking/Invitation)",
                "Bank Statement (Last 6 months)",
                "Employment/Business Proof"
            ]}
            bankStatement="You must prove financial stability. Minimum daily amount varies by country (approx. €60-€100 per day). Consistent closing balance is key."
            processingTime="15 to 45 Calendar Days"
            fees={{
                government: "€80 (Adults) / €40 (Children 6-12)",
                service: "Consultancy Fee varies. Contact for details."
            }}
            processSteps={[
                { title: "Choose Country", description: "Apply at the embassy of your main destination country." },
                { title: "Document Preparation", description: "Compilation of all required documents as per embassy checklist." },
                { title: "Appointment", description: "Book appointment for visa submission." },
                { title: "Submission & Biometrics", description: "Submit application and provide fingerprints." },
                { title: "Passport Collection", description: "Collect passport after processing." }
            ]}
            faqs={[
                { question: "Can I visit multiple countries?", answer: "Yes, you can travel to any Schengen country once you enter the area." },
                { question: "Which country should I apply to?", answer: "Apply to the country where you will spend the most days. If equal duration, apply to the first point of entry." },
                { question: "Is interview mandatory?", answer: "Interviews are standard but sometimes can be waived depending on travel history." }
            ]}
        />
    );
}
