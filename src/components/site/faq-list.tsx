import { useState } from "react";

import { Reveal } from "./reveal";
import type { ServiceFaq } from "@/lib/services-content";

export function FaqList({
  items,
  heading,
  note,
}: {
  items: ServiceFaq[];
  heading: string;
  note: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag">Frequently asked</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">{heading}</h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">{note}</p>
          </Reveal>

          <div>
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 50}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full border-t border-border py-6 text-left last:border-b"
                  >
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-6">
                      <h3 className="text-lg font-bold tracking-tight sm:text-xl">{f.q}</h3>
                      <span
                        className={`mt-1 shrink-0 text-lg text-g-blue transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </div>
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pt-4 leading-relaxed text-muted-foreground">{f.a}</p>
                      </div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
