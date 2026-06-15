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

export function Pill({
  children,
  color = "cream",
  className,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  const bg = colorClasses[color] ?? "bg-cream";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-1.5",
        "font-display font-semibold text-sm",
        "rounded-pill border-2 border-ink text-ink",
        bg,
        className
      )}
    >
      {children}
    </span>
  );
}
