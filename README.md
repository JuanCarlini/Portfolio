# Juan Andres Carlini — Portfolio

Personal portfolio for an Automation & AI Developer based in Rosario, Argentina. One-pager in Spanish and English, positioned around shipping production automation and AI systems — not demos or POCs.

**Live:** [portfolio.n8njuani.cc](https://portfolio.n8njuani.cc)

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Runtime | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 + custom CSS with design tokens |
| Typography | IBM Plex Mono (via `next/font`) |
| i18n | Lightweight React Context (ES / EN toggle) |
| Hosting | Vercel |

No CMS, no backend, no database. The site is fully static output.

## Design direction

**Terminal Ops** — a deliberately narrow visual system inspired by engineering manuals and CLI aesthetics:

- Void palette (`#050505` background) with a single warm accent (`#C8783A` terracotta)
- Single monospace family for everything — hierarchy by case, weight and scale, not by family contrast
- Uppercase display titles with negative tracking
- ASCII section headers (`[SEC.01 / DIAGNOSTICO]`)
- Blinking block cursor in the hero eyebrow
- No rounded corners, no drop shadows — flat, bordered, rectangular
- Scroll progress bar, nav state change on scroll, staggered fade-ups

Design tokens live in `app/globals.css` under `:root`. Changing a single value there propagates everywhere; Tailwind's config consumes the same CSS variables.

## Running locally

```bash
npm install
npm run dev
```

Opens on [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | Turbopack dev server |
| `npm run build` | Production build with static export |
| `npm run start` | Runs the production build locally |
| `npm run lint` | ESLint flat config (next/core-web-vitals + next/typescript) |
| `npm run typecheck` | `tsc --noEmit` |

## Project layout

```
app/
├── layout.tsx              root metadata + font loading
├── page.tsx                single page — section composition
├── globals.css             design tokens + component classes
├── icon.svg                favicon (terracotta bracket glyph)
├── apple-icon.tsx          apple-touch-icon via ImageResponse
├── opengraph-image.tsx     1200x630 OG preview via ImageResponse
├── robots.ts               /robots.txt
├── sitemap.ts              /sitemap.xml
└── not-found.tsx           404 page

components/
├── Nav.tsx                 top nav with scroll state + lang toggle
├── Hero.tsx                hero section with stats
├── Problemas.tsx           "why this breaks" grid
├── Solucion.tsx            approach and quote
├── Servicios.tsx           services list, manpage-style
├── Proceso.tsx             5-step process
├── Proyectos.tsx           4 case studies with ASCII diagrams
├── Stack.tsx               technology grid
├── Diferenciador.tsx       differentiation points
├── CTA.tsx                 final call to action
├── Footer.tsx              portrait, links, location
├── SectionHeader.tsx       shared section header pattern
├── MarqueeBand.tsx         infinite technology ticker
├── LangSync.tsx            syncs <html lang> to context state
├── ScrollAnimations.tsx    IntersectionObserver + stagger for fade-up
└── ScrollProgress.tsx      top terracotta progress bar

context/
├── LanguageContext.tsx     lang state + core translations
└── translations2.tsx       section-specific translations

lib/
└── site-url.ts             Vercel-aware production URL resolution

public/
└── portfolio.jpeg          headshot used in footer
```

## Deployment

Designed for Vercel. Connect the repo and deploy — there are no required environment variables.

### Optional env

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://portfolio.n8njuani.cc` | Overrides the canonical URL used by `metadataBase`, `sitemap.xml` and `robots.txt`. Not needed when deploying to the intended production domain. |

Vercel's `VERCEL_PROJECT_PRODUCTION_URL` and `VERCEL_URL` are picked up automatically for preview and production builds, so OG image absolute URLs resolve correctly in any environment.

### Security headers

Configured in `next.config.ts`:

- CSP with `'self'` default; `'unsafe-inline'` retained for script and style due to Next.js App Router hydration and `next/font` / Tailwind inline styles
- `X-Frame-Options: DENY` + `frame-ancestors 'none'`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` locks camera, mic, geolocation, interest-cohort
- HSTS with `preload`

## License

MIT — see [LICENSE](./LICENSE).
