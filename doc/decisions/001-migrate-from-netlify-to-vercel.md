# 001. Migrate from Netlify to Vercel

Date: 2026-02-08

## Status

Accepted

## Context

The wilmoore.com site was hosted on Netlify as a simple static site with redirects. The site is being rewritten as a Next.js operator surface per the product brief. Vercel is the native deployment platform for Next.js with first-class support.

## Decision

Migrate from Netlify to Vercel for hosting and deployment.

## Consequences

**Positive:**
- First-class Next.js support (Vercel is the Next.js creator)
- Simpler deployment configuration
- Better developer experience for Next.js projects
- Native support for Next.js features (ISR, middleware, etc.)

**Negative:**
- Need to update DNS configuration
- Lose Netlify-specific features (not used)
- Redirect syntax changes (Netlify `_redirects` → `next.config.js`)

## Alternatives Considered

1. **Stay on Netlify** — Rejected because Vercel offers better Next.js integration
2. **Self-host** — Rejected due to maintenance overhead for a personal site

## Related

- Planning: `.plan/.done/chore-repo-cleanup-vercel-migration/`
