import { ChevronRight } from "lucide-react";

import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section className="px-3 py-16 md:px-5 md:py-24">
      <Reveal className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-secondary px-7 py-20 sm:px-16 sm:py-28 md:rounded-[3rem]">
        <span className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-g-green-soft blur-3xl" />
        <span className="pointer-events-none absolute -bottom-28 left-0 size-72 rounded-full bg-g-blue-soft blur-3xl" />

        <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left: copy */}
          <div>
            <p className="tag">free website &amp; ads audit</p>
            <h2 className="display-lg mt-8 max-w-[16ch]">
              Ready to see where the money is{" "}
              <span className="text-muted-foreground">quietly leaking?</span>
            </h2>
            <p className="mt-8 max-w-lg leading-relaxed text-muted-foreground">
              Half a day inside your accounts, a one-page plan, and a straight answer on whether you
              need us at all. Fifteen slots a month — that's genuinely all we can do properly.
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-4">
              <a href="#talk" className="pill group bg-card">
                Book a free consultation
                <span className="pill-chip group-hover:translate-x-0.5">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </a>
              <a href="#work" className="link-draw px-2 py-3 text-sm font-medium text-muted-foreground">
                View portfolio
              </a>
            </div>
          </div>

          {/* Right: audit report composition */}
          <div className="relative flex min-h-[340px] items-center justify-center sm:min-h-[400px] lg:min-h-[440px]">
            {/* Orbiting dashed rings */}
            <span className="pointer-events-none absolute aspect-square w-[78%] rounded-full border border-dashed border-foreground/8" />
            <span className="pointer-events-none absolute aspect-square w-[110%] rounded-full border border-foreground/[0.04]" />

            {/* Central report card */}
            <div className="relative z-10 w-56 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/5 sm:w-64 rotate-[-1.5deg]">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-g-red" />
                <span className="size-2 rounded-full bg-g-yellow" />
                <span className="size-2 rounded-full bg-g-green" />
                <span className="size-2 rounded-full bg-g-blue" />
              </div>
              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Audit report
              </p>
              <p className="mt-1 font-display text-2xl font-medium sm:text-3xl">12 findings</p>
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 rounded-full bg-muted">
                    <div className="h-1.5 w-[72%] rounded-full bg-g-red" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">Spend</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 rounded-full bg-muted">
                    <div className="h-1.5 w-[45%] rounded-full bg-g-yellow" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">Tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 flex-1 rounded-full bg-muted">
                    <div className="h-1.5 w-[88%] rounded-full bg-g-green" />
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground">Keywords</span>
                </div>
              </div>
            </div>

            {/* Floating finding cards */}
            <div
              className="absolute right-0 top-2 z-20 w-44 rounded-xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:w-48 rotate-[2.5deg] floaty"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Wasted spend
              </p>
              <p className="mt-1 font-display text-2xl font-medium text-g-red">₹2.4L/mo</p>
              <div className="mt-3 flex gap-1">
                <span className="h-1.5 w-5 rounded-full bg-g-red/30" />
                <span className="h-1.5 w-8 rounded-full bg-g-red" />
                <span className="h-1.5 w-3 rounded-full bg-g-red/30" />
              </div>
            </div>

            <div
              className="absolute -left-2 bottom-10 z-20 w-44 rounded-xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:w-48 rotate-[-3.5deg] floaty"
              style={{ animationDelay: "1.8s" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Broken events
              </p>
              <p className="mt-1 font-display text-2xl font-medium">7</p>
              <p className="mt-1 text-xs text-muted-foreground">conversion pixels misfiring</p>
            </div>

            <div
              className="absolute right-2 bottom-0 z-20 w-40 rounded-xl border border-border bg-card p-4 shadow-lg shadow-foreground/5 sm:w-44 rotate-[1.5deg] floaty"
              style={{ animationDelay: "3.2s" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Missed keywords
              </p>
              <p className="mt-1 font-display text-2xl font-medium text-g-blue">34</p>
              <div className="mt-2 flex -space-x-1.5">
                {["A", "B", "C"].map((letter) => (
                  <span
                    key={letter}
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-g-blue/20 bg-g-blue-soft text-[9px] font-semibold text-g-blue"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Small decorative dots */}
            <span className="pointer-events-none absolute left-[12%] top-[18%] size-2 rounded-full bg-g-yellow" />
            <span className="pointer-events-none absolute right-[14%] top-[60%] size-1.5 rounded-full bg-g-green" />
            <span className="pointer-events-none absolute bottom-[22%] left-[20%] size-1.5 rounded-full bg-g-blue" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
