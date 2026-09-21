import { Reveal } from "./reveal";

const industries = [
  { name: "Restaurants", note: "Multi-outlet F&B" },
  { name: "Automotive", note: "Dealers & service" },
  { name: "Hospitality", note: "Venues & events" },
  { name: "E-commerce", note: "D2C & marketplace" },
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

      <ul className="mt-14 flex flex-wrap items-baseline gap-x-3 gap-y-4 sm:gap-x-5">
        {industries.map((it, i) => (
          <Reveal as="li" key={it.name} delay={(i % 4) * 50} className="group flex items-baseline gap-3">
            <span className="font-display text-[1.75rem] font-extrabold tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-[2.4rem]">
              {it.name}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:inline">{it.note}</span>
            {i < industries.length - 1 && (
              <span className="font-display text-2xl font-light text-border sm:text-3xl">/</span>
            )}
          </Reveal>
        ))}
      </ul>

      <Reveal delay={60} className="mt-16 border-t border-border pt-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
          <p className="tag shrink-0">The stack we run on</p>
          <ul className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-g-blue/50 hover:text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
