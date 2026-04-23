"use client";
import { useLang } from "@/context/LanguageContext";
import { tDiff } from "@/context/translations2";
import SectionHeader from "./SectionHeader";
export default function Diferenciador() {
  const { lang } = useLang();
  const tx = tDiff[lang];
  return (
    <section className="sec-border" id="diferenciador">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="diff-grid">
          <div className="diff-left">
            <p className="diff-statement">{tx.statement.a} <em>{tx.statement.em}</em> {tx.statement.b}</p>
            <p className="diff-lead">{tx.statementDesc}</p>
          </div>
          <div className="diff-right">
            <div className="diff-points">
              {tx.points.map(p => (
                <div key={p.title}>
                  <div className="diff-point-title">{p.title}</div>
                  <p className="diff-point-text">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
