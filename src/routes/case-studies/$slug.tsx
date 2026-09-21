import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";
import { caseStudies, getCaseStudy } from "@/lib/case-studies-content";
import { services } from "@/lib/services-content";
import { pageHead, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study unavailable — Race Digital" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { metaTitle, metaDescription, client } = loaderData.study;
    return {
      ...pageHead({
        title: metaTitle,
        description: metaDescription,
        path: `/case-studies/${params.slug}`,
        type: "article",
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Case studies", path: "/case-studies" },
              { name: client, path: `/case-studies/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: CaseStudyRoute,
});

function CaseStudyRoute() {
  const { study } = Route.useLoaderData();
  const related = services.filter((s) => study.serviceSlugs.includes(s.slug));
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <PageShell>
      <PageHero
        eyebrow={`${study.industry} · ${study.location}`}
        title={study.headline}
        accent={study.accent}
        intro={study.summary}
        bullets={[
          `Client: ${study.client}`,
          `Engagement: ${study.duration}`,
          `Channels: ${related.map((r) => r.nav).join(", ")}`,
        ]}
        aside="Numbers pulled from the client's own analytics, not ours."
      />

      {/* Result ledger */}
      <section className="border-b border-border bg-paper-deep">
        <div className="mx-auto grid max-w-[1440px] gap-x-10 gap-y-8 px-5 py-14 sm:grid-cols-3 md:px-8">
          {study.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 70}>
              <p className="font-display text-4xl font-extrabold tracking-tight text-g-blue sm:text-[3.2rem]">
                {r.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag">The problem</p>
            <h2 className="mt-4 max-w-[13ch] text-[2.2rem] leading-[1.04] sm:text-[2.8rem]">
              Where the growth was leaking.
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-6 lg:pt-14">
            {study.challenge.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-border bg-paper-deep">
        <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="tag">What we did</p>
            <h2 className="mt-4 max-w-xl text-[2.2rem] leading-[1.04] sm:text-5xl">
              The strategy, step by step.
            </h2>
          </Reveal>
          <div className="mt-14">
            {study.approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="grid gap-3 border-t border-border py-8 last:border-b md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.2fr)] md:items-baseline md:gap-8">
                  <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                    {a.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome + quote */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-6">
            <p className="tag">The outcome</p>
            {study.outcome.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
            <Link to="/contact" className="pill group mt-2 inline-flex">
              Get a free quote
              <span className="pill-chip group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={80}>
            <figure className="border-t-2 border-g-blue bg-card px-8 py-10">
              <blockquote className="font-display text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                “{study.quote.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">
                {study.quote.who}
              </figcaption>
            </figure>

            <div className="mt-10">
              <p className="tag">Services used</p>
              <ul className="mt-4 space-y-2">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="link-draw text-sm font-medium"
                    >
                      {s.nav} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More work */}
      <section className="border-t border-border bg-paper-deep">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20">
          <p className="tag">More work</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 70}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: o.slug }}
                  className="group block border-t border-border pt-5"
                >
                  <span className="tag">{o.industry}</span>
                  <h3 className="mt-3 font-display text-lg font-extrabold tracking-tight transition-colors group-hover:text-g-blue">
                    {o.client}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {o.headline} {o.accent}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
