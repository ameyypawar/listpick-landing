import Image from "next/image";
import Link from "next/link";
import { Scallop } from "@/components/ui/Scallop";
import { Sparkle } from "@/components/ui/Sparkle";
import {
  PRODUCT_NAME,
  FOOTER_LINKS,
  FOOTER_TAGLINE,
  GITHUB_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Scallop top edge — cream scallops biting into the ink bg */}
      <Scallop color="ink" flip className="mt-0" />

      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8 flex flex-col gap-10">
        {/* Top row: brand + links */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt={`${PRODUCT_NAME} logo`}
                width={32}
                height={32}
                className="invert"
              />
              <span className="font-display font-bold text-xl text-cream">
                {PRODUCT_NAME}
              </span>
            </div>
            <p className="font-sans text-sm text-cream/70 max-w-[220px]">
              Export any list on the web as CSV.
            </p>
          </div>

          {/* Footer links */}
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8" aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-cream hover:text-amber transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display font-semibold text-cream hover:text-amber transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Big tagline */}
        <div className="flex items-center gap-3">
          <Sparkle size={28} className="text-amber shrink-0" />
          <p className="font-display font-bold text-2xl sm:text-3xl text-cream leading-tight">
            {FOOTER_TAGLINE}
          </p>
        </div>

        {/* Bottom row */}
        <div className="border-t border-cream/20 pt-6 text-sm text-cream/50 font-sans">
          &copy; {new Date().getFullYear()} Amey Pawar &middot; MIT License
        </div>
      </div>
    </footer>
  );
}
