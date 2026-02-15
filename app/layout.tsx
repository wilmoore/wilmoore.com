import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { META } from "@/content.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wilmoore.com"),
  title: META.title,
  description: META.description,
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://wilmoore.com",
    siteName: META.title,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${META.title} - ${META.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: META.title,
      url: "https://wilmoore.com/",
      description: META.description,
    },
    {
      "@type": "Person",
      name: META.title,
      url: "https://wilmoore.com/",
      sameAs: [
        "https://linkedin.com/in/wilmoore",
        "https://github.com/wilmoore",
      ],
      jobTitle: "Software Engineer",
      description: META.description,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
