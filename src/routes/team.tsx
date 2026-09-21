import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";
import { leadership, team, teamValues } from "@/lib/team-content";

const title = "Meet the Team — Race Digital, Ahmedabad";
const description =
  "The strategists, marketers, designers and analysts behind Race Digital in Ahmedabad — small pods, senior hands, and work you can trace back to a number.";

export const Route = createFileRoute("/team")({
  head: () => ({
    ...pageHead({ title, description, path: "/team" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Team", path: "/team" },
          ]),
        ),
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="the people"
        title="A small team that"
        accent="answers its own emails."
        intro="No account-manager relay race. The people who plan your growth are the ones building the campaigns, writing the pages and reading the numbers on Monday morning."
        bullets={[
          "Eight specialists, one room in Makarba",
          "Senior hands on every account",
          "You always know who did the work",
        ]}
        aside="Come by the office. The chai is better than the coffee."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <p className="tag">leadership</p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="group grid gap-6 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:items-center">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-secondary">
                  <img
                    src={m.photo}
                    alt={`${m.name}, ${m.role} at Race Digital`}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                    {m.focus}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-[1.7rem] font-extrabold leading-tight tracking-tight">
                    {m.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-g-blue">{m.role}</p>
                  <span className="mt-5 block h-px w-12 bg-g-blue transition-all duration-500 group-hover:w-20" />
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
                    {m.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="tag">the crew</p>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Six specialists who each own a lane — and sit close enough to argue about it.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 70}>
                <article className="group">
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-background">
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Race Digital`}
                      loading="lazy"
                      width={640}
                      height={800}
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                    <span className="absolute left-4 top-4 font-display text-xs font-bold tracking-widest text-background mix-blend-difference">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-foreground/85 to-transparent p-5 pt-14 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm leading-relaxed text-background">{m.note}</p>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-extrabold leading-tight tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-g-blue">
                    {m.focus}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <p className="tag">how we work</p>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {teamValues.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="border-t-2 border-g-blue pt-6">
                <h3 className="font-display text-xl font-extrabold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
