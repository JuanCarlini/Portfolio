interface Props { num: string; title: string; desc: string; }
export default function SectionHeader({ num, title, desc }: Props) {
  return (
    <div className="section-header">
      <div>
        <span className="section-num">{num}</span>
        <h2 className="section-h2">{title}</h2>
      </div>
      <p className="section-desc">{desc}</p>
    </div>
  );
}
