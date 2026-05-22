import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustavo Mafra — Fotógrafo",
  description:
    "Fotografia autoral, editorial e documental. São Paulo, desde 2014.",
  openGraph: {
    title: "Gustavo Mafra — Fotógrafo",
    description: "Fotografia autoral, editorial e documental.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
