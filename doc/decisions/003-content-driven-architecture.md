# 003. Content-Driven Architecture

Date: 2026-02-14

## Status

Accepted

## Context

Building a minimal personal homepage (wilmoore.com) that serves as an authority surface and routes traffic to a productized service (CodeRescues.dev). The site needs to be:

- Highly scannable
- Easy to update content without touching components
- Minimal editorial design
- No CMS overhead

## Decision

Implement a content-driven architecture where all page content is centralized in `content.config.ts` and consumed by a single page component.

Structure:
- `content.config.ts` - All text content, links, and configuration
- `app/page.tsx` - Single page component that renders content
- No dynamic routes, no CMS, no database

## Consequences

**Positive:**
- Single source of truth for all content
- Fast iteration on copy without touching component logic
- Type-safe content via TypeScript `as const`
- Zero runtime dependencies for content
- Predictable deployment (content changes = code commits)

**Negative:**
- Requires code commit for any content change
- No non-technical editing (acceptable for single-owner site)
- Content and presentation somewhat coupled

## Alternatives Considered

1. **Headless CMS (Contentful, Sanity)** - Rejected: overkill for single-page site, adds complexity
2. **Markdown files with frontmatter** - Rejected: unnecessary abstraction for simple content
3. **Inline content in JSX** - Rejected: mixes content with presentation, harder to update

## Related

- Planning: `.plan/.done/mvp-wilmoore-com/`
