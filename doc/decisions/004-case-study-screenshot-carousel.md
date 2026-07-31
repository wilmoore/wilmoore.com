# 004. Case Study Screenshot Carousel

Date: 2026-07-30

## Status

Accepted

## Context

The homepage redesign introduces case studies as a primary credibility mechanism. Each case study needs visual representation to demonstrate the work. Some case studies have multiple screenshots showing different aspects of the system (e.g., dispatch view and utilities modal).

## Decision

Implement a screenshot carousel system within the CaseStudyCard component:

1. **Optional screenshots array** - Case studies can include zero, one, or multiple screenshots via an optional `screenshots` property in `content.config.ts`
2. **Graceful fallback** - When no screenshots are provided, display the existing `EditorialPlaceholder` component
3. **Client-side state** - Use React state for carousel navigation (no external dependencies)
4. **Navigation UI** - Dot indicators at bottom, arrow buttons on sides for desktop

## Consequences

### Positive
- Flexibility: case studies can be added without screenshots initially
- Progressive enhancement: screenshots can be added incrementally
- No external dependencies: carousel is pure React/Tailwind
- Consistent with content-driven architecture (ADR-003)

### Negative
- Client component required for carousel state (`"use client"`)
- Images not using Next.js Image component (acceptable trade-off for simplicity)

## Alternatives Considered

1. **External carousel library (Swiper, Embla)** - Rejected for being overkill for 2-3 images
2. **Separate ImageCarousel component** - Rejected to keep case study rendering self-contained
3. **Static grid of images** - Rejected as it doesn't scale well visually with varying image counts

## Related

- Planning: `.plan/.done/feat-homepage-messaging-rewrite/`
- ADR-003: Content-Driven Architecture
