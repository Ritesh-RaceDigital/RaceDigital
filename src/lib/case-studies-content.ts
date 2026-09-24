export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  location: string;
  duration: string;
  headline: string;
  accent: string;
  summary: string;
  challenge: string[];
  approach: { title: string; note: string }[];
  results: { value: string; label: string }[];
  outcome: string[];
  quote: { text: string; who: string };
  serviceSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "naan-kabob",
    client: "NAAN KABOB",
    industry: "Restaurant chain",
    location: "Multi-location",
    duration: "7 months",
    headline: "How NAAN KABOB cut cost per click by",
    accent: "60%.",
    summary:
      "A growing kebab chain was paying premium prices for clicks that rarely walked through the door. We rebuilt the account around intent and location, and the cost of a customer fell with it.",
    challenge: [
      "The account had been running on broad match with a single national campaign. Every branch competed for the same budget, and the busiest outlet quietly ate the spend meant for the newest one.",
      "Ad copy talked about the brand. Search queries were about lunch near me, catering for 40 people, and halal delivery. The gap between the two was costing roughly six rupees in every ten.",
    ],
    approach: [
      {
        title: "Split the account by branch",
        note: "One campaign per outlet, with radius targeting drawn around real delivery zones instead of a city-wide guess.",
      },
      {
        title: "Rebuilt the keyword set around intent",
        note: "Cut 300+ broad terms, kept the ones tied to ordering, catering and reservations, and added negatives for recipe and job searches.",
      },
      {
        title: "Wrote ads that answer the query",
        note: "Menu-specific headlines, live offers, and call and directions extensions on every mobile impression.",
      },
      {
        title: "Fixed measurement first",
        note: "Calls, direction requests and online orders were all tracked as separate conversions, so bidding optimised for revenue rather than traffic.",
      },
    ],
    results: [
      { value: "60%", label: "Lower cost per click" },
      { value: "2.4x", label: "More tracked orders" },
      { value: "38%", label: "Cut in wasted spend" },
    ],
    outcome: [
      "Within two months the blended cost per click had halved, and by month four the chain was spending less per outlet while taking more orders.",
      "The account now runs on a fixed monthly budget with a clear cost-per-order target — and the newest branch gets its fair share.",
    ],
    quote: {
      text: "We were spending more every month and seeing less. The first thing Race Digital did was tell us what to switch off.",
      who: "Marketing lead, NAAN KABOB",
    },
    serviceSlugs: ["ppc", "paid-social-ads"],
    metaTitle: "NAAN KABOB Case Study — 60% Cheaper CPC | Race Digital",
    metaDescription:
      "How Race Digital restructured NAAN KABOB's Google Ads account by branch and intent, cutting cost per click by 60% and lifting tracked orders 2.4x.",
  },
  {
    slug: "toyota-dealership",
    client: "TOYOTA dealer group",
    industry: "Automotive",
    location: "Gujarat",
    duration: "9 months",
    headline: "A dealership group grew monthly website users by",
    accent: "40%.",
    summary:
      "Showroom footfall was steady, but the website barely contributed. Nine months of technical SEO, service-led content and local search work changed where the enquiries came from.",
    challenge: [
      "The site ranked for the brand name and almost nothing else. Model pages were thin, service pages did not exist, and the three showroom locations shared one address block.",
      "Mobile load time sat above six seconds, so even the traffic that arrived rarely reached an enquiry form.",
    ],
    approach: [
      {
        title: "Cleared the technical debt",
        note: "Compressed a gallery of oversized images, fixed render-blocking scripts and got mobile load under two and a half seconds.",
      },
      {
        title: "Built the service side of the site",
        note: "Dedicated pages for periodic service, insurance renewal, exchange valuation and genuine parts — the searches with the highest commercial intent.",
      },
      {
        title: "Separated the three locations",
        note: "A distinct page, Google Business Profile and citation set per showroom, so each one ranked in its own map pack.",
      },
      {
        title: "Published buyer-stage content",
        note: "Model comparisons, on-road price explainers and finance guides, each linked to the enquiry form for that model.",
      },
    ],
    results: [
      { value: "40%", label: "More monthly website users" },
      { value: "3x", label: "Service page enquiries" },
      { value: "2.4s", label: "Mobile load time, from 6s+" },
    ],
    outcome: [
      "Non-brand organic traffic overtook brand traffic in month seven — the first time the site was bringing in demand rather than catching it.",
      "Service bookings became the strongest digital revenue line, and each showroom now reports its own enquiry numbers.",
    ],
    quote: {
      text: "The reporting finally made sense to the people who run the showrooms, not just the marketing team.",
      who: "General manager, dealer group",
    },
    serviceSlugs: ["seo", "content-marketing", "web-design"],
    metaTitle: "TOYOTA Dealer Case Study — 40% More Traffic | Race Digital",
    metaDescription:
      "Technical SEO, service-led content and local search work that grew a TOYOTA dealer group's monthly website users by 40% and tripled service enquiries.",
  },
  {
    slug: "the-cupule-wedding-venue",
    client: "The Cupule Wedding Venue",
    industry: "Hospitality & events",
    location: "Ahmedabad",
    duration: "11 months",
    headline: "A venue lifted organic traffic",
    accent: "190%.",
    summary:
      "Wedding venues get chosen on photographs and shortlists. We made sure The Cupule appeared on both — and turned a quiet enquiry form into a booked calendar.",
    challenge: [
      "The venue was invisible for every search that mattered: banquet halls in Ahmedabad, outdoor wedding venue, capacity-based queries. Competitors with weaker properties outranked it purely on content.",
      "The site had one gallery, no pricing guidance and an enquiry form that asked for eleven fields before a date.",
    ],
    approach: [
      {
        title: "Mapped the whole planning journey",
        note: "From first search to site visit — capacity guides, seasonal pricing explainers, vendor checklists and real event galleries.",
      },
      {
        title: "Rebuilt the enquiry flow",
        note: "Three fields, a date picker and a WhatsApp option. Response time targets agreed with the venue team.",
      },
      {
        title: "Owned local and visual search",
        note: "Google Business Profile posts after every event, geo-tagged galleries and a steady stream of reviews.",
      },
      {
        title: "Layered paid social over peak season",
        note: "Instagram and Meta campaigns targeted to engaged couples and their families in the three months before wedding season.",
      },
    ],
    results: [
      { value: "190%", label: "Increase in organic traffic" },
      { value: "30%", label: "More conversions" },
      { value: "4.6x", label: "Enquiry-to-visit rate" },
    ],
    outcome: [
      "Peak season sold out earlier than any previous year, and the venue started turning down dates rather than chasing them.",
      "Organic now brings more qualified enquiries than any referral platform the venue had been paying for.",
    ],
    quote: {
      text: "We stopped paying listing sites for leads we could get ourselves.",
      who: "Owner, The Cupule",
    },
    serviceSlugs: ["seo", "content-marketing", "paid-social-ads"],
    metaTitle: "The Cupule Case Study — 190% Traffic Growth | Race Digital",
    metaDescription:
      "How Race Digital grew a wedding venue's organic traffic 190% and lifted conversions 30% with content, local SEO and seasonal paid social.",
  },
  {
    slug: "d2c-home-decor",
    client: "D2C home décor brand",
    industry: "Ecommerce",
    location: "Pan-India",
    duration: "6 months",
    headline: "Return on ad spend rebuilt from 1.4x to",
    accent: "4.1x.",
    summary:
      "A décor label was scaling spend and shrinking margin. The fix was not a bigger budget — it was a feed, a funnel and honest attribution.",
    challenge: [
      "Shopping campaigns ran on an unoptimised feed: missing attributes, one product type for 400 SKUs, and no exclusion for out-of-stock lines.",
      "Meta and Google both claimed the same conversions, so the team kept scaling channels that were reporting each other's sales.",
    ],
    approach: [
      {
        title: "Fixed the product feed first",
        note: "Structured titles, complete attributes, custom labels by margin band and automated out-of-stock exclusions.",
      },
      {
        title: "Built a real measurement layer",
        note: "Server-side tracking, GA4 as the referee, and a weekly blended-ROAS view instead of platform-reported numbers.",
      },
      {
        title: "Separated prospecting from retention",
        note: "Cold audiences got story-led creative, warm audiences got catalogue and offer, and email picked up the rest.",
      },
      {
        title: "Scaled by margin, not revenue",
        note: "Budget followed the custom labels — high-margin ranges got the spend, loss-leaders got capped.",
      },
    ],
    results: [
      { value: "4.1x", label: "Blended return on ad spend" },
      { value: "34%", label: "Lower cost per acquisition" },
      { value: "2.2x", label: "Repeat purchase rate" },
    ],
    outcome: [
      "Six months in, the brand was profitable on first purchase for the first time — with a repeat rate that made the second one nearly free.",
      "The feed and label system now runs on autopilot, so new collections launch with correct targeting from day one.",
    ],
    quote: {
      text: "The weekly number we look at now is margin, not revenue. That change alone was worth the retainer.",
      who: "Founder, D2C décor brand",
    },
    serviceSlugs: ["ppc", "paid-social-ads", "web-design"],
    metaTitle: "D2C Ecommerce Case Study — 4.1x ROAS | Race Digital",
    metaDescription:
      "Feed optimisation, server-side tracking and margin-led scaling that took a D2C home décor brand from 1.4x to 4.1x blended return on ad spend.",
  },
  {
    slug: "b2b-manufacturing",
    client: "Industrial components manufacturer",
    industry: "B2B manufacturing",
    location: "Gujarat & export",
    duration: "12 months",
    headline: "Export enquiries multiplied by",
    accent: "5x.",
    summary:
      "A twenty-year-old manufacturer had a catalogue PDF and a contact form. Twelve months later, buyers in four countries were finding them on search.",
    challenge: [
      "Every product lived inside a downloadable PDF, invisible to search engines. The site had eleven indexable pages for a catalogue of 300 parts.",
      "Enquiries arrived by phone from existing distributors only. There was no digital route for a new buyer to discover the company.",
    ],
    approach: [
      {
        title: "Turned the catalogue into pages",
        note: "Indexable product and application pages with specifications, tolerances and use cases written for procurement engineers.",
      },
      {
        title: "Targeted specification searches",
        note: "Keyword research around part numbers, materials and application queries rather than generic category terms.",
      },
      {
        title: "Earned technical authority links",
        note: "Trade directories, industry publications and supplier listings that buyers already trust.",
      },
      {
        title: "Built a qualification-first enquiry flow",
        note: "Quantity, application and timeline captured up front, so the sales team spent their day on live opportunities.",
      },
    ],
    results: [
      { value: "5x", label: "Qualified export enquiries" },
      { value: "300+", label: "Indexable product pages" },
      { value: "4", label: "New export markets reached" },
    ],
    outcome: [
      "Organic search became the company's second-largest source of new business after distributor referrals.",
      "The catalogue is now a living part of the site — new SKUs go live in hours instead of the next print run.",
    ],
    quote: {
      text: "For twenty years our website was a brochure. Now it brings buyers we have never met.",
      who: "Director, components manufacturer",
    },
    serviceSlugs: ["seo", "link-building", "content-marketing"],
    metaTitle: "B2B Manufacturing Case Study — 5x Enquiries | Race Digital",
    metaDescription:
      "How Race Digital turned a PDF catalogue into 300 indexable pages and multiplied a manufacturer's qualified export enquiries fivefold in twelve months.",
  },
  {
    slug: "healthcare-clinic-network",
    client: "Multi-speciality clinic network",
    industry: "Healthcare",
    location: "Ahmedabad",
    duration: "8 months",
    headline: "Appointment bookings up",
    accent: "112%.",
    summary:
      "Six clinics, one phone number and no way to tell which location a patient wanted. Local SEO and a rebuilt booking flow sorted both.",
    challenge: [
      "All six clinics shared a single Google Business Profile and one landing page, so none of them ranked in their own neighbourhood.",
      "Bookings happened by phone during working hours only — anyone searching after 8pm simply went elsewhere.",
    ],
    approach: [
      {
        title: "Gave each clinic its own presence",
        note: "Location pages with doctors, timings, directions and speciality lists, each tied to a verified profile.",
      },
      {
        title: "Wrote for symptom searches",
        note: "Reviewed, plain-language guides answering the questions patients actually type before they book.",
      },
      {
        title: "Made booking work at midnight",
        note: "A three-step online booking flow with slot availability per clinic and WhatsApp confirmation.",
      },
      {
        title: "Built a review engine",
        note: "Post-visit review requests that lifted every location above four and a half stars within two quarters.",
      },
    ],
    results: [
      { value: "112%", label: "More appointment bookings" },
      { value: "6", label: "Clinics ranking in local packs" },
      { value: "41%", label: "Bookings made after hours" },
    ],
    outcome: [
      "Four in ten bookings now arrive outside working hours — revenue that previously went to whoever picked up first.",
      "Each clinic manager gets a monthly one-page report for their own location.",
    ],
    quote: {
      text: "Patients used to call the wrong branch. Now they book the right one, at the right time, on their own.",
      who: "Operations head, clinic network",
    },
    serviceSlugs: ["seo", "web-design", "ppc"],
    metaTitle: "Healthcare SEO Case Study — 112% Bookings | Race Digital",
    metaDescription:
      "Local SEO and a rebuilt booking flow that doubled appointments for a six-clinic network in Ahmedabad, with 41% of bookings made after hours.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
