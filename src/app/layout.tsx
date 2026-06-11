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
  title: "Roshni & Chetan — Wedding Invitation · 19 June 2026",
  description: "We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of Roshni & Chetan",
  openGraph: {
    type: "website",
    title: "Roshni & Chetan - Wedding Invitation",
    description: "A wedding invitation to celebrate the union of Roshni & Chetan on 19th June 2026",
    images: ["/images/couple-footer.png"],
  },
  icons: { icon: "/images/sunflower.png" },
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
