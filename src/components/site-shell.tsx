import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/reservations", label: "Reservations" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="font-display text-xl tracking-tight text-primary">
            Solstice
          </Link>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            07 — 22
          </span>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl text-primary">Solstice</p>
            <p className="mt-2 text-sm text-muted-foreground">
              14 Rook Lane · Open daily 07:00 — 22:00 · (212) 555-0148
            </p>
          </div>
          <Link
            to="/reservations"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
          >
            Reserve a table <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
