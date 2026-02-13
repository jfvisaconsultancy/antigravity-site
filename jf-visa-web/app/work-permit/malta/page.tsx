import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Malta Work Permit | Europe Work Visa Consultants",
    description: "Work in Malta legally. We assist with Single Permit applications for skilled and unskilled workers. Pathway to EU residency.",
};

export default function MaltaWorkPermitPage() {
    return (
        <CountryPageLayout
            countryName="Malta"
            visaType="Work Permit (Single Permit)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Malta is a popular destination for foreign workers due to its English-speaking environment and growing economy. The Single Permit authorizes third-country nationals to legally reside and work in Malta for a specific period."
            eligibility={[
                "Job Offer from a Maltese Employer",
                "Relevant Qualifications/Experience",
                "Clean Criminal Record",
                "Medical Fitness"
            ]}
            documents={[
                "Valid Passport",
                "Full CV (Europass Format)",
                "Employment Contract",
                "Position Description (Job Description)",
                "Reference Letters",
                "Health Insurance Policy",
                "Lease Agreement (Accommodation)"
            ]}
            bankStatement="You may need to show proof of funds for initial settlement, but the main requirement is the employment contract guaranteeing salary."
            processingTime="3 to 4 Months"
            fees={{
                government: "€280.50 (Identity Malta Fee)",
                service: "Call for package details."
            }}
            processSteps={[
                { title: "Secure Job Offer", description: "Getting a contract from an employer in Malta." },
                { title: "Apply for Single Permit", description: "Employer submits application to Identity Malta." },
                { title: "Approval in Principle", description: "Receiving approval letter." },
                { title: "Visa Application", description: "Applying for entry visa at the nearest consulate/embassy." },
                { title: "Travel & Final Permit", description: "Traveling to Malta and collecting residence card." }
            ]}
            faqs={[
                { question: "Is English widely spoken?", answer: "Yes, English is one of the official languages of Malta." },
                { question: "Can I bring my family?", answer: "Family reunification is possible after one year of residence and meeting income criteria." },
                { question: "Is it a Schengen country?", answer: "Yes, Malta is part of the Schengen Area." }
            ]}
        />
    );
}
