# Resume Route Rewrite

## Requirement

Add `/resume` route that proxies `https://standardresume.co/r/wilmoore` while keeping the user on `wilmoore.com/resume`.

## Implementation

Changed `vercel.json` from redirect to rewrite:

```json
{
  "rewrites": [
    {
      "source": "/resume",
      "destination": "https://standardresume.co/r/wilmoore"
    }
  ]
}
```

## Notes

- Vercel external rewrites depend on the target site allowing proxying
- If StandardResume blocks proxying, may need to fall back to redirect
- Test on Vercel preview deployment

## Verification

- [ ] Deploy to Vercel preview
- [ ] Visit `/resume` and confirm content loads
- [ ] Confirm URL stays as `wilmoore.com/resume`
