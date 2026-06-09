import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rushikesh & Prajakta — Wedding Invitation · 19 July 2026",
  description: "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of Rushikesh & Prajakta",
  openGraph: {
    type: "website",
    title: "Rushikesh & Prajakta - Wedding Invitation",
    description: "A wedding invitation to celebrate the union of Rushikesh & Prajakta on 19th July 2026",
    images: ["/images/wedding-hero.jpg"],
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
      className={`${cormorant.variable} ${greatVibes.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
