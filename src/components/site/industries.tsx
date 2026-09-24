import { Reveal } from "./reveal";

const industries = [
  { name: "Restaurants", note: "Multi-outlet F&B" },
  { name: "Automotive", note: "Dealers & service" },
  { name: "Hospitality", note: "Venues & events" },
  { name: "E-commerce", note: "D2C & marketplace" },
];

const industriesRow2 = [
  { name: "Healthcare", note: "Clinics & diagnostics" },
  { name: "Real estate", note: "Developers & brokers" },
  { name: "Education", note: "Coaching & institutes" },
  { name: "Startups", note: "Pre-seed to Series A" },
];

const tools = [
  "Google Ads",
  "GA4",
  "Meta Business",
  "Search Console",
  "Ahrefs",
  "Semrush",
  "Figma",
  "WordPress",
  "Looker Studio",
  "Mailchimp",
  "Shopify",
  "Canva",
];

function IndustryRow({
  items,
  reverse = false,
}: {
  items: { name: string; note: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-row relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} gap-4 sm:gap-6`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-baseline gap-4 pr-4 sm:gap-6 sm:pr-6">
            {items.map((it) => (
              <span key={it.name + dup} className="group/item flex shrink-0 items-baseline gap-3">
                <span className="font-display text-[1.75rem] font-extrabold tracking-tight transition-colors duration-300 group-hover/item:text-g-blue sm:text-[2.4rem]">
                  {it.name}
                </span>
                <span className="hidden text-xs text-muted-foreground sm:inline">{it.note}</span>
                <span className="font-display text-2xl font-light text-border sm:text-3xl">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <h2 className="max-w-xl text-[2.4rem] leading-[1.02] sm:text-5xl">
            We serve businesses across the globe — and across industries.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="hand max-w-[230px] text-base">
            Different buying cycles, same discipline: measure, then scale.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-14 flex flex-col gap-4 sm:gap-5">
        <IndustryRow items={industries} />
        <IndustryRow items={industriesRow2} reverse />
      </Reveal>

      <Reveal delay={60} className="mt-16 border-t border-border pt-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
          <p className="tag shrink-0">The stack we run on</p>
          <div className="marquee-row relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
            <div className="marquee-track gap-3">
              {[0, 1].map((dup) => (
                <div key={dup} className="flex shrink-0 items-center gap-3 pr-3">
                  {tools.map((t) => (
                    <span
                      key={t + dup}
                      className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-g-blue/50 hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
