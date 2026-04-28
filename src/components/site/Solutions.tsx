import { ArrowRight, GraduationCap, MessageCircle, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type Accent = "orange" | "blue";

const solutions: {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: Accent;
}[] = [
  {
    title: "Educação\nCorporativa",
    desc: "Desenvolva pessoas e equipes com conteúdos, trilhas e experiências de aprendizagem.",
    icon: GraduationCap,
    accent: "orange",
  },
  {
    title: "Comunicação\nInterna",
    desc: "Engaje colaboradores com uma comunicação clara, ágil e conectada em todos os níveis.",
    icon: MessageCircle,
    accent: "orange",
  },
  {
    title: "Gestão de\nTalentos",
    desc: "Identifique potenciais, acompanhe competências e impulsione o crescimento de talentos.",
    icon: Users,
    accent: "blue",
  },
  {
    title: "Gestão do\nConhecimento",
    desc: "Centralize, organize e compartilhe o conhecimento de forma segura e inteligente.",
    icon: BookOpen,
    accent: "blue",
  },
];

const accentMap: Record<Accent, { card: string; iconWrap: string; icon: string; rule: string; title: string }> = {
  orange: {
    card: "bg-gradient-to-b from-[hsl(28_100%_94%)] via-white to-white",
    iconWrap: "bg-gradient-to-br from-accent to-accent-glow shadow-[0_14px_30px_-10px_hsl(22_95%_55%/0.55)]",
    icon: "text-white",
    rule: "bg-accent",
    title: "text-primary",
  },
  blue: {
    card: "bg-gradient-to-b from-[hsl(222_90%_95%)] via-white to-white",
    iconWrap: "bg-gradient-to-br from-primary to-primary-glow shadow-[0_14px_30px_-10px_hsl(222_90%_38%/0.55)]",
    icon: "text-white",
    rule: "bg-primary",
    title: "text-primary",
  },
};

export const Solutions = () => (
  <section id="solucoes" className="relative overflow-hidden py-20 md:py-28">
    {/* decorative bottom waves */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-60" aria-hidden>
      <svg viewBox="0 0 1440 200" className="h-full w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveOrange" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(222 90% 38%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 14 }).map((_, i) => (
          <path
            key={i}
            d={`M0,${120 + i * 4} C320,${60 + i * 6} 720,${180 - i * 3} 1440,${100 + i * 5}`}
            stroke={i % 2 === 0 ? "url(#waveOrange)" : "url(#waveBlue)"}
            strokeWidth="0.8"
            fill="none"
          />
        ))}
        <circle cx="380" cy="150" r="5" fill="hsl(22 95% 55%)" />
        <circle cx="900" cy="130" r="5" fill="hsl(222 90% 38%)" />
      </svg>
    </div>

    <div className="container relative">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        {/* LEFT */}
        <div className="reveal">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">Nossas soluções</span>
            <span className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-5xl">
            Soluções que <span className="text-accent">impulsionam</span> resultados reais
          </h2>
          <p className="mt-7 text-base font-medium text-ink">
            Transforme a forma como sua empresa <span className="text-accent font-semibold">aprende</span>,{" "}
            <span className="text-accent font-semibold">se comunica</span> e{" "}
            <span className="text-accent font-semibold">evolui</span>.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Hoje, a informação se move rápido — e empresas precisam acompanhar. Com a Lector, você{" "}
            <strong className="font-semibold text-ink">centraliza</strong> conhecimento,{" "}
            <strong className="font-semibold text-ink">fortalece</strong> a comunicação e{" "}
            <strong className="font-semibold text-ink">desenvolve</strong> sua equipe de forma contínua e estratégica.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <a href="#cta">
              Conheça a plataforma <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* RIGHT — cards */}
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, desc, accent }, i) => {
            const a = accentMap[accent];
            return (
              <article
                key={title}
                className={`group reveal solution-card relative flex flex-col rounded-[28px] border border-white/60 ${a.card} px-5 pb-7 pt-14 text-center shadow-[0_20px_50px_-25px_hsl(222_47%_8%/0.18)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_hsl(222_47%_8%/0.25)]`}
                style={{ animationDelay: `${i * 0.4}s`, transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full ring-[6px] ring-white ${a.iconWrap} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]`}
                >
                  <Icon className={`h-7 w-7 ${a.icon}`} />
                </div>

                <h3 className={`whitespace-pre-line font-display text-[15px] font-extrabold leading-snug ${a.title}`}>
                  {title}
                </h3>
                <span className={`mx-auto mt-3 block h-[3px] w-10 rounded-full ${a.rule}`} />

                <p className="mt-5 text-[13px] leading-relaxed text-ink-soft">{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
