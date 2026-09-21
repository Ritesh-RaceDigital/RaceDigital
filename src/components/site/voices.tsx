import { Reveal } from "./reveal";

const quotes = [
  {
    text: "They restructured our paid search in the first month and our cost per click dropped by more than half. Same team, same budget, far better numbers.",
    name: "Imran Sheikh",
    role: "Owner, NAAN KABOB",
    accent: "border-l-g-blue",
    ring: "bg-g-blue/20 text-g-blue",
  },
  {
    text: "The reporting is the part I value most. No jargon — just what changed on the site, what it did to traffic, and what's next.",
    name: "Priya Nair",
    role: "Marketing Lead, Automotive dealer group",
    accent: "border-l-g-red",
    ring: "bg-g-red/20 text-g-red",
  },
  {
    text: "We went from invisible to fully booked weekends. Traffic almost tripled and, more importantly, the enquiries were the right ones.",
    name: "Karan Desai",
    role: "Director, The Cupule Wedding Venue",
    accent: "border-l-g-green",
    ring: "bg-g-green/20 text-g-green",
  },
];

const initials = (n: string) =>
  n
    .replace("Dr. ", "")
    .split(" ")
    .map((p) => p[0])
    .join("");

export function Voices() {
  return (
    <section id="studio" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="tag text-background/50">The agency</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Leading digital
              <br />
              marketing in Ahmedabad.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-background/65">
              Race Digital is a growing digital marketing agency in Ahmedabad. In just two years
              we&apos;ve helped businesses across industries elevate their online presence and
              achieve measurable success — with campaigns that are user-friendly, innovative and
              result-driven.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm text-background/55">
              <p>
                <span className="font-display text-xl font-extrabold text-background">Google</span>{" "}
                Ads certified
              </p>
              <p>
                <span className="font-display text-xl font-extrabold text-background">Meta</span>{" "}
                Business certified
              </p>
            </div>
            <a
              href="#talk"
              className="link-draw mt-8 inline-block text-sm font-semibold text-g-yellow"
            >
              Get a free quote →
            </a>
          </Reveal>

          <div className="grid gap-5">
            {quotes.map((q, i) => (
              <Reveal key={q.name} delay={i * 90} className={`border-l-2 pl-6 ${q.accent}`}>
                <p className="font-display text-lg font-semibold leading-snug tracking-tight sm:text-xl">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <span
                    className={`grid size-9 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${q.ring}`}
                  >
                    {initials(q.name)}
                  </span>
                  <p className="min-w-0 text-sm text-background/55">
                    <span className="font-medium text-background/85">{q.name}</span> · {q.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
