import { ChevronRight } from "lucide-react";

import { Reveal } from "./reveal";

const groups = [
  {
    label: "Get found",
    aside: "Organic visibility that compounds.",
    items: [
      {
        title: "SEO",
        note: "Get found online with expert SEO solutions. Complement it with engaging, user-friendly web designs optimized for all devices.",
      },
      {
        title: "Link Building",
        note: "Strengthen your online presence with high-quality backlinks. Our tailored link-building strategies improve search rankings, boost traffic, and enhance your website's authority.",
      },
    ],
  },
  {
    label: "Get bought",
    aside: "Paid media, measured in ROI.",
    items: [
      {
        title: "PPC Advertising",
        note: "Maximize your ROI with targeted PPC campaigns. We create data-driven strategies to boost visibility, drive traffic, and deliver measurable results for your business.",
      },
      {
        title: "Paid Social Ads",
        note: "Reach your audience where they spend the most time. We craft targeted, engaging paid social ad campaigns that drive brand awareness, traffic, and measurable results.",
      },
    ],
  },
  {
    label: "Build it",
    aside: "The assets everything else runs on.",
    items: [
      {
        title: "Content Marketing",
        note: "Engage your audience with impactful content marketing strategies. We create, optimize, and distribute high-quality content that builds brand authority, drives traffic, and boosts conversions.",
      },
      {
        title: "Web Design",
        note: "Create stunning, user-friendly websites tailored to your brand. Our web design services focus on responsive layouts, seamless navigation, and an exceptional user experience.",
      },
    ],
  },
];

export function Services() {
  let n = 0;

  return (
    <section id="services" className="bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <p className="tag">what we do</p>
            <h2 className="display-lg mt-7 max-w-[18ch]">
              Solutions that drive results.{" "}
              <span className="text-muted-foreground">Six disciplines, one team.</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="hand max-w-[250px] text-base">
              Every project is tailored to deliver exceptional ROI — not a fixed package.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-16 md:mt-24 md:space-y-20">
          {groups.map((g, gi) => (
            <div key={g.label} className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-14">
              <Reveal className="md:sticky md:top-28 md:self-start">
                <h3 className="font-display text-[1.6rem] font-normal tracking-tight">
                  <span className="text-muted-foreground/60">{String(gi + 1)}&nbsp;/</span> {g.label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.aside}</p>
              </Reveal>

              <ul>
                {g.items.map((s) => {
                  n += 1;
                  return (
                    <Reveal
                      as="li"
                      key={s.title}
                      delay={30}
                      className="group hairline py-8 first:border-t-0 md:first:border-t"
                    >
                      <a
                        href="#talk"
                        className="grid items-start gap-x-10 gap-y-3 lg:grid-cols-[3rem_minmax(0,0.85fr)_minmax(0,1.15fr)_auto]"
                      >
                        <span className="mt-2 font-display text-xs font-medium tabular-nums tracking-[0.2em] text-muted-foreground">
                          {String(n).padStart(2, "0")}
                        </span>
                        <span className="block font-display text-[1.55rem] leading-tight tracking-tight transition-transform duration-500 group-hover:translate-x-1.5 sm:text-[2rem]">
                          {s.title}
                        </span>
                        <span className="block border-l border-transparent text-[0.98rem] leading-relaxed text-muted-foreground transition-colors duration-500 lg:pl-8 lg:group-hover:border-g-blue">
                          {s.note}
                        </span>
                        <span className="pill-chip mt-1 bg-secondary text-foreground transition-all duration-500 group-hover:bg-g-blue group-hover:text-background">
                          <ChevronRight className="size-4" strokeWidth={2.2} />
                        </span>
                      </a>
                    </Reveal>
                  );
                })}
              </ul>

            </div>
          ))}
        </div>

        <Reveal
          delay={60}
          className="mt-20 flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-md text-[1.05rem] leading-relaxed">
            Not sure where to start? Tell us the goal and we&apos;ll recommend the two channels
            worth funding first.
          </p>
          <a href="#talk" className="pill group shrink-0">
            Get a quote
            <span className="pill-chip group-hover:translate-x-0.5">
              <ChevronRight className="size-4" strokeWidth={2.4} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
