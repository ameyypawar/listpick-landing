import { STEPS } from "@/lib/constants";
import { Scallop } from "@/components/ui/Scallop";
import { cn } from "@/lib/utils";

const stepColors = ["indigo", "amber", "kelly", "bubblegum"] as const;

const chipBg: Record<string, string> = {
  indigo: "bg-indigo",
  amber: "bg-amber",
  kelly: "bg-kelly",
  bubblegum: "bg-bubblegum",
};

const chipText: Record<string, string> = {
  indigo: "text-cream",
  amber: "text-ink",
  kelly: "text-cream",
  bubblegum: "text-ink",
};

export function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-0">
      {/* Scallop top — amber flows in from above */}
      <Scallop color="cream" flip className="bg-amber" />

      <div className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <div className="mb-12 flex flex-col gap-3">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
              From page to CSV in four clicks.
            </h2>
            <p className="font-sans text-muted-foreground text-lg max-w-xl">
              No config, no accounts, no waiting.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Dashed connector line (desktop only) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-ink/30 z-0"
            />

            {STEPS.map((step, i) => {
              const color = stepColors[i % stepColors.length];
              const bg = chipBg[color];
              const textColor = chipText[color];

              return (
                <div
                  key={step.n}
                  className={cn(
                    "relative z-10 flex flex-col gap-4",
                    "border-2 border-ink rounded-blob p-6",
                    "bg-card shadow-[4px_4px_0px_0px_hsl(var(--ink))]",
                    "hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_hsl(var(--ink))]",
                    "transition-all duration-150"
                  )}
                >
                  {/* Step number chip */}
                  <div
                    className={cn(
                      "w-10 h-10 rounded-pill border-2 border-ink",
                      "flex items-center justify-center",
                      "font-display font-bold text-lg",
                      bg,
                      textColor
                    )}
                  >
                    {step.n}
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-ink mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scallop bottom — transition into kelly */}
      <Scallop color="kelly" className="bg-cream" />
    </section>
  );
}
