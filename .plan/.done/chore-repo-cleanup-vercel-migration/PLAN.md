# Chore: Repo Cleanup for Vercel Migration

**Branch:** `chore/repo-cleanup-vercel-migration`
**Status:** Complete

## Current State

| File | Purpose | Action |
|------|---------|--------|
| `netlify.toml` | Netlify build config + redirect to StandardResume | Archive → `_archive/` |
| `src/_redirects` | Netlify redirects (resume, links) | Archive → `_archive/` |
| `src/index.html` | Legacy static HTML landing page | Archive → `_archive/` |
| `out/_redirects` | Build output (gitignored content) | Delete |
| `out/index.html` | Build output (gitignored content) | Delete |
| `makefile` | Netlify build script | Archive → `_archive/` |
| `package.json` | Minimal stub | Keep, will be replaced by Next.js |
| `readme.md` | Netlify-specific docs | Archive → `_archive/`, create new |
| `.gitignore` | Current ignores | Update for Next.js |

## Resume Redirect Strategy

**Current:** `/resume` → `https://standardresume.co/r/wilmoore`

**Implementation:** Use `next.config.js` redirects — simplest, no extra code.

```js
// next.config.js
module.exports = {
  redirects: async () => [
    { source: '/resume', destination: 'https://standardresume.co/r/wilmoore', permanent: false },
  ],
}
```

## Implementation Steps

1. [x] Archive legacy files to `_archive/netlify-era/`
2. [x] Delete `out/` directory (build artifact)
3. [x] Update `.gitignore` for Next.js
4. [x] Create minimal `README.md`
5. [x] Commit cleanup
6. [x] Verify git history preserved

## Decisions Made

- **Archive strategy:** Commit to `_archive/` (visible reference)
- **`/links` redirect:** Drop (bio.site defunct)
- **`/resume` redirect:** Preserve via Next.js config

## Related ADRs

- [001. Migrate from Netlify to Vercel](../../../doc/decisions/001-migrate-from-netlify-to-vercel.md)
- [002. Archive Legacy Files in Repo](../../../doc/decisions/002-archive-legacy-files-in-repo.md)
