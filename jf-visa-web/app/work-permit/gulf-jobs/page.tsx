import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Gulf Jobs & Work Visas | Qatar, UAE, Saudi Arabia",
    description: "Secure employment in GCC countries. We assist with freelance and company visas for Qatar (2-Year Azad Visa), Saudi Arabia, and UAE.",
};

export default function GulfWorkVisaPage() {
    return (
        <CountryPageLayout
            countryName="Gulf Countries (GCC)"
            visaType="Work / Freelance Visa"
            heroImage="/images/service_gcc_visa_1769526468980.png"
            overview="The Gulf Cooperation Council (GCC) countries offer lucrative tax-free income opportunities for skilled and unskilled workers. We specialize in providing freelance (Azad) visas for Qatar and Saudi Arabia, allowing you flexibility in finding employment."
            eligibility={[
                "Valid Passport (Minimum 6 months validity)",
                "Medical Fitness Certificate (GAMCA)",
                "Police Clearance Certificate",
                "Age Limit (18-45 years typically)",
                "Relevant Trade Test (if applicable)"
            ]}
            documents={[
                "Passport Scan (Color)",
                "Passport Size Photos (White Background)",
                "CNIC Scan",
                "Medical Report",
                "Educational/Experience Certificates (Attested)",
                "Vaccination Certificate"
            ]}
            bankStatement="Generally not required for the visa issuance itself as these are sponsored visas."
            processingTime="10 to 20 Days"
            fees={{
                government: "Included in Package",
                service: "Competitive packages for 2-Year Freelance Visas."
            }}
            processSteps={[
                { title: "Document Submission", description: "Providing passport and photo for initial assessment." },
                { title: "Visa Application", description: "Applying for the employment visa through the sponsor." },
                { title: "Visa Issuance", description: "Receiving the electronic visa (E-Visa)." },
                { title: "Protector & Flights", description: "Getting Protector stamp from bureau and booking flights." },
                { title: "Medical", description: "Undergoing medical test upon arrival for residency card (QID/Iqama)." }
            ]}
            faqs={[
                { question: "What is an Azad Visa?", answer: "It refers to a freelance visa where you are sponsored by a company but allowed to work for various employers (contractually)." },
                { question: "Is medical test mandatory?", answer: "Yes, you must pass the GAMCA medical test in Pakistan and another medical test upon arrival." },
                { question: "Can I bring my family?", answer: "Yes, once your residency (Iqama/QID) is stamped and you meet the minimum salary requirement." }
            ]}
        />
    );
}
