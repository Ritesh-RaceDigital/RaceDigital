import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";
import { caseStudies } from "@/lib/case-studies-content";
import { pageHead, breadcrumbLd } from "@/lib/seo";

const title = "Case Studies — Digital Marketing Results | Race Digital";
const description =
  "Real campaigns, real numbers: 60% cheaper clicks, 190% more organic traffic, 4.1x ROAS. See how Race Digital grows businesses in Ahmedabad and beyond.";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    ...pageHead({ title, description, path: "/case-studies" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Case studies", path: "/case-studies" },
          ]),
        ),
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="proof, not promises"
        title="The work, and"
        accent="what it actually did."
        intro="Every engagement below started with a business that was spending on marketing without a clear line back to revenue. Here's what changed, how we changed it, and the numbers that followed."
        bullets={[
          "Problem, strategy and result — in that order",
          "Numbers taken from the client's own analytics",
          "Industries from F&B and automotive to B2B export",
        ]}
        aside="No vanity metrics. If a channel didn't work, we say so."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        {caseStudies.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 60}>
            <Link
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group grid gap-5 border-t border-border py-10 last:border-b md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_auto] md:items-start md:gap-10"
            >
              <div>
                <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {c.industry}
                </span>
                <h2 className="mt-3 font-display text-[1.7rem] font-extrabold leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-[2.1rem]">
                  {c.client}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.location} · {c.duration}
                </p>
              </div>

              <div>
                <p className="text-[1.05rem] leading-relaxed">
                  {c.headline} <span className="text-g-blue">{c.accent}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {c.results.map((r) => (
                    <span key={r.label} className="block">
                      <span className="font-display text-xl font-extrabold tracking-tight">
                        {r.value}
                      </span>
                      <span className="ml-2 text-xs text-muted-foreground">{r.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <span className="pill-chip mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <FinalCta />
    </PageShell>
  );
}
