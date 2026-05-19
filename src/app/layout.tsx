import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Desarrollo de software moderno`,
  description: siteConfig.description,
  keywords: [
    "MorCode Labs",
    "desarrollo web",
    "Next.js",
    "MERN",
    "SaaS",
    "software a medida",
    "landing pages",
    "ecommerce",
  ],
  openGraph: {
    title: `${siteConfig.name} | Software moderno para negocios`,
    description: siteConfig.description,
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}