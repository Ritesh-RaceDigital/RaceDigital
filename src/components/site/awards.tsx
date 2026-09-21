import { Reveal } from "./reveal";

const recognitions = [
  { title: "Google Partner", note: "Verified on Google Ads performance and spend standards." },
  { title: "Semrush Certified Agency Partner", note: "Certified across SEO, PPC and content tooling." },
  { title: "Best Business of 2024", note: "Recognised locally for consistent client outcomes." },
  { title: "5-star rated web design", note: "Averaged across published client reviews." },
];

const certifications = [
  "Digital Marketing Strategist",
  "Ecommerce Marketing Specialist",
  "Content Marketing Specialist",
  "Email Marketing Specialist",
  "UI/UX Design",
  "GA4 & Google Tag Manager",
];

export function Awards() {
  return (
    <section className="border-y border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <p className="tag">recognition</p>
            <h2 className="mt-4 max-w-xl text-[2.2rem] leading-[1.04] sm:text-5xl">
              Certificates and accolades.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="hand max-w-[250px] text-base">
              Useful shorthand — but the case studies are the real proof.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {recognitions.map((r, i) => (
            <Reveal key={r.title} delay={i * 70} className="border-t border-border pt-5">
              <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-14 border-t border-border pt-6">
          <p className="tag">team certifications</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {certifications.map((c) => (
              <li
                key={c}
                className="rounded-full border border-border bg-card px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
