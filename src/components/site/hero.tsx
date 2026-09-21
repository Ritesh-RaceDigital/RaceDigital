import {
  ChevronRight,
  Search,
  MousePointerClick,
  Megaphone,
  BarChart3,
  Target,
  PenTool,
  Zap,
  Star,
} from "lucide-react";

import { Reveal } from "./reveal";
import { Counter } from "./counter";

import teamRahul from "@/assets/team-rahul.jpg";
import teamNeha from "@/assets/team-neha.jpg";
import teamKaran from "@/assets/team-karan.jpg";
import teamSneha from "@/assets/team-sneha.jpg";

const stats = [
  { to: 50, suffix: "+", label: "Satisfied clients" },
  { to: 2, suffix: "+", label: "Years in business" },
  { to: 6, label: "Core service lines" },
  { to: 190, suffix: "%", label: "Best traffic lift delivered" },
];

const proofFaces = [
  { src: teamRahul, alt: "Rahul, SEO lead at Race Digital" },
  { src: teamNeha, alt: "Neha, paid media strategist at Race Digital" },
  { src: teamKaran, alt: "Karan, content strategist at Race Digital" },
  { src: teamSneha, alt: "Sneha, account manager at Race Digital" },
];

function Letters({ text, className = "" }: { text: string; className?: string }) {
  let i = -1;
  return (
    <span className={className}>
      {text.split(" ").map((word, w, arr) => (
        <span
          key={`${word}-${w}`}
          className={`inline-block whitespace-nowrap${w === arr.length - 1 ? "" : " mr-[0.24em]"}`}
        >
          {word.split("").map((ch, c) => {
            i += 1;
            return (
              <span
                key={`${ch}-${c}`}
                className="letter-in inline-block"
                style={{ animationDelay: `${140 + i * 22}ms` }}
              >
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <span className="pointer-events-none absolute -right-40 -top-24 size-[520px] rounded-full bg-g-yellow-soft blur-3xl" />
      <span className="pointer-events-none absolute -left-52 top-[38rem] size-[420px] rounded-full bg-g-blue-soft blur-3xl" />

      {/* radial growth ecosystem — six disciplines orbiting one focus */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-36 hidden origin-top-right scale-[0.82] lg:block xl:scale-100"
      >
        <div className="relative size-[32rem]">
          {/* orbit rings */}
          <span className="absolute inset-8 rounded-full border border-g-blue/10" />
          <span className="absolute inset-[6.75rem] rounded-full border border-g-blue/15" />
          <span className="absolute inset-[11rem] rounded-full bg-g-yellow-soft blur-2xl" />

          {/* dashed flight path + nodes */}
          <svg className="absolute inset-0 size-full" viewBox="0 0 512 512" fill="none">
            <circle
              cx="256"
              cy="256"
              r="210"
              stroke="rgba(242,101,34,0.28)"
              strokeWidth="1.5"
              strokeDasharray="2 11"
              strokeLinecap="round"
            />
            {[90, 30, -30, -90, -150, 150].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              return (
                <circle
                  key={deg}
                  cx={256 + 210 * Math.cos(rad)}
                  cy={256 - 210 * Math.sin(rad)}
                  r="3.5"
                  fill="rgba(242,101,34,0.55)"
                />
              );
            })}
          </svg>

          {/* center focus */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="floaty flex size-24 rotate-6 flex-col items-center justify-center gap-1.5 rounded-[1.75rem] border border-g-blue/25 bg-background shadow-[0_0_0_1px_rgba(242,101,34,0.08),0_24px_70px_-20px_rgba(242,101,34,0.7)]">
              <Zap
                className="size-9 fill-g-blue/15 text-g-blue"
                strokeWidth={1.75}
                style={{ filter: "drop-shadow(0 0 12px rgba(242,101,34,0.85))" }}
              />
              <span className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-g-blue/80">
                Growth
              </span>
            </div>
          </div>

          {/* orbiting disciplines */}
          {[
            { Icon: Search, label: "SEO", x: 256, y: 46, d: "0s" },
            { Icon: MousePointerClick, label: "PPC", x: 438, y: 151, d: "1.1s" },
            { Icon: Megaphone, label: "Social", x: 438, y: 361, d: "2.2s" },
            { Icon: BarChart3, label: "Analytics", x: 256, y: 466, d: "3.3s" },
            { Icon: Target, label: "Leads", x: 74, y: 361, d: "4.4s" },
            { Icon: PenTool, label: "Content", x: 74, y: 151, d: "5.5s" },
          ].map(({ Icon, label, x, y, d }) => (
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
            >
              <div
                className="floaty pointer-events-auto flex size-24 flex-col items-center justify-center gap-2 rounded-[1.5rem] border border-white bg-background/80 shadow-[0_18px_55px_-22px_rgba(242,101,34,0.6)] backdrop-blur-md transition-transform duration-300 hover:scale-110"
                style={{ animationDelay: d }}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-g-blue-soft text-g-blue transition-colors duration-300 hover:bg-g-blue hover:text-white">
                  <Icon
                    className="size-5"
                    strokeWidth={2}
                    style={{ filter: "drop-shadow(0 0 6px rgba(242,101,34,0.5))" }}
                  />
                </span>
                <span className="font-display text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-foreground/70">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <p className="letter-in tag" style={{ animationDelay: "40ms" }}>
          Empowering digital success · Ahmedabad
        </p>

        <h1 className="display-xl mt-6 max-w-[16ch] -ml-[0.06em]">
          <Letters text="Digital marketing solutions" />{" "}
          <span className="text-muted-foreground">
            <Letters text="tactics that drive growth" />
          </span>
        </h1>

        <div className="max-w-[46rem]">

          <p
            className="letter-in mt-7 max-w-[34rem] text-[1.05rem] leading-relaxed text-muted-foreground"
            style={{ animationDelay: "700ms" }}
          >
            <span className="font-medium text-foreground">
              We turn clicks into customers.
            </span>{" "}
            Data-led SEO, PPC, paid social and content — built for businesses that want
            measurable returns, not vanity metrics.
          </p>

          <div
            className="letter-in mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "820ms" }}
          >
            <a href="#talk" className="pill group">
              Start a project
              <span className="pill-chip group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </a>
            <a href="#results" className="pill group border-transparent bg-secondary">
              View case studies
              <span className="pill-chip bg-foreground text-background group-hover:translate-x-0.5">
                <ChevronRight className="size-4" strokeWidth={2.4} />
              </span>
            </a>
          </div>

          {/* trust strip — proof anchors the composition */}
          <Reveal
            delay={950}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7"
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {proofFaces.map((f) => (
                  <img
                    key={f.src}
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="size-9 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <p className="text-sm leading-snug">
                <span className="font-medium text-foreground">50+ growing brands</span>
                <span className="block text-muted-foreground">scale with Race Digital</span>
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex gap-0.5" aria-label="Rated five stars">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star
                    key={s}
                    aria-hidden
                    className="size-4 fill-g-blue text-g-blue"
                    strokeWidth={1.5}
                  />
                ))}
              </span>
              <p className="text-sm text-muted-foreground">
                Client-rated results, first wins inside 30 days
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4 lg:mt-24">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="group bg-background px-6 py-8 sm:px-8 sm:py-10">
              <span className="block h-[3px] w-8 bg-g-blue transition-all duration-500 group-hover:w-16" />
              <p className="mt-5 font-display text-4xl font-normal tracking-tight sm:text-[3.4rem]">
                <Counter to={s.to} suffix={s.suffix} decimals={0} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
