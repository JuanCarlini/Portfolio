import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import LangSync from "@/components/LangSync";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Juan Andres Carlini — Automation & AI Developer",
  description:
    "Diseño e implemento infraestructuras de automatizacion e IA para empresas que ya no pueden escalar con procesos manuales.",
  keywords: [
    "automatizacion",
    "n8n",
    "power automate",
    "inteligencia artificial",
    "whatsapp bot",
    "next.js",
    "typescript",
  ],
  authors: [{ name: "Juan Andres Carlini" }],
  openGraph: {
    title: "Juan Andres Carlini — Automation & AI Developer",
    description:
      "Sistemas de automatizacion e IA que trabajan cuando tu equipo no puede.",
    type: "website",
    locale: "es_AR",
    siteName: "Juan Andres Carlini",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Andres Carlini — Automation & AI Developer",
    description:
      "Sistemas de automatizacion e IA que trabajan cuando tu equipo no puede.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={mono.variable}>
      <body><LanguageProvider><LangSync /><ScrollAnimations />{children}</LanguageProvider></body>
    </html>
  );
}
