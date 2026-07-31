# Homepage Messaging Rewrite - Implementation Plan

## Overview

Redesign the homepage to position Wil Moore as a **Revenue Systems Architect** rather than a freelance software engineer. The homepage should communicate that software is the implementation layer; the real product is identifying hidden revenue opportunities and building systems to recover them.

## ADR Review

**ADR-003 (Content-Driven Architecture):** All content is centralized in `content.config.ts`. This rewrite will follow the same pattern, expanding the content structure to accommodate new sections while keeping presentation in `page.tsx`.

## Related ADRs

- [004. Case Study Screenshot Carousel](../../doc/decisions/004-case-study-screenshot-carousel.md) - Screenshot carousel system for case studies

## Current State

- Single-page layout with 6 sections: Hero, What I Do, Availability, Proof of Work, Contact, CTA
- Content in `content.config.ts` with TypeScript `as const`
- Minimal Tailwind styling, no component extraction
- No case study pages or screenshot assets

## Target State

New section structure:
1. **Hero** - New headline, supporting copy, Primary CTA, Secondary CTA
2. **How I Work** - Vertical process (4 steps with arrows)
3. **Featured Case Study** - Photography Operations Platform with screenshot
4. **Additional Work** - Cards for 4 projects with screenshots
5. **About** - Operational intelligence positioning
6. **Contact** - Email + LinkedIn (minimal)

## Design Decisions

### 1. Content Structure

Expand `content.config.ts` to support new sections:

```typescript
export const CONTENT = {
  hero: {
    headline: string[],      // Two lines
    supportingCopy: string[],
    primaryCta: { text: string, href: string },
    secondaryCta: { text: string, href: string }
  },
  howIWork: {
    steps: string[]          // 4 steps
  },
  featuredCaseStudy: {
    title: string,
    description: string,
    screenshot: string,      // Path to image
    outcomes: string[],
    cta: { text: string, href: string }
  },
  additionalWork: {
    projects: Array<{
      title: string,
      description: string,
      screenshot: string,
      outcome: string,
      href: string
    }>
  },
  about: {
    copy: string[]
  },
  contact: {
    email: { label: string, href: string },
    linkedin: { label: string, href: string }
  }
}
```

### 2. Screenshot Assets

Screenshots need to be added to `/public/screenshots/`:
- `photography-ops.png` - Featured case study
- `pdfpages.png` - PDFPages
- `folder-automation.png` - Folder Automation
- `coderescues.png` - CodeRescues.dev
- `savvyai.png` - SavvyAI.dev

**Question:** Do these screenshots exist or need to be created?

### 3. Case Study Detail Page

The spec mentions "View Case Study" CTA. Options:
1. **External link** - Link to a separate case study page (if it exists)
2. **Anchor/modal** - Show more details inline
3. **New route** - Create `/case-studies/photography-ops` page

**Question:** Should "View Case Study" link externally or should we create an internal case study page?

### 4. Layout Adjustments

- Increase `max-w-2xl` to `max-w-4xl` for case study cards
- Maintain minimal aesthetic (black/white, large typography, whitespace)
- Process section uses generous vertical spacing with down arrows

### 5. Responsive Considerations

- Hero: stack on mobile, side-by-side CTAs on desktop
- Additional Work: single column mobile, 2x2 grid desktop
- Process steps: maintain vertical layout all breakpoints

## Implementation Steps

### Step 1: Update Content Configuration
- Rewrite `content.config.ts` with new section structure
- Add all copy exactly as specified
- Hero: headline, supporting copy, two CTAs
- How I Work: 4-step process
- Featured Case Study: Photography Operations Platform
- Additional Work: 4 project cards
- About: operational intelligence positioning
- Contact: email + LinkedIn

### Step 2: Create Screenshot Directory
- Create `/public/screenshots/` directory
- Add placeholder or actual screenshots:
  - `photography-ops.png`
  - `pdfpages.png`
  - `folder-automation.png`
  - `coderescues.png`
  - `savvyai.png`

### Step 3: Rewrite Page Component
- Rewrite `app/page.tsx` with new layout
- Implement all sections with proper semantic HTML
- Add `id="case-studies"` anchor for scroll navigation
- Use Next.js Image component for screenshots
- Maintain minimal aesthetic (black/white, large typography, whitespace)

### Step 4: Responsive Layout
- Hero: stacked mobile, side-by-side CTAs on md+
- Process: vertical layout all breakpoints
- Additional Work: single column mobile, 2-column grid on md+
- Case Study: image below text on mobile, side-by-side on lg+

### Step 5: Update Metadata
- Update `META.description` in `content.config.ts`
- Update page metadata for SEO
- Verify JSON-LD schema reflects new positioning

### Step 6: Verify & Test
- Run build to ensure no errors
- Test responsive breakpoints
- Verify all links work
- Check typography hierarchy

## Resolved Questions

1. **Screenshots:** User will provide screenshots for `/public/screenshots/`

2. **Primary CTA ("Book a Revenue Systems Diagnostic"):** Links to LinkedIn profile (`https://linkedin.com/in/wilmoore`)

3. **Secondary CTA ("View Case Studies"):** Anchor scroll to Featured Case Study section (`#case-studies`)

4. **Case Study CTA ("View Case Study"):** Also anchor scroll (keeps single-page simplicity, future iteration can add dedicated pages if needed)

## Files to Modify

- `content.config.ts` - Expand content structure
- `app/page.tsx` - Rewrite layout and sections
- `app/layout.tsx` - Update META if needed
- `/public/screenshots/` - Add screenshot assets

## Removed Sections

- **What I Do** - Replaced by How I Work
- **Availability** - Removed (not in spec)
- **Proof of Work** - Replaced by Featured Case Study + Additional Work
- **CTA** - Integrated into Hero as Primary/Secondary CTAs

## Tone Reminders

**Avoid:** Full Stack Engineer, React Developer, TypeScript Expert, AI Engineer

**Emphasize:** Operational Intelligence, Revenue Systems, Diagnostics, Revenue Recovery, AI Deployment, Automation, Business Leverage

The visitor should leave with the impression that Wil solves business problems first and writes software second.
