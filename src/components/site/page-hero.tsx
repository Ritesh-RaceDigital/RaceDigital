import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  accent,
  intro,
  bullets,
  aside,
  image,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  bullets?: string[];
  aside?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <span className="pointer-events-none absolute -right-40 -top-32 size-[440px] rounded-full bg-g-yellow-soft blur-3xl" />
      <span className="pointer-events-none absolute -left-44 top-56 size-[360px] rounded-full bg-g-blue-soft blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-20">
        <p className="letter-in tag" style={{ animationDelay: "40ms" }}>
          {eyebrow}
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <h1 className="display-lg max-w-[17ch]">
              {title} {accent && <span className="text-muted-foreground">{accent}</span>}
            </h1>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="pill group">
                Start a project
                <span className="pill-chip group-hover:translate-x-0.5">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </Link>
              <a href="tel:+916353663006" className="pill group border-transparent bg-secondary">
                Call +91 635 366 3006
                <span className="pill-chip bg-foreground text-background group-hover:translate-x-0.5">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </a>
            </div>
          </div>

          <Reveal delay={80}>
            <p className="max-w-md text-[1.05rem] leading-relaxed text-muted-foreground">{intro}</p>
            {bullets && (
              <ul className="mt-7 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-g-blue" />
                    <span className="text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {aside && <p className="hand mt-7 max-w-[260px] text-base">{aside}</p>}
          </Reveal>
        </div>

        {image && (
          <Reveal delay={120} className="mt-16">
            <img
              src={image}
              alt=""
              aria-hidden
              className="h-[16rem] w-full rounded-[2rem] object-cover md:h-[22rem]"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
