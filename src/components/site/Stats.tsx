import { useEffect, useRef, useState } from "react";
import { BarChart3, UserPlus, Clock, ThumbsUp } from "lucide-react";

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "empresas atendidas", icon: BarChart3 },
  { value: 1, prefix: "+", suffix: " milhão", label: "de usuários ativos", icon: UserPlus },
  { value: 20, prefix: "+", suffix: " anos", label: "de experiência", icon: Clock },
  { value: 98, prefix: "", suffix: "%", label: "de satisfação", icon: ThumbsUp },
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

export const Stats = () => (
  <section
    className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_14%)_0%,_hsl(222_85%_8%)_55%,_hsl(222_90%_6%)_100%)] text-white py-16 lg:py-20"
  >
    {/* continuidade visual: top fade vindo do ToolsScroll */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -top-px h-32 bg-gradient-to-b from-[hsl(222_90%_6%)] to-transparent"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -bottom-px h-32 bg-gradient-to-t from-background to-transparent"
    />

    {/* Átomo orbital — mesma DNA do Hero/ToolsScroll */}
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-50"
      aria-hidden
    >
      <svg viewBox="0 0 600 600" className="h-full w-full animate-[spin_90s_linear_infinite]">
        <defs>
          <linearGradient id="statsAtomOrange" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="statsAtomBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(222 90% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(222 90% 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#statsAtomOrange)" strokeWidth="2" fill="none" transform="rotate(35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#statsAtomBlue)" strokeWidth="1.6" fill="none" transform="rotate(-35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#statsAtomOrange)" strokeWidth="1" fill="none" transform="rotate(90 300 300)" opacity="0.4" />
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

      {/* card estreito unificado, dividido em 4 colunas */}
      <div className="mx-auto max-w-5xl reveal" style={{ perspective: "1400px" }}>
        <div
          className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl shadow-[0_40px_80px_-20px_hsl(222_90%_3%/0.7)]"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(3deg)" }}
        >
          {/* sheen superior */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          {/* glow inferior */}
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

                {/* underline animado */}
                <span
                  aria-hidden
                  className="absolute inset-x-8 bottom-3 h-px origin-center scale-x-0 bg-gradient-to-r from-transparent via-accent to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
