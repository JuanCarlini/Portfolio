"use client";
import { useLang } from "@/context/LanguageContext";
import { tCTA } from "@/context/translations2";

const mailDiag = {
  es: "mailto:juanandrescarlini@gmail.com?subject=Quiero%20un%20diagnostico%20gratuito&body=Hola%20Juan%20Andres%2C%0A%0AMe%20interesa%20el%20diagnostico%20gratuito%20para%20ver%20si%20la%20automatizacion%20tiene%20sentido%20en%20mi%20negocio.%0A%0A-%20Empresa%2FRubro%3A%20%0A-%20Proceso%20que%20quiero%20automatizar%3A%20%0A-%20Cantidad%20de%20personas%20involucradas%3A%20%0A%0AQuedo%20a%20la%20espera.",
  en: "mailto:juanandrescarlini@gmail.com?subject=Free%20diagnostic%20request&body=Hi%20Juan%20Andres%2C%0A%0AI%27d%20like%20to%20schedule%20a%20free%20diagnostic%20to%20see%20if%20automation%20makes%20sense%20for%20my%20business.%0A%0A-%20Company%2FIndustry%3A%20%0A-%20Process%20I%20want%20to%20automate%3A%20%0A-%20People%20involved%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you.",
};

const mailDirect = {
  es: "https://wa.me/5493415000861?text=Hola%20Juan%20Andres%2C%20vi%20tu%20portfolio%20y%20me%20gustaria%20hablar%20sobre%20un%20proyecto.",
  en: "https://wa.me/5493415000861?text=Hi%20Juan%20Andres%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project.",
};

export default function CTA() {
  const { lang } = useLang();
  const tx = tCTA[lang];
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-inner">
          <h2 className="cta-h2">{tx.h2a} <em>{tx.h2em}</em>.</h2>
          <p className="cta-sub">{tx.sub}</p>
          <div className="cta-actions">
            <a href={mailDiag[lang]} className="btn-primary">{tx.cta1}</a>
            <a href={mailDirect[lang]} target="_blank" rel="noopener noreferrer" className="btn-ghost">{tx.cta2}</a>
          </div>
          <p className="cta-note">{tx.note}</p>
        </div>
      </div>
    </section>
  );
}
