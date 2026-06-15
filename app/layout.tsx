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

export const metadata: Metadata = {
  title: "Pluck — Pluck any list into CSV",
  description:
    "Auto-detect any list — products, jobs, results — and export to CSV. Deterministic, 100% local, no tracking.",
  metadataBase: new URL("https://pluck.app"),
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
