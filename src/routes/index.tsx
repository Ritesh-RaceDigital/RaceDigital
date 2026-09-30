import { pageHead, faqLd } from "@/lib/seo";
import { faqs } from "@/components/site/faq";
import { createFileRoute } from "@tanstack/react-router";

import { TopBar } from "@/components/site/top-bar";
import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { Ticker } from "@/components/site/ticker";
import { Services } from "@/components/site/services";
import { PerksStrip } from "@/components/site/perks-strip";
import { WhyUs } from "@/components/site/why-us";
import { Method } from "@/components/site/method";
import { Results } from "@/components/site/results";
import { Voices } from "@/components/site/voices";
import { Industries } from "@/components/site/industries";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Contact } from "@/components/site/contact";
import { SiteFooter } from "@/components/site/site-footer";
import { WhatsappFab } from "@/components/site/whatsapp-fab";
import { MobileCtaBar } from "@/components/site/mobile-cta-bar";

const title = "Race Digital — Digital Marketing Agency in Ahmedabad";
const description =
  "SEO, PPC, paid social, content marketing and web design from Race Digital, Ahmedabad. Tailored strategies built for measurable ROI. Get a free quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({ title, description, path: "/" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqLd(faqs)),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-[52px] md:pb-0">
      <TopBar />
      <SiteNav />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <PerksStrip />
        <WhyUs />
        <Method />
        <Results />
        <Voices />
        <Industries />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
      <MobileCtaBar />
    </div>
  );
}
