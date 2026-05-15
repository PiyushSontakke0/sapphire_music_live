import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sapphire Nocturne",
  description:
    "Elegant instrumental music crafted for your wedding and most intimate celebrations. Live Guitar & Keyboard for Timeless Moments.",
  openGraph: {
    title: "Sapphire Nocturne",
    description:
      "Elegant instrumental music crafted for your wedding and most intimate celebrations.",
    images: ["/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
