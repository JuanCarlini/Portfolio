"use client";
import { useLang } from "@/context/LanguageContext";
import { tStack } from "@/context/translations2";
import SectionHeader from "./SectionHeader";
const cols = {
  es: [
    { title:"Automatizacion",          items:["n8n","Power Automate","Google Apps Script","Zapier / Make"] },
    { title:"Inteligencia Artificial", items:["Claude API (Anthropic)","OpenAI / GPT-4","AI Builder (Microsoft)","Prompt engineering"] },
    { title:"Backend & APIs",          items:["Node.js / TypeScript","REST APIs","PostgreSQL","Supabase / Dataverse"] },
    { title:"Frontend",                items:["Next.js / React","TypeScript","Power Apps","shadcn/ui"] },
    { title:"Integraciones",           items:["WhatsApp / Meta API","Kommo CRM","Google Workspace","SharePoint / OneDrive","Chatwoot"] },
  ],
  en: [
    { title:"Automation",              items:["n8n","Power Automate","Google Apps Script","Zapier / Make"] },
    { title:"Artificial Intelligence", items:["Claude API (Anthropic)","OpenAI / GPT-4","AI Builder (Microsoft)","Prompt engineering"] },
    { title:"Backend & APIs",          items:["Node.js / TypeScript","REST APIs","PostgreSQL","Supabase / Dataverse"] },
    { title:"Frontend",                items:["Next.js / React","TypeScript","Power Apps","shadcn/ui"] },
    { title:"Integrations",            items:["WhatsApp / Meta API","Kommo CRM","Google Workspace","SharePoint / OneDrive","Chatwoot"] },
  ],
};
export default function Stack() {
  const { lang } = useLang();
  const tx = tStack[lang];
  return (
    <section className="stack-section" id="stack">
      <div className="container">
        <SectionHeader num={tx.num} title={tx.title} desc={tx.desc} />
        <div className="stack-grid">
          {cols[lang].map(col => (
            <div key={col.title} className="stack-col">
              <span className="stack-col-title">{col.title}</span>
              <div className="stack-items">
                {col.items.map(item => (
                  <div key={item} className="stack-item"><span className="stack-dot" />{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
