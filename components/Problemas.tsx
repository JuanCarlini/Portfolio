"use client";
import { useLang, t } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
export default function Problemas() {
  const { lang } = useLang();
  const tx = t[lang].problemas;
  return (
    <section className="sec-border" id="problemas">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="problems-grid">
          {tx.items.map(p => (
            <div key={p.num} className="problem-card fade-up">
              <span className="problem-num">{p.num}</span>
              <div className="problem-title">{p.title}</div>
              <p className="problem-text">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
