import { useState } from "react";
import { Reveal } from "./reveal";

export const faqs = [
  {
    q: "What services does Race Digital offer?",
    a: "We provide tailored solutions in SEO, PPC, content marketing, social media management, web design, and more to help your business grow online.",
  },
  {
    q: "How can digital marketing help my business?",
    a: "Digital marketing helps improve your online visibility, engage potential customers, and drive traffic to your website, leading to increased sales and brand growth.",
  },
  {
    q: "Why should I invest in SEO?",
    a: "SEO enhances your website's visibility on search engines, driving organic traffic, and improving your rankings for better exposure and credibility.",
  },
  {
    q: "How long does it take to see results from SEO?",
    a: "SEO is a long-term strategy, and results typically begin to show within 3 to 6 months, depending on competition and the scope of work.",
  },
  {
    q: "How can I improve my website's performance?",
    a: "We offer comprehensive web design and optimization services, focusing on user experience, fast loading speeds, and mobile responsiveness to boost performance.",
  },
  {
    q: "Can you manage my social media accounts?",
    a: "Yes, we provide full social media management services, including content creation, scheduling, and engagement strategies to enhance your online presence.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="tag">Frequently asked</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Your go-to source
              <br />
              for answers about
              <br />
              digital marketing.
            </h2>
          </Reveal>

          <div>
            {faqs.map((f, i) => {
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
