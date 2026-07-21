# KenRemind Web

The public marketing and legal website for [KenRemind](https://kenremind.app), a reminder app designed around Ethiopian calendar dates.

The site uses scroll-driven product storytelling to explain Ethiopian-date scheduling, recurring reminder rules, on-device privacy, bilingual use, and the app's iOS and Android availability. It is an independent project from the Flutter mobile app.

## Technology

- Next.js 15 with the App Router and strict TypeScript
- React 19
- Tailwind CSS 4
- shadcn/ui and Radix primitives
- GSAP with ScrollTrigger for scoped scene choreography
- Lenis as a fine-pointer desktop scrolling enhancement
- `react-qr-code` for desktop store handoff
- Manrope and Noto Sans Ethiopic through `next/font`

The project follows the T3 stack's type-safe Next.js conventions but intentionally has no authentication, database, tRPC router, or server-side application state. This is a static marketing surface.

## Requirements

- Node.js 20 or later
- npm 10 or later

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run check
npm run format:check
npm run build
```

Available scripts:

- `npm run dev` starts the Turbopack development server.
- `npm run lint` runs the ESLint CLI.
- `npm run typecheck` runs TypeScript without emitting files.
- `npm run check` runs ESLint and TypeScript together.
- `npm run format:check` checks Prettier formatting.
- `npm run build` creates the production Next.js build.
- `npm run start` serves an existing production build.

## Architecture

```text
src/
  app/                  Routes, metadata, sitemap, robots, and manifest
  components/
    landing/            Homepage scenes and their GSAP choreography
    motion/             Lenis, ScrollTrigger, anchor, and motion preferences
    site/               Navigation, footer, store dialog, and legal shell
    ui/                 shadcn/Radix primitives
  config/               Canonical URL, store links, and contact configuration
  content/              Typed bilingual marketing and legal content
  styles/               Global visual system and responsive compositions
public/brand/
  mocks/                Original PNG screenshots and optimized WebP versions
```

`src/app/page.tsx` remains a server component for metadata and structured data. Interactive scenes are composed in `src/components/landing/landing-page.tsx`, while individual visual scenes live in `src/components/landing/scenes.tsx`.

## Motion Behavior

- The short cinematic intro plays on every full page load and is skipped for reduced-motion visitors.
- GSAP timelines are scoped with `gsap.context` and responsive behavior is composed with `gsap.matchMedia`.
- Lenis is enabled only on non-touch, fine-pointer devices without a reduced-motion preference.
- The document remains the scroll container; hash navigation measures the fixed header before scrolling.
- Reduced-motion visitors receive every section immediately without intro gating, long spatial travel, or smoothed scrolling.

When changing scene heights, fonts, or image dimensions, verify anchor positioning and call the shared motion refresh mechanism where necessary.

## Assets

- `public/brand/logo-icon.png` is the icon-only brand mark and favicon source.
- `public/brand/logo-wordmark.png` is used for navigation and footer lockups.
- Transparent iPhone PNG files in `public/brand/mocks/` are retained as masters.
- Responsive product scenes load optimized transparent WebP derivatives.

Do not overwrite the PNG masters when generating additional formats or sizes.

## Content and Privacy

English and Amharic marketing content is centralized in `src/content/marketing.ts`. Privacy and Terms wording lives in `src/content/legal.ts` and mirrors the mobile app's localized legal strings manually.

Firebase Analytics wording must remain factual: analytics excludes reminder titles, notes, names, birthdates, exact dates, and calendar event text, and can be disabled in Settings.

## Store Routing

- iOS and iPadOS visitors are routed directly to the Apple App Store.
- Android visitors are routed directly to Google Play.
- Desktop visitors receive an accessible bilingual Radix dialog with direct links and QR codes for both stores.

Store URLs and platform-independent contact details are centralized in `src/config/site.ts`.

## Deployment and SEO

The canonical production origin is `https://kenremind.app`. The project includes route metadata, canonical URLs, Open Graph imagery, Twitter metadata, `robots.txt`, `sitemap.xml`, a web manifest, and SoftwareApplication structured data.

Deploy to a Node-compatible Next.js host and point the production domain to that deployment. Run the full verification suite before publishing.

## Support

Email [info@kenremind.app](mailto:info@kenremind.app).
