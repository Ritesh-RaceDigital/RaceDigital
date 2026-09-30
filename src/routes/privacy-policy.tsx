import { pageHead, breadcrumbLd, ORG } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";

const title = "Privacy Policy — Race Digital";
const description =
  "How Race Digital collects, uses and protects personal data submitted through this website, in line with India's Digital Personal Data Protection Act, 2023.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    ...pageHead({ title, description, path: "/privacy-policy" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    heading: "What we collect",
    body: [
      "When you submit our contact form, we collect the personal data you provide: name, phone or WhatsApp number, email address (if given), the service you're enquiring about, and your message.",
      "We also collect standard technical data through normal website operation — pages visited and general browser/device information — used only to keep the site working and secure.",
    ],
  },
  {
    heading: "Why we collect it (purpose limitation)",
    body: [
      "We process this data solely to respond to your enquiry, discuss the services you've asked about, and, if you become a client, to deliver and report on the work.",
      "We do not sell your personal data, and we do not use it for any purpose beyond what you'd reasonably expect from submitting an enquiry form.",
    ],
  },
  {
    heading: "Your consent",
    body: [
      "By ticking the consent checkbox and submitting the contact form, you agree to Race Digital processing the information you've provided for the purpose of responding to your enquiry, as required under the Digital Personal Data Protection Act, 2023 (DPDP Act).",
      "You can withdraw consent at any time by writing to us at the email address below — we will stop processing your data for any purpose beyond what's already legally required (such as accounting records).",
    ],
  },
  {
    heading: "How we store and protect it",
    body: [
      "Form submissions are transmitted securely and delivered to our team's email inbox. We do not maintain a public-facing database of enquiry data on this website.",
      "We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss or misuse.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Under the DPDP Act, you have the right to access the personal data we hold about you, request correction of inaccurate data, and request erasure of your data once it's no longer needed for the purpose it was collected.",
      "To exercise any of these rights, contact us using the details below and we'll respond within a reasonable timeframe.",
    ],
  },
  {
    heading: "Third parties",
    body: [
      "Our contact form is processed through Web3Forms, a third-party form-delivery service, solely to route your submission to our inbox. We do not share your data with any other third party for marketing purposes.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time to reflect changes in our practices or in applicable law. The date below reflects the most recent update.",
    ],
  },
];

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[860px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <Reveal>
          <p className="tag">legal</p>
          <h1 className="display-lg mt-6">Privacy policy</h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-muted-foreground">
            This policy explains what personal data Race Digital collects through racedigital.in,
            why we collect it, and the rights you have over it under India's Digital Personal Data
            Protection Act, 2023.
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
              Contact us about your data
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
