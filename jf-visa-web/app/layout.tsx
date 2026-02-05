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
  title: "JF Visa Consultancy | Where Dreams Become a Reality",
  description: "JF Visa Consultancy - Pakistan's trusted visa experts for Europe, USA, Canada, GCC, and Australia/NZ.",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
