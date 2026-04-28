import { forwardRef, useEffect, useRef, useState } from "react";
import {
  Video as VideoIcon,
  Users2,
  Palette,
  MessageSquareHeart,
  Camera,
  Scissors,
  UploadCloud,
  Sparkles,
  Mic,
  MonitorPlay,
  Share2,
  HardDrive,
  Image as ImageIcon,
  Type as TypeIcon,
  Layers,
  Brush,
  Megaphone,
  MessagesSquare,
  Users,
  ShieldCheck,
  FolderKanban,
  FileText,
  Search,
  Cloud,
  Lock,
} from "lucide-react";

type Tool = {
  id: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  title: React.ReactNode;
  desc: React.ReactNode;
  bullets: { icon: React.ComponentType<{ className?: string }>; label: string }[];
  visual: React.ReactNode;
};

/* ---------- Visual mocks (puro CSS, sem imagens externas) ---------- */

const AutoriaVisual = () => (
  <div className="relative mx-auto w-full max-w-[520px]">
    {/* Laptop */}
    <div className="relative rounded-[18px] bg-[#0b1530] p-3 shadow-[0_40px_80px_-20px_hsl(222_90%_5%/0.6)] ring-1 ring-white/10">
      <div className="rounded-[12px] bg-gradient-to-br from-[#0f1a3a] to-[#0a1330] p-4">
        <div className="flex items-center gap-1.5 pb-3">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-cols-[1fr_1.4fr] gap-3">
          <div className="rounded-lg bg-white/5 p-3">
            <p className="text-[10px] font-bold uppercase text-white/60">Comunicação que</p>
            <p className="text-sm font-extrabold leading-tight text-white">transforma resultados</p>
            <div className="mt-3 h-14 rounded-md bg-gradient-to-br from-accent/30 to-primary-glow/30" />
          </div>
          <div className="rounded-lg bg-white/5 p-2">
            <div className="flex h-20 items-end gap-[3px] rounded-md bg-black/30 p-2">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent/80"
                  style={{ height: `${20 + Math.abs(Math.sin(i)) * 70}%` }}
                />
              ))}
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1">
              <div className="h-1.5 rounded bg-white/10" />
              <div className="h-1.5 rounded bg-accent" />
              <div className="h-1.5 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto h-2 w-[88%] rounded-b-2xl bg-[#0b1530]/90" />

    {/* Floating panel - gravação */}
    <div className="absolute -right-4 -top-6 w-[170px] rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5 animate-float">
      <p className="text-[10px] font-bold text-primary">Gravação</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-white">
          <Mic className="h-3.5 w-3.5" />
        </span>
        <div className="flex-1">
          <div className="h-1.5 rounded bg-secondary" />
          <div className="mt-1 h-1.5 w-2/3 rounded bg-accent" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-7 rounded bg-secondary" />
        ))}
      </div>
    </div>
  </div>
);

const WebconVisual = () => (
  <div className="relative mx-auto w-full max-w-[560px]">
    <div className="rounded-[18px] bg-[#0b1530] p-3 shadow-[0_40px_80px_-20px_hsl(222_90%_5%/0.6)] ring-1 ring-white/10">
      <div className="grid grid-cols-3 gap-2 rounded-[12px] bg-[#0a1330] p-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="aspect-video rounded-md bg-gradient-to-br from-primary-glow/40 to-accent/30 ring-1 ring-white/10"
          >
            <div className="m-2 h-full rounded-sm bg-black/20" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        {[Mic, VideoIcon, Share2, MessagesSquare, ShieldCheck].map((Icon, i) => (
          <span
            key={i}
            className={`grid h-8 w-8 place-items-center rounded-full ${
              i === 4 ? "bg-accent text-white" : "bg-white/10 text-white/80"
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-2 w-[150px] rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5 animate-float">
      <p className="text-[10px] font-bold text-primary">Chat</p>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-3/4 rounded bg-secondary" />
        <div className="h-1.5 w-1/2 rounded bg-accent/70" />
        <div className="h-1.5 w-2/3 rounded bg-secondary" />
      </div>
    </div>
  </div>
);

const PersonalizacaoVisual = () => (
  <div className="relative mx-auto w-full max-w-[520px]">
    <div className="rounded-[20px] bg-white p-5 shadow-[0_40px_80px_-20px_hsl(222_90%_15%/0.35)] ring-1 ring-black/5">
      <p className="text-xs font-bold text-primary">Personalize sua plataforma</p>
      <div className="mt-3 rounded-lg border border-border p-3">
        <p className="text-[10px] font-semibold uppercase text-muted-foreground">Logo</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded bg-accent text-[10px] font-bold text-white">L</span>
          <span className="text-sm font-extrabold text-primary">Lector</span>
        </div>
      </div>
      <p className="mt-4 text-[10px] font-semibold uppercase text-muted-foreground">Cores da marca</p>
      <div className="mt-2 flex gap-2">
        {["bg-primary", "bg-accent", "bg-primary-glow", "bg-accent-glow", "bg-secondary"].map((c, i) => (
          <span key={i} className={`h-6 w-6 rounded-full ring-2 ring-white shadow ${c}`} />
        ))}
      </div>
      <p className="mt-4 text-[10px] font-semibold uppercase text-muted-foreground">Fontes</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {["Aa", "Aa", "Aa"].map((t, i) => (
          <div
            key={i}
            className={`grid place-items-center rounded-lg border py-2 text-lg font-extrabold ${
              i === 1 ? "border-accent bg-accent-soft text-accent" : "border-border text-primary"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <p className="mt-4 text-[10px] font-semibold uppercase text-muted-foreground">Elementos visuais</p>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {[ImageIcon, Layers, TypeIcon, Brush, Sparkles].map((Icon, i) => (
          <span key={i} className="grid h-9 place-items-center rounded-lg bg-secondary text-primary">
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SocialVisual = () => (
  <div className="relative mx-auto w-full max-w-[560px]">
    <div className="rounded-[18px] bg-white p-3 shadow-[0_40px_80px_-20px_hsl(222_90%_15%/0.35)] ring-1 ring-black/5">
      <div className="flex items-center justify-between rounded-t-lg bg-primary/95 px-3 py-2 text-white">
        <span className="text-xs font-bold">Lector</span>
        <span className="text-[10px] opacity-80">Social · Feed</span>
      </div>
      <div className="grid grid-cols-[120px_1fr] gap-3 p-3">
        <div className="space-y-2">
          {["Lia do RH", "Patrick", "Carla", "Serginho"].map((n, i) => (
            <div key={i} className="flex items-center gap-2 rounded-md bg-secondary p-1.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-[9px] font-bold text-white">
                {n[0]}
              </span>
              <span className="truncate text-[10px] font-semibold text-primary">{n}</span>
            </div>
          ))}
        </div>
        <div className="rounded-md border border-border p-2">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-accent" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-1/3 rounded bg-primary/60" />
              <div className="h-1.5 w-2/3 rounded bg-secondary" />
            </div>
          </div>
          <div className="mt-2 h-20 rounded bg-gradient-to-br from-primary-glow/40 to-accent/30" />
          <div className="mt-2 flex gap-2">
            <span className="text-[9px] text-muted-foreground">❤ 46</span>
            <span className="text-[9px] text-muted-foreground">💬 1</span>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -left-4 w-[140px] rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5 animate-float">
      <p className="text-[10px] font-bold text-primary">Comentários</p>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-3/4 rounded bg-secondary" />
        <div className="h-1.5 w-2/3 rounded bg-accent/70" />
      </div>
    </div>
  </div>
);

const DocumentosVisual = () => (
  <div className="relative mx-auto w-full max-w-[540px]">
    <div className="rounded-[20px] bg-white p-5 shadow-[0_40px_80px_-20px_hsl(222_90%_15%/0.35)] ring-1 ring-black/5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-white">
            <FolderKanban className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-primary">Gestão de Documentos</p>
            <p className="text-[10px] text-muted-foreground">Central corporativa</p>
          </div>
        </div>
        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-bold text-accent">
          128 arquivos
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-secondary/60 px-3 py-2">
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[11px] text-muted-foreground">Buscar documentos...</span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { icon: FileText, name: "Política Interna.pdf", tag: "RH" },
          { icon: FileText, name: "Manual Onboarding", tag: "Treino" },
          { icon: FileText, name: "Contrato Modelo", tag: "Jurídico" },
          { icon: FileText, name: "Relatório Anual", tag: "Diretoria" },
        ].map((f, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border border-border p-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary-soft text-primary">
              <f.icon className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-primary">{f.name}</p>
              <p className="text-[9px] text-muted-foreground">{f.tag}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: Lock, label: "Acesso" },
          { icon: Cloud, label: "Nuvem" },
          { icon: ShieldCheck, label: "LGPD" },
        ].map((b, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-secondary px-2 py-1.5">
            <b.icon className="h-3.5 w-3.5 text-primary" />
            <span className="text-[10px] font-semibold text-primary">{b.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute -right-4 -top-5 w-[160px] rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5 animate-float">
      <p className="text-[10px] font-bold text-primary">Upload</p>
      <div className="mt-2 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-accent text-white">
          <UploadCloud className="h-3.5 w-3.5" />
        </span>
        <div className="flex-1">
          <div className="h-1.5 rounded bg-secondary" />
          <div className="mt-1 h-1.5 w-3/4 rounded bg-accent" />
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Tools data ---------- */

const tools: Tool[] = [
  {
    id: "autoria",
    tag: "Autoria",
    icon: VideoIcon,
    title: (
      <>
        Crie, edite e compartilhe vídeos <span className="text-accent">que inspiram</span>
      </>
    ),
    desc: (
      <>
        Grave e edite vídeos de forma intuitiva com nosso{" "}
        <strong className="text-white">software exclusivo</strong>. Crie conteúdos profissionais
        com facilidade e destaque sua mensagem em qualquer lugar.
      </>
    ),
    bullets: [
      { icon: Camera, label: "Gravação de tela e câmera" },
      { icon: Scissors, label: "Edição rápida e completa" },
      { icon: UploadCloud, label: "Publicação em um clique" },
      { icon: Sparkles, label: "Alta qualidade HD" },
    ],
    visual: <AutoriaVisual />,
  },
  {
    id: "webconferencia",
    tag: "Webconferência",
    icon: MonitorPlay,
    title: (
      <>
        Webconferências que <span className="text-accent">conectam, engajam e transformam</span>
      </>
    ),
    desc: (
      <>
        Realize reuniões interativas com <strong className="text-white">recursos exclusivos</strong>{" "}
        para apresentar, interagir e colaborar em tempo real, mantendo sua equipe conectada e produtiva.
      </>
    ),
    bullets: [
      { icon: Users, label: "Salas virtuais personalizadas" },
      { icon: MessagesSquare, label: "Chat e enquetes em tempo real" },
      { icon: Share2, label: "Compartilhamento de tela" },
      { icon: HardDrive, label: "Gravação e armazenamento" },
    ],
    visual: <WebconVisual />,
  },
  {
    id: "personalizacao",
    tag: "Personalização",
    icon: Palette,
    title: (
      <>
        Personalização <span className="text-accent">com a identidade da sua empresa</span>
      </>
    ),
    desc: (
      <>
        Personalize a plataforma com o <strong className="text-white">logo, as cores, as fontes</strong>{" "}
        e os elementos visuais da sua marca. Mais identidade, mais conexão e uma experiência que é a cara da sua empresa.
      </>
    ),
    bullets: [
      { icon: Brush, label: "Logo e cores da marca" },
      { icon: TypeIcon, label: "Tipografia personalizada" },
      { icon: Layers, label: "Componentes visuais" },
      { icon: ImageIcon, label: "Banners e capas" },
    ],
    visual: <PersonalizacaoVisual />,
  },
  {
    id: "documentos",
    tag: "Gestão de Documentos",
    icon: FolderKanban,
    title: (
      <>
        Gerencie documentos com <span className="text-accent">segurança, organização e agilidade</span>
      </>
    ),
    desc: (
      <>
        Armazene, organize e compartilhe documentos internos com total{" "}
        <strong className="text-white">segurança e eficiência</strong>. Garanta acesso rápido às
        informações, reduza retrabalho e mantenha sua equipe sempre alinhada.
      </>
    ),
    bullets: [
      { icon: FolderKanban, label: "Organização de arquivos" },
      { icon: Lock, label: "Segurança e controle de acesso" },
      { icon: Search, label: "Busca rápida e inteligente" },
      { icon: Cloud, label: "Armazenamento centralizado" },
    ],
    visual: <DocumentosVisual />,
  },
  {
    id: "social",
    tag: "Social",
    icon: MessageSquareHeart,
    title: (
      <>
        Centralize comunicados, novidades e atualizações <span className="text-accent">em um só lugar</span>
      </>
    ),
    desc: (
      <>
        Facilitamos o acesso à informação e fortalecemos o{" "}
        <strong className="text-white">engajamento</strong> dos colaboradores em um ambiente
        privativo e seguro.
      </>
    ),
    bullets: [
      { icon: Megaphone, label: "Comunicados em destaque" },
      { icon: MessagesSquare, label: "Interação e comentários" },
      { icon: Users2, label: "Engajamento da equipe" },
      { icon: ShieldCheck, label: "Ambiente seguro e privado" },
    ],
    visual: <SocialVisual />,
  },
];

/* ---------- Lector Atom (átomo orbital de fundo) ---------- */

const LectorAtom = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute right-[-180px] top-1/2 h-[680px] w-[680px] opacity-90 will-change-transform"
      style={{ transform: "translateY(-50%) rotate(0deg)" }}
      aria-hidden
    >
      <svg viewBox="0 0 600 600" className="h-full w-full">
        <defs>
          <linearGradient id="atomOrange" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(22 95% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(22 95% 55%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(30 100% 62%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="atomBlue" x1="0" x2="1">
            <stop offset="0%" stopColor="hsl(222 90% 55%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(222 90% 55%)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(222 90% 38%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomOrange)" strokeWidth="3" fill="none" transform="rotate(35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomBlue)" strokeWidth="2.5" fill="none" transform="rotate(-35 300 300)" />
        <ellipse cx="300" cy="300" rx="260" ry="110" stroke="url(#atomOrange)" strokeWidth="1.5" fill="none" transform="rotate(90 300 300)" opacity="0.5" />
        <circle cx="560" cy="300" r="6" fill="hsl(22 95% 55%)" />
        <circle cx="40" cy="300" r="4" fill="hsl(222 90% 55%)" />
      </svg>
    </div>
  );
});
LectorAtom.displayName = "LectorAtom";

/* ---------- Section ---------- */

export const ToolsScroll = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const atomRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const totalSlides = tools.length + 1; // intro + tools
  // Reduced per-slide scroll length for a faster, more fluid feel
  const slideHeightVh = 65;

  useEffect(() => {
    let ticking = false;
    let lastIdx = -1;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;

      // Update atom rotation directly (no React re-render)
      if (atomRef.current) {
        atomRef.current.style.transform = `translateY(-50%) rotate(${p * 220}deg)`;
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${Math.max(4, p * 100)}%`;
      }

      const idx = Math.min(totalSlides - 1, Math.floor(p * totalSlides + 0.0001));
      if (idx !== lastIdx) {
        lastIdx = idx;
        setActiveIdx(idx);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [totalSlides]);

  return (
    <section
      id="ferramentas"
      ref={sectionRef}
      className="relative bg-[radial-gradient(ellipse_at_top,_hsl(222_70%_18%)_0%,_hsl(222_85%_10%)_55%,_hsl(222_90%_7%)_100%)] text-white"
      style={{ height: `calc(100vh + ${(totalSlides - 1) * slideHeightVh}vh)` }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        {/* Atom background — rolls with scroll (direct DOM updates) */}
        <LectorAtom ref={atomRef} />

        {/* Soft mesh */}
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, hsl(22 95% 55% / 0.18) 0%, transparent 45%), radial-gradient(circle at 85% 80%, hsl(222 90% 55% / 0.18) 0%, transparent 45%)",
          }}
          aria-hidden
        />

        {/* Vertical stepper removed */}

        {/* Slides container */}
        <div className="container relative z-10 pb-16">
          <div className="relative mx-auto min-h-[640px] max-w-6xl lg:min-h-[560px]">
            {/* Intro slide */}
            <div
              className="absolute inset-0 transition-all duration-500 ease-out"
              style={{
                opacity: activeIdx === 0 ? 1 : 0,
                transform: `translateY(${activeIdx === 0 ? 0 : -40}px)`,
                pointerEvents: activeIdx === 0 ? "auto" : "none",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                  Um único ambiente.{" "}
                  <span className="text-accent">Todas as ferramentas.</span>
                </h2>
                <span className="mt-6 block h-[3px] w-16 rounded-full bg-accent" />
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                  Tecnologia e experiência para impulsionar o desenvolvimento da sua equipe.
                </p>
                <div className="mt-12 flex flex-col items-center gap-2 text-white/50">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Role para explorar</span>
                  <span className="h-8 w-[2px] animate-pulse bg-gradient-to-b from-accent to-transparent" />
                </div>
              </div>
            </div>

            {tools.map((tool, i) => {
              const slideIdx = i + 1;
              const active = slideIdx === activeIdx;
              const offset = (slideIdx - activeIdx) * 40;
              return (
                <div
                  key={tool.id}
                  className="absolute inset-0 transition-all duration-500 ease-out"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: `translateY(${active ? 0 : offset}px)`,
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Text */}
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10 backdrop-blur">
                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-white shadow-glow-accent">
                          <tool.icon className="h-4 w-4" />
                        </span>
                        <span className="pr-2 text-sm font-semibold text-white">{tool.tag}</span>
                      </div>
                      <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                        {tool.title}
                      </h2>
                      <span className="mt-5 block h-[3px] w-14 rounded-full bg-accent" />
                      <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70">{tool.desc}</p>

                      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                        {tool.bullets.map(({ icon: Icon, label }) => (
                          <li key={label} className="flex flex-col items-start gap-2">
                            <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-accent ring-1 ring-white/10">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="text-[11px] font-medium leading-snug text-white/70">{label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className="relative">{tool.visual}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Discrete scroll progress indicator — pinned to bottom of sticky stage */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex max-w-xs flex-col items-center px-6 pb-4">
            <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {String(activeIdx + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")} ·{" "}
              {activeIdx === 0 ? "Introdução" : tools[activeIdx - 1].tag}
            </span>
          </div>
          <div className="h-[2px] w-full bg-white/5">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-accent to-accent-glow"
              style={{ width: "4%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
