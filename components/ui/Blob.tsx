import { cn } from "@/lib/utils";

// Explicit map so JIT never purges these bg-* classes
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
  muted: "bg-muted",
  card: "bg-card",
};

export function Blob({
  color = "lilac",
  className,
}: {
  color?: string;
  className?: string;
}) {
  const bg = colorClasses[color] ?? "bg-lilac";
  return (
    <div
      aria-hidden="true"
      className={cn("animate-float", bg, className)}
      style={{
        borderRadius: "42% 58% 63% 37% / 41% 44% 56% 59%",
      }}
    />
  );
}
