import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Sparkle } from "@/components/ui/Sparkle";
import { Scallop } from "@/components/ui/Scallop";
import { PRIVACY_TEASER } from "@/lib/constants";

export function PrivacyTeaser() {
  return (
    <section className="bg-kelly py-0">
      {/* Already transitioned from cream via HowItWorks bottom scallop */}

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="
              relative overflow-hidden
              border-2 border-ink rounded-blob p-10 md:p-14
              bg-indigo text-cream
              shadow-[8px_8px_0px_0px_hsl(var(--ink))]
            "
          >
            {/* Decorative sparkles */}
            <Sparkle
              size={40}
              className="absolute top-6 right-8 text-cream/30 animate-float"
            />
            <Sparkle
              size={20}
              className="absolute bottom-8 right-24 text-amber/60 animate-float"
            />
            <Sparkle
              size={14}
              className="absolute top-12 left-8 text-mint/50 animate-float"
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
              {/* Shield icon */}
              <div className="shrink-0 w-16 h-16 rounded-blob border-2 border-cream/50 bg-cream/10 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-cream" />
              </div>

              {/* Copy */}
              <div className="flex flex-col gap-4 flex-1">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-cream leading-tight">
                  {PRIVACY_TEASER.heading}
                </h2>
                <p className="font-sans text-cream/80 text-base md:text-lg leading-relaxed max-w-2xl">
                  {PRIVACY_TEASER.body}
                </p>
                <div>
                  <Button
                    href={PRIVACY_TEASER.cta.href}
                    variant="ghost"
                    className="w-fit"
                  >
                    {PRIVACY_TEASER.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scallop bottom — transition into ink footer */}
      <Scallop color="ink" className="bg-kelly" />
    </section>
  );
}
