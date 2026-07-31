/**
 * Editorial Surface Content Configuration
 *
 * Static content for wilmoore.com editorial surface.
 * Positioning: Revenue Systems Architect
 * Changes require code commit and deploy (no CMS).
 */

export const CONTENT = {
  hero: {
    headline: ["Revenue leaks hide everywhere.", "I find them. I fix them."],
    supportingCopy: [
      "If your platform isn't running, it's costing you money. I fix that.",
    ],
    primaryCta: {
      text: "Book a Revenue Systems Diagnostic",
      href: "https://linkedin.com/in/wilmoore",
    },
    secondaryCta: {
      text: "View Case Studies",
      href: "#case-studies",
    },
  },

  howIWork: {
    steps: [
      "Observe operations.",
      "Identify hidden revenue.",
      "Build the system that recovers it.",
      "Measure the impact.",
    ],
  },

  caseStudies: [
    {
      id: "photography-ops",
      title: "Photography Operations Platform",
      client: "Live Zoological Attraction",
      description:
        "Built inside a live zoological attraction to eliminate operational bottlenecks, automate dispatch, improve staffing decisions, and create the foundation for scalable digital delivery.",
      placeholderLabel: "Field Documentation",
      screenshots: [
        "/screenshots/photo-ops-dispatch.png",
        "/screenshots/photo-ops-utilities.png",
      ],
      outcomes: [
        "Automated encounter dispatch",
        "Live operational scheduling",
        "Reduced manual coordination",
        "Digital delivery infrastructure",
      ],
    },
    {
      id: "luxlock-websocket",
      title: "Luxlock Real-Time Chat",
      client: "Casey Golden, FullStackRetail",
      description:
        "Diagnosed a live styling chat platform where WebSocket connections had been silently failing for nine months. Identified dual root causes: a misconfigured Redis endpoint and an authentication boundary defect that crashed every connection attempt.",
      placeholderLabel: "System Diagnostic",
      screenshots: ["/screenshots/luxlock-platform.png"],
      outcomes: [
        "9-month silent failure diagnosed",
        "Dual root causes identified",
        "Monitoring blind spot exposed",
        "Clear remediation plan delivered",
      ],
    },
    {
      id: "ask-april-ai",
      title: "Ask April AI",
      client: "April Sabral, Founder",
      description:
        "Recovered a Lovable-built MVP after the founder was locked out of everything. Secured the repo, organized the codebase, and provided a clear action plan to resume development.",
      placeholderLabel: "Code Recovery",
      screenshots: ["/screenshots/ask-april-app.png"],
      href: "https://www.askapril.ai/",
      outcomes: [
        "Full repo access recovered",
        "Codebase audit completed",
        "Clear action plan delivered",
        "Development unblocked",
      ],
      testimonial: {
        quote:
          "Wil, you truly are an angel. One of the hardest things is trusting someone when you're not even sure where to start.",
        author: "April Sabral",
        role: "Founder, Ask April AI",
      },
    },
    {
      id: "tipoff-app",
      title: "TipOff Mobile App",
      client: "TipOff Game",
      description:
        "Unstuck a stalled mobile app after months of development delays. Diagnosed the blockers, created a recovery plan, and got the team back on track to ship.",
      placeholderLabel: "Mobile Recovery",
      screenshots: ["/screenshots/tipoff-app-store.png"],
      href: "https://www.tipoffgame.com/",
      outcomes: [
        "Development blockers identified",
        "Stalled progress recovered",
        "Clear roadmap established",
        "Team confidence restored",
      ],
    },
  ],

  additionalWork: {
    projects: [
      {
        title: "PDF Pages",
        description: "macOS utility for PDF page extraction and management.",
        screenshot: "/screenshots/pdfpages.png",
        outcome: "Shipped to Mac App Store",
        href: "https://pdfpages.app",
      },
      {
        title: "OneResume",
        description:
          "AI-powered resume builder that creates tailored resumes for each job application.",
        screenshot: "/screenshots/oneresume.png",
        outcome: "Resume optimization platform",
        href: "https://oneresu.me",
      },
      {
        title: "Conversation Titles for ChatGPT",
        description:
          "Chrome extension to copy ChatGPT conversation titles in multiple formats.",
        screenshot: "/screenshots/conversation-titles.png",
        outcome: "Published on Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/conversation-titles-for-c/kgjldbijkcbbjbnfdaebkfbpgdoogfjo",
      },
    ],
  },

  about: {
    copy: [
      "I step inside operations, find where money is leaking, and build systems to stop it.",
    ],
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
  description:
    "I help organizations uncover operational bottlenecks, recover lost revenue, and deploy AI where it produces measurable financial results.",
} as const;
