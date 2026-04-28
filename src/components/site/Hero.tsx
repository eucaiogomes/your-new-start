import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const clientLogos = ["SESI SENAI", "Sicredi", "Unimed", "GERDAU", "aché", "Algar"];

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_18%)_0%,_hsl(222_85%_10%)_55%,_hsl(222_90%_7%)_100%)] text-white pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Átomo Lector centralizado atrás do título — estático, respiração sutil */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 opacity-70"
        aria-hidden
      >
        <svg viewBox="0 0 600 600" className="h-full w-full animate-[spin_80s_linear_infinite]">
          <defs>
            <linearGradient id="heroAtomOrange" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroAtomBlue" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(222 90% 55%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(222 90% 55%)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#heroAtomOrange)" strokeWidth="2.5" fill="none" transform="rotate(35 300 300)" />
          <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#heroAtomBlue)" strokeWidth="2" fill="none" transform="rotate(-35 300 300)" />
          <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#heroAtomOrange)" strokeWidth="1.2" fill="none" transform="rotate(90 300 300)" opacity="0.5" />
          <circle cx="560" cy="300" r="6" fill="hsl(22 95% 55%)" />
          <circle cx="40" cy="300" r="4" fill="hsl(222 90% 55%)" />
        </svg>
      </div>

      {/* Mesh luminoso sutil, combinando com ToolsScroll */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, hsl(22 95% 55% / 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 80%, hsl(222 90% 55% / 0.18) 0%, transparent 45%)",
        }}
        aria-hidden
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-[4rem]">
            A plataforma completa de Educação Corporativa que{" "}
            <span className="text-accent">transforma resultados.</span>
          </h1>

          <span className="mx-auto mt-7 block h-[3px] w-16 rounded-full bg-accent" />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70 text-pretty md:text-lg">
            Integre pessoas, conteúdos e processos em um único ambiente e desenvolva talentos para o futuro.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#cta">
                Agendar demonstração <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-white/5 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/10"
            >
              <a href="#video">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10">
                  <Play className="h-3 w-3 fill-white text-white" />
                </span>
                Assistir ao vídeo
              </a>
            </Button>
          </div>

          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Mais de 500 empresas já confiam na Lector
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-70">
              {clientLogos.map((l) => (
                <span key={l} className="font-display text-sm font-bold tracking-tight text-white/60">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
