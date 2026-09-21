import type { ReactNode } from "react";

import { TopBar } from "./top-bar";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { WhatsappFab } from "./whatsapp-fab";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
      <WhatsappFab />
    </div>
  );
}
