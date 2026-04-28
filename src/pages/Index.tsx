import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Logos } from "@/components/site/Logos";
import { ToolsScroll } from "@/components/site/ToolsScroll";
import { Stats } from "@/components/site/Stats";
import { MicrosoftBlock } from "@/components/site/MicrosoftBlock";
import { Testimonials } from "@/components/site/Testimonials";
import { Solutions } from "@/components/site/Solutions";
import { CtaForm } from "@/components/site/CtaForm";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Lector Live — Plataforma de Educação Corporativa";
    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    ensureMeta(
      "description",
      "Lector Live é a plataforma completa de Educação Corporativa: LMS, eventos ao vivo, conteúdos autorais e gestão de talentos em um único ambiente.",
    );
  }, []);

  return (
    <div id="clientes" className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ToolsScroll />
        <Stats />
        <MicrosoftBlock />
        <Testimonials />
        <Solutions />
        <CtaForm />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
