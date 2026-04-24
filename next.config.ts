import type { NextConfig } from "next";

/**
 * Security headers applied to every route.
 *
 * CSP notes:
 *   - 'unsafe-inline' on script/style is required because Next.js
 *     App Router ships hydration as an inline script, and next/font
 *     and Tailwind both inject inline <style> tags. Mitigating XSS
 *     through nonces would require a middleware layer and does not
 *     compose well with fully static export, which this site is.
 *   - The site has no user input, no API routes, no external scripts,
 *     so 'unsafe-inline' is an acceptable tradeoff.
 */
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
