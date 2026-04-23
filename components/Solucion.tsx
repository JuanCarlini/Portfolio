"use client";
import { useLang } from "@/context/LanguageContext";
import { tSolucion } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
export default function Solucion() {
  const { lang } = useLang();
  const tx = tSolucion[lang];
  return (
    <section className="sec-border" id="solucion">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="solution-grid">
          {tx.blocks.map(b => (
            <div key={b.tag} className="solution-block">
              <span className="solution-icon">{b.tag}</span>
              <h3 className="solution-title">{b.title}</h3>
              <p className="solution-text">{b.text}</p>
            </div>
          ))}
        </div>
        <div className="solution-block-big">
          <p className="solution-quote">{tx.quote.a} <em>{tx.quote.em}</em> {tx.quote.b}</p>
          <div>
            <p className="solution-prose">{tx.p1}</p>
            <p className="solution-prose">{tx.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
