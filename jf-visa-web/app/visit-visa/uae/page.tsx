import CountryPageLayout from '@/components/CountryPageLayout';

export const metadata = {
    title: "UAE Visit Visa | Dubai Tourist Visa Consultants",
    description: "Get your UAE/Dubai Visit Visa in 24-48 hours. 30 Days and 60 Days Multiple Entry options available. Hassle-free processing.",
};

export default function UAEVisitVisaPage() {
    return (
        <CountryPageLayout
            countryName="UAE / Dubai"
            visaType="Visit Visa"
            heroImage="/images/service_gcc_visa_1769526468980.png"
            overview="The UAE is one of the most popular tourist destinations in the world. Whether for tourism, business, or family visits, getting a UAE visa is fast and straightforward with our expert assistance."
            eligibility={[
                "Valid Passport (6 months validity)",
                "Clear Scanned Photograph",
                "CNIC Front & Back",
                "Confirmed Return Ticket (for travel)"
            ]}
            documents={[
                "Scan of Passport Bio Page",
                "Passport Size Photo (White Background)",
                "CNIC Copy"
            ]}
            bankStatement="Generally not required for UAE E-Visa if processed through a reputable agency, unless requested by immigration."
            processingTime="1 to 2 Working Days"
            fees={{
                government: "Included in Package",
                service: "Competitive rates for 30/60 days visa."
            }}
            processSteps={[
                { title: "Submit Documents", description: "Send soft copies of passport and photo via WhatsApp or Email." },
                { title: "Payment", description: "Pay the visa application fee." },
                { title: "Visa Processing", description: "We submit your application directly to the immigration portal." },
                { title: "Visa Issuance", description: "Receive your E-Visa via email or WhatsApp within 24-48 hours." },
                { title: "Travel Insurance", description: "Recommended for safe travel." }
            ]}
            faqs={[
                { question: "Is the visa extendable?", answer: "Yes, visit visas can often be extended from within the UAE (subject to current rules)." },
                { question: "Do I need a sponsor?", answer: "No, we act as your sponsor for the visit visa application." },
                { question: "What if my visa is rejected?", answer: "Rejection is rare but fees are generally non-refundable by immigration. We ensure 99% approval by pre-checking documents." }
            ]}
        />
    );
}
