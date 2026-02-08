# Archive: Netlify Era

These files are from the previous Netlify-based deployment of wilmoore.com.

**Archived:** 2026-02-08
**Reason:** Complete rewrite to Next.js + Vercel

## Contents

- `netlify.toml` — Netlify build config, root redirect to StandardResume
- `makefile` — Build script for Netlify
- `readme.md` — Netlify-specific documentation
- `src/` — Static HTML and redirects

## Redirects Reference

The following redirects were active:

| Path | Destination |
|------|-------------|
| `/` | `https://standardresume.co/r/wilmoore` (proxy) |
| `/resume` | `https://git.io/fhhRI` |
| `/links` | `https://bio.site/7znH4H` (defunct) |

## Resume URL

The current resume lives at **StandardResume**:
`https://standardresume.co/r/wilmoore`

Preserve in the new site via `next.config.js`:

```js
redirects: async () => [
  { source: '/resume', destination: 'https://standardresume.co/r/wilmoore', permanent: false },
]
```

Note: The old `git.io/fhhRI` link in `_redirects` pointed to an outdated GitHub-hosted PDF.
