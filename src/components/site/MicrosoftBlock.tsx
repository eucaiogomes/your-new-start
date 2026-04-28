import { Play, ArrowRight, ShieldCheck } from "lucide-react";

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

export const MicrosoftBlock = () => (
  <section
    id="clientes"
    className="relative z-20 mt-4 pb-28 pt-0"
  >
    {/* Fundo unificado escuro — mesma DNA da seção Stats acima (tela infinita) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_14%)_0%,_hsl(222_85%_8%)_55%,_hsl(222_90%_6%)_100%)]"
    />
    {/* Mesh luminoso sutil (laranja + azul) — combinando com Stats */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, hsl(22 95% 55% / 0.14) 0%, transparent 45%), radial-gradient(circle at 85% 80%, hsl(222 90% 55% / 0.16) 0%, transparent 45%)",
      }}
    />
    {/* fade inferior — funde com a próxima seção (background claro) */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-px -z-10 h-32 bg-gradient-to-t from-background to-transparent"
    />

    <div className="container relative">
      {/* Card principal — propositalmente sobreposto à seção Stats acima */}
      <div className="relative reveal">
        <div className="relative rounded-[2rem]">
          {/* Átomo orbital — centralizado entre os dois cards (DNA do Hero/Stats) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-70 mix-blend-screen"
          >
            <svg viewBox="0 0 600 600" className="h-full w-full animate-[spin_70s_linear_infinite]">
              <defs>
                <linearGradient id="msAtomOrange" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="msAtomBlue" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(222 90% 60%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(222 90% 60%)" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#msAtomOrange)" strokeWidth="2" fill="none" transform="rotate(35 300 300)" />
              <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#msAtomBlue)" strokeWidth="1.6" fill="none" transform="rotate(-35 300 300)" />
              <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#msAtomOrange)" strokeWidth="1" fill="none" transform="rotate(90 300 300)" opacity="0.4" />
            </svg>
          </div>

          {/* sheen superior */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          />

          <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_1fr]">
            {/* ESQUERDA — Depoimento */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-white/95 p-10 shadow-premium backdrop-blur-xl lg:rounded-r-none lg:border-r-0 lg:p-14">
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

            {/* DIREITA — Card visual */}
            <div className="relative z-10 min-h-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-brand text-primary-foreground shadow-[0_30px_60px_-20px_hsl(222_80%_10%/0.55)] lg:-mt-16 lg:min-h-[520px] lg:rounded-l-none lg:border-l-0">
              {/* gradient mesh */}
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

                {/* CTA + play */}
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

        {/* glow inferior do card */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-16 -bottom-8 -z-10 h-12 rounded-full bg-primary/30 blur-3xl"
        />
      </div>

      {/* Faixa de logos — passando atrás, efeito tela infinita */}
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
    </div>
  </section>
);
