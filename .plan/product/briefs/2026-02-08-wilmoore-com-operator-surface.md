# Product Brief — wilmoore.com (Operator Surface v0)

**Version:** 0.1
**Date:** 2026-02-08
**Status:** Active

---

## Problem

Traditional résumés and portfolio sites fail operators. They explain instead of close. They require maintenance. They bury credibility under explanation. When reaching out to hiring managers, founders, or partners, there's no single-link artifact that compresses credibility instantly and signals selective availability.

## Solution

A single-page personal operator site that:
- Delivers the core message in 10–20 seconds
- Shows proof of work through links, not explanations
- Preserves optionality (contract, W-2, workshops)
- Requires near-zero maintenance

## Customer

| Segment | Behavior | Need |
|---------|----------|------|
| Hiring managers | Skimming, evaluating fit | Quick credibility signal |
| Founders | Looking for operators who ship | Evidence of execution |
| Recruiters | Qualifying candidates | Clear positioning |
| Partners | Evaluating collaboration fit | Proof of work links |

## Why Now

- Active outreach for contract, W-2, and workshop opportunities
- Current site doesn't match operator positioning
- Need a primary link that closes conversations
- AI-native positioning is timely

## Business Model

This is an **enabler asset**, not a revenue-generating product:
- Supports contract income (CodeRescues.dev pipeline)
- Supports W-2 opportunities (selective availability signal)
- Supports workshop income (SavvyAI.dev promotion)

## Core Message

> I build, rescue, and ship systems that make money — and I'm selectively available.

---

## Scope (Locked)

### Page Structure

1. **Hero** — One sentence. No subtitle stack.
2. **What I Do** — Max 3 bullets. Concrete. No adjectives.
3. **Availability** — Preserves optionality (contract/W-2/workshops).
4. **Proof of Work** — Links only. No explanations.
5. **Contact** — Direct. No forms.

### Technical Constraints

- Next.js (refactored from Levelable React output)
- Tailwind (minimal, editorial)
- Static content (MD/TS file)
- Deployed on Vercel
- No CMS, blog, dashboards, or auth
- No external analytics initially
- Extensible via JSON or Supabase later

### Out of Scope

- Résumé content
- Portfolio gallery
- Content platform features
- SEO-optimized copy
- Any section that exists to "explain"

---

## Success Criteria (v0)

- [ ] Deployed within 24 hours
- [ ] Used as primary link in outreach
- [ ] Feels congruent when sent
- [ ] No embarrassment, no explanation required

---

## Proof of Work Links

| Project | URL | Status |
|---------|-----|--------|
| SavvyAI | SavvyAI.dev | Active |
| CodeRescues | CodeRescues.dev | Active |
| OneResu.me | oneresu.me | In Progress |
| GitHub | github.com/wilmoore | Active |

(Quiet Inbox intentionally excluded — white-glove, not marketed.)

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Over-engineering | Locked scope, 24hr deadline |
| Scope creep | "If it explains, it's out" rule |
| Maintenance burden | Static content, no CMS |

---

## Next Steps

1. Scaffold Next.js project (or refactor existing)
2. Implement locked page structure
3. Deploy to Vercel
4. Use in outreach
