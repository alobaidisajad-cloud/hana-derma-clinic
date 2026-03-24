import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hana Derma Clinic | عيادة هناء ديرما",
  description:
    "عيادة متخصصة بالأمراض الجلدية والتجميل والليزر — Specialist Dermatology, Cosmetology & Laser Clinic by Dr. Hana Ahmed Al-Mudarris",
  other: {
    'color-scheme': 'light only',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
      style={{ colorScheme: 'light' }}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-warm-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
