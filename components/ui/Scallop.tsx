import { cn } from "@/lib/utils";

const colorFill: Record<string, string> = {
  cream: "fill-cream",
  indigo: "fill-indigo",
  amber: "fill-amber",
  lilac: "fill-lilac",
  kelly: "fill-kelly",
  bubblegum: "fill-bubblegum",
  brightyellow: "fill-brightyellow",
  mint: "fill-mint",
  ink: "fill-ink",
  background: "fill-background",
  card: "fill-card",
  muted: "fill-muted",
};

export function Scallop({
  color = "cream",
  flip = false,
  className,
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  const fillClass = colorFill[color] ?? "fill-cream";
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 32"
      preserveAspectRatio="none"
      width="100%"
      height="32"
      className={cn(
        fillClass,
        flip && "rotate-180",
        "block w-full",
        className
      )}
    >
      <path d="M0,16 C60,32 120,0 180,16 C240,32 300,0 360,16 C420,32 480,0 540,16 C600,32 660,0 720,16 C780,32 840,0 900,16 C960,32 1020,0 1080,16 C1140,32 1200,0 1260,16 C1320,32 1380,0 1440,16 L1440,32 L0,32 Z" />
    </svg>
  );
}
