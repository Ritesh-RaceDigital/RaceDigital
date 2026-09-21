import { Mail, Phone } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export function TopBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-6 gap-y-1.5 px-5 py-2 text-[0.78rem] md:px-8">
        <div className="flex items-center gap-5">
          <a
            href="mailto:info@racedigital.in"
            className="flex items-center gap-2 font-medium text-background/80 transition-colors hover:text-g-yellow"
          >
            <Mail className="size-3.5" strokeWidth={2.2} />
            info@racedigital.in
          </a>
          <a
            href="tel:+917600443625"
            className="flex items-center gap-2 font-medium text-background/80 transition-colors hover:text-g-yellow"
          >
            <Phone className="size-3.5" strokeWidth={2.2} />
            +91 760 044 3625
          </a>
        </div>
        <div className="flex items-center divide-x divide-background/15">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="px-3 font-medium text-background/70 transition-colors first:pl-0 last:pr-0 hover:text-background"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
