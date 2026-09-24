import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { industries } from "@/lib/industries-content";
import { caseStudies } from "@/lib/case-studies-content";

const title = "Industries We Serve — Race Digital, Ahmedabad";
const description =
  "Race Digital works across restaurants, automotive, hospitality, e-commerce, healthcare and more. See the case studies behind each industry.";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    ...pageHead({ title, description, path: "/industries" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ]),
        ),
      },
    ],
  }),
  component: IndustriesIndex,
});

function IndustriesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="who we work with"
        title="Different industries,"
        accent="the same discipline."
        intro="Buying cycles, channels and margins vary by industry — the way we measure and scale doesn't. Here's where we've put that to work, with the case study to prove it where we have one."
        bullets={[
          "Strategy built around your industry's buying cycle",
          "Proof from real client work, not generic claims",
          "Honest about where we're still building a track record",
        ]}
        aside="Don't see your industry? Tell us about it — we'll say honestly if it's a fit."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        {industries.map((ind, i) => {
          const caseStudy = ind.caseStudySlug
            ? caseStudies.find((c) => c.slug === ind.caseStudySlug)
            : undefined;

          return (
            <Reveal key={ind.name} delay={(i % 4) * 60}>
              <div className="group grid gap-4 border-t border-border py-9 last:border-b md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)_auto] md:items-baseline md:gap-8">
                <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-[1.8rem] font-extrabold leading-none tracking-tight sm:text-[2.3rem]">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{ind.note}</p>
                </div>
                {caseStudy ? (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: caseStudy.slug }}
                    className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                  >
                    See how we helped <span className="font-medium text-foreground">{caseStudy.client}</span>,{" "}
                    {caseStudy.industry.toLowerCase()}.
                  </Link>
                ) : (
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    No published case study here yet — ask us about our approach for this industry.
                  </p>
                )}
                {caseStudy && (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: caseStudy.slug }}
                    className="pill-chip mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <ChevronRight className="size-4" strokeWidth={2.4} />
                  </Link>
                )}
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="border-t border-border bg-paper-deep">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <Reveal>
            <h2 className="max-w-[16ch] text-[2rem] leading-[1.05] sm:text-[2.6rem]">
              Tell us about your industry.
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
