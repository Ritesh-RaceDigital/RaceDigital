import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { PerksStrip } from "@/components/site/perks-strip";
import { Method } from "@/components/site/method";
import { services } from "@/lib/services-content";

const title = "Digital Marketing Services in Ahmedabad — Race Digital";
const description =
  "SEO, PPC, paid social ads, content marketing, link building and web design from Race Digital, Ahmedabad. Tailored strategies built for measurable ROI.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    ...pageHead({ title, description, path: "/services" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="what we do"
        title="Six disciplines,"
        accent="one growth plan."
        intro="We don't sell channels in isolation. Search, paid media, content and web are planned together, so every rupee you spend makes the next one work harder."
        bullets={[
          "Strategy scoped to your goals and margins",
          "One team across search, social and site",
          "Monthly reporting you can actually read",
        ]}
        aside="Pick a starting point. We'll tell you honestly if it's the wrong one."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 60}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group grid gap-4 border-t border-border py-9 last:border-b md:grid-cols-[4rem_minmax(0,0.9fr)_minmax(0,1.1fr)_auto] md:items-baseline md:gap-8"
            >
              <span className="font-display text-sm font-bold tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-[1.8rem] font-extrabold leading-none tracking-tight transition-colors duration-300 group-hover:text-g-blue sm:text-[2.3rem]">
                {s.nav}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
              <span className="pill-chip mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      <PerksStrip />
      <Method />
    </PageShell>
  );
}
