import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Clientes", href: "#clientes" },
  { label: "Recursos", href: "#recursos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#cta" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // esconde ao rolar para baixo, mostra ao rolar para cima
      if (y > 120 && y > lastY + 4) setHidden(true);
      else if (y < lastY - 4 || y < 80) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        scrolled
          ? "backdrop-blur-xl bg-[hsl(222_85%_8%/0.6)] border-b border-white/5"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-14 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-accent-gradient">
            <span className="font-display text-xs font-extrabold text-white">L</span>
          </div>
          <span className="font-display text-base font-semibold tracking-tight text-white">
            Lector <span className="text-accent font-bold">Live</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-3 py-2 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
            >
              {l.label}
              <span className="pointer-events-none absolute bottom-1 left-3 right-3 h-[2px] origin-center scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <Button variant="hero" size="sm" asChild className="h-9 px-4 text-[13px]">
          <a href="#cta">
            Agendar demo <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
};
