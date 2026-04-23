"use client";
import { useLang } from "@/context/LanguageContext";
import { tProceso } from "@/context/translations2";
import SectionHeader from "./SectionHeader";
export default function Proceso() {
  const { lang } = useLang();
  const tx = tProceso[lang];
  return (
    <section className="proceso-section" id="proceso">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="process-steps">
          {tx.steps.map(s => (
            <div key={s.num} className="step">
              <span className="step-num">{s.num}</span>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
