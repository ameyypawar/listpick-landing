# Pluck — landing page

Marketing site for [Pluck](https://github.com/ameyypawar/pluck), a Chrome extension that auto-detects any list on a webpage and exports it to CSV.

**Live:** https://listpick-landing.vercel.app  
**Product repo:** https://github.com/ameyypawar/pluck

---

## What this is

A fast, single-page marketing site for the Pluck Chrome extension. Static-first, no backend, no CMS.

## Stack

- **Next.js 15** App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS v3.4**
- **Bricolage Grotesque** (display) + **Inter** (body) via `next/font`

## Develop

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Structure

```
app/                   # Next.js App Router — pages, layout, OG image
components/
  ui/                  # Low-level primitives (Button, Badge, …)
  layout/              # Header, Footer
  sections/            # Hero, Features, HowItWorks, PrivacyTeaser, CTA
lib/constants.ts       # Single source of truth for all copy and URLs
public/                # Static assets (logo.svg, favicon)
```

`lib/constants.ts` is the only place you need to edit copy or URLs.

## Deploy

Deployed on [Vercel](https://vercel.com) with default Next.js configuration. Push to `main` triggers a production deployment automatically.

## License

MIT
