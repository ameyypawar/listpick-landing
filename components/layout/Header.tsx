"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, PRODUCT_NAME, INSTALL_URL } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div className="w-full max-w-5xl bg-cream/90 backdrop-blur border-2 border-ink rounded-pill shadow-[4px_4px_0px_0px_hsl(var(--ink))] px-4 py-3 flex items-center justify-between">
        {/* Left: logo + wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label={`${PRODUCT_NAME} home`}
        >
          <Image src="/logo.svg" alt={`${PRODUCT_NAME} logo`} width={32} height={32} />
          <span className="font-display font-bold text-xl text-ink">{PRODUCT_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-semibold text-ink hover:text-indigo transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-display font-semibold text-ink hover:text-indigo transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href={INSTALL_URL} variant="primary" external>
              Add to Chrome
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-pill border-2 border-ink bg-cream text-ink hover:bg-amber transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-[calc(100%+8px)] left-4 right-4 bg-cream border-2 border-ink rounded-blob shadow-[4px_4px_0px_0px_hsl(var(--ink))] p-5 flex flex-col gap-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-ink hover:text-indigo transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-display font-semibold text-ink hover:text-indigo transition-colors"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <Button href={INSTALL_URL} variant="primary" external className="w-full justify-center">
            Add to Chrome
          </Button>
        </div>
      )}
    </header>
  );
}
