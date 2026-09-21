import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";
import { posts, formatPostDate } from "@/lib/blog-content";

const title = "Digital Marketing Blog — Race Digital, Ahmedabad";
const description =
  "Practical notes on SEO, Google Ads, paid social, content and web design from the Race Digital team in Ahmedabad. No fluff, just what we run for clients.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...pageHead({ title, description, path: "/blog" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <PageShell>
      <PageHero
        eyebrow="notes"
        title="What we've learned,"
        accent="written down."
        intro="Every post here comes out of real accounts — the audits, the tests that failed, the fixes that moved a number. If it hasn't worked for a client, it doesn't get published."
        bullets={["Written by the people doing the work", "Specific to Indian SMB budgets", "No gated PDFs"]}
        aside="Have a question we haven't answered? Ask and we'll write it up."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        {lead && (
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: lead.slug }}
              className="group grid gap-8 rounded-[2rem] border border-border bg-secondary/40 p-8 md:grid-cols-[1.2fr_1fr] md:items-end md:p-12"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-g-blue">{lead.category}</p>
                <h2 className="mt-5 font-display text-[2rem] font-extrabold leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-[2.8rem]">
                  {lead.title}
                </h2>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted-foreground">
                  {lead.excerpt}
                </p>
              </div>
              <div className="flex items-end justify-between gap-6">
                <p className="text-sm text-muted-foreground">
                  {lead.author}
                  <br />
                  {formatPostDate(lead.date)} · {lead.readTime}
                </p>
                <span className="pill-chip shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-16">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-4 border-t border-border py-9 last:border-b md:grid-cols-[9rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.category}
                </span>
                <h3 className="font-display text-[1.5rem] font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-[1.9rem]">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                  <span className="mt-2 block text-xs text-muted-foreground/80">
                    {formatPostDate(p.date)} · {p.readTime}
                  </span>
                </p>
                <span className="pill-chip mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
