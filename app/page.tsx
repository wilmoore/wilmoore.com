import { CONTENT } from "@/content.config";

/**
 * Operator Surface (S-001)
 *
 * Single-page layout with minimal editorial design.
 * Implements: US-001, US-002, US-003, US-004, US-005, US-006
 */
export default function OperatorSurface() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-12 md:py-24 lg:py-32">
      <div className="mx-auto max-w-2xl space-y-16 md:space-y-24">
        {/* Hero */}
        <section aria-label="Hero">
          <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {CONTENT.hero.lines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 text-lg font-medium text-neutral-600 md:text-xl">
            {CONTENT.hero.tagline}
          </p>
        </section>

        {/* What I Do */}
        <section aria-label="What I Do">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
            What I Do
          </h2>
          <ul className="space-y-3 text-lg md:text-xl">
            {CONTENT.whatIDo.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Availability */}
        <section aria-label="Availability">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Availability
          </h2>
          <div className="space-y-2 text-lg md:text-xl">
            {CONTENT.availability.lines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>

        {/* Proof of Work */}
        <section aria-label="Proof of Work">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Proof of Work
          </h2>
          <ul className="space-y-3 text-lg md:text-xl">
            {CONTENT.proofOfWork.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:no-underline"
                >
                  {link.label}
                </a>
                {link.tag && (
                  <span className="text-neutral-500"> — {link.tag}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section aria-label="Contact">
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">
            Contact
          </h2>
          <ul className="space-y-3 text-lg md:text-xl">
            <li>
              <a
                href={CONTENT.contact.email.href}
                className="underline underline-offset-4 hover:no-underline"
              >
                {CONTENT.contact.email.label}
              </a>
            </li>
            <li>
              <a
                href={CONTENT.contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                {CONTENT.contact.linkedin.label}
              </a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section aria-label="Call to Action">
          <div className="text-lg md:text-xl">
            {CONTENT.cta.headline.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <a
            href={CONTENT.cta.buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block border border-neutral-800 px-6 py-3 text-lg font-medium transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white md:text-xl"
          >
            {CONTENT.cta.buttonText}
          </a>
        </section>
      </div>
    </main>
  );
}
