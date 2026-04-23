import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeBand from "@/components/MarqueeBand";
import Problemas from "@/components/Problemas";
import Solucion from "@/components/Solucion";
import Servicios from "@/components/Servicios";
import Proceso from "@/components/Proceso";
import Proyectos from "@/components/Proyectos";
import Stack from "@/components/Stack";
import Diferenciador from "@/components/Diferenciador";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBand />
        <Problemas />
        <Solucion />
        <Servicios />
        <Proceso />
        <Proyectos />
        <Stack />
        <Diferenciador />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
