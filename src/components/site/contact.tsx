import { ChevronRight, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Reveal } from "./reveal";

// Public submission key from web3forms.com — safe to expose client-side,
// it's scoped to this site and rate-limited, not a secret credential.
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const interests = ["SEO", "PPC advertising", "Paid social ads", "Content marketing", "Web design", "Not sure yet"];

const lines = [
  { k: "Office", v: "B-810, WTT Tower, Makarba, Ahmedabad, Gujarat 380051" },
  { k: "Write", v: "info@racedigital.in", href: "mailto:info@racedigital.in" },
  { k: "Call", v: "+91 635 366 3006", href: "tel:+916353663006" },
  { k: "Hours", v: "Mon–Sat, 10am to 7pm IST" },
];

export function Contact() {
  const [interest, setInterest] = useState(interests[0]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = `${get("first")} ${get("last")}`.trim();

    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.set("interest", interest);
    data.set("subject", `Quote request — ${name || "New enquiry"} (${interest})`);
    data.set("from_name", "Race Digital website");

    setSending(true);
    setError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
        form.reset();
        setInterest(interests[0]);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full border-0 border-b border-border bg-transparent pb-3 pt-2 text-[1.05rem] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-g-blue";

  return (
    <section id="talk" className="bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        {/* meta strip */}
        <Reveal className="hairline flex flex-wrap items-baseline justify-between gap-4 pt-6">
          <p className="tag">contact us</p>
          <p className="tag">ahmedabad · ist (utc+5:30)</p>
        </Reveal>

        <div className="mt-14 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="display-lg max-w-[14ch]">
                Begin your{" "}
                <span className="text-muted-foreground">success journey today.</span>
              </h2>
              <p className="mt-7 max-w-sm text-[1.05rem] leading-relaxed text-muted-foreground">
                Reach out today for a free quote and discover how our tailored marketing
                strategies can elevate your business. With our expert team by your side, achieving
                your goals is just a click away.
              </p>
            </Reveal>

            <Reveal delay={70} className="mt-12">
              <dl>
                {lines.map((l) => (
                  <div
                    key={l.k}
                    className="hairline grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-4 last:border-b last:border-border/60"
                  >
                    <dt className="tag">{l.k}</dt>
                    <dd className="text-[0.98rem] leading-relaxed">
                      {l.href ? (
                        <a href={l.href} className="link-draw font-medium">
                          {l.v}
                        </a>
                      ) : (
                        l.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={110} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="https://wa.me/916353663006"
                target="_blank"
                rel="noreferrer"
                className="pill group bg-card"
              >
                <MessageCircle className="size-4" strokeWidth={1.8} />
                WhatsApp us
                <span className="pill-chip group-hover:translate-x-0.5">
                  <ChevronRight className="size-4" strokeWidth={2.4} />
                </span>
              </a>
              <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/theracedigital/" },
                  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573025625154" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/racedigital/" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-draw hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* right — form as a numbered brief */}
          <Reveal delay={60}>
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center border-t-2 border-g-blue bg-card px-8 py-14 sm:px-12">
                <p className="tag text-g-blue">received</p>
                <h3 className="display-lg mt-6 max-w-[16ch]">Got it. Give us a day.</h3>
                <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
                  Your brief is in. A strategist will come back within one working day. In a
                  hurry? Write to info@racedigital.in or WhatsApp us.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="border-t-2 border-g-blue bg-card px-7 py-10 sm:px-12 sm:py-14">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <p className="tag">tell us about your project</p>

                <div className="mt-10 grid gap-9 sm:grid-cols-2">
                  <label className="block">
                    <span className="tag">01 / first name</span>
                    <input required name="first" placeholder="Rahul" className={field} />
                  </label>
                  <label className="block">
                    <span className="tag">02 / last name</span>
                    <input required name="last" placeholder="Mehta" className={field} />
                  </label>
                  <label className="block">
                    <span className="tag">03 / email</span>
                    <input required type="email" name="email" placeholder="you@company.com" className={field} />
                  </label>
                  <label className="block">
                    <span className="tag">04 / phone</span>
                    <input required name="phone" placeholder="+91" className={field} />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="tag">05 / company</span>
                    <input name="company" placeholder="Mehta Exports" className={field} />
                  </label>
                </div>

                <fieldset className="mt-11">
                  <legend className="tag">06 / services you&apos;re interested in</legend>
                  <div className="mt-5 flex flex-wrap gap-2.5">
                    {interests.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setInterest(t)}
                        className={`rounded-full border px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                          interest === t
                            ? "border-g-blue bg-g-blue text-white"
                            : "border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="mt-11 block">
                  <span className="tag">07 / explain your project</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="What you're selling, where the growth has stalled, what you've already tried…"
                    className={`${field} resize-none`}
                  />
                </label>

                {error && (
                  <p className="mt-8 text-sm text-destructive">
                    Something went wrong sending that. Please try again, or write to
                    info@racedigital.in directly.
                  </p>
                )}

                <div className="mt-11 flex flex-wrap items-center justify-between gap-5 border-t border-border pt-8">
                  <p className="max-w-[26ch] text-xs leading-relaxed text-muted-foreground">
                    No newsletter, no CRM drip. Just a free quote and a reply.
                  </p>
                  <button type="submit" disabled={sending} className="pill group border-foreground disabled:opacity-60">
                    {sending ? "Sending…" : "Get a quote"}
                    <span className="pill-chip group-hover:translate-x-0.5">
                      <ChevronRight className="size-4" strokeWidth={2.4} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
