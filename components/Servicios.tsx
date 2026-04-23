"use client";
import { useLang } from "@/context/LanguageContext";
import { tServicios } from "@/context/LanguageContext";
import SectionHeader from "./SectionHeader";
export default function Servicios() {
  const { lang } = useLang();
  const tx = tServicios[lang];
  return (
    <section className="sec-border" id="servicios">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="services-list">
          {tx.items.map(s => (
            <div key={s.idx} className="service-row">
              <span className="service-idx">{s.idx}</span>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
