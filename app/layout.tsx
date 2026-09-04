import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlyerPopup from "@/components/FlyerPopup";

const displayFont = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Al-Ihsan Noble Scholars | Excellence in Education",
  description: "Building a generation of Muslims achieving excellence and perfection in Osogbo, Osun State.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased font-sans bg-ihsan-cream text-ihsan-dark`}>
        <Navbar />
        {children}
        <Footer />
        <FlyerPopup />
      </body>
    </html>
  );
}
