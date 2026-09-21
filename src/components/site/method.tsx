import { Reveal } from "./reveal";

const steps = [
  {
    day: "Day 0",
    title: "Discovery call",
    body: "Thirty minutes on what you sell, who buys it, and what you've already tried. No deck, no pitch.",
    dot: "bg-g-blue",
  },
  {
    day: "Day 1–3",
    title: "Research & teardown",
    body: "Half a week inside your analytics, ad accounts, competitors and the last six months of sales calls.",
    dot: "bg-g-red",
  },
  {
    day: "Day 4",
    title: "One page of strategy",
    body: "What we're betting on, what we're stopping, and what a good month looks like in rupees. One page. Always.",
    dot: "bg-g-yellow",
  },
  {
    day: "Day 5–12",
    title: "Design & build",
    body: "Tracking first, then creative, then pages. Nothing ships until we can attribute what it did.",
    dot: "bg-g-green",
  },
  {
    day: "Day 14",
    title: "Launch",
    body: "Live, with a shared dashboard you don't need us on a call to interpret.",
    dot: "bg-g-blue",
  },
  {
    day: "Every Monday",
    title: "Optimisation",
    body: "Reviews with the people actually running the account. You'll hear what changed before you ask.",
    dot: "bg-g-red",
  },
];

const deliverables = [
  { label: "Strategy doc", day: "Day 4", color: "bg-g-yellow-soft border-g-yellow/40" },
  { label: "Tracking plan", day: "Day 5", color: "bg-g-blue-soft border-g-blue/40" },
  { label: "Launch dashboard", day: "Day 14", color: "bg-g-green-soft border-g-green/40" },
  { label: "Weekly review", day: "Every Monday", color: "bg-g-red-soft border-g-red/40" },
];

export function Method() {
  return (
    <section id="method" className="border-y border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="tag">How it goes</p>
          <h2 className="mt-5 text-[2.4rem] leading-[1.02] sm:text-5xl">
            Most agencies sell you a process. We&apos;d rather just show you the calendar.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
          {/* Left: timeline */}
          <div>
            <ol className="relative border-l border-dashed border-foreground/20 pl-8 sm:pl-12">
              {steps.map((s) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={40}
                  className="group relative pb-11 last:pb-0"
                >
                  <span
                    className={`absolute -left-[2.09rem] top-2 size-2.5 rounded-full ring-4 ring-paper-deep sm:-left-[3.34rem] ${s.dot}`}
                  />
                  <div className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-8">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground sm:pt-2">
                      {s.day}
                    </span>
                    <div>
                      <h3 className="text-2xl transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={80}>
              <p className="hand mt-6 max-w-sm pl-8 text-base sm:pl-12">
                Weeks three and four are usually where the interesting numbers show up.
              </p>
            </Reveal>
          </div>

          {/* Right: process board */}
          <Reveal delay={120} className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative rounded-2xl border border-border bg-paper p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="tag">Sprint board</span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    14 days
                  </span>
                </div>

                {/* Mini calendar strip */}
                <div className="mt-6 flex justify-between gap-1">
                  {["W1", "W2", "W3", "W4"].map((w, i) => (
                    <div
                      key={w}
                      className={`flex h-16 flex-1 flex-col items-center justify-center rounded-lg border text-xs font-bold uppercase tracking-wider ${
                        i < 2
                          ? "border-g-blue/30 bg-g-blue-soft text-g-blue"
                          : "border-border bg-paper-deep text-muted-foreground"
                      }`}
                    >
                      {w}
                    </div>
                  ))}
                </div>

                {/* Deliverable cards */}
                <div className="mt-5 space-y-3">
                  {deliverables.map((d, i) => (
                    <div
                      key={d.label}
                      className={`flex items-center justify-between rounded-xl border px-4 py-3 ${d.color}`}
                      style={{ transform: `translateX(${i % 2 === 0 ? 0 : 12}px)` }}
                    >
                      <span className="font-display text-sm font-semibold text-foreground">
                        {d.label}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {d.day}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom note */}
                <div className="mt-5 border-t border-dashed border-border pt-4">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Every deliverable is shared in a live folder. No locked files, no surprise handover day.
                  </p>
                </div>

                {/* Decorative accent dots */}
                <div className="pointer-events-none absolute -right-3 -top-3 flex gap-1.5">
                  <span className="size-2 rounded-full bg-g-red" />
                  <span className="size-2 rounded-full bg-g-yellow" />
                  <span className="size-2 rounded-full bg-g-green" />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="mt-5 rounded-2xl border border-border bg-paper p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Average time to first result
                </p>
                <p className="mt-1 font-display text-4xl font-semibold text-foreground">
                  18 days
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  From kickoff to the first meaningful signal in your analytics.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
