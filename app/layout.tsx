import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}