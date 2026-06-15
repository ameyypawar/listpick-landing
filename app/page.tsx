import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-32 px-6">
        <p className="font-display text-3xl">Sections coming in Phase 5</p>
      </main>
      <Footer />
    </div>
  );
}
