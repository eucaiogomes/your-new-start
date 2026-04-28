import { Linkedin, Instagram, Youtube, Facebook, Mail } from "lucide-react";

const cols = [
  { title: "A Lector", links: ["Sobre a Lector", "Nossos métodos", "Trabalhe conosco"] },
  { title: "Soluções", links: ["Plataforma Lector Live", "Serviços", "Cases", "Blog"] },
  { title: "Clientes", links: ["Clientes", "Seja parceiro"] },
  { title: "Contato", links: ["Contato", "Central de ajuda"] },
];

export const Footer = () => (
  <footer id="contato" className="bg-primary text-primary-foreground">
    {/* Newsletter strip */}
    <div className="border-b border-primary-foreground/10 bg-primary">
      <div className="container flex flex-wrap items-center justify-center gap-4 py-5 md:flex-nowrap md:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10">
            <Mail className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold">Cadastre-se em nossa Newsletter</span>
        </div>
        <form className="flex w-full max-w-xl gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="h-11 flex-1 rounded-lg border border-primary-foreground/20 bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button className="h-11 rounded-lg bg-accent-gradient px-6 text-sm font-semibold text-white shadow-glow-accent transition-transform hover:-translate-y-0.5">
            Enviar
          </button>
        </form>
      </div>
    </div>

    <div className="container py-14">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,_1fr)]">
        <div>
          <a href="#" className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient">
              <span className="font-display text-lg font-extrabold text-white">L</span>
            </div>
            <div className="leading-none">
              <div className="font-display text-xl font-extrabold tracking-tight">Lector</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">Live</div>
            </div>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Única plataforma de Educação Corporativa. TUDO EM UMA só solução.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[Linkedin, Youtube, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-md border border-primary-foreground/15 transition-all hover:border-accent hover:bg-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-bold text-white">{c.title}</h4>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/75 transition-colors hover:text-accent">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/60">
        <div>© 2026 Lector — Todos os direitos reservados.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);
