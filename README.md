# Ryze: Shopify landing page redesign

Next.js 15 (App Router) + TypeScript. No other dependencies.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy
Push to GitHub, then import the repo on https://vercel.com/new (zero config).
Or run `npx vercel` in this folder.

## Edit
- Copy, stats and products: `app/page.tsx` (arrays at the top)
- Signup / audit link: `AUDIT_URL` at the top of `app/page.tsx`
- Colors and spacing: CSS variables at the top of `app/globals.css`
- Product illustrations are SVG placeholders. Replace with real photos (use `next/image`).
