import { ChevronRight } from "lucide-react";

import industrial from "@/assets/work-industrial.webp";
import ads from "@/assets/work-ads.webp";
import brand from "@/assets/work-brand.webp";
import { Reveal } from "./reveal";

const cases = [
  {
    client: "TOYOTA",
    tag: "SEO & content",
    year: "2025",
    image: industrial,
    alt: "Technician servicing a car engine in a modern automotive workshop",
    story:
      "Strong brand demand, weak organic coverage. We fixed the technical foundation, built model-level content and linked it the way buyers actually search.",
    metrics: [
      { k: "Monthly website users", v: "+40%" },
      { k: "Organic pages ranking", v: "3.2×" },
    ],
  },
  {
    client: "NAAN KABOB",
    tag: "PPC & paid social",
    year: "2025",
    image: ads,
    alt: "Guest enjoying a dish at a restaurant table",
    story:
      "Broad delivery keywords were burning budget. We rebuilt the account around high-intent local searches and wrote ad copy per outlet.",
    metrics: [
      { k: "Cost per click", v: "−60%" },
      { k: "Order volume", v: "Up" },
    ],
  },
  {
    client: "The Cupule Wedding Venue",
    tag: "Web design & local SEO",
    year: "2024",
    image: brand,
    alt: "Graphic designer's desk with design app icons and a creative playbook",
    story:
      "A venue nobody could find online. Search-led content, local SEO and a cleaner enquiry journey turned browsing into booked site visits.",
    metrics: [
      { k: "Website traffic", v: "+190%" },
      { k: "Conversions", v: "+30%" },
    ],
  },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
      <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="tag">selected work</p>
          <h2 className="display-lg mt-7 max-w-[18ch]">
            Three accounts.{" "}
            <span className="text-muted-foreground">Three entirely different problems.</span>
          </h2>
        </div>
        <p className="tag lg:pb-3">2024 — 2025</p>
      </Reveal>

      <div className="mt-16 md:mt-20">
        {cases.map((c, i) => (
          <Reveal
            key={c.client}
            as="article"
            delay={40}
            className="group hairline grid gap-8 py-12 md:grid-cols-12 md:gap-10 md:py-16"
          >
            <div className="md:col-span-2">
              <p className="font-display text-xs font-medium tabular-nums tracking-[0.2em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {c.year}
              </p>
            </div>

            <div className="md:col-span-5">
              <p className="bracket">[ {c.tag} ]</p>
              <h3 className="mt-4 font-display text-[1.9rem] leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-[2.3rem]">
                {c.client}
              </h3>
              <p className="mt-5 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
                {c.story}
              </p>

              <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-5">
                {c.metrics.map((m) => (
                  <div key={m.k}>
                    <dd className="font-display text-[1.85rem] font-normal tracking-tight">
                      {m.v}
                    </dd>
                    <dt className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                      {m.k}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="md:col-span-5">
              <div className="overflow-hidden rounded-sm bg-paper-deep">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80} className="mt-14">
        <a href="#talk" className="pill group">
          Ask for the full case files
          <span className="pill-chip group-hover:translate-x-0.5">
            <ChevronRight className="size-4" strokeWidth={2.4} />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
