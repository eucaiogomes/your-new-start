import { Play, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";

const posts = [
  { tag: "Gestão do Conhecimento", tagColor: "bg-primary", title: "Como a educação corporativa pode transformar resultados", img: b1 },
  { tag: "Treinamento", tagColor: "bg-primary", title: "Tendências de aprendizagem para os próximos anos", img: b2 },
  { tag: "Comunicação", tagColor: "bg-primary", title: "Estratégias para comunicar com impacto na empresa", img: b3 },
];

export const Blog = () => (
  <section id="blog" className="py-16">
    <div className="container">
      <div className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:gap-10">
        <div className="reveal">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-[1.75rem] leading-tight">
            Fique atualizado
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            Informação para alimentar o seu conhecimento.
          </p>
          <Button variant="soft" size="default" className="mt-5" asChild>
            <a href="#">Ver todos os posts</a>
          </Button>
        </div>

        <div className="relative">
          <div className="grid gap-5 md:grid-cols-3">
            {posts.map((p, i) => (
              <a key={p.title} href="#" className="group reveal flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-card" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className={`absolute left-3 top-3 rounded-md ${p.tagColor} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
                    {p.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-sm font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-1.5 pt-4 text-xs font-semibold text-primary">
                    <Play className="h-3 w-3 fill-accent text-accent" /> Leia mais
                  </div>
                </div>
              </a>
            ))}
          </div>
          <button aria-label="Próximo" className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-white shadow-card transition-all hover:border-primary hover:text-primary lg:grid">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </section>
);
