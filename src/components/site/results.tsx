import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { Reveal } from "./reveal";

const cases = [
  {
    client: "NAAN KABOB",
    sector: "Restaurant · Multi-outlet",
    problem:
      "Paid search was buying broad food-delivery terms, so cost per click kept climbing while orders stayed flat.",
    strategy:
      "Rebuilt the campaign around high-intent local queries, tightened match types and rewrote ad copy per outlet.",
    result: "−60%",
    resultLabel: "cost per click",
    sub: "Cheaper CPC with restructured campaigns",
    accent: "text-g-blue",
  },
  {
    client: "TOYOTA",
    sector: "Automotive · Dealer network",
    problem:
      "A large site with strong brand demand, but thin organic coverage of model and service searches.",
    strategy:
      "Technical clean-up, model-level content and internal linking mapped to how buyers actually search.",
    result: "+40%",
    resultLabel: "monthly website users",
    sub: "Sustained month-on-month growth",
    accent: "text-g-red",
  },
  {
    client: "The Cupule Wedding Venue",
    sector: "Hospitality · Events",
    problem:
      "A beautiful venue nobody could find — enquiries depended entirely on word of mouth and listing sites.",
    strategy:
      "Search-led content, local SEO and a conversion pass on the enquiry journey across every landing page.",
    result: "+190%",
    resultLabel: "website traffic",
    sub: "Conversions up 30% alongside it",
    accent: "text-g-green",
  },
];

export function Results() {
  return (
    <section id="results" className="border-y border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="tag">case studies</p>
            <h2 className="display-lg mt-7 max-w-[20ch]">
              Problem, strategy, number.{" "}
              <span className="text-muted-foreground">In that order.</span>
            </h2>
          </div>
          <p className="hand max-w-[230px] text-base lg:pb-2">
            Experience the tangible results of our digital marketing efforts.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20">
          {/* column headers — desktop only */}
          <div className="hidden grid-cols-12 gap-10 pb-4 lg:grid">
            <p className="tag col-span-3">client</p>
            <p className="tag col-span-3">the problem</p>
            <p className="tag col-span-3">what we did</p>
            <p className="tag col-span-3 text-right">the number</p>
          </div>

          {cases.map((c) => (
            <Reveal
              key={c.client}
              as="article"
              delay={40}
              className="hairline grid gap-6 py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-3">
                <h3 className="font-display text-[1.45rem] leading-tight tracking-tight">
                  {c.client}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {c.sector}
                </p>
              </div>

              <p className="text-[0.95rem] leading-relaxed text-muted-foreground lg:col-span-3">
                <span className="tag mb-2 block lg:hidden">the problem</span>
                {c.problem}
              </p>

              <p className="text-[0.95rem] leading-relaxed text-muted-foreground lg:col-span-3">
                <span className="tag mb-2 block lg:hidden">what we did</span>
                {c.strategy}
              </p>

              <div className="lg:col-span-3 lg:text-right">
                <p className={`font-display text-[2.6rem] leading-none tracking-tight ${c.accent}`}>
                  {c.result}
                </p>
                <p className="mt-2 text-[0.95rem]">{c.resultLabel}</p>
                <p className="mt-1.5 text-xs text-muted-foreground">{c.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-12">
          <Link to="/case-studies" className="pill group">
            Read the full case studies
            <span className="pill-chip group-hover:translate-x-0.5">
              <ChevronRight className="size-4" strokeWidth={2.4} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
