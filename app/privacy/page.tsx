import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — Pluck",
  description:
    "How Pluck handles your data: it doesn't. 100% local, no tracking, no accounts.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}
