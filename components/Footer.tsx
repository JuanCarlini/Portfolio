import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <Image
          src="/portfolio.jpeg"
          alt="Juan Andres Carlini"
          width={72}
          height={72}
          className="footer-portrait"
          sizes="72px"
        />
        <div className="footer-brand">Carlini<span>.</span> &mdash; Automation &amp; AI Developer</div>
      </div>
      <nav className="footer-links" aria-label="External links">
        <a href="https://github.com/JuanCarlini" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/juan-andres-carlini-72353a227/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a href="mailto:juanandrescarlini@gmail.com">Email ↗</a>
      </nav>
      <div className="footer-right">Rosario, Argentina &mdash; 2026</div>
    </footer>
  );
}
