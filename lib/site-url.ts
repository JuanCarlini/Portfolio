/**
 * Canonical production site URL, resolved once and shared by
 * layout metadata, sitemap and robots.
 *
 * Priority:
 *   1. NEXT_PUBLIC_SITE_URL — explicit override
 *   2. VERCEL_PROJECT_PRODUCTION_URL — set on prod Vercel builds
 *   3. VERCEL_URL — set on preview/branch Vercel builds
 *   4. Hardcoded production domain as final fallback
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://portfolio.n8njuani.cc");
