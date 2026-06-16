import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const TITLE = "Pluck — Pluck any list into CSV";
const DESCRIPTION =
  "Auto-detect any list on the web — products, jobs, search results — and export it to a clean CSV. One click, no setup.";

export const metadata: Metadata = {
  metadataBase: new URL("https://listpick-landing.vercel.app"),
  title: {
    default: TITLE,
    template: "%s · Pluck",
  },
  description: DESCRIPTION,
  keywords: [
    "CSV export",
    "web scraping",
    "Chrome extension",
    "list to CSV",
    "data extraction",
    "no-code scraper",
    "privacy",
  ],
  authors: [{ name: "Amey Pawar" }],
  creator: "Amey Pawar",
  applicationName: "Pluck",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Pluck",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
