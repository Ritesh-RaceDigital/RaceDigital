import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { PageShell } from "./page-shell";
import { PageHero } from "./page-hero";
import { FaqList } from "./faq-list";
import { Reveal } from "./reveal";
import { Ticker } from "./ticker";
import type { ServiceContent } from "@/lib/services-content";
import { services } from "@/lib/services-content";

export function ServicePage({ service }: { service: ServiceContent }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <PageShell>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        accent={service.accent}
        intro={service.intro}
        bullets={service.bullets}
        aside={service.aside}
      />

      <Ticker />

      {/* Lead narrative */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="tag">The approach</p>
            <h2 className="mt-4 max-w-[14ch] text-[2.2rem] leading-[1.04] sm:text-[2.8rem]">
              {service.lead.heading}
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-6 lg:pt-14">
            {service.lead.body.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <Link to="/contact" className="pill group mt-2 inline-flex">
              Get a free quote
              <span className="pill-chip group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Offerings — editorial numbered ledger */}
      <section className="border-y border-border bg-paper-deep">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <Reveal>
              <p className="tag">Scope of work</p>
              <h2 className="mt-4 max-w-xl text-[2.2rem] leading-[1.04] sm:text-5xl">
                {service.offeringsHeading}
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="hand max-w-[240px] text-base">{service.offeringsAside}</p>
            </Reveal>
          </div>

          <div className="mt-14">
            {service.offerings.map((o, i) => (
              <Reveal key={o.title} delay={(i % 4) * 60}>
                <div className="group grid gap-3 border-t border-border py-7 last:border-b md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.15fr)] md:items-baseline md:gap-8">
                  <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-2xl">
                    {o.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{o.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag">Why us</p>
            <h2 className="mt-4 max-w-[13ch] text-[2.1rem] leading-[1.04] sm:text-[2.6rem]">
              {service.reasonsHeading}
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {service.reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <span className="block h-px w-10 bg-g-blue" />
                <h3 className="mt-5 text-lg font-bold tracking-tight">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqList
        items={service.faqs}
        heading="Questions, answered plainly."
        note={service.faqNote}
      />

      {/* Other services */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="tag">Keep exploring</p>
        </Reveal>
        <ul className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-4 sm:gap-x-6">
          {others.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 4) * 50} className="flex items-baseline gap-4">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="font-display text-[1.6rem] font-extrabold tracking-tight transition-colors duration-300 hover:text-g-blue sm:text-[2.2rem]"
              >
                {s.nav}
              </Link>
              {i < others.length - 1 && (
                <span className="font-display text-2xl font-light text-border">/</span>
              )}
            </Reveal>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-paper-deep">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <Reveal>
            <h2 className="max-w-[16ch] text-[2rem] leading-[1.05] sm:text-[2.6rem]">
              Tell us what growth should look like this year.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link to="/contact" className="pill group">
              Start a project
              <span className="pill-chip group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
