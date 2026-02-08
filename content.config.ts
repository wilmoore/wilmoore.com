/**
 * Operator Surface Content Configuration
 *
 * Static content for wilmoore.com operator surface.
 * Changes require code commit and deploy (no CMS).
 */

export const CONTENT = {
  hero: {
    statement: "I build, rescue, and ship systems that make money.",
  },

  whatIDo: {
    items: [
      "Build and ship AI-native systems and products",
      "Rescue stalled or broken codebases",
      "Teach practical AI through workshops and bootcamps",
    ],
  },

  availability: {
    lines: [
      "Open to contract or W-2 depending on fit.",
      "Running Savvy AI workshops independently and with partners.",
    ],
  },

  proofOfWork: {
    links: [
      { label: "SavvyAI.dev", href: "https://savvyai.dev", note: null },
      { label: "CodeRescues.dev", href: "https://coderescues.dev", note: null },
      { label: "oneresu.me", href: "https://oneresu.me", note: "in progress" },
      { label: "GitHub", href: "https://github.com/wilmoore", note: null },
    ],
  },

  contact: {
    email: {
      label: "Email",
      href: "mailto:hello@wilmoore.com",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/wilmoore",
    },
  },
} as const;

export const META = {
  title: "Wil Moore III",
  description: "I build, rescue, and ship systems that make money.",
} as const;
