Below is a **complete PRD** generated in **Autopilot mode**, using your Product Brief as the sole source of truth.
No facts were invented. Where choices were required, defaults were applied and logged as assumptions with confidence scores.

---

# PRD — wilmoore.com (Operator Surface v0)

## 1. Product Thesis

wilmoore.com is a single-page operator surface designed to replace résumé behavior with an offensive, credibility-compressing presence. Its sole purpose is to close conversations in under 20 seconds by signaling competence, selectivity, and availability without explanation.

The site supports contract, W-2, and workshop income with near-zero maintenance. It is intentionally minimal, static, and non-explanatory.

---

## 2. Core Design Principles

* **Compression over completeness**
  Every element must reduce cognitive load and time-to-understanding.

* **Signal, do not explain**
  No narrative justification, case studies, or descriptive copy.

* **Optionality preservation**
  Language must avoid commitment signals that narrow opportunity space.

* **Editorial restraint**
  Large type, whitespace, and limited elements outperform decoration.

* **Zero maintenance bias**
  Static content, no CMS, no dynamic dependencies in v0.

---

## 3. Personas

### P-001 Hiring Manager

* Goal: Rapidly assess seniority and credibility
* Behavior: Skims, opens links, decides quickly
* Risk: Dismisses anything that feels junior or verbose

### P-002 Founder

* Goal: Find someone who can ship or fix fast
* Behavior: Pattern-matching, link-clicking
* Risk: Distrusts marketing language

### P-003 Recruiter

* Goal: Confirm role fit and availability
* Behavior: Scans headline and availability
* Risk: Needs clarity without overcommitment

### P-004 Partner

* Goal: Assess seriousness and alignment
* Behavior: Reviews proof links
* Risk: Overly polished sites reduce trust

---

## 4. Input Scenarios

* Linked directly in cold or warm outreach
* Clicked from LinkedIn profile
* Shared in private Slack, email, or DM threads
* Viewed on desktop or mobile with no context

---

## 5. User Journeys

* **J-001 Skim and Decide**
  Viewer lands, reads hero, scans bullets, checks availability, clicks one link, decides yes or no.

* **J-002 Proof Validation**
  Viewer clicks one or more proof links to validate competence externally.

* **J-003 Contact Initiation**
  Viewer uses email or LinkedIn to initiate conversation.

---

## 6. UX Surface Inventory

### S-001 Operator Page (Single Page)

* Purpose: Compress credibility and enable contact
* Primary actions:

  * Click proof links
  * Initiate contact via email or LinkedIn
* States:

  * Empty: Not applicable (static)
  * Loading: Static render
  * Error: Not applicable
  * Success: Contact initiated off-site

---

## 7. Behavior and Editing Model

* Content stored in a static MD or TS config file
* No inline editing
* Changes require code commit and deploy
* No personalization or dynamic rendering in v0

---

## 8. Constraints and Anti-Features

### Constraints

* Next.js deployment on Vercel
* Tailwind for styling
* Single-page layout
* Static content only
* No external analytics in v0

### Anti-Features (Explicitly Out of Scope)

* Résumé sections
* Case study explanations
* Blog or content feed
* SEO optimization
* Forms or gated contact
* Auth, dashboards, CMS

---

## 9. Success and Failure Criteria

### Success Criteria

* Site deployed within 24 hours
* Used as primary outreach link
* Feels congruent to send without explanation
* Generates conversations without embarrassment

### Failure Criteria

* Requires verbal explanation when shared
* Feels like a résumé or SaaS landing page
* Encourages scrolling instead of decision-making

---

## 10. North Star

**Outbound confidence**
Measured qualitatively by willingness to use the site as the sole link in outreach.

---

## 11. Epics

* **E-001 [MUST] Operator Surface Rendering**
* **E-002 [MUST] Credibility Signal Content**
* **E-003 [MUST] Contact Enablement**
* **E-004 [WONT] Analytics and Optimization**

---

## 12. User Stories with Acceptance Criteria

### E-001 Operator Surface Rendering

* **US-001 [MUST]** As a viewer, I see all content on a single page without navigation.
  **Given** I load the site
  **When** the page renders
  **Then** all sections are visible via vertical scroll only

* **US-002 [MUST]** As a viewer, I experience a minimal editorial layout.
  **Given** the page renders
  **Then** typography is large, spacing is generous, and no decorative elements distract

---

### E-002 Credibility Signal Content

* **US-003 [MUST]** As a viewer, I see a single-sentence hero statement.
  **Given** the hero section
  **Then** exactly one sentence is displayed with no subtitle stack

* **US-004 [MUST]** As a viewer, I can scan what the operator does in under 5 seconds.
  **Given** the "What I Do" section
  **Then** no more than three concrete bullet points are shown

* **US-005 [MUST]** As a viewer, I can validate credibility via external links.
  **Given** the Proof of Work section
  **Then** links are displayed without descriptive text

---

### E-003 Contact Enablement

* **US-006 [MUST]** As a viewer, I can contact directly without friction.
  **Given** the Contact section
  **Then** email and LinkedIn links are visible and clickable

---

## 13. Traceability Map

| Story  | Epic  | Journey | Screen | Priority |
| ------ | ----- | ------- | ------ | -------- |
| US-001 | E-001 | J-001   | S-001  | MUST     |
| US-002 | E-001 | J-001   | S-001  | MUST     |
| US-003 | E-002 | J-001   | S-001  | MUST     |
| US-004 | E-002 | J-001   | S-001  | MUST     |
| US-005 | E-002 | J-002   | S-001  | MUST     |
| US-006 | E-003 | J-003   | S-001  | MUST     |

---

## 14. Lo-fi UI Mockups (ASCII)

### S-001 Operator Page

```
--------------------------------------------------
I build, rescue, and ship systems that make money.
--------------------------------------------------

What I Do
- Build and ship AI-native systems and products
- Rescue stalled or broken codebases
- Teach practical AI through workshops and bootcamps

Availability
Open to contract or W-2 depending on fit.
Running Savvy AI workshops independently and with partners.

Proof of Work
SavvyAI.dev
CodeRescues.dev
oneresu.me (in progress)
GitHub

Contact
Email
LinkedIn
--------------------------------------------------
```

---

## 15. Decision Log

### D-001 Hero Copy Style

* Question: Single sentence vs stacked headline
* Options: Single sentence, multi-line stack
* Evidence: Explicitly specified
* Winner: Single sentence
* Confidence: 0.95

### D-002 Page Count

* Question: Single page vs multi-page
* Options: Single page, multi-page
* Evidence: Explicitly specified
* Winner: Single page
* Confidence: 0.95

### D-003 Analytics Inclusion

* Question: Include analytics in v0?
* Options: None, lightweight, full
* Evidence: Explicitly excluded
* Winner: None
* Confidence: 0.90

---

## 16. Assumptions

* MVP timebox is 24 hours
* Platform is web-first only
* No compliance requirements for v0
* Audience is primarily desktop with mobile compatibility
* No content updates required more than a few times per year

---

> **This PRD is complete.**
> Copy this Markdown into Word, Google Docs, Notion, or directly into a coding model.
