import { useEffect, useRef, useState } from "react";
import { Play, Quote, ChevronLeft, ChevronRight, Users2 } from "lucide-react";

/* ---------- Clientes (logos como wordmarks estilizadas) ---------- */
type Client = { name: string; mark: React.ReactNode };

const clients: Client[] = [
  {
    name: "KKoch",
    mark: (
      <span className="flex items-center gap-1 font-display text-lg font-extrabold tracking-tight text-[#0a3d8f]">
        <span className="rounded bg-[#0a3d8f] px-1.5 py-0.5 text-white">KK</span>och
      </span>
    ),
  },
  {
    name: "SESI SENAI",
    mark: (
      <span className="flex flex-col text-center text-[10px] font-extrabold leading-tight">
        <span className="rounded-sm bg-[#e30613] px-2 py-0.5 text-white">SESI</span>
        <span className="mt-0.5 rounded-sm bg-[#e30613] px-2 py-0.5 text-white">SENAI</span>
      </span>
    ),
  },
  {
    name: "Sicoob",
    mark: (
      <span className="flex items-center gap-1 font-display text-lg font-extrabold text-[#003641]">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#7ab800] text-white">✓</span>
        SICOOB
      </span>
    ),
  },
  {
    name: "Hospital Sapiranga",
    mark: (
      <span className="text-center font-display text-[11px] font-extrabold leading-tight text-[#0a3d8f]">
        HOSPITAL
        <br />
        SAPIRANGA
      </span>
    ),
  },
  {
    name: "Liderança",
    mark: (
      <span className="rounded bg-[#0a3d8f] px-3 py-1 font-display text-sm font-extrabold tracking-wide text-[#f5d33b]">
        Liderança
      </span>
    ),
  },
  {
    name: "Unimed",
    mark: <span className="font-display text-lg font-extrabold text-[#00995d]">Unimed</span>,
  },
  {
    name: "Acats",
    mark: (
      <span className="text-center font-display text-base font-extrabold text-[#0a3d8f]">
        acats
        <span className="block text-[7px] font-medium text-muted-foreground">Associação Catarinense</span>
      </span>
    ),
  },
  {
    name: "Brasal",
    mark: <span className="font-display text-lg font-extrabold text-[#e30613]">Brasal</span>,
  },
  {
    name: "Algar",
    mark: <span className="font-display text-lg font-extrabold text-[#e60028]">Algar</span>,
  },
  {
    name: "MRV",
    mark: (
      <span className="rounded bg-[#0a3d8f] px-2 py-1 font-display text-base font-extrabold text-white">MRV</span>
    ),
  },
];

/* ---------- Lector Atom (sutil, animado) ---------- */
const LectorAtomBg = () => (
  <div className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] opacity-20" aria-hidden>
    <svg viewBox="0 0 600 600" className="h-full w-full animate-float">
      <defs>
        <linearGradient id="atomTOrange" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="atomTBlue" x1="0" x2="1">
          <stop offset="0%" stopColor="hsl(222 90% 55%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(222 90% 55%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="origin-center" style={{ animation: "orbit-spin 60s linear infinite", transformOrigin: "300px 300px" }}>
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomTOrange)" strokeWidth="3" fill="none" transform="rotate(35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomTBlue)" strokeWidth="2.5" fill="none" transform="rotate(-35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomTOrange)" strokeWidth="1.5" fill="none" transform="rotate(90 300 300)" opacity="0.6" />
        <circle cx="560" cy="300" r="6" fill="hsl(22 95% 55%)" />
        <circle cx="40" cy="300" r="4" fill="hsl(222 90% 55%)" />
      </g>
    </svg>
  </div>
);

/* ---------- Section ---------- */
export const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pageSize = 7;
  const pages = Math.ceil(clients.length / pageSize);
  const visible = clients.slice(page * pageSize, page * pageSize + pageSize);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [logosKey, setLogosKey] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // re-trigger logo cascade when page changes
  useEffect(() => setLogosKey((k) => k + 1), [page]);

  return (
    <section ref={sectionRef} id="depoimentos" className="relative overflow-hidden py-24">
      {/* Atom background */}
      <LectorAtomBg />

      <div className="container relative">
        {/* ===== Microsoft testimonial ===== */}
        <div
          className={`grid gap-8 rounded-[2rem] border border-border/60 bg-white p-6 shadow-[0_30px_80px_-30px_hsl(222_47%_8%/0.18)] md:p-10 lg:grid-cols-[1.05fr_1fr] transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Left — quote */}
          <div className="relative">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              Depoimento parceiro
            </span>

            <div className="mt-5 flex items-center gap-3">
              <div className="grid grid-cols-2 gap-0.5">
                <span className="block h-5 w-5 bg-[#F25022]" />
                <span className="block h-5 w-5 bg-[#7FBA00]" />
                <span className="block h-5 w-5 bg-[#00A4EF]" />
                <span className="block h-5 w-5 bg-[#FFB900]" />
              </div>
              <span className="font-display text-3xl font-semibold text-foreground">Microsoft</span>
            </div>

            <Quote className="absolute -left-2 top-28 h-16 w-16 text-border" aria-hidden />

            <div className="relative mt-8 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              <p>
                Na vertical de educação, escolhemos a Lector como parceiro estratégico na América
                Latina.
              </p>
              <p>
                Ter um parceiro como a Lector é bastante estratégico para nós, pois educação é um
                tema sensível de qualquer sociedade e gera impacto positivo na vida das pessoas.
              </p>
            </div>

            <div className="mt-8">
              <div className="font-display text-base font-bold text-accent">Paulo Tonin da Silveira</div>
              <div className="text-xs italic text-muted-foreground">
                Sr. Partner Development Manager LATAM — Microsoft
              </div>
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-primary">
            <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, hsl(222 90% 55% / 0.6), transparent 60%), radial-gradient(circle at 80% 80%, hsl(22 95% 55% / 0.3), transparent 55%)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <button className="group grid h-20 w-20 place-items-center rounded-full bg-white/90 shadow-elevated transition-all hover:scale-110" aria-label="Assistir vídeo">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-gradient shadow-glow-accent">
                  <Play className="h-5 w-5 fill-white text-white" />
                </span>
              </button>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm font-semibold text-white">
                Lector é o único parceiro Microsoft da América Latina em nosso segmento.
              </p>
              <span className="mt-2 block h-[3px] w-12 rounded-full bg-accent" />
            </div>
          </div>
        </div>

        {/* ===== Clientes — cascata horizontal ===== */}
        <div
          className={`mt-10 rounded-[2rem] border border-border/60 bg-white px-6 py-8 shadow-[0_20px_60px_-30px_hsl(222_47%_8%/0.15)] md:px-10 transition-all duration-700 delay-150 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-soft text-accent">
                <Users2 className="h-4 w-4" />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                Alguns clientes
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => (p - 1 + pages) % pages)}
                aria-label="Anterior"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition hover:border-primary hover:text-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setPage((p) => (p + 1) % pages)}
                aria-label="Próximo"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card transition hover:border-primary hover:text-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <span className="mt-3 block h-[2px] w-10 rounded-full bg-accent" />

          {/* Cascata horizontal — re-anima a cada page change */}
          <div
            key={logosKey}
            className="mt-8 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7"
          >
            {visible.map((c, i) => (
              <div
                key={c.name}
                className="group grid h-20 place-items-center rounded-xl border border-transparent bg-white transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-card"
                style={{
                  animation: `cascade-in 0.7s ${i * 90}ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                }}
              >
                <div className="grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105">
                  {c.mark}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: pages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                aria-label={`Página ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  idx === page ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
