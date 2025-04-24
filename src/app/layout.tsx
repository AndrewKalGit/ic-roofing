import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Industrial & Commercial Roofing",
  keywords: "Best roofing company in Edison NJ, Top roof repair contractors Edison NJ, Reliable roofers Edison NJ, Roofing experts in Edison NJ, Commercial roofing contractors Edison NJ, Industrial roofing Edison NJ, Affordable roofers near Edison NJ, Roof inspection Edison NJ, Emergency roofing services Edison NJ",
  description:
    "Reliable roofing solutions for repairs, maintenance, protective coatings, and more — no job too big or small.",
  openGraph: {
    title: "Industrial & Commercial Roofing",
    description:
      "We handle all your roofing needs — repairs, maintenance, coatings, and more.",
    url: "https://yourroofingcompany.com",
    siteName: "Industrial & Commercial Roofing",
    images: [
      {
        url: "/roofing_logo.png",
        width: 1200,
        height: 630,
        alt: "Roofing Company Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
