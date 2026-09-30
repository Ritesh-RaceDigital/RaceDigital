const clients = ["NAAN KABOB", "Toyota Dealer Group", "The Cupule Wedding Venue"];

const expertise = [
  "Ecommerce Marketing",
  "Digital Strategy",
  "Content Marketing",
  "Email Marketing",
  "UI/UX Design",
];

export function Ticker() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-16">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
        Clients we work with · certificates and accolades
      </p>
      <div className="relative mt-7 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]">
        <div className="marquee-track gap-10">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden={dup === 1}
              inert={dup === 1 ? true : undefined}
              className="flex shrink-0 items-center gap-10 pr-10"
            >
              {clients.map((c) => (
                <span
                  key={c + dup}
                  className="flex items-center gap-3 whitespace-nowrap font-display text-base font-extrabold tracking-tight text-foreground transition-colors hover:text-g-blue sm:text-lg"
                >
                  {c}
                  <i className="size-1.5 rounded-full bg-g-blue/60" />
                </span>
              ))}
              <span className="h-4 w-px shrink-0 bg-border" />
              {expertise.map((e) => (
                <span
                  key={e + dup}
                  className="flex items-center gap-3 whitespace-nowrap font-display text-base font-extrabold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground sm:text-lg"
                >
                  {e}
                  <i className="size-1.5 rounded-full bg-g-blue/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
