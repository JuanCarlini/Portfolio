"use client";
import Link from "next/link";
import { useLang, t } from "@/context/LanguageContext";

const mailto = {
  es: "mailto:juanandrescarlini@gmail.com?subject=Consulta%20desde%20tu%20portfolio&body=Hola%20Juan%20Andres%2C%0A%0AMe%20comunico%20desde%20tu%20portfolio.%20Me%20gustaria%20hablar%20sobre%3A%0A%0A",
  en: "mailto:juanandrescarlini@gmail.com?subject=Inquiry%20from%20your%20portfolio&body=Hi%20Juan%20Andres%2C%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20talk%20about%3A%0A%0A",
};

const navLinks = {
  es: [
    { href:"#problemas", label:"Problemas" },
    { href:"#servicios",  label:"Servicios"  },
    { href:"#proceso",    label:"Proceso"    },
    { href:"#proyectos",  label:"Proyectos"  },
    { href:"#stack",      label:"Stack"      },
  ],
  en: [
    { href:"#problemas", label:"Problems" },
    { href:"#servicios",  label:"Services"  },
    { href:"#proceso",    label:"Process"   },
    { href:"#proyectos",  label:"Projects"  },
    { href:"#stack",      label:"Stack"     },
  ],
};

export default function Nav() {
  const { lang, toggle } = useLang();
  const tx = t[lang].nav;
  return (
    <nav className="nav">
      <Link href="#" className="nav-logo">Carlini<span>.</span></Link>
      <div className="nav-links">
        {navLinks[lang].map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
      </div>
      <div className="nav-actions">
        <button onClick={toggle} className="lang-toggle" aria-label="Toggle language">
          <span className={lang === "es" ? "lang-active" : "lang-inactive"}>ES</span>
          <span className="lang-sep">/</span>
          <span className={lang === "en" ? "lang-active" : "lang-inactive"}>EN</span>
        </button>
        <a href={mailto[lang]} className="nav-cta">{tx.contact}</a>
      </div>
    </nav>
  );
}
