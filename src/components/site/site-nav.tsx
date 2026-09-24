import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

import { Logo } from "./logo";
import { services } from "@/lib/services-content";

const pageLinks = [
  { label: "About", to: "/about" as const },
  { label: "Services", to: "/services" as const },
  { label: "Industries", to: "/industries" as const },
  { label: "Team", to: "/team" as const },
  { label: "Case studies", to: "/case-studies" as const },
  { label: "Blog", to: "/blog" as const },
];


const homeLinks = [{ label: "Process", hash: "method" }];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const homeHref = (hash: string) => (onHome ? `#${hash}` : `/#${hash}`);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:px-8">
        <Link to="/" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            to="/about"
            className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>

          <div className="group relative">
            <Link
              to="/services"
              className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-2xl border border-border bg-background p-2 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.45)]">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {s.nav}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            to="/industries"
            className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Industries
          </Link>

          <Link
            to="/team"
            className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Team
          </Link>

          <Link
            to="/case-studies"
            className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Case studies
          </Link>

          <Link
            to="/blog"
            className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>

          {homeLinks.map((l) => (
            <a
              key={l.hash}
              href={homeHref(l.hash)}
              className="link-draw text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}


          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-g-blue px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-16px_var(--g-blue)]"
          >
            Start a project
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex size-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-border lg:hidden"
        >
          <span
            className={`h-px w-4 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          {pageLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block border-b border-border py-3 font-display text-2xl font-extrabold"
            >
              {l.label}
            </Link>
          ))}
          <ul className="border-b border-border py-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="block py-2 text-sm text-muted-foreground"
                >
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
          {homeLinks.map((l) => (
            <a
              key={l.hash}
              href={homeHref(l.hash)}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-display text-2xl font-extrabold"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="mt-5 block rounded-full bg-g-blue py-3.5 text-center text-sm font-semibold text-white"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
