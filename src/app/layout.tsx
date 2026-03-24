import type { Metadata } from "next";
import { Playfair_Display, Inter, Cairo } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hana Derma Clinic | عيادة هناء ديرما",
  description:
    "عيادة متخصصة بالأمراض الجلدية والتجميل والليزر — Specialist Dermatology, Cosmetology & Laser Clinic by Dr. Hana Ahmed Al-Mudarris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cairo.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-warm-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
