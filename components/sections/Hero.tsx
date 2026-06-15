import { Github } from "lucide-react";
import { Blob } from "@/components/ui/Blob";
import { BrowserMock } from "@/components/ui/BrowserMock";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Scallop } from "@/components/ui/Scallop";
import { Sparkle } from "@/components/ui/Sparkle";
import { HERO, HERO_MOCK } from "@/lib/constants";

const badgeColors = ["indigo", "kelly", "bubblegum"] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-0">
      {/* Decorative blobs */}
      <Blob
        color="lilac"
        className="absolute -top-16 -left-16 w-72 h-72 opacity-60"
      />
      <Blob
        color="mint"
        className="absolute top-20 -right-20 w-56 h-56 opacity-50"
      />
      <Blob
        color="bubblegum"
        className="absolute bottom-24 left-1/3 w-40 h-40 opacity-40"
      />

      {/* Floating sparkles */}
      <Sparkle
        size={32}
        className="absolute top-24 right-1/4 text-amber animate-float opacity-80"
      />
      <Sparkle
        size={20}
        className="absolute top-48 left-1/4 text-indigo animate-float opacity-60"
      />
      <Sparkle
        size={16}
        className="absolute bottom-32 right-1/3 text-kelly animate-float opacity-70"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 animate-slide-up">
            {/* Eyebrow */}
            <Pill color="amber" className="w-fit">
              {HERO.eyebrow}
            </Pill>

            {/* Headline */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-ink leading-[1.05] tracking-tight">
              Pluck any list into{" "}
              <span className="relative inline-block">
                <span className="relative z-10">CSV.</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 right-0 h-4 bg-amber -rotate-1 -z-10 rounded-sm"
                />
              </span>
            </h1>

            {/* Subhead */}
            <p className="font-sans text-lg text-muted-foreground max-w-xl leading-relaxed">
              {HERO.subhead}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {HERO.badges.map((badge, i) => (
                <Pill key={badge} color={badgeColors[i % badgeColors.length]}>
                  {badge}
                </Pill>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button href={HERO.primaryCta.href} variant="primary" external>
                {HERO.primaryCta.label}
              </Button>
              <Button
                href={HERO.secondaryCta.href}
                variant="ghost"
                icon={Github}
                external
              >
                {HERO.secondaryCta.label}
              </Button>
            </div>
          </div>

          {/* Right: browser mock */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Blob behind mock for depth */}
            <Blob
              color="indigo"
              className="absolute inset-0 w-full h-full opacity-20 scale-110"
            />
            <BrowserMock
              {...HERO_MOCK}
              className="relative z-10 w-full max-w-lg rotate-2 shadow-[8px_8px_0px_0px_hsl(var(--ink))]"
            />
          </div>
        </div>
      </div>

      {/* Scallop bottom into features section (amber bg) */}
      <Scallop color="amber" className="relative z-10" />
    </section>
  );
}
