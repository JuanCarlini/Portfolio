"use client";
import { useLang } from "@/context/LanguageContext";
import { tProyectos } from "@/context/translations2";
import SectionHeader from "./SectionHeader";
export default function Proyectos() {
  const { lang } = useLang();
  const tx = tProyectos[lang];
  const lb = tx.labels;
  return (
    <section className="sec-border" id="proyectos">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="projects-grid">
          {tx.items.map(p => (
            <div key={p.title} className="project-card fade-up">
              <span className="project-tag">{p.tag}</span>
              <div className="project-title">{p.title}</div>
              <span className="project-section-label">{lb.problem}</span>
              <p className="project-text">{p.problem}</p>
              <span className="project-section-label">{lb.solution}</span>
              <p className="project-text">{p.solution}</p>
              {p.diagram && (
                <>
                  <span className="project-section-label">{lb.architecture}</span>
                  <pre className="project-diagram">{p.diagram}</pre>
                </>
              )}
              <span className="project-section-label">{lb.result}</span>
              <p className="project-result">{p.result}</p>
              <div className="project-stack">{p.stack.map(t => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
