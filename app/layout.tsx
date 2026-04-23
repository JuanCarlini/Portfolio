import type { Metadata } from "next";
import { Syne, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import LangSync from "@/components/LangSync";
import ScrollAnimations from "@/components/ScrollAnimations";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Juan Andres Carlini — Automation & AI Developer",
  description: "Diseño e implemento infraestructuras de automatizacion e IA para empresas que ya no pueden escalar con procesos manuales.",
  keywords: ["automatizacion", "n8n", "power automate", "inteligencia artificial", "whatsapp bot", "next.js", "typescript"],
  authors: [{ name: "Juan Andres Carlini" }],
  openGraph: {
    title: "Juan Andres Carlini — Automation & AI Developer",
    description: "Sistemas de automatizacion e IA que trabajan cuando tu equipo no puede.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juan Andres Carlini — Automation & AI Developer",
    description: "Sistemas de automatizacion e IA que trabajan cuando tu equipo no puede.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${dm.variable} ${mono.variable}`}>
      <body><LanguageProvider><LangSync /><ScrollAnimations />{children}</LanguageProvider></body>
    </html>
  );
}
