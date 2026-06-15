import {
  ScanLine,
  Eye,
  FileSpreadsheet,
  MousePointerClick,
  ShieldCheck,
  EyeOff,
  Repeat,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Sparkle } from "@/components/ui/Sparkle";
import { FEATURES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  ScanLine,
  Eye,
  FileSpreadsheet,
  MousePointerClick,
  ShieldCheck,
  EyeOff,
  Repeat,
  Zap,
};

const colorClasses: Record<string, string> = {
  cream: "bg-cream",
  indigo: "bg-indigo",
  amber: "bg-amber",
  lilac: "bg-lilac",
  kelly: "bg-kelly",
  bubblegum: "bg-bubblegum",
  brightyellow: "bg-brightyellow",
  mint: "bg-mint",
  ink: "bg-ink",
};

// Cards that get a sparkle decoration
const sparkleIndices = new Set([0, 4]);

// First card spans 2 cols on sm+ for visual variety
const spanClass = (i: number) =>
  i === 0 ? "sm:col-span-2 lg:col-span-2" : "";

export function Features() {
  return (
    <section id="features" className="bg-amber py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
            Everything you need to grab a list.
          </h2>
          <p className="font-sans text-ink/70 text-lg max-w-2xl">
            Pure DOM detection, zero config, zero cloud. Point, click, export.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            const bg = colorClasses[feature.color] ?? "bg-cream";

            return (
              <div
                key={feature.title}
                className={cn(
                  "relative group",
                  "border-2 border-ink rounded-blob p-6",
                  "shadow-[4px_4px_0px_0px_hsl(var(--ink))]",
                  "hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_hsl(var(--ink))]",
                  "transition-all duration-150",
                  "text-ink",
                  bg,
                  spanClass(i)
                )}
              >
                {/* Optional sparkle decoration */}
                {sparkleIndices.has(i) && (
                  <Sparkle
                    size={18}
                    className="absolute top-4 right-4 text-ink/30"
                  />
                )}

                {/* Icon chip */}
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-blob border-2 border-ink bg-cream/70">
                  {Icon && <Icon className="w-5 h-5 text-ink" />}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-ink mb-2">
                  {feature.title}
                </h3>

                {/* Body */}
                <p className="font-sans text-sm text-ink/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
