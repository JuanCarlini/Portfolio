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
 *   - 'unsafe-eval' is only added for script-src in development,
 *     where React uses eval() to rebuild cross-environment callstacks
 *     (HMR, error overlay). Production never needs it.
 *   - The site has no user input, no API routes, no external scripts,
 *     so 'unsafe-inline' is an acceptable tradeoff.
 */
const isDev = process.env.NODE_ENV === "development";

const scriptSrc = isDev
  ? "'self' 'unsafe-inline' 'unsafe-eval'"
  : "'self' 'unsafe-inline'";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
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
