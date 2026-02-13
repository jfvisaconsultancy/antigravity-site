import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "Poland Work Permit | Schengen Area Work Visa",
    description: "Work in Poland with a legal work permit. We assist with Type D Visa for skilled and unskilled workers. High conversion rate from permit to visa.",
};

export default function PolandWorkPermitPage() {
    return (
        <CountryPageLayout
            countryName="Poland"
            visaType="Work Visa (Type D)"
            heroImage="/images/service_europe_visa_1769526116284.png"
            overview="Poland is one of the fastest-growing economies in Europe and a Schengen member state. A Polish work visa not only allows you to work legally but also gives you access to travel across the Schengen Area."
            eligibility={[
                "Valid Passport (Minimum 1 year validity)",
                "Job Offer from a Polish Employer",
                "Registered Work Permit (Types A, B, C, D, or E)",
                "Clean Criminal Record",
                "Basic English or Polish language skills (preferred)"
            ]}
            documents={[
                "Original Work Permit (Zezwolenie a Pracę)",
                "Employment Contract",
                "Visa Application Form",
                "Two Recent Photos",
                "Valid Travel Health Insurance",
                "Flight Reservation",
                "Proof of Accommodation in Poland"
            ]}
            bankStatement="Proof of sufficient personal funds is generally required for the visa application, around €1,000 - €2,000 equivalent."
            processingTime="Work Permit: 3-5 Months | Visa: 2-3 Weeks"
            fees={{
                government: "€80 (Visa Fee) + VFS charges",
                service: "Call for package details."
            }}
            processSteps={[
                { title: "Sourcing Employer", description: "Finding a job match and securing an offer." },
                { title: "Work Permit Application", description: "Employer applies for the work permit at the Voivodeship Office." },
                { title: "Submission of Docs", description: "Providing documents for permit processing in Poland." },
                { title: "Permit Issuance", description: "Receiving the original work permit." },
                { title: "Visa Appointment", description: "Booking appointment at the Polish Embassy/Consulate." },
                { title: "Travel", description: "Visa stamping and travel to Poland." }
            ]}
            faqs={[
                { question: "Is Poland visa Schengen?", answer: "Yes, a Poland Type D visa allows you to travel freely within the Schengen zone for up to 90 days." },
                { question: "Can I bring my family?", answer: "Family reunification is possible once you have a Residence Card (Karta Pobytu)." },
                { question: "Can I move to other countries?", answer: "You must work for the employer who sponsored you, but you can change employers legally later." }
            ]}
        />
    );
}
