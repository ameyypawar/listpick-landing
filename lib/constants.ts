// ── URLs ──────────────────────────────────────────────────────────────────────
export const INSTALL_URL = "https://github.com/ameyypawar/pluck";
export const GITHUB_URL = "https://github.com/ameyypawar/pluck";
export const LICENSE_URL = "https://github.com/ameyypawar/pluck/blob/main/LICENSE";
export const ISSUES_URL = "https://github.com/ameyypawar/pluck/issues";

// ── Product name ──────────────────────────────────────────────────────────────
export const PRODUCT_NAME = "Pluck";

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how" },
  { label: "Privacy", href: "/privacy" },
  { label: "GitHub", href: GITHUB_URL, external: true },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
export interface Cta {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subhead: string;
  badges: string[];
  primaryCta: Cta;
  secondaryCta: Cta;
}

export const HERO: HeroContent = {
  eyebrow: "Chrome extension · MIT open source",
  headline: "Pluck any list into CSV.",
  subhead:
    "Auto-detect any list on the web — products, jobs, search results — and export it to a clean CSV. One click, no setup.",
  badges: ["Deterministic", "100% local", "No tracking"],
  primaryCta: { label: "Add to Chrome", href: INSTALL_URL },
  secondaryCta: { label: "View on GitHub", href: GITHUB_URL },
};

// ── Hero mock data ────────────────────────────────────────────────────────────
export interface HeroMock {
  url: string;
  columns: string[];
  rows: string[][];
  highlightIndex: number;
  filename: string;
}

export const HERO_MOCK: HeroMock = {
  url: "shop.example.com/laptops",
  columns: ["Title", "Price", "Link"],
  rows: [
    ["UltraBook 14 Pro", "$1,299", "/p/ultrabook-14"],
    ["AeroLite 13", "$899", "/p/aerolite-13"],
    ["PixelBook Go", "$649", "/p/pixelbook-go"],
    ["ZenBook Flip", "$1,049", "/p/zenbook-flip"],
  ],
  highlightIndex: 1,
  filename: "pluck.csv",
};

// ── Features ──────────────────────────────────────────────────────────────────
export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const FEATURES: Feature[] = [
  {
    title: "Automatic detection",
    description:
      "Pure DOM analysis finds repeated item patterns. No AI, no machine learning, no configuration.",
    icon: "ScanLine",
    color: "indigo",
  },
  {
    title: "Live preview & highlight",
    description:
      "See the detected columns and rows in the side panel, with matched items highlighted right on the page.",
    icon: "Eye",
    color: "amber",
  },
  {
    title: "Clean CSV export",
    description:
      "RFC-4180 compliant output with formula-injection protection. Files named pluck_{site}_{date}.csv.",
    icon: "FileSpreadsheet",
    color: "lilac",
  },
  {
    title: "Scroll-harvest",
    description:
      "Optionally auto-scroll infinite and lazy-loaded lists so every item is captured before export.",
    icon: "MousePointerClick",
    color: "kelly",
  },
  {
    title: "100% local",
    description:
      "Detection, extraction and CSV generation all happen in your browser. Zero network requests.",
    icon: "ShieldCheck",
    color: "bubblegum",
  },
  {
    title: "Zero telemetry",
    description:
      "No analytics, no crash reporting, no accounts. Pluck collects nothing about you.",
    icon: "EyeOff",
    color: "brightyellow",
  },
  {
    title: "Deterministic",
    description:
      "Same page in, same CSV out. No randomness, no guessing — predictable every time.",
    icon: "Repeat",
    color: "mint",
  },
  {
    title: "No setup",
    description:
      "Install, click, export. Works out of the box on any site the moment you need it.",
    icon: "Zap",
    color: "indigo",
  },
];

// ── Steps ─────────────────────────────────────────────────────────────────────
export interface Step {
  n: number;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    n: 1,
    title: "Install Pluck",
    description: "Add it to Chrome from the Web Store or load it unpacked.",
  },
  {
    n: 2,
    title: "Open any list",
    description: "Visit a product grid, job board, search results or directory.",
  },
  {
    n: 3,
    title: "Detect & preview",
    description:
      "Click the Pluck icon, hit Detect — it finds the list and shows a live preview.",
  },
  {
    n: 4,
    title: "Export to CSV",
    description: "Review the columns and download a clean CSV to your device.",
  },
];

// ── Privacy teaser ────────────────────────────────────────────────────────────
export interface PrivacyTeaser {
  heading: string;
  body: string;
  cta: Cta;
}

export const PRIVACY_TEASER: PrivacyTeaser = {
  heading: "Your data never leaves your browser.",
  body: "Pluck has no servers, no accounts and no analytics. It reads a page only when you click Detect, processes everything locally, and writes the CSV straight to your device.",
  cta: { label: "Read the full policy", href: "/privacy" },
};

// ── Privacy policy ────────────────────────────────────────────────────────────
export interface PrivacySection {
  heading: string;
  body?: string;
  paragraphs?: string[];
  bullets?: string[];
  trailingParagraph?: string;
}

export interface PrivacyPolicy {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: PrivacySection[];
}

export const PRIVACY_POLICY: PrivacyPolicy = {
  title: "Privacy Policy — Pluck",
  effectiveDate: "June 16, 2026",
  intro:
    'Pluck ("the extension") is a browser extension that detects repeated lists of items on the web page you are viewing and exports them to a CSV file on your device. This policy explains what data Pluck does and does not handle.',
  sections: [
    {
      heading: "Summary",
      body: "Pluck collects nothing. It has no accounts, makes no network requests of its own, contains no analytics or tracking, and sends no data to the developer or to any third party. Everything happens locally in your browser.",
    },
    {
      heading: "What data Pluck accesses",
      paragraphs: [
        "When you explicitly invoke Pluck — by opening its side panel and clicking Detect — it reads the content of the page you are currently viewing in order to find the repeated list and extract its fields (such as titles, prices, image URLs, and links). This processing happens entirely on your device. The extracted data is shown to you as a preview and, when you click Export, written directly to a CSV file that you download. Pluck does not transmit this content anywhere.",
        "Pluck does not access pages in the background. It reads a page only on your explicit action, and only the page you are actively viewing.",
      ],
    },
    {
      heading: "What data Pluck stores",
      body: "Pluck uses your browser's local storage (chrome.storage) to keep your preferences and the in-progress extraction state — for example, the list you selected, the columns you chose, and scroll progress. This data stays on your device and is never transmitted. You can clear it at any time by removing the extension.",
    },
    {
      heading: "Data Pluck does NOT collect",
      body: "Pluck does not collect, store off your device, sell, rent, or share any:",
      bullets: [
        "personally identifiable information (name, address, email, ID numbers)",
        "authentication information or passwords",
        "financial or payment information",
        "health information",
        "personal communications",
        "location",
        "web browsing history",
        "general user activity or analytics",
      ],
      trailingParagraph:
        "Pluck makes no network requests of its own and operates no servers.",
    },
    {
      heading: "Permissions",
      body: "Pluck requests only the permissions needed for its single purpose — extracting the visible list on a page to CSV:",
      bullets: [
        "activeTab and an optional host permission — to read the page you point it at, on your explicit action.",
        "scripting — to run the extraction logic inside that page.",
        "downloads — to save the CSV to your device.",
        "storage — to keep local settings and extraction state on your device.",
        "sidePanel — to show Pluck's interface.",
      ],
      trailingParagraph: "None of these are used to collect or transmit data.",
    },
    {
      heading: "Third parties",
      body: "Pluck shares no data with third parties, because it collects no data and makes no network requests.",
    },
    {
      heading: "Children's privacy",
      body: "Pluck is a general-purpose productivity tool, is not directed at children, and collects no data from anyone, including children.",
    },
    {
      heading: "Changes to this policy",
      body: "If this policy changes, the updated version will be published at this URL with a new effective date.",
    },
    {
      heading: "Contact",
      body: "Pluck is free and open source. For questions, issues, or requests, please open an issue at: " + ISSUES_URL,
    },
  ],
};

// ── Footer ────────────────────────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const FOOTER_LINKS: FooterLink[] = [
  { label: "GitHub", href: GITHUB_URL, external: true },
  { label: "Privacy", href: "/privacy" },
  { label: "MIT License", href: LICENSE_URL, external: true },
];

export const FOOTER_TAGLINE = "No data ever leaves your browser.";
