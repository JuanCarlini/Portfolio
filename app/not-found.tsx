import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", background:"var(--bg)", padding:"0 40px" }}>
      <div style={{ maxWidth:"600px" }}>
        <span style={{ fontFamily:"var(--font-mono)", fontSize:"11px", letterSpacing:".1em", color:"var(--accent)", display:"block", marginBottom:"24px" }}>404</span>
        <h1 style={{ fontFamily:"var(--font-syne)", fontSize:"clamp(48px,6vw,80px)", fontWeight:800, color:"var(--white)", lineHeight:.95, letterSpacing:"-.03em", marginBottom:"24px" }}>
          Esta pagina no existe.
        </h1>
        <p style={{ fontSize:"16px", color:"var(--muted)", marginBottom:"48px", lineHeight:1.7 }}>
          Puede que el link este roto o la pagina haya sido movida.
        </p>
        <Link href="/" style={{ fontFamily:"var(--font-mono)", fontSize:"12px", letterSpacing:".1em", textTransform:"uppercase", background:"var(--accent)", color:"#000", padding:"16px 32px", fontWeight:500, textDecoration:"none", display:"inline-block" }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
