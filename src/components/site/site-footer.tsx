import { Logo } from "./logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "All services", href: "/services" },
      { label: "Our team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },

  {
    title: "Services",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "PPC advertising", href: "/services/ppc" },
      { label: "Paid social ads", href: "/services/paid-social-ads" },
      { label: "Content marketing", href: "/services/content-marketing" },
      { label: "Link building", href: "/services/link-building" },
      { label: "Web design", href: "/services/web-design" },
    ],
  },
  {
    title: "Proof",
    links: [
      { label: "Case studies", href: "/case-studies" },
      { label: "Selected work", href: "/case-studies" },
      { label: "Industries", href: "/#industries" },
      { label: "FAQs", href: "/#faq" },
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-paper-deep">
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo className="h-9" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A digital marketing agency in Makarba, Ahmedabad — SEO, PPC, paid social, content
              and web design built to deliver measurable ROI.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-xs items-center gap-2 border-b border-border pb-2"
            >
              <input
                type="email"
                required
                placeholder="Monthly growth notes, no spam"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button type="submit" className="shrink-0 text-sm font-semibold text-g-blue">
                Join
              </button>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <p className="tag">{c.title}</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="link-draw text-muted-foreground hover:text-foreground">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="tag">Follow</p>
              <ul className="mt-5 space-y-3 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-draw text-muted-foreground hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Race Digital · Makarba, Ahmedabad, Gujarat 380051</p>
          <div className="flex flex-wrap gap-6">
            <a href="#talk" className="link-draw">Privacy policy</a>
            <a href="#talk" className="link-draw">Terms</a>
            <a href="mailto:info@racedigital.in" className="link-draw">info@racedigital.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
