# 002. Archive Legacy Files in Repo

Date: 2026-02-08

## Status

Accepted

## Context

During the Vercel migration, the legacy Netlify configuration and static HTML files needed to be removed. These files contain historical reference value (redirects, original site structure) that may be useful during the transition.

Options:
1. Delete files entirely (rely on git history)
2. Archive files in a visible `_archive/` directory

## Decision

Archive legacy files to `_archive/netlify-era/` in the repo rather than deleting them.

## Consequences

**Positive:**
- Easy to reference during migration (visible in file tree)
- Contains redirect URLs for porting to Next.js config
- Self-documenting with `ARCHIVE-NOTE.md`
- Can be deleted later once migration is complete

**Negative:**
- Adds ~2KB of historical files to repo
- Directory clutter (mitigated by `_archive/` prefix)

## Alternatives Considered

1. **Delete entirely** — Rejected because redirect URLs and config would require git archaeology to find
2. **Move to separate branch** — Rejected as overly complex for small file set

## Related

- Planning: `.plan/.done/chore-repo-cleanup-vercel-migration/`
- Archive: `_archive/netlify-era/ARCHIVE-NOTE.md`
