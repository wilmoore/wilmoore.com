"use client";

/**
 * StickyScrollSection Component
 *
 * Creates a "scroll in place" effect where a sticky element remains fixed
 * while content panels scroll through with enhanced transitions.
 */

import { useEffect, useRef, useState, createContext, useContext } from "react";

// Context to share active index across components
const ScrollContext = createContext<{
  activeIndex: number;
  totalItems: number;
}>({ activeIndex: 0, totalItems: 0 });

interface StickyScrollSectionProps {
  children: React.ReactNode;
  stickyContent: React.ReactNode;
  totalItems: number;
  className?: string;
}

export function StickyScrollSection({
  children,
  stickyContent,
  totalItems,
  className = "",
}: StickyScrollSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ScrollContext.Provider value={{ activeIndex, totalItems }}>
      <div className={`relative ${className}`}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
            {stickyContent}

            {/* Progress indicator */}
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-3">
                {Array.from({ length: totalItems }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const element = document.getElementById(`case-study-${i}`);
                      element?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`relative h-2 transition-all duration-500 ease-out ${
                      i === activeIndex
                        ? "w-8 bg-[var(--accent)]"
                        : "w-2 bg-[var(--border)] hover:bg-[var(--ink-muted)]"
                    } rounded-full`}
                    aria-label={`Go to case study ${i + 1}`}
                  />
                ))}
                <span className="ml-2 text-sm tabular-nums text-[var(--ink-muted)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* Scrolling right column */}
          <div className="mt-12 lg:mt-0">
            <ScrollTracker onActiveChange={setActiveIndex} totalItems={totalItems}>
              {children}
            </ScrollTracker>
          </div>
        </div>
      </div>
    </ScrollContext.Provider>
  );
}

// Internal component to track scroll position
function ScrollTracker({
  children,
  onActiveChange,
  totalItems,
}: {
  children: React.ReactNode;
  onActiveChange: (index: number) => void;
  totalItems: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll("[data-case-study-index]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.caseStudyIndex || "0"
            );
            onActiveChange(index);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [onActiveChange, totalItems]);

  return <div ref={containerRef}>{children}</div>;
}

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  outcomes: readonly string[];
  placeholderLabel: string;
  screenshots?: readonly string[];
  href?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  index: number;
}

export function CaseStudyCard({
  title,
  client,
  description,
  outcomes,
  placeholderLabel,
  screenshots,
  href,
  testimonial,
  index,
}: CaseStudyCardProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { activeIndex } = useContext(ScrollContext);

  const isActive = activeIndex === index;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
        // Calculate how centered the element is in viewport
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = viewportHeight / 2;
        const progress = Math.max(0, 1 - distance / maxDistance);
        setScrollProgress(progress);
      },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 20) }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const TitleWrapper = href ? "a" : "div";
  const titleProps = href
    ? {
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "group inline-flex items-center gap-2 hover:text-[var(--accent)] transition-colors",
      }
    : {};

  // Dynamic styles based on scroll progress (subtle effect)
  const dynamicOpacity = 0.75 + scrollProgress * 0.25;
  const dynamicScale = 0.98 + scrollProgress * 0.02;

  return (
    <div
      id={`case-study-${index}`}
      ref={ref}
      data-case-study-index={index}
      className={`mb-32 last:mb-0 transition-all duration-700 ease-out ${
        isVisible ? "" : "translate-y-8 opacity-0"
      }`}
      style={{
        opacity: isVisible ? dynamicOpacity : 0,
        transform: isVisible ? `scale(${dynamicScale})` : "scale(0.98) translateY(24px)",
      }}
    >
      {/* Active indicator line */}
      <div
        className={`mb-8 h-0.5 transition-all duration-500 ease-out ${
          isActive ? "w-16 bg-[var(--accent)]" : "w-8 bg-[var(--border)]"
        }`}
      />

      {/* Case study number */}
      <div className="mb-6 flex items-center gap-4">
        <span
          className={`font-serif text-5xl italic transition-all duration-500 ${
            isActive ? "text-[var(--accent)]" : "text-[var(--border)]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm uppercase tracking-widest text-[var(--ink-muted)]">
          {client}
        </span>
      </div>

      {/* Screenshot carousel or placeholder */}
      {screenshots && screenshots.length > 0 ? (
        <div
          className={`relative mb-8 overflow-hidden rounded-lg border border-[var(--border)] transition-all duration-700 ${
            isActive ? "shadow-xl shadow-[var(--accent)]/15" : "shadow-lg"
          }`}
          style={{
            transform: `scale(${0.98 + scrollProgress * 0.02})`,
          }}
        >
          {/* Screenshot display */}
          <div className="relative aspect-video overflow-hidden bg-[var(--canvas)]">
            {screenshots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover object-top transition-all duration-500 ${
                  i === activeScreenshot
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              />
            ))}
          </div>

          {/* Navigation dots */}
          {screenshots.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeScreenshot
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`View screenshot ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Navigation arrows for desktop */}
          {screenshots.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveScreenshot((prev) =>
                    prev === 0 ? screenshots.length - 1 : prev - 1
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 lg:opacity-100"
                aria-label="Previous screenshot"
              >
                &larr;
              </button>
              <button
                onClick={() =>
                  setActiveScreenshot((prev) =>
                    prev === screenshots.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/60 group-hover:opacity-100 lg:opacity-100"
                aria-label="Next screenshot"
              >
                &rarr;
              </button>
            </>
          )}
        </div>
      ) : (
        <div
          className={`editorial-placeholder aspect-video mb-8 transition-all duration-700 ${
            isActive ? "shadow-lg shadow-[var(--accent)]/10" : ""
          }`}
          style={{
            transform: `scale(${0.98 + scrollProgress * 0.02})`,
          }}
        >
          <span className="editorial-placeholder-label">{placeholderLabel}</span>
        </div>
      )}

      {/* Content with staggered fade */}
      <div
        className="transition-all duration-500 delay-100"
        style={{ opacity: 0.85 + scrollProgress * 0.15 }}
      >
        <TitleWrapper {...titleProps}>
          <h3 className="editorial-headline text-2xl md:text-3xl">{title}</h3>
          {href && (
            <span className="text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
              &rarr;
            </span>
          )}
        </TitleWrapper>

        <p className="mt-4 text-lg leading-relaxed text-[var(--ink-muted)]">
          {description}
        </p>
      </div>

      {/* Outcomes with staggered reveal */}
      <ul className="mt-6 space-y-2">
        {outcomes.slice(0, 4).map((outcome, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-[var(--ink)] transition-all duration-300"
            style={{
              opacity: 0.8 + scrollProgress * 0.2,
              transform: `translateX(${(1 - scrollProgress) * 4}px)`,
              transitionDelay: `${i * 50}ms`,
            }}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-[var(--accent)] scale-125" : "bg-[var(--ink-muted)]"
              }`}
            />
            {outcome}
          </li>
        ))}
      </ul>

      {/* Testimonial with fade */}
      {testimonial && (
        <blockquote
          className="mt-8 border-l-2 border-[var(--accent)] pl-6 transition-all duration-500"
          style={{
            opacity: 0.8 + scrollProgress * 0.2,
            transform: `translateY(${(1 - scrollProgress) * 4}px)`,
          }}
        >
          <p className="font-serif text-lg italic text-[var(--ink)]">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <cite className="mt-3 block text-sm not-italic text-[var(--ink-muted)]">
            {testimonial.author}, {testimonial.role}
          </cite>
        </blockquote>
      )}
    </div>
  );
}
