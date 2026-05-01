import type { Metadata } from "next";
import { Playfair_Display, Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://precisionstainseal.com"),

  title: "Barton & Birch | Fences & Decks — Austin, TX",
  description:
    "Austin's premier fence and deck staining specialists. We restore, protect, and beautify your outdoor wood surfaces with precision craftsmanship.",
  keywords: "fence staining Austin TX, deck staining Austin, wood sealing Austin Texas, outdoor wood restoration",

  openGraph: {
    title: "Barton & Birch | Fences & Decks — Austin, TX",
    description:
      "Austin's premier fence and deck staining specialists. We restore, protect, and beautify your outdoor wood surfaces with precision craftsmanship.",
    images: ['/og-image.png'],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Barton & Birch | Fences & Decks — Austin, TX",
    description:
      "Austin's premier fence and deck staining specialists.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cinzel.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
