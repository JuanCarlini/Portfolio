import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Esta pagina no existe.</h1>
        <p className="not-found-text">Puede que el link este roto o la pagina haya sido movida.</p>
        <Link href="/" className="btn-primary">Volver al inicio</Link>
      </div>
    </div>
  );
}
