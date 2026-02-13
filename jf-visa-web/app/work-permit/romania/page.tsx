import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Romania Work Permit | Europe Work Visa Consultants",
    description: "Secure a legal work permit for Romania. High demand for construction workers, drivers, and skilled labor. Complete visa support.",
};

export default function RomaniaWorkPermitPage() {
    return (
        <CountryPageLayout
            countryName="Romania"
            visaType="Work Permit (Type D)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Romania is a growing economy in the European Union with a high demand for foreign workers in construction, logistics, hospitality, and manufacturing. A Romanian work permit is a gateway to Europe, allowing you to live and work legally."
            eligibility={[
                "Valid Passport (Minimum 1 year validity)",
                "Job Offer from a Romanian Employer",
                "Clear Police Character Certificate",
                "Medical Fitness Certificate",
                "Relevant Skills/Experience (for skilled jobs)"
            ]}
            documents={[
                "Passport Scan",
                "Police Clearance Certificate (Apostilled)",
                "Medical Certificate",
                "CV/Resume (Europoss format)",
                "Work Experience Certificates",
                "Photographs (White Background)",
                "Educational Documents (if applicable)"
            ]}
            bankStatement="Not strictly required for the initial work permit application as the employer sponsors you, but minimal funds for travel and initial settlement are recommended."
            processingTime="3 to 5 Months"
            fees={{
                government: "Included in Package",
                service: "Call for current package rates (includes permit & visa)."
            }}
            processSteps={[
                { title: "Job Selection", description: "Choose a suitable job category based on your skills." },
                { title: "Initial Assessment", description: "Submission of CV and documents for employer review." },
                { title: "Work Permit Issuance", description: "Employer obtains the work permit from the Inspectorate General for Immigration." },
                { title: "Visa Filing", description: "Submission of Long-Stay (Type D) visa application at the embassy." },
                { title: "Departure", description: "Travel to Romania and begin employment." }
            ]}
            faqs={[
                { question: "Is IELTS required?", answer: "No, IELTS is generally not required for blue-collar jobs in Romania." },
                { question: "Can I bring my family?", answer: "After obtaining a residence permit and meeting specific salary criteria, family reunification is possible later." },
                { question: "Is it a Schengen visa?", answer: "Romania is joining the Schengen area (air/sea borders in 2024), increasing the value of this residency." }
            ]}
        />
    );
}
