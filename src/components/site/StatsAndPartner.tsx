import { useEffect, useRef, useState } from "react";
import { BarChart3, UserPlus, Clock, ThumbsUp, Play, ArrowRight, ShieldCheck, GraduationCap, MessageCircle, Users, BookOpen } from "lucide-react";
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

const accentMap: Record<Accent, { iconWrap: string; halo: string; rule: string; cardBorder: string }> = {
  orange: {
    iconWrap: "bg-gradient-to-br from-accent to-[hsl(30_100%_62%)] shadow-[0_0_40px_-5px_hsl(22_95%_55%/0.8)]",
    halo: "bg-accent/30",
    rule: "bg-accent",
    cardBorder: "from-accent/40 via-accent/10 to-transparent",
  },
  blue: {
    iconWrap: "bg-gradient-to-br from-primary to-primary-glow shadow-[0_0_40px_-5px_hsl(222_90%_55%/0.8)]",
    halo: "bg-primary/30",
    rule: "bg-primary",
    cardBorder: "from-primary/40 via-primary/10 to-transparent",
  },
};

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "empresas atendidas", icon: BarChart3 },
  { value: 1, prefix: "+", suffix: " milhão", label: "de usuários ativos", icon: UserPlus },
  { value: 10, prefix: "+", suffix: " anos", label: "de experiência", icon: Clock },
  { value: 98, prefix: "", suffix: "%", label: "de satisfação", icon: ThumbsUp },
];

const clients = [
  "Microsoft",
  "SESI / SENAI",
  "SICOOB",
  "Hospital Sapiranga",
  "Liderança",
  "Unimed",
  "ACATS",
  "Grupo KKoch",
  "Sebrae",
  "Bradesco Seguros",
  "Randon",
  "Fundação Bradesco",
];

const Counter = ({ to }: { to: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1500;
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);

  return <span ref={ref}>{Math.round(val)}</span>;
};

export const StatsAndPartner = () => (
  <section
    id="clientes"
    className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_14%)_0%,_hsl(222_85%_8%)_55%,_hsl(222_90%_6%)_100%)] text-white py-16 lg:py-24"
  >
    {/* Átomo orbital de fundo */}
    <div
      className="pointer-events-none absolute left-1/2 top-[28%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-40"
      aria-hidden
    >
      <svg viewBox="0 0 600 600" className="h-full w-full animate-[spin_90s_linear_infinite]">
        <defs>
          <linearGradient id="spAtomOrange" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="spAtomBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(222 90% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(222 90% 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#spAtomOrange)" strokeWidth="2" fill="none" transform="rotate(35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#spAtomBlue)" strokeWidth="1.6" fill="none" transform="rotate(-35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#spAtomOrange)" strokeWidth="1" fill="none" transform="rotate(90 300 300)" opacity="0.4" />
      </svg>
    </div>

    {/* Mesh luminoso sutil */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, hsl(22 95% 55% / 0.14) 0%, transparent 45%), radial-gradient(circle at 85% 80%, hsl(222 90% 55% / 0.16) 0%, transparent 45%)",
      }}
    />

    <div className="container relative z-10">
      {/* ===== Header / Stats ===== */}
      <div className="mx-auto mb-10 max-w-2xl text-center reveal">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 ring-1 ring-white/10 backdrop-blur">
          Nossos números
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Resultados que <span className="text-accent">falam por nós</span>
        </h2>
        <span className="mx-auto mt-5 block h-[3px] w-12 rounded-full bg-accent" />
        <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
          Mais de uma década transformando a educação corporativa no Brasil.
        </p>
      </div>

      {/* card de stats */}
      <div className="mx-auto max-w-5xl reveal" style={{ perspective: "1400px" }}>
        <div
          className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl shadow-[0_40px_80px_-20px_hsl(222_90%_3%/0.7)]"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(3deg)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-12 -bottom-6 h-10 rounded-full bg-primary/40 blur-3xl"
          />

          <div className="grid grid-cols-2 divide-y divide-x divide-white/10 lg:grid-cols-4 lg:divide-y-0">
            {stats.map(({ icon: Icon, ...s }, i) => (
              <div
                key={s.label}
                className="group relative px-5 py-7 text-center transition-all duration-500 hover:bg-white/[0.03]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent to-[hsl(30_100%_62%)] text-white shadow-[0_10px_30px_-8px_hsl(22_95%_55%/0.6)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.4} />
                </div>

                <div className="mt-5" style={{ transform: "translateZ(15px)" }}>
                  <div className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                    <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                      {s.prefix}
                      <Counter to={s.value} />
                      {s.suffix}
                    </span>
                  </div>
                  <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                </div>

                <span
                  aria-hidden
                  className="absolute inset-x-8 bottom-3 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Card duplo Microsoft ===== */}
      <div className="relative mt-16 reveal">
        <div className="grid items-stretch gap-0 overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-20px_hsl(222_90%_3%/0.7)] lg:grid-cols-[1.15fr_1fr]">
          {/* ESQUERDA — Depoimento (claro) */}
          <div className="relative overflow-hidden bg-white/95 p-10 backdrop-blur-xl lg:p-14">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                Clientes que confiam na Lector
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="grid grid-cols-2 gap-0.5">
                <span className="block h-4 w-4 bg-[#F25022]" />
                <span className="block h-4 w-4 bg-[#7FBA00]" />
                <span className="block h-4 w-4 bg-[#00A4EF]" />
                <span className="block h-4 w-4 bg-[#FFB900]" />
              </div>
              <span className="font-display text-3xl font-semibold text-ink">Microsoft</span>
            </div>

            <blockquote className="relative mt-7">
              <span
                aria-hidden
                className="absolute -left-2 -top-4 font-display text-7xl leading-none text-primary/10 select-none"
              >
                &ldquo;
              </span>
              <p className="font-display text-xl leading-relaxed text-ink md:text-2xl text-balance">
                Na vertical de educação, escolhemos a Lector como{" "}
                <span className="text-primary">parceira estratégica na América Latina</span>.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                A Lector entrega uma plataforma robusta, flexível e alinhada às necessidades reais do mercado, gerando impacto direto na forma como as empresas treinam e desenvolvem suas equipes.
              </p>
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-accent-gradient text-white font-display font-bold shadow-glow-accent">
                PT
              </div>
              <div>
                <div className="font-semibold text-accent">Paulo Tonin da Silveira</div>
                <div className="text-xs italic text-muted-foreground">
                  Sr. Partner Development Manager LATAM — Microsoft
                </div>
              </div>
            </div>
          </div>

          {/* DIREITA — Card visual azul */}
          <div className="relative min-h-[440px] overflow-hidden bg-brand text-primary-foreground lg:min-h-[520px]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 20%, hsl(222 90% 55% / 0.55), transparent 55%), radial-gradient(circle at 20% 90%, hsl(22 95% 55% / 0.35), transparent 50%)",
              }}
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-10 lg:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-glow ring-1 ring-white/15 backdrop-blur">
                  <ShieldCheck className="h-3.5 w-3.5" /> Parceria estratégica
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight md:text-3xl text-balance">
                  Lector é parceira{" "}
                  <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                    Microsoft
                  </span>{" "}
                  na América Latina
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75 md:text-base">
                  Tecnologia, escala e confiança para impulsionar o aprendizado corporativo.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-6">
                <button className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow-accent transition-transform hover:scale-[1.03]">
                  Ver cases
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  aria-label="Assistir vídeo"
                  className="group grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-elevated transition-transform hover:scale-110"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-gradient shadow-glow-accent">
                    <Play className="h-4 w-4 fill-white text-white" />
                  </span>
                </button>
              </div>

              <div className="mt-6 border-t border-white/15 pt-4 text-xs text-primary-foreground/70">
                Único parceiro Microsoft do segmento de educação na LATAM.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Faixa de logos ===== */}
      <div className="relative mt-16 reveal">
        <div className="flex items-center gap-3 px-2">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
            Alguns clientes
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="marquee mt-8 py-4">
          <div className="marquee-track">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 select-none font-display text-2xl font-bold uppercase tracking-tight text-white/35 grayscale transition-all duration-500 hover:scale-105 hover:text-accent-glow hover:grayscale-0 md:text-3xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Soluções (dark, integrado) ===== */}
      <SolutionsParallax />
    </div>

    {/* fade inferior — funde com a próxima seção (background claro) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
    />
  </section>
);

/* ============================================================
   Soluções — Carrossel horizontal com autoplay (5s)
   ============================================================ */
const SolutionsParallax = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % solutions.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div id="solucoes" className="relative mt-28 reveal">
      {/* divisor sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
        {/* LEFT — fixo */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Nossas soluções</span>
            <span className="h-[2px] w-10 bg-accent" />
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">
            Soluções que <span className="text-accent">impulsionam</span> resultados reais
          </h2>
          <p className="mt-7 text-base font-medium text-white/85">
            Transforme a forma como sua empresa{" "}
            <span className="font-semibold text-accent">aprende</span>,{" "}
            <span className="font-semibold text-accent">se comunica</span> e{" "}
            <span className="font-semibold text-accent">evolui</span>.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Hoje, a informação se move rápido — e empresas precisam acompanhar. Com a Lector, você{" "}
            <strong className="font-semibold text-white">centraliza</strong> conhecimento,{" "}
            <strong className="font-semibold text-white">fortalece</strong> a comunicação e{" "}
            <strong className="font-semibold text-white">desenvolve</strong> sua equipe de forma contínua e estratégica.
          </p>
          <Button variant="hero" size="lg" className="mt-8" asChild>
            <a href="#cta">
              Conheça a plataforma <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* RIGHT — carrossel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* viewport */}
          <div className="relative h-[460px] overflow-hidden rounded-[32px] md:h-[500px]">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${active * 100}%)`, width: `${solutions.length * 100}%` }}
            >
              {solutions.map(({ icon: Icon, title, desc, accent }) => {
                const a = accentMap[accent];
                const labelTop = title.replace("\n", " ").toUpperCase();
                return (
                  <div key={title} className="h-full shrink-0 px-1" style={{ width: `${100 / solutions.length}%` }}>
                    <article className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_40px_80px_-30px_hsl(222_90%_3%/0.9)] md:p-12">
                      {/* glow border top */}
                      <div
                        aria-hidden
                        className={`pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r ${a.cardBorder}`}
                      />
                      {/* halo amplo */}
                      <div
                        aria-hidden
                        className={`pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full ${a.halo} blur-3xl`}
                      />

                      <div className="relative grid h-full grid-cols-[auto_1fr] items-center gap-8 md:gap-12">
                        {/* Ícone — círculo sólido com anel escuro */}
                        <div className="relative flex items-center justify-center">
                          <div
                            aria-hidden
                            className={`absolute inset-0 -m-4 rounded-full ${a.halo} blur-2xl`}
                          />
                          {/* anel externo escuro */}
                          <div className="relative grid h-32 w-32 place-items-center rounded-full bg-[hsl(222_60%_10%)] ring-1 ring-white/10">
                            {/* círculo laranja sólido */}
                            <div className={`grid h-24 w-24 place-items-center rounded-full ${a.iconWrap}`}>
                              <Icon className="h-11 w-11 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* texto */}
                        <div className="border-l border-white/10 pl-8 md:pl-12">
                          <span className={`block text-[11px] font-bold uppercase tracking-[0.22em] ${accent === "orange" ? "text-accent" : "text-primary-glow"}`}>
                            {labelTop}
                          </span>
                          <h3 className="mt-4 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
                            {desc.split(".")[0]}
                          </h3>
                          <span className={`mt-5 block h-[3px] w-12 rounded-full ${a.rule}`} />
                          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
                            {desc}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {solutions.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  aria-label={`Ir para ${s.title.replace("\n", " ")}`}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isActive ? "w-8 bg-accent" : "w-2 bg-white/25 hover:bg-white/40"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
