# Social Sharing Setup

## Scope

Configure complete social sharing setup for wilmoore.com across all major platforms (LinkedIn, Twitter/X, Facebook, Slack, Discord, iMessage).

## Changes

### Assets Generated
- `public/og-image.png` (1200x630) - Dark background with name + tagline
- `public/favicon.ico` (32x32) - "W" initial
- `public/apple-touch-icon.png` (180x180)
- `public/icon-192.png` (192x192) - PWA icon
- `public/icon-512.png` (512x512) - PWA icon

### Metadata Configured
- OpenGraph: title, description, url, siteName, locale, type, images
- Twitter Card: card, title, description, images
- Icons: favicon.ico, apple-touch-icon

### Structured Data
- JSON-LD with WebSite + Person schemas
- sameAs links to LinkedIn and GitHub profiles

## Testing

- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- General Preview: https://opengraph.xyz
