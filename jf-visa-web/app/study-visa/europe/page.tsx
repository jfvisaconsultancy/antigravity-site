import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in Europe | Schengen Study Visa Consultants",
    description: "Affordable education in Europe. Study in Germany, France, Italy, and more. Low tuition fees and high visa success rate.",
};

export default function EuropeStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="Europe"
            visaType="Study Visa (Schengen)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Europe offers high-quality education with low or no tuition fees in many public universities. A student visa for a Schengen country also allows you to travel across the entire Schengen Area."
            eligibility={[
                "Admission Letter from a European University",
                "Proof of Financial Means (Blocked Account/Statement)",
                "Health Insurance",
                "Language Proficiency (IELTS/German/French/etc.)",
                "Valid Passport"
            ]}
            documents={[
                "Valid Passport",
                "University Admission Letter",
                "Proof of Funds (e.g., Blocked Account for Germany)",
                "Academic Certificates (Attested)",
                "Motivation Letter",
                "Language Certificate"
            ]}
            bankStatement="Varies by country. Germany requires a Blocked Account (approx. €11,208/year). Other countries accept bank statements."
            processingTime="4 to 8 Weeks"
            fees={{
                government: "€75 - €100 (varies by country)",
                service: "Call for package details."
            }}
            processSteps={[
                { title: "University Selection", description: "Choosing the right country and university." },
                { title: "Admission", description: "Securing admission offer." },
                { title: "Financial Proof", description: "Arranging blocked account or bank statement." },
                { title: "Visa Appointment", description: "Booking appointment at the relevant embassy." },
                { title: "Visa Interview", description: "Submission and interview." }
            ]}
            faqs={[
                { question: "Is education free in Europe?", answer: "Public universities in Germany and some other countries charge little to no tuition fees." },
                { question: "Can I travel to other countries?", answer: "Yes, a Schengen student visa allows travel to all Schengen states." },
                { question: "Can I work part-time?", answer: "Yes, most countries allow 20 hours of work per week." }
            ]}
        />
    );
}
