import { MessageCircle, Phone } from "lucide-react";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] flex border-t border-border bg-background/95 backdrop-blur-md md:hidden">
      <a
        href="tel:+916353663006"
        className="flex flex-1 items-center justify-center gap-2 border-r border-border py-3.5 text-sm font-semibold text-foreground"
      >
        <Phone className="size-4" strokeWidth={2.2} />
        Call
      </a>
      <a
        href="https://wa.me/916353663006"
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-g-blue py-3.5 text-sm font-semibold text-white"
      >
        <MessageCircle className="size-4" strokeWidth={2.2} />
        WhatsApp
      </a>
    </div>
  );
}
