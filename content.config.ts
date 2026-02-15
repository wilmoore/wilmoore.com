/**
 * Operator Surface Content Configuration
 *
 * Static content for wilmoore.com operator surface.
 * Changes require code commit and deploy (no CMS).
 */

export const CONTENT = {
  hero: {
    lines: [
      "I ship revenue systems.",
      "I rescue the ones that stall.",
    ],
    tagline: "Diagnostic first. Build second.",
  },

  whatIDo: {
    items: [
      "Codebase diagnostics for stalled or inherited systems",
      "Revenue-tied AI product launches",
      "AI workflow deployment inside engineering teams",
    ],
  },

  availability: {
    lines: [
      "One engagement at a time.",
      "Diagnostics prioritized.",
      "Contract or W-2 depending on fit.",
    ],
  },

  proofOfWork: {
    links: [
      { label: "SavvyAI.dev", href: "https://savvyai.dev", tag: "AI training for teams" },
      { label: "CodeRescues.dev", href: "https://coderescues.dev", tag: "codebase diagnostics & recovery" },
      { label: "PDFPages.app", href: "https://pdfpages.app", tag: "shipped macOS utility" },
      { label: "GitHub", href: "https://github.com/wilmoore", tag: "live repositories" },
    ],
  },

  cta: {
    headline: ["Stalled build?", "Inherited mess?"],
    buttonText: "Book a Codebase Diagnostic →",
    buttonHref: "https://coderescues.dev",
  },

  contact: {
    email: {
      label: "Email",
      href: "mailto:wil.moore@wilmoore.com",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/wilmoore",
    },
  },
} as const;

export const META = {
  title: "Wil Moore III",
  description: "I ship revenue systems. I rescue the ones that stall.",
} as const;
