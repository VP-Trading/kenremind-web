# KenRemind Web

Marketing website for the KenRemind Ethiopian calendar reminder app.

## Overview
KenRemind Web is a single‑page marketing site with dedicated Privacy Policy and Terms & Conditions pages. It is built with Next.js (App Router), Tailwind CSS, and shadcn/ui components. The UI is tailored to match the KenRemind mobile app’s palette, typography, and visual tone.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Requirements
- Node.js 20+
- npm 10+

## Getting Started
1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the site:
- http://localhost:3000

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — lint
- `npm run typecheck` — type check

## Project Structure
- `src/app/page.tsx` — main landing page
- `src/app/privacy/page.tsx` — privacy policy page
- `src/app/terms/page.tsx` — terms & conditions page
- `src/styles/globals.css` — theme tokens, fonts, animations
- `src/components/ui/*` — shadcn UI primitives
- `public/brand/*` — brand assets

## Branding
Primary logo is the Hugeicons “appointment-01” stroke‑rounded icon, color‑tinted via CSS to match KenRemind’s primary green. The favicon is generated from the same icon.

## Content Sources
Privacy Policy and Terms & Conditions copy are derived from the KenRemind mobile app localization strings.

## Deployment
This is a standard Next.js app and can be deployed to any provider that supports Node and Next.js (Vercel, Netlify, etc.).

## Contact
KenRemind support: kenremind@vptrading.et
