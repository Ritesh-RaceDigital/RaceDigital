import { pageHead, breadcrumbLd, ORG } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";

const title = "Terms of Use — Race Digital";
const description =
  "The terms that apply when you use racedigital.in or engage Race Digital for digital marketing services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    ...pageHead({ title, description, path: "/terms" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Terms", path: "/terms" },
          ]),
        ),
      },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    heading: "Using this website",
    body: [
      "This website and its content are provided by Race Digital for general information about our services. You may browse it and submit enquiries through the contact form, but you may not copy, reproduce or resell the site's content without our written permission.",
    ],
  },
  {
    heading: "Enquiries and quotes",
    body: [
      "Submitting the contact form does not create a client relationship or any binding obligation on either side. Any project, pricing or scope discussed after an enquiry is agreed separately, in writing, before work begins.",
    ],
  },
  {
    heading: "Accuracy of information",
    body: [
      "We keep the case studies, figures and service descriptions on this site accurate to the best of our knowledge, sourced from client analytics and our own campaign data. Results described for past clients are specific to those engagements and are not a guarantee of results for any future client.",
    ],
  },
  {
    heading: "Data submitted through this site",
    body: [
      "Any personal data you submit through our contact form is handled according to our Privacy Policy, in line with the Digital Personal Data Protection Act, 2023.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "Race Digital is not liable for any indirect or consequential loss arising from your use of this website. Nothing in these terms limits liability that cannot be excluded under applicable Indian law.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of India, and any dispute arising from them falls under the jurisdiction of the courts in Ahmedabad, Gujarat.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The date below reflects the most recent update.",
    ],
  },
];

function TermsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[860px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <Reveal>
          <p className="tag">legal</p>
          <h1 className="display-lg mt-6">Terms of use</h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            These terms apply when you use racedigital.in. If you engage Race Digital for a project,
            that work is governed by the separate agreement we sign with you — these terms cover the
            website itself.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Last updated: 30 September 2026</p>
        </Reveal>

        <div className="mt-14 space-y-10">
          {sections.map((s) => (
            <Reveal key={s.heading}>
              <h2 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
                {s.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-[1.02rem] leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
              Questions about these terms
            </h2>
            <p className="mt-3 text-[1.02rem] leading-relaxed text-muted-foreground">
              {ORG.name}, {ORG.street}, {ORG.city}, {ORG.region} {ORG.postalCode}
              <br />
              Email: {ORG.email}
              <br />
              Phone: {ORG.phone}
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
