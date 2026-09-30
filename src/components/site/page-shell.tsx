import type { ReactNode } from "react";

import { TopBar } from "./top-bar";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { WhatsappFab } from "./whatsapp-fab";
import { MobileCtaBar } from "./mobile-cta-bar";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background pb-[52px] md:pb-0">
      <TopBar />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsappFab />
      <MobileCtaBar />
    </div>
  );
}
