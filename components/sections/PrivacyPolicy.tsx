import { PRIVACY_POLICY, ISSUES_URL } from "@/lib/constants";
import { Sparkle } from "@/components/ui/Sparkle";
import { Pill } from "@/components/ui/Pill";
import { Scallop } from "@/components/ui/Scallop";

function SectionBody({ section }: { section: (typeof PRIVACY_POLICY.sections)[number] }) {
  const isContact = section.heading === "Contact";

  function renderBodyText(text: string) {
    if (isContact) {
      const urlIdx = text.indexOf(ISSUES_URL);
      if (urlIdx !== -1) {
        return (
          <>
            {text.slice(0, urlIdx)}
            <a
              href={ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo underline underline-offset-2 hover:text-indigo/80 transition-colors break-all"
            >
              {ISSUES_URL}
            </a>
          </>
        );
      }
    }
    return text;
  }

  return (
    <div className="space-y-4">
      {section.body && (
        <p className="font-sans text-ink/80 text-base leading-relaxed">
          {renderBodyText(section.body)}
        </p>
      )}

      {section.paragraphs && section.paragraphs.map((p, i) => (
        <p key={i} className="font-sans text-ink/80 text-base leading-relaxed">
          {p}
        </p>
      ))}

      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-2 ml-1">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 font-sans text-ink/80 text-base leading-relaxed">
              <span className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-amber border border-ink" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.trailingParagraph && (
        <p className="font-sans text-ink/80 text-base leading-relaxed">
          {section.trailingParagraph}
        </p>
      )}
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <section className="bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header block */}
        <div className="mb-12 space-y-5">
          <div className="relative inline-block">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-ink leading-tight">
              {PRIVACY_POLICY.title}
            </h1>
            {/* Amber underline flourish */}
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-amber rounded-full" />
            <Sparkle
              size={28}
              className="absolute -top-4 -right-8 text-amber animate-float"
            />
          </div>

          <div className="pt-4">
            <Pill color="amber">Effective {PRIVACY_POLICY.effectiveDate}</Pill>
          </div>

          <p className="font-sans text-ink/70 text-lg leading-relaxed max-w-2xl">
            {PRIVACY_POLICY.intro}
          </p>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex-1 h-px bg-ink/10" />
          <Sparkle size={16} className="text-indigo/40" />
          <div className="flex-1 h-px bg-ink/10" />
        </div>

        {/* Sections */}
        <div className="space-y-10 pb-4">
          {PRIVACY_POLICY.sections.map((section, i) => (
            <div
              key={i}
              className="relative pl-5 border-l-4 border-indigo/20 hover:border-amber transition-colors duration-300"
            >
              <h2 className="font-display font-bold text-2xl text-ink mb-3 leading-snug">
                {section.heading}
              </h2>
              <SectionBody section={section} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scallop to transition into footer (ink bg) */}
      <div className="mt-24">
        <Scallop color="ink" className="bg-cream" />
      </div>
    </section>
  );
}
