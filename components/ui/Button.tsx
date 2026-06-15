import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const variantClasses: Record<string, string> = {
  primary:
    "bg-indigo text-cream hover:bg-indigo/90 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_hsl(var(--ink))]",
  ink: "bg-ink text-cream hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_hsl(var(--amber))]",
  ghost:
    "bg-cream text-ink hover:bg-amber hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_hsl(var(--ink))]",
};

export function Button({
  href,
  variant = "primary",
  children,
  icon: Icon,
  external,
  className,
}: {
  href: string;
  variant?: "primary" | "ghost" | "ink";
  children: React.ReactNode;
  icon?: LucideIcon;
  external?: boolean;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center gap-2 rounded-pill px-6 py-3",
    "font-display font-semibold border-2 border-ink transition-all duration-150",
    variantClasses[variant],
    className
  );

  const inner = (
    <>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </>
  );

  const isInternal =
    !external && (href.startsWith("/") || href.startsWith("#"));

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {inner}
    </a>
  );
}
