import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import "../index.css";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Lector Live — Plataforma de Educação Corporativa" },
      {
        name: "description",
        content:
          "Lector Live é a plataforma completa de Educação Corporativa: LMS, eventos ao vivo, conteúdos autorais e gestão de talentos.",
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => (
    <div style={{ padding: 32 }}>
      <h1>404</h1>
    </div>
  ),
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </QueryClientProvider>
        <Scripts />
      </body>
    </html>
  );
}

export default function RootComponent() {
  return <Outlet />;
}
