import { pageHead, breadcrumbLd } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { Contact } from "@/components/site/contact";
import { Reveal } from "@/components/site/reveal";

const title = "Contact Race Digital — Digital Marketing Agency in Ahmedabad";
const description =
  "Talk to Race Digital about SEO, PPC, paid social, content and web design. Call +91 635 366 3006, email info@racedigital.in, or visit us in Makarba, Ahmedabad.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageHead({ title, description, path: "/contact" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    label: "Call",
    value: "+91 635 366 3006",
    href: "tel:+916353663006",
    note: "Mon–Sat, 10am to 7pm IST",
  },
  {
    label: "Email",
    value: "info@racedigital.in",
    href: "mailto:info@racedigital.in",
    note: "We reply within one working day",
  },
  {
    label: "Studio",
    value: "B-810, WTT Tower, Makarba",
    href: "https://maps.google.com/?q=WTT+Tower+Makarba+Ahmedabad",
    note: "Ahmedabad, Gujarat 380051",
  },
];

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="say hello · ahmedabad"
        title="Let's talk about"
        accent="what growth should cost you."
        intro="Tell us where you are and where you want to be. We'll come back with an honest read on what's achievable, in what timeframe, and what it takes to get there."
        bullets={[
          "A free audit of your current setup",
          "No lock-in pitch, no jargon deck",
          "A named person on your account from day one",
        ]}
        aside="Small team. Direct lines. You'll always know who's working on your account."
      />

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
          {details.map((d, i) => (
            <Reveal key={d.label} delay={i * 70} className="border-t border-border pt-6">
              <p className="tag">{d.label}</p>
              <a
                href={d.href}
                className="mt-4 block font-display text-xl font-extrabold tracking-tight transition-colors hover:text-g-blue sm:text-2xl"
              >
                {d.value}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </PageShell>
  );
}
