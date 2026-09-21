import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/917600443625"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Race Digital on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] grid size-14 place-items-center rounded-full bg-g-blue text-white shadow-[0_16px_40px_-12px_var(--g-blue)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <MessageCircle className="size-6" strokeWidth={2.2} />
      <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-g-blue/30" />
    </a>
  );
}
