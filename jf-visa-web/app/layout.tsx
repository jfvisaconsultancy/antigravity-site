import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Trusted Visa & Immigration Consultants in Pakistan | JF Visa Consultancy",
  description: "Study, Work, Visit, or Settle Abroad with Expert Guidance & High Approval Success. We help Pakistani applicants secure visas for Europe, UK, Canada, GCC, and more.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JF Visa Consultancy",
  "image": "https://jfvisa.com/images/logo.png", // Assuming logo path or use a placeholder if unsure, but better to be safe. Actually I don't see a logo file in file list, maybe header has it.
  "telephone": "+92 306 5870215",
  "url": "https://jfvisa.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Office T-6, 3rd Floor, Rizwan Arcade Plaza, Near KFC, Adam Jee Road, Saddar",
    "addressLocality": "Rawalpindi",
    "addressRegion": "Punjab",
    "postalCode": "46000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.5973, // Approximate for Saddar Rawalpindi
    "longitude": 73.0479
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/jfvisaconsultancy/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
