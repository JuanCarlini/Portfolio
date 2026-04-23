"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "es" | "en";

export const t = {
  es: {
    nav: { contact: "Contacto" },
    hero: {
      eyebrow: "Automation & AI Developer — Rosario, Argentina",
      h1a: "Sistemas que trabajan",
      h1em: "cuando tu equipo",
      h1b: "no puede.",
      desc: "Diseno e implemento infraestructuras de automatizacion e IA para empresas que ya no pueden escalar con procesos manuales. No entrego codigo: entrego operaciones que funcionan.",
      cta1: "Hablemos de tu proyecto",
      cta2: "Ver proyectos",
      stats: [
        { num: "+2",  unit: "yr",      label: "Experiencia en automatizacion"           },
        { num: "End", unit: "-to-End", label: "Implementacion completa"                  },
        { num: "IA",  unit: "+",       label: "Agentes con LLMs reales"                  },
        { num: "0",   unit: "h",       label: "Tiempo humano en procesos automatizados"  },
      ],
    },
    problemas: {
      num: "01 — Diagnostico",
      title: "Esto ya no puede seguir funcionando asi.",
      desc: "Los procesos que funcionaban con 5 personas no escalan con 50. El crecimiento no es el problema: es el sistema operativo detras de tu negocio.",
      items: [
        { num:"01", title:"Tu equipo responde lo mismo cien veces por dia",    text:"Consultas repetitivas, WhatsApp saturado, tickets sin respuesta. El tiempo de tu equipo vale mas que eso. Un bot bien construido resuelve esto sin perder calidad." },
        { num:"02", title:"Cada proceso depende de que alguien lo haga",        text:"Si tu negocio para cuando la persona encargada falta, no tenes un sistema: tenes una dependencia. Los procesos criticos no pueden depender de presencia humana." },
        { num:"03", title:"Tus herramientas no se hablan entre si",              text:"CRM, facturacion, inventario, sheets. Cada uno en su propio mundo. El equipo copia y pega entre sistemas. Cada copia es un error potencial." },
        { num:"04", title:"Los leads entran y desaparecen",                      text:"Sin seguimiento automatico, los leads frios quedan frios. La velocidad de respuesta es el factor de conversion mas subestimado en cualquier negocio." },
        { num:"05", title:"Escalar implica contratar, siempre",                  text:"Mas volumen deberia significar mas margen, no mas gente. Si cada 30% de crecimiento requiere 30% mas de staff, el negocio tiene un problema estructural." },
        { num:"06", title:"No tenes visibilidad de lo que pasa",                 text:"Datos dispersos, reportes manuales, decision basada en intuicion. Sin informacion centralizada y automatica, operas a ciegas." },
      ],
    },
  },
  en: {
    nav: { contact: "Contact" },
    hero: {
      eyebrow: "Automation & AI Developer — Rosario, Argentina",
      h1a: "Systems that work",
      h1em: "when your team",
      h1b: "can't.",
      desc: "I design and implement automation and AI infrastructures for companies that can no longer scale with manual processes. I don't deliver code: I deliver operations that work.",
      cta1: "Let's talk about your project",
      cta2: "View projects",
      stats: [
        { num: "+4",  unit: "yr",      label: "Automation experience"             },
        { num: "End", unit: "-to-End", label: "Full implementation"                },
        { num: "AI",  unit: "+",       label: "Agents with real LLMs"             },
        { num: "0",   unit: "h",       label: "Human time on automated processes" },
      ],
    },
    problemas: {
      num: "01 — Diagnosis",
      title: "This can't keep working like this.",
      desc: "Processes that worked with 5 people don't scale with 50. Growth isn't the problem — it's the operating system behind your business.",
      items: [
        { num:"01", title:"Your team answers the same thing a hundred times a day",  text:"Repetitive queries, saturated WhatsApp, unanswered tickets. Your team's time is worth more than that. A well-built bot solves this without losing quality." },
        { num:"02", title:"Every process depends on someone doing it",                text:"If your business stops when the person in charge is absent, you don't have a system: you have a dependency. Critical processes can't rely on human presence." },
        { num:"03", title:"Your tools don't talk to each other",                      text:"CRM, invoicing, inventory, sheets. Each in its own world. The team copies and pastes between systems. Every copy is a potential error." },
        { num:"04", title:"Leads come in and disappear",                              text:"Without automatic follow-up, cold leads stay cold. Response speed is the most underestimated conversion factor in any business." },
        { num:"05", title:"Scaling always means hiring",                              text:"More volume should mean more margin, not more people. If every 30% growth requires 30% more staff, the business has a structural problem." },
        { num:"06", title:"You have no visibility of what's happening",               text:"Scattered data, manual reports, intuition-based decisions. Without centralized, automatic information, you operate blind." },
      ],
    },
  },
} as const;

// ── Solucion translations ───────────────────────────────
export const tSolucion = {
  es: {
    num: "02 — El enfoque", title: "Automatizacion con logica de negocio real.",
    desc: "No implemento herramientas. Diseno sistemas que entienden como funciona tu operacion y la ejecutan solos. La diferencia esta en saber exactamente donde tiene que intervenir la IA.",
    blocks: [
      { tag:"Automatizacion",         title:"Flujos que corren solos, sin supervision",                      text:"Desde triggers simples hasta pipelines complejos con condicionales, reintentos y manejo de errores. Construidos con n8n o Power Automate segun la infraestructura." },
      { tag:"Inteligencia Artificial",title:"IA donde hay friccion, no donde esta de moda",                  text:"Agentes que leen, clasifican, responden y deciden. Con Claude, GPT o AI Builder, integrados en el flujo real de trabajo. No demos: produccion." },
      { tag:"Integraciones",          title:"Conexion entre sistemas que no fueron disenados para hablar",    text:"APIs, webhooks, transformaciones de datos. Conecto CRMs, ERPs, sheets, WhatsApp, plataformas propias. En tiempo real, con log de errores y recuperacion automatica." },
      { tag:"Sistemas internos",      title:"Operaciones que antes necesitaban una persona",                  text:"Procesamiento de documentos, validaciones, carga de datos, notificaciones, reportes automaticos. Lo operativo deja de ocupar tiempo del equipo." },
    ],
    quote: { a:"No entrego codigo. Entrego", em:"operaciones", b:"que funcionan mientras tu equipo trabaja en lo que importa." },
    p1:"Cada implementacion incluye logica de negocio real: manejo de excepciones, casos borde, notificaciones de fallo y documentacion del sistema. No hay caja negra.",
    p2:"El objetivo no es impresionar con tecnologia. Es que el sistema haga exactamente lo que necesitas, siempre.",
  },
  en: {
    num: "02 — The approach", title: "Automation with real business logic.",
    desc: "I don't implement tools. I design systems that understand how your operation works and execute it on their own. The difference lies in knowing exactly where AI needs to step in.",
    blocks: [
      { tag:"Automation",        title:"Flows that run on their own, unsupervised",                   text:"From simple triggers to complex pipelines with conditionals, retries and error handling. Built with n8n or Power Automate depending on the infrastructure." },
      { tag:"Artificial Intelligence", title:"AI where there's friction, not where it's trendy",      text:"Agents that read, classify, respond and decide. With Claude, GPT or AI Builder, integrated into the real workflow. Not demos: production." },
      { tag:"Integrations",      title:"Connecting systems that weren't designed to talk",             text:"APIs, webhooks, data transformations. I connect CRMs, ERPs, sheets, WhatsApp, custom platforms. Real-time, with error logs and automatic recovery." },
      { tag:"Internal systems",  title:"Operations that used to require a person",                     text:"Document processing, validations, data entry, notifications, automatic reports. Operational work stops taking up team time." },
    ],
    quote: { a:"I don't deliver code. I deliver", em:"operations", b:"that work while your team focuses on what matters." },
    p1:"Every implementation includes real business logic: exception handling, edge cases, failure notifications and system documentation. No black boxes.",
    p2:"The goal isn't to impress with technology. It's for the system to do exactly what you need, always.",
  },
};

// ── Servicios translations ──────────────────────────────
export const tServicios = {
  es: {
    num:"03 — Servicios", title:"Sistemas que construyo.",
    desc:"Cada proyecto es un sistema completo, no un componente aislado. Diseno, construyo, pruebo y entrego con documentacion. Lo que recibis puede crecer.",
    items: [
      { idx:"01", name:"Automatizacion de atencion al cliente",  desc:"Bots para WhatsApp, chat y formularios que atienden, clasifican y resuelven sin intervencion humana. Con escalacion inteligente y CRM integrado.",                                                                tags:["n8n","Meta API","LLMs","Kommo"] },
      { idx:"02", name:"Agentes de IA para procesos internos",   desc:"Agentes que leen documentos, extraen informacion estructurada y clasifican entradas. Procesamiento de facturas, contratos, emails. Con validacion y manejo de casos ambiguos.",                                     tags:["Claude API","AI Builder","OpenAI"] },
      { idx:"03", name:"Sistemas de gestion operativa",          desc:"Plataformas internas con Power Apps o Next.js conectadas a Dataverse o PostgreSQL. Carga de datos, aprobaciones, flujos de trabajo, dashboards.",                                                                    tags:["Power Apps","Dataverse","Next.js"] },
      { idx:"04", name:"Integraciones entre sistemas",           desc:"Conectores entre plataformas que no se integran nativamente. Sincronizacion bidireccional, transformaciones, enrutamiento condicional. Con reintentos y alertas de fallo.",                                           tags:["APIs REST","Webhooks","TypeScript"] },
      { idx:"05", name:"Infraestructura de automatizacion",      desc:"Despliegue de n8n self-hosted, bases de datos y herramientas de soporte. Control total sobre la infraestructura, sin dependencia de planes SaaS caros.",                                                              tags:["VPS","n8n","Docker","PostgreSQL"] },
    ],
  },
  en: {
    num:"03 — Services", title:"Systems I build.",
    desc:"Every project is a complete system, not an isolated component. I design, build, test and deliver with documentation. What you receive can grow.",
    items: [
      { idx:"01", name:"Customer support automation",   desc:"Bots for WhatsApp, chat and forms that handle, classify and resolve without human intervention. With intelligent escalation and CRM integration.",                                                          tags:["n8n","Meta API","LLMs","Kommo"] },
      { idx:"02", name:"AI agents for internal processes", desc:"Agents that read documents, extract structured information and classify inputs. Invoice, contract and email processing. With validation and edge case handling.",                                         tags:["Claude API","AI Builder","OpenAI"] },
      { idx:"03", name:"Operational management systems",  desc:"Internal platforms with Power Apps or Next.js connected to Dataverse or PostgreSQL. Data entry, approvals, workflows, dashboards.",                                                                       tags:["Power Apps","Dataverse","Next.js"] },
      { idx:"04", name:"System integrations",             desc:"Connectors between platforms that don't integrate natively. Bidirectional sync, transformations, conditional routing. With automatic retries and failure alerts.",                                         tags:["APIs REST","Webhooks","TypeScript"] },
      { idx:"05", name:"Automation infrastructure",       desc:"Self-hosted n8n deployment, databases and support tools. Full control over infrastructure, without dependency on expensive SaaS plans.",                                                                  tags:["VPS","n8n","Docker","PostgreSQL"] },
    ],
  },
};

// ── Stack translations ──────────────────────────────────
export const tStack = {
  es: {
    num:"06 — Tecnologias", title:"Stack tecnologico.",
    desc:"No trabajo con una sola herramienta. Selecciono la combinacion correcta segun el caso: infraestructura existente, presupuesto, escala esperada y equipo que lo va a mantener.",
  },
  en: {
    num:"06 — Technologies", title:"Technology stack.",
    desc:"I don't work with a single tool. I select the right combination for each case: existing infrastructure, budget, expected scale and the team that will maintain it.",
  },
};

// ── Diferenciador translations ──────────────────────────
export const tDiff = {
  es: {
    num:"07 — Por que elegirme", title:"No soy un programador. Soy quien construye el sistema.",
    desc:"Hay muchos desarrolladores que pueden escribir un workflow. La diferencia esta en entender que problema de negocio resuelve ese workflow, y construirlo de forma que funcione en produccion y escale.",
    statement:{ a:"El codigo es el medio. El", em:"resultado operativo", b:"es el objetivo." },
    statementDesc:"Trabajo con logica de negocio real. Antes de construir, entiendo como funciona tu operacion: quien hace que, cuando, con que datos y con que herramientas. Eso determina lo que se construye.",
    points:[
      { title:"Sistemas completos, no piezas sueltas",        text:"No entrego un script. Entrego un sistema con manejo de errores, logs, notificaciones, documentacion y logica de recuperacion. Algo que puede mantenerse." },
      { title:"Experiencia en entornos empresariales reales",  text:"He trabajado dentro de empresas con Power Platform, Dataverse, facturacion argentina, CRMs y equipos que no son tecnicos. Se como adaptar la solucion al contexto." },
      { title:"IA aplicada donde agrega valor",               text:"No uso IA para impresionar. La uso donde tiene sentido real: clasificacion, extraccion, respuesta en lenguaje natural. Con evaluacion de costo-beneficio." },
      { title:"Lo que construyo puede crecer",                text:"Arquitectura pensada para escalar. No hay atajos que despues se convierten en deuda tecnica. El sistema que entrego hoy soporta el doble de volumen el anio que viene." },
    ],
  },
  en: {
    num:"07 — Why choose me", title:"I'm not a programmer. I'm the one who builds the system.",
    desc:"Many developers can write a workflow. The difference is understanding what business problem that workflow solves, and building it so it works in production and scales.",
    statement:{ a:"Code is the means. The", em:"operational result", b:"is the goal." },
    statementDesc:"I work with real business logic. Before building, I understand how your operation works: who does what, when, with what data and what tools. That determines what gets built.",
    points:[
      { title:"Complete systems, not loose pieces",           text:"I don't deliver a script. I deliver a system with error handling, logs, notifications, documentation and recovery logic. Something that can be maintained." },
      { title:"Experience in real enterprise environments",   text:"I've worked inside companies with Power Platform, Dataverse, CRMs and non-technical teams. I know how to adapt the solution to the context." },
      { title:"AI applied where it adds value",              text:"I don't use AI to impress. I use it where it makes real sense: classification, extraction, natural language response. With cost-benefit evaluation." },
      { title:"What I build can grow",                       text:"Architecture designed to scale. No shortcuts that later become technical debt. The system I deliver today handles double the volume next year." },
    ],
  },
};

// ── CTA translations ────────────────────────────────────
export const tCTA = {
  es: {
    h2a:"Si tu operacion ya no puede seguir", h2em:"funcionando asi",
    sub:"Agendemos una llamada de diagnostico. Sin compromiso. En 30 minutos identifico si la automatizacion puede tener impacto real en tu negocio, y como.",
    cta1:"Agendar diagnostico gratuito", cta2:"O escribime directamente",
    note:"Rosario, Argentina — Trabajo con empresas de toda la region",
  },
  en: {
    h2a:"If your operation can no longer keep", h2em:"working like this",
    sub:"Let's schedule a diagnostic call. No commitment. In 30 minutes I'll identify if automation can have real impact on your business, and how.",
    cta1:"Schedule free diagnostic", cta2:"Or write me directly",
    note:"Rosario, Argentina — I work with companies across the region",
  },
};

// ── Context ─────────────────────────────────────────────
interface LangCtx { lang: Lang; toggle: () => void; }
const LanguageCtx = createContext<LangCtx>({ lang:"es", toggle:()=>{} });
export const useLang = () => useContext(LanguageCtx);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang(l => l === "es" ? "en" : "es");
  return <LanguageCtx.Provider value={{ lang, toggle }}>{children}</LanguageCtx.Provider>;
}
