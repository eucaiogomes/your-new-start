import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CtaForm = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada!", { description: "Nosso time entra em contato em breve." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="cta" className="py-16">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-accent-gradient p-8 text-white shadow-glow-accent md:p-12">
          {/* Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="dots-cta" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-cta)" />
            </svg>
          </div>

          <div className="relative grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="reveal">
              <h2 className="font-display text-3xl font-extrabold leading-tight md:text-[2rem] text-balance">
                Garanta o fluxo de informações na sua empresa!
              </h2>
              <p className="mt-4 max-w-sm text-sm text-white/90">
                As ferramentas Lector são a solução ideal para você revolucionar a comunicação e a gestão do conhecimento dentro da organização.
              </p>
              <p className="mt-4 text-sm font-semibold text-white">
                Converse agora com um consultor e saiba mais!
              </p>
            </div>

            <form onSubmit={onSubmit} className="grid gap-3 reveal">
              <div className="grid gap-3 sm:grid-cols-2">
                <input required placeholder="Nome" className="h-12 rounded-lg border border-white/40 bg-white/95 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white" />
                <input required type="email" placeholder="E-mail" className="h-12 rounded-lg border border-white/40 bg-white/95 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white" />
                <input placeholder="Telefone" className="h-12 rounded-lg border border-white/40 bg-white/95 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white" />
                <input placeholder="Empresa" className="h-12 rounded-lg border border-white/40 bg-white/95 px-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white" />
              </div>
              <textarea placeholder="Mensagem" rows={3} className="rounded-lg border border-white/40 bg-white/95 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white resize-none" />
              <div className="flex justify-end">
                <Button type="submit" variant="brand" size="lg">
                  Falar com Consultor <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
