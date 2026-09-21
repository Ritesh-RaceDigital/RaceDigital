import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Data-driven, not guesswork",
    body: "Recognised for our data-driven approach — every campaign decision starts in your analytics, not in a template.",
  },
  {
    title: "Tailored to your business",
    body: "Startup or established company, we build strategies around your goals, market and margins rather than a fixed package.",
  },
  {
    title: "Measurable ROI",
    body: "SEO, PPC, paid social and content all report back to one thing: the return your spend generated.",
  },
  {
    title: "Mobile-first by default",
    body: "In a mobile-first world your presence has to adapt. Every asset we ship is built to perform on the small screen first.",
  },
  {
    title: "Certified specialists",
    body: "Google, Meta, ecommerce, email and UI/UX certifications behind a team that has shipped across industries.",
  },
  {
    title: "Support that stays",
    body: "A commitment to quality and support after launch — the same people you briefed are the ones optimising month two.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-36">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="display-lg mt-7">
            Six reasons clients
            <br />
            pick Race Digital
            <br />
            <span className="text-muted-foreground">and stay.</span>
          </h2>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">
            In just two years we&apos;ve helped businesses across industries elevate their online
            presence and achieve measurable success.
          </p>
        </Reveal>

        <ul>
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={40}
              className="group hairline grid gap-4 py-9 transition-colors duration-500 sm:grid-cols-[4.5rem_1fr]"
            >
              <span className="font-display text-2xl font-normal tabular-nums text-muted-foreground transition-colors duration-500 group-hover:text-g-blue">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3 className="text-2xl transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.75rem]">
                  {r.title}
                </h3>
                <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
                  {r.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
