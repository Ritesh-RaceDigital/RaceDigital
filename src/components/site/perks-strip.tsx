const perks = ["Data-Driven Strategy", "Measurable ROI", "Tailored Solutions", "Certified Team", "Real Reporting"];

function Asterisk() {
  return (
    <span className="grid shrink-0 grid-cols-2 gap-[2px]">
      <i className="block size-1.5 rounded-full bg-g-blue" />
      <i className="block size-1.5 rounded-full bg-g-yellow" />
      <i className="block size-1.5 rounded-full bg-g-green" />
      <i className="block size-1.5 rounded-full bg-g-red" />
    </span>
  );
}

export function PerksStrip() {
  return (
    <div className="overflow-hidden border-y border-border bg-foreground py-4">
      <div className="marquee-track gap-8">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-8 pr-8">
            {perks.map((p) => (
              <span
                key={p + dup}
                className="flex items-center gap-4 whitespace-nowrap font-display text-sm font-extrabold uppercase tracking-[0.18em] text-background"
              >
                <Asterisk />
                {p}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
