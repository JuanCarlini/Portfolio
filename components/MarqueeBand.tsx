const items = [
  "n8n","Power Automate","Claude API","WhatsApp / Meta API","Next.js",
  "TypeScript","Dataverse","Power Apps","OpenAI","Kommo CRM",
  "PostgreSQL","AI Builder","Google Workspace","Chatwoot",
];
const doubled = [...items, ...items];
export default function MarqueeBand() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
