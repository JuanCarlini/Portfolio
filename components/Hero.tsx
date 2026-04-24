"use client";
import { useLang, t } from "@/context/LanguageContext";

const mailto = {
  es: "mailto:juanandrescarlini@gmail.com?subject=Quiero%20hablar%20sobre%20un%20proyecto&body=Hola%20Juan%20Andres%2C%0A%0AMe%20interesa%20automatizar%20mi%20negocio.%20Te%20cuento%20brevemente%3A%0A%0A-%20Empresa%2FRubro%3A%20%0A-%20Problema%20a%20resolver%3A%20%0A-%20Urgencia%3A%20%0A%0AQuedo%20a%20la%20espera.",
  en: "mailto:juanandrescarlini@gmail.com?subject=I%20want%20to%20talk%20about%20a%20project&body=Hi%20Juan%20Andres%2C%0A%0AI%27m%20interested%20in%20automating%20my%20business.%20Quick%20overview%3A%0A%0A-%20Company%2FIndustry%3A%20%0A-%20Problem%20to%20solve%3A%20%0A-%20Urgency%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
};

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-eyebrow">
              <div className="hero-eyebrow-line" />
              <span className="label">{tx.eyebrow}</span>
            </div>
            <h1 className="hero-h1">
              {tx.h1a} <em>{tx.h1em}</em> {tx.h1b}
            </h1>
            <p className="hero-desc">{tx.desc}</p>
            <div className="hero-ctas">
              <a href={mailto[lang]} className="btn-primary">{tx.cta1}</a>
              <a href="#proyectos" className="btn-ghost">{tx.cta2}</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="stat-grid">
              {tx.stats.map((s, i) => (
                <div key={i} className="stat-box fade-up">
                  <div className="stat-num">{s.num}<span>{s.unit}</span></div>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
