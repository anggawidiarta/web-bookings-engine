import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/components/Header";

const brandSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const brandSerif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Malkai — A Pilgrimage of Oman",
  description:
    "A first-of-its-kind immersion into Oman's heritage, culture and diverse natural beauty.",
};

export default function BookingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${brandSans.variable} ${brandSerif.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
