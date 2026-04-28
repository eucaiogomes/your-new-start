import { createRouter, useRouter, Link } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted p-6">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-3xl font-bold">Something went wrong</h1>
        <p className="mb-4 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

function DefaultNotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Page not found</p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultErrorComponent: DefaultErrorComponent,
    defaultNotFoundComponent: DefaultNotFoundComponent,
  });
}
