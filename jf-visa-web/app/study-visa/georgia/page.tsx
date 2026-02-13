import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Study in Georgia | MBBS in Georgia | Consultants",
    description: "Affordable medical studies in Georgia for Pakistani students to become doctors. No Entry Test, No IELTS.",
};

export default function GeorgiaStudyVisaPage() {
    return (
        <CountryPageLayout
            countryName="Georgia"
            visaType="Study Visa (MBBS)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Georgia is becoming a popular destination for medical students due to affordable tuition fees and high-quality education. Degrees from Georgian universities are recognized by WHO and PMDC (subject to current regulations)."
            eligibility={[
                "FSc Pre-Medical Results (Minimum 50-60%)",
                "Valid Passport",
                "Age limit 17-25 years",
                "Good Health Certificate",
                "No IELTS Required"
            ]}
            documents={[
                "Original Academic Certificates",
                "Valid Passport",
                "Birth Certificate",
                "Police Clearance Certificate",
                "Medical Certificate",
                "Six Passport Size Photos",
                "Bank Statement"
            ]}
            bankStatement="Proof of sufficient funds to cover tuition and living expenses for at least one year. Sponsors can be parents or guardians."
            processingTime="3 to 4 Weeks"
            fees={{
                government: "Included in Package",
                service: "Affordable package including tuition, hostel, and visa."
            }}
            processSteps={[
                { title: "Admission Application", description: "Submit documents for uni assessment." },
                { title: "Ministry Approval", description: "University gets approval from Ministry of Education." },
                { title: "Invitation Letter", description: "Receive official invitation letter." },
                { title: "Visa Filing", description: "Submit e-visa application or embassy filing." },
                { title: "Departure", description: "Travel to Georgia upon visa approval." }
            ]}
            faqs={[
                { question: "Is IELTS mandatory?", answer: "No, IELTS is generally not required for admission in Georgia." },
                { question: "What is the medium of instruction?", answer: "English language programs are available for international students." },
                { question: "Can I move to Europe later?", answer: "Yes, Georgia offers pathways to transfer to European universities or work after graduation." }
            ]}
        />
    );
}
