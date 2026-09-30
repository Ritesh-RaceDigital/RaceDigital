import { Reveal } from "./reveal";

import culture1 from "@/assets/culture-1.webp";
import culture2 from "@/assets/culture-2.webp";
import culture3 from "@/assets/culture-3.webp";
import culture4 from "@/assets/culture-4.webp";
import culture5 from "@/assets/culture-5.webp";
import culture6 from "@/assets/culture-6.webp";
import culture7 from "@/assets/culture-7.webp";
import culture8 from "@/assets/culture-8.webp";
import culture9 from "@/assets/culture-9.webp";

const rowA = [
  { src: culture1, alt: "Race Digital team celebrating together at the office" },
  { src: culture6, alt: "The Race Digital team on a company outing" },
  { src: culture3, alt: "Three Race Digital teammates at an office celebration" },
  { src: culture8, alt: "Race Digital team outside the office at WTT Tower" },
];

const rowB = [
  { src: culture5, alt: "Race Digital team celebrating Christmas at the office" },
  { src: culture2, alt: "Race Digital team celebrating Diwali together" },
  { src: culture9, alt: "Race Digital team on an outdoor team trip" },
  { src: culture4, alt: "Race Digital team's Diwali office celebration" },
  { src: culture7, alt: "The Race Digital team outside their office building" },
];

function GalleryRow({ items, reverse = false }: { items: { src: string; alt: string }[]; reverse?: boolean }) {
  return (
    <div className="marquee-row relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)]">
      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} gap-4 sm:gap-5`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 items-center gap-4 pr-4 sm:gap-5 sm:pr-5">
            {items.map((it, i) => (
              <img
                key={it.alt + dup + i}
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={480}
                height={360}
                className="aspect-[4/3] h-56 w-auto shrink-0 rounded-[1.5rem] object-cover sm:h-64 md:h-72"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CultureGallery() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-24">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <Reveal>
          <p className="tag">off the clock</p>
          <h2 className="mt-4 max-w-xl text-[2.1rem] leading-[1.05] sm:text-[2.6rem]">
            We celebrate the wins — then get back to work.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="hand max-w-[220px] text-base">Diwali, Christmas, the occasional team trip.</p>
        </Reveal>
      </div>

      <Reveal delay={60} className="mt-12 flex flex-col gap-4 sm:gap-5">
        <GalleryRow items={rowA} />
        <GalleryRow items={rowB} reverse />
      </Reveal>
    </section>
  );
}
