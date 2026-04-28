import { useEffect, useRef, useState } from "react";
import { BarChart3, UserPlus, Clock, ThumbsUp, Play, ArrowRight, ShieldCheck, GraduationCap, MessageCircle, Users, BookOpen, MessageSquareText, CheckCircle2, ChevronRight, Mail, MapPin, Phone, Linkedin, Youtube, Facebook, Instagram, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  { tag: "Gestão do Conhecimento", title: "Como a educação corporativa pode transformar resultados", img: blog1 },
  { tag: "Treinamento", title: "Tendências de aprendizagem para os próximos anos", img: blog2, highlight: true },
  { tag: "Comunicação", title: "Estratégias para comunicar com impacto na empresa", img: blog3 },
];

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

      {/* ===== Formulário CTA (unificado, dark) ===== */}
      <ConsultorCta />

      {/* ===== Blog (unificado, dark) ===== */}
      <BlogUnified />

      {/* ===== Newsletter (unificado, dark) ===== */}
      <NewsletterUnified />

      {/* ===== Footer (unificado, dark) ===== */}
      <FooterUnified />
    </div>
  
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
              className="flex h-full w-full will-change-transform"
              style={{
                transform: `translate3d(-${active * 100}%, 0, 0)`,
                transition: "transform 900ms cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            >
              {solutions.map(({ icon: Icon, title, desc, accent }) => {
                const a = accentMap[accent];
                const labelTop = title.replace("\n", " ").toUpperCase();
                return (
                  <div key={title} className="h-full w-full shrink-0 basis-full">
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

/* ============================================================
   Formulário "Fale com um consultor" — unificado, dark
   ============================================================ */
const ConsultorCta = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada!", { description: "Nosso time entra em contato em breve." });
    (e.target as HTMLFormElement).reset();
  };

  const bullets = [
    "Solução personalizada para o seu negócio",
    "Mais eficiência na gestão da informação",
    "Apoio de especialistas em transformação digital",
  ];

  return (
    <div id="cta" className="relative mt-28 reveal">
      {/* divisor sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      {/* Header centralizado */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70 ring-1 ring-white/10 backdrop-blur">
          Fale com um consultor
        </span>
        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl text-balance">
          Garanta o fluxo de{" "}
          <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
            informações
          </span>{" "}
          na sua empresa!
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
          As ferramentas Lector são a solução ideal para você revolucionar a comunicação e a gestão do conhecimento dentro da organização.
        </p>
      </div>

      {/* Card laranja com gradiente */}
      <div
        className="relative mt-12 overflow-hidden rounded-[2rem] p-8 shadow-[0_40px_80px_-20px_hsl(22_95%_25%/0.6)] md:p-12"
        style={{
          backgroundImage:
            "linear-gradient(135deg, hsl(22 95% 55%) 0%, hsl(30 100% 62%) 55%, hsl(22 95% 48%) 100%)",
        }}
      >
        {/* textura pontilhada */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]" aria-hidden>
          <svg width="100%" height="100%">
            <defs>
              <pattern id="dots-cta-unified" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-cta-unified)" />
          </svg>
        </div>

        {/* halos */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[hsl(222_80%_22%)]/30 blur-3xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          {/* ESQUERDA */}
          <div>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/95 text-accent shadow-[0_10px_30px_-8px_hsl(22_95%_25%/0.6)]">
              <MessageSquareText className="h-7 w-7" strokeWidth={2.4} />
            </div>

            <h3 className="mt-7 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Converse agora com um{" "}
              <span className="text-primary">consultor</span> e saiba mais!
            </h3>
            <span className="mt-4 block h-[3px] w-16 rounded-full bg-primary" />

            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-medium text-white/95">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={2.4} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DIREITA — formulário */}
          <form onSubmit={onSubmit} className="grid gap-3 self-center">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                placeholder="Nome"
                className="h-12 rounded-xl border border-white/40 bg-white/10 px-4 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur transition focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/40"
              />
              <input
                required
                type="email"
                placeholder="E-mail"
                className="h-12 rounded-xl border border-white/40 bg-white/10 px-4 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur transition focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/40"
              />
              <input
                placeholder="Telefone"
                className="h-12 rounded-xl border border-white/40 bg-white/10 px-4 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur transition focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/40"
              />
              <input
                placeholder="Empresa"
                className="h-12 rounded-xl border border-white/40 bg-white/10 px-4 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur transition focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/40"
              />
            </div>
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="resize-none rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none backdrop-blur transition focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/40"
            />
            <div className="mt-2 flex justify-end">
              <Button type="submit" variant="brand" size="lg">
                Falar com Consultor <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Blog — Sessão unificada (dark)
   ============================================================ */
const BlogUnified = () => {
  return (
    <div id="blog" className="relative mt-28 reveal">
      {/* divisor sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-16">
        {/* LEFT — título + CTA */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
              Conteúdos para você
            </span>
          </div>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl">
            Fique atualizado<br />
            com o que{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              importa
            </span>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
            Insights que ajudam sua empresa a evoluir de verdade.
          </p>

          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent-gradient px-7 py-4 text-sm font-semibold text-white shadow-glow-accent transition-transform hover:scale-[1.03]"
          >
            Ver todos os conteúdos
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>

        {/* RIGHT — cards */}
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((p, i) => (
              <a
                key={p.title}
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.05] hover:shadow-[0_30px_60px_-20px_hsl(22_95%_25%/0.6)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* imagem */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-[hsl(222_90%_6%)]/80 via-transparent to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-[hsl(222_85%_10%)]/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white ring-1 ring-white/15 backdrop-blur">
                    {p.tag}
                  </span>
                </div>

                {/* corpo */}
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className={`font-display text-base font-bold leading-snug transition-colors md:text-lg ${
                      p.highlight ? "text-accent" : "text-white group-hover:text-accent"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-semibold text-accent">
                    <span className="grid h-5 w-5 place-items-center">
                      <Play className="h-3 w-3 fill-accent text-accent" />
                    </span>
                    Leia mais
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* seta lateral */}
          <button
            aria-label="Próximo"
            className="absolute -right-5 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white shadow-[0_10px_30px_-8px_hsl(222_90%_3%/0.7)] backdrop-blur transition-all hover:border-accent/50 hover:bg-accent/20 hover:text-accent-glow lg:grid"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Newsletter — Sessão final unificada (dark)
   ============================================================ */
const NewsletterUnified = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("nl-email") as HTMLInputElement)?.value;
    if (!email) return;
    toast.success("Inscrição realizada!", {
      description: "Você receberá nossos melhores conteúdos em primeira mão.",
    });
    form.reset();
  };

  return (
    <div id="newsletter" className="relative mt-28 reveal">
      {/* divisor sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[0_30px_60px_-20px_hsl(222_90%_3%/0.6)] md:p-8">
        {/* glow sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative grid items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-8">
          {/* Ícone + título */}
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10">
              <Mail className="h-5 w-5 text-accent" strokeWidth={2} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold leading-tight text-white md:text-2xl">
                Fique por dentro das{" "}
                <span className="text-accent">novidades</span>
              </h3>
              <p className="mt-1 text-xs text-white/55 md:text-sm">
                Insights sobre educação corporativa, tecnologia e performance.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={onSubmit} className="w-full">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                required
                type="email"
                name="nl-email"
                placeholder="Digite seu e-mail"
                className="h-12 w-full flex-1 rounded-xl border border-white/15 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/45 outline-none backdrop-blur transition focus:border-accent/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-accent/25"
              />
              <button
                type="submit"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent-gradient px-5 text-sm font-semibold text-white shadow-glow-accent transition-transform hover:scale-[1.02]"
              >
                Inscrever-se
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-white/40">
              Ao se inscrever, você concorda com nossa{" "}
              <a href="#" className="text-accent/80 hover:text-accent-glow underline-offset-2 hover:underline">
                Política de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Footer — Rodapé unificado (dark)
   ============================================================ */
const footerCols = [
  {
    title: "A Lector",
    links: ["Sobre a Lector", "Nossa Metodologia", "Nossos Diferenciais", "Cases de Sucesso", "Trabalhe Conosco"],
  },
  {
    title: "Nossas Soluções",
    links: ["Plataforma Lector Live", "Universidade Corporativa", "Conteúdos Personalizados", "Consultoria Educacional", "Serviços Especializados"],
  },
  {
    title: "Clientes",
    links: ["Clientes", "Depoimentos", "Resultados", "Blog", "Materiais Ricos"],
  },
  {
    title: "Contato",
    links: ["Fale com um Especialista", "Solicite uma Demonstração", "Suporte", "LGPD e Privacidade"],
  },
];

const FooterUnified = () => {
  return (
    <div className="relative mt-20 reveal">
      {/* divisor sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="grid gap-12 pt-4 md:grid-cols-[1.3fr_repeat(4,_1fr)] md:gap-8 lg:gap-10">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient shadow-glow-accent">
              <span className="font-display text-lg font-extrabold text-white">L</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-xl font-extrabold tracking-tight text-white">Lector</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">Tecnologia</div>
            </div>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
            Transformamos a educação corporativa com tecnologia, metodologia e inovação para impulsionar pessoas e resultados.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/65">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                <MapPin className="h-3.5 w-3.5 text-accent" />
              </span>
              <span className="leading-snug">São Paulo - SP<br />Brasil</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Phone className="h-3.5 w-3.5 text-accent" />
              </span>
              +55 (11) 2503-0083
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                <Mail className="h-3.5 w-3.5 text-accent" />
              </span>
              comercial@lector.com.br
            </li>
          </ul>
        </div>

        {/* Colunas */}
        {footerCols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-sm font-bold text-white">{c.title}</h4>
            <span className="mt-3 block h-[2px] w-8 rounded-full bg-accent" />
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/55 transition-colors hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Barra inferior */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6 text-xs text-white/45">
        <div>
          © 2026 <span className="font-semibold text-accent">Lector Tecnologia</span>. Todos os direitos reservados.
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white">LGPD</a>
        </div>

        <div className="flex items-center gap-2">
          {[Youtube, Linkedin, Facebook, Instagram, MessageCircleMore].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 transition-all hover:border-accent/40 hover:bg-accent/15 hover:text-accent"
            >
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
