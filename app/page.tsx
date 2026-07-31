import { CONTENT } from "@/content.config";
import {
  SectionLabel,
  PullQuote,
  EditorialPlaceholder,
  FadeInSection,
  StickyScrollSection,
  CaseStudyCard,
} from "@/components/editorial";

/**
 * Editorial Surface - Revenue Systems Architect
 *
 * Magazine-inspired single-page layout with warm editorial aesthetic.
 * Serif headlines, numbered sections, pull quotes, and sticky scroll case studies.
 */
export default function EditorialSurface() {
  return (
    <main className="min-h-screen">
      {/* Subtle grain overlay for texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Hero - Full Viewport with Background Image */}
      <section
        aria-label="Hero"
        className="relative flex min-h-screen flex-col justify-end overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-wil.jpg"
            alt="Laptop with code on an outdoor patio workspace"
            className="h-full w-full object-cover object-top"
          />
          {/* Gradient overlays for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/40 to-[var(--ink)]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/70 via-transparent to-transparent" />
          {/* Warm golden hour tint */}
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-24 pt-48 md:px-12 md:pb-32">
          <div className="mx-auto max-w-5xl">
            <FadeInSection>
              <h1 className="editorial-headline text-4xl text-white drop-shadow-lg md:text-6xl lg:text-7xl">
                {CONTENT.hero.headline.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="mt-10 max-w-2xl space-y-5">
                {CONTENT.hero.supportingCopy.map((line, index) => (
                  <p
                    key={index}
                    className="text-lg leading-relaxed text-white/80 md:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <a
                  href={CONTENT.hero.primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[var(--accent)] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-lg"
                >
                  {CONTENT.hero.primaryCta.text} &rarr;
                </a>
                <a
                  href={CONTENT.hero.secondaryCta.href}
                  className="inline-flex items-center justify-center border-2 border-white/60 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
                >
                  {CONTENT.hero.secondaryCta.text} &rarr;
                </a>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll
            </span>
            <span className="animate-bounce text-lg">&darr;</span>
          </div>
        </div>
      </section>

      {/* Process + Case Studies - Sticky Scroll Section */}
      <section
        id="case-studies"
        aria-label="Process and Case Studies"
        className="bg-[var(--paper)] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <StickyScrollSection
            totalItems={CONTENT.caseStudies.length}
            stickyContent={
              <div>
                <FadeInSection>
                  <SectionLabel number="01" label="Process" className="mb-12" />
                </FadeInSection>

                {/* Large watermark */}
                <div
                  className="section-watermark mb-8 opacity-30"
                  aria-hidden="true"
                >
                  01
                </div>

                <FadeInSection delay={100}>
                  <div className="space-y-6">
                    {CONTENT.howIWork.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="mt-1 font-serif text-base italic text-[var(--accent)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-xl text-[var(--ink)]">{step}</p>
                      </div>
                    ))}
                  </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <div className="mt-12 border-t border-[var(--border)] pt-8">
                    <p className="text-sm uppercase tracking-widest text-[var(--ink-muted)]">
                      Scroll to explore case studies &darr;
                    </p>
                  </div>
                </FadeInSection>
              </div>
            }
          >
            {/* Case Studies - Scrolling Column */}
            <div>
              <SectionLabel number="02" label="Case Studies" className="mb-12" />

              {CONTENT.caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  title={study.title}
                  client={study.client}
                  description={study.description}
                  outcomes={study.outcomes}
                  placeholderLabel={study.placeholderLabel}
                  screenshots={
                    "screenshots" in study ? study.screenshots : undefined
                  }
                  href={"href" in study ? study.href : undefined}
                  testimonial={
                    "testimonial" in study ? study.testimonial : undefined
                  }
                  index={index}
                />
              ))}
            </div>
          </StickyScrollSection>
        </div>
      </section>

      {/* Additional Work - Magazine Cards */}
      <section
        aria-label="Additional Work"
        className="bg-[var(--canvas)] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-5xl">
          <FadeInSection>
            <SectionLabel number="03" label="Selected Work" className="mb-16" />
          </FadeInSection>

          <div className="grid gap-12 sm:grid-cols-2">
            {CONTENT.additionalWork.projects.map((project, index) => (
              <FadeInSection key={project.title} delay={index * 100}>
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block space-y-5"
                >
                  <div className="aspect-video overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--canvas)] shadow-md transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-xl">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium transition-colors group-hover:text-[var(--accent)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--ink-muted)]">
                      {project.description}
                    </p>
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {project.outcome}
                    </p>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* About - Pull Quote Style */}
      <section
        aria-label="About"
        className="bg-[var(--paper)] px-6 py-24 md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <FadeInSection>
            <SectionLabel number="04" label="Philosophy" className="mb-16" />
          </FadeInSection>

          <FadeInSection delay={150}>
            <PullQuote>
              {CONTENT.about.copy.map((line, index) => (
                <span key={index} className="block">
                  {line}
                  {index < CONTENT.about.copy.length - 1 && <br />}
                </span>
              ))}
            </PullQuote>
          </FadeInSection>
        </div>
      </section>

      {/* Contact - Minimal Footer */}
      <footer
        aria-label="Contact"
        className="border-t border-[var(--border)] bg-[var(--canvas)] px-6 py-16 md:px-12"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium">Wil Moore III</p>
            <p className="text-[var(--ink-muted)]">Revenue Systems Architect</p>
          </div>

          <div className="flex gap-8">
            <a
              href={CONTENT.contact.email.href}
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              {CONTENT.contact.email.label}
            </a>
            <a
              href={CONTENT.contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ink-muted)] transition-colors hover:text-[var(--accent)]"
            >
              {CONTENT.contact.linkedin.label}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
