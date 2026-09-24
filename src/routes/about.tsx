import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { Ticker } from "@/components/site/ticker";
import { Awards } from "@/components/site/awards";
import { Voices } from "@/components/site/voices";
import studio from "@/assets/studio.webp";

const title = "About Race Digital — Data-Driven Marketing Agency, Ahmedabad";
const description =
  "Race Digital is a data-driven digital marketing agency in Makarba, Ahmedabad. Meet the team behind SEO, PPC, paid social, content and web design.";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageHead({ title, description, path: "/about" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { to: 50, suffix: "+", label: "Satisfied clients" },
  { to: 2, suffix: "+", label: "Years in business" },
  { to: 6, label: "Core service lines" },
  { to: 190, suffix: "%", label: "Best traffic lift delivered" },
];

const beliefs = [
  {
    title: "Data before opinion",
    note: "Every recommendation traces back to a number — search demand, cost per lead, conversion rate. Taste matters, but evidence decides.",
  },
  {
    title: "Strategy tailored, never templated",
    note: "Your market, margins and buying cycle are yours alone. We write plans for them instead of reusing last client's deck.",
  },
  {
    title: "Transparent by default",
    note: "You own the accounts, you see the spend, you get the report. If a month underperforms, you'll hear it from us first.",
  },
  {
    title: "Built for the long game",
    note: "Ethical, guideline-compliant work that keeps compounding — not shortcuts that unravel at the next algorithm update.",
  },
];

const life = [
  "Open desks, loud debates, quiet focus hours",
  "Weekly teardown sessions on live campaigns",
  "Certified across Google Ads, GA4 and Meta",
  "Recognised as a growing agency partner in Gujarat",
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="about race digital"
        title="A data-driven agency,"
        accent="grown in Ahmedabad."
        intro="Race Digital started with a simple frustration: too many businesses were paying for marketing they couldn't measure. We built the agency we wished existed — sharp on strategy, honest with numbers, and genuinely invested in what happens after the click."
        bullets={[
          "SEO, PPC, paid social, content and web under one roof",
          "Clients across F&B, automotive, hospitality and D2C",
          "Reporting written for owners, not for analysts",
        ]}
        aside="We'd rather tell you a channel isn't worth it than take the retainer."
        image={studio}
      />

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20">
        <div className="hairline grid gap-x-8 gap-y-9 pt-9 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl font-normal tracking-tight sm:text-[3.2rem]">
                <Counter to={s.to} suffix={s.suffix} decimals={0} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Ticker />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag">Our story</p>
            <h2 className="mt-4 max-w-[13ch] text-[2.2rem] leading-[1.04] sm:text-[2.8rem]">
              Marketing that answers to the P&amp;L.
            </h2>
            <p className="hand mt-8 max-w-[260px] text-base">
              Founded in Makarba. Still here. Still picking up the phone.
            </p>
          </Reveal>
          <Reveal delay={80} className="space-y-6 lg:pt-12">
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              <span className="text-foreground">We're a small, senior team</span> working across
              search, paid media, content and web. No account-manager relay race — the people who
              plan your work are the people who run it.
            </p>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              Over the last two years we've helped restaurants fill tables, dealerships fill
              service bays and venues fill calendars. Different industries, one method: understand
              the customer, measure honestly, then scale only what proves itself.
            </p>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
              Our clients stay because the reporting is readable and the results are real. That's
              the whole pitch.
            </p>
            <Link to="/contact" className="pill group mt-2 inline-flex">
              Work with us
              <span className="pill-chip group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-paper-deep">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="tag">What we hold to</p>
            <h2 className="mt-4 max-w-xl text-[2.2rem] leading-[1.04] sm:text-5xl">
              Four things we won't trade away.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={i * 70}>
                <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight sm:text-2xl">{b.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{b.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <p className="tag">Life at Race Digital</p>
          <span className="hand max-w-xs text-sm">
            Small team, short feedback loops, no account-manager telephone game.
          </span>
        </Reveal>
        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {life.map((l, i) => (
            <Reveal
              as="li"
              key={l}
              delay={i * 60}
              className="group flex min-h-[13rem] flex-col justify-between bg-background p-7 transition-colors duration-500 hover:bg-g-yellow-soft"
            >
              <span className="font-display text-xs font-bold tracking-[0.22em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl">
                {l}
              </span>
              <span className="block h-[3px] w-8 bg-g-blue transition-all duration-500 group-hover:w-16" />
            </Reveal>
          ))}
        </ul>
      </section>


      <Awards />
      <Voices />
    </PageShell>
  );
}
