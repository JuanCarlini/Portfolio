
// ── Proceso translations ────────────────────────────────
export const tProceso = {
  es: {
    num:"04 — Como trabajo", title:"Un proceso que reduce el riesgo.",
    desc:"Cada implementacion sigue una estructura que protege tu inversion. No hay sorpresas en el medio porque el trabajo de entender el problema ya esta hecho antes de escribir la primera linea.",
    steps:[
      { num:"01", title:"Diagnostico",      desc:"Mapeamos tu operacion actual. Identifico los cuellos de botella, los procesos candidatos y el impacto potencial de cada automatizacion. Priorizamos por ROI." },
      { num:"02", title:"Arquitectura",     desc:"Diseno el sistema antes de construirlo. Defino herramientas, flujo de datos, integraciones y casos borde. El plano que evita rehacer trabajo a mitad del proyecto." },
      { num:"03", title:"Implementacion",   desc:"Construccion del sistema completo con manejo de errores, logs, reintentos y notificaciones. Lo que se entrega funciona en produccion, no solo en demo." },
      { num:"04", title:"Pruebas y ajuste", desc:"Pruebas con datos reales. Identifico casos que no aparecen en el diseno inicial y los resuelvo antes del go-live. Itero hasta que el sistema se comporta como se espera." },
      { num:"05", title:"Handoff y escala", desc:"Documentacion del sistema, transferencia de conocimiento y plan de crecimiento. El sistema que entrego puede mantenerse y evolucionar sin que yo este presente." },
    ],
  },
  en: {
    num:"04 — How I work", title:"A process that reduces risk.",
    desc:"Every implementation follows a structure that protects your investment. No surprises mid-project because the work of understanding the problem is done before writing the first line.",
    steps:[
      { num:"01", title:"Diagnosis",       desc:"We map your current operation. I identify bottlenecks, candidate processes and the potential impact of each automation. We prioritize by ROI." },
      { num:"02", title:"Architecture",    desc:"I design the system before building it. I define tools, data flow, integrations and edge cases. The blueprint that avoids rework mid-project." },
      { num:"03", title:"Implementation",  desc:"Full system build with error handling, logs, retries and notifications. What's delivered works in production, not just in a demo." },
      { num:"04", title:"Testing",         desc:"Testing with real data. I identify cases that don't appear in the initial design and resolve them before go-live. I iterate until the system behaves as expected." },
      { num:"05", title:"Handoff & scale", desc:"System documentation, knowledge transfer and growth plan. The system I deliver can be maintained and evolved without my presence." },
    ],
  },
};

// ── Proyectos translations ──────────────────────────────
export const tProyectos = {
  es: {
    num:"05 — Proyectos", title:"Casos reales. Resultados concretos.",
    desc:"Cada proyecto listado aqui resolvio un problema operativo real. No hay demos ni POCs: sistemas en produccion con impacto medible.",
    labels:{ problem:"El problema", solution:"La solucion", result:"Resultado" },
    items:[
      { tag:"Automatizacion Financiera", title:"Pipeline de procesamiento automatico de facturas",
        problem:"Una empresa con alto volumen de comprobantes argentinos procesaba cada factura de forma manual: extraccion de datos, validacion de CUIT, clasificacion por receptor y carga en sistema.",
        solution:"Pipeline en Power Automate con AI Builder como OCR primario y Claude API para extraccion estructurada de campos criticos. Logica de enrutamiento, Try/Catch con carpetas de revision y errores. Carga automatica en Dataverse.",
        result:"Procesamiento end-to-end sin intervencion humana en el 85% de los casos. Trazabilidad completa. Reduccion de errores de carga a cero.",
        stack:["Power Automate","Claude API","AI Builder","Dataverse","SharePoint"] },
      { tag:"Atencion al Cliente", title:"Bot de soporte inteligente via WhatsApp",
        problem:"Equipo de soporte saturado respondiendo las mismas preguntas en WhatsApp. Sin registro de conversaciones, sin escalacion estructurada, sin disponibilidad fuera del horario comercial.",
        solution:"Bot construido con n8n y la API de Meta, conectado a un LLM para entender intenciones y responder en lenguaje natural. Clasificacion automatica de consultas, escalacion a agente humano en Chatwoot cuando el caso lo requiere.",
        result:"Atencion 24/7 sin costo adicional. El equipo humano solo interviene en casos complejos. Tiempo de primera respuesta: inmediato.",
        stack:["n8n","Meta API","LLM","Chatwoot","PostgreSQL"] },
      { tag:"Infraestructura", title:"Stack de automatizacion self-hosted en VPS",
        problem:"Dependencia de herramientas SaaS con limites de ejecucion, costos crecientes por volumen y datos sensibles expuestos a terceros.",
        solution:"Despliegue completo en Hostinger VPS con Easypanel: n8n, Chatwoot, Paperclip AI y PostgreSQL como base central. Cloudflare para DNS y SSL.",
        result:"Costo fijo previsible, ejecuciones ilimitadas, datos bajo control propio. Infraestructura que escala sin aumentar el costo marginal.",
        stack:["VPS","Easypanel","n8n","Chatwoot","Cloudflare"] },
      { tag:"Gestion Interna", title:"Sistema de ordenes de compra y proveedores",
        problem:"Gestion de compras en hojas de calculo. Sin trazabilidad, sin aprobaciones formales, sin historial de proveedores ni seguimiento de pagos.",
        solution:"Aplicacion web con Next.js y TypeScript conectada a Supabase. Modulo de ordenes de compra, proveedores, ordenes de pago y reportes. Arquitectura MVC, flujos de aprobacion y estados de orden.",
        result:"Proceso de compras centralizado, trazable y sin papel. Visibilidad en tiempo real del estado de cada orden.",
        stack:["Next.js","TypeScript","Supabase","shadcn/ui"] },
    ],
  },
  en: {
    num:"05 — Projects", title:"Real cases. Concrete results.",
    desc:"Every project listed here solved a real operational problem. No demos or POCs: production systems with measurable impact.",
    labels:{ problem:"The problem", solution:"The solution", result:"Result" },
    items:[
      { tag:"Financial Automation", title:"Automatic invoice processing pipeline",
        problem:"A company with high volume of Argentine receipts processed each invoice manually: data extraction, CUIT validation, receiver classification and system entry.",
        solution:"Power Automate pipeline with AI Builder as primary OCR and Claude API for structured extraction of critical fields. Routing logic, Try/Catch with review and error folders. Automatic entry into Dataverse.",
        result:"End-to-end processing without human intervention in 85% of cases. Full traceability. Data entry errors reduced to zero.",
        stack:["Power Automate","Claude API","AI Builder","Dataverse","SharePoint"] },
      { tag:"Customer Support", title:"Intelligent WhatsApp support bot",
        problem:"Support team overwhelmed answering the same questions on WhatsApp. No conversation records, no structured escalation, no availability outside business hours.",
        solution:"Bot built with n8n and the Meta API, connected to an LLM to understand intents and respond in natural language. Automatic query classification, escalation to human agent in Chatwoot when required.",
        result:"24/7 support at no additional cost. Human team only intervenes in complex cases. First response time: immediate.",
        stack:["n8n","Meta API","LLM","Chatwoot","PostgreSQL"] },
      { tag:"Infrastructure", title:"Self-hosted automation stack on VPS",
        problem:"Dependency on SaaS tools with execution limits, growing costs per volume and sensitive data exposed to third parties.",
        solution:"Full deployment on Hostinger VPS with Easypanel: n8n, Chatwoot, Paperclip AI and PostgreSQL as central database. Cloudflare for DNS and SSL.",
        result:"Predictable fixed cost, unlimited executions, data under own control. Infrastructure that scales without increasing marginal cost.",
        stack:["VPS","Easypanel","n8n","Chatwoot","Cloudflare"] },
      { tag:"Internal Management", title:"Purchase order and supplier system",
        problem:"Purchase management in spreadsheets. No traceability, no formal approvals, no supplier history or payment tracking.",
        solution:"Web application with Next.js and TypeScript connected to Supabase. Purchase orders, suppliers, payment orders and reports module. MVC architecture, approval flows and order statuses.",
        result:"Centralized, traceable, paperless purchasing process. Real-time visibility of each order status.",
        stack:["Next.js","TypeScript","Supabase","shadcn/ui"] },
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
