import { cn } from "@/lib/utils";

export function Sparkle({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
    >
      {/* Four-point concave-diamond star */}
      <path d="M12 2 C12 2 13 8 18 9 C18 9 13 10 12 16 C12 16 11 10 6 9 C6 9 11 8 12 2 Z" />
      <path d="M12 16 C12 16 13 20 15 21 C15 21 13 22 12 24 C12 24 11 22 9 21 C9 21 11 20 12 16 Z" opacity="0.4" />
    </svg>
  );
}
