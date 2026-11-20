import naanKabobImg from "@/assets/cases/naan-kabob.png";
import roofingImg from "@/assets/cases/roofing-contractors.jpg";
import londonDoorImg from "@/assets/cases/london-door-company.jpg";
import airRiderzImg from "@/assets/cases/air-riderz.jpg";
import toyotaImg from "@/assets/cases/toyota-dealership.jpg";
import cupuleImg from "@/assets/cases/the-cupule-wedding-venue.jpg";
import homeDecorImg from "@/assets/cases/d2c-home-decor.jpg";
import manufacturingImg from "@/assets/cases/b2b-manufacturing.jpg";
import healthcareImg from "@/assets/cases/healthcare-clinic-network.jpg";

export type CaseStudy = {
  slug: string;
  /** Illustrative stock image for the industry. */
  image: string;
  /** Show the whole image (e.g. a logo on a solid background) instead of cropping it. */
  imageContain?: boolean;
  client: string;
  anonymized?: boolean;
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
  quote?: { text: string; who: string };
  serviceSlugs: string[];
  metaTitle: string;
  metaDescription: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "naan-kabob",
    image: naanKabobImg,
    imageContain: true,
    client: "NAAN KABOB",
    industry: "Restaurant",
    location: "Greater Toronto Area, Canada",
    duration: "First year",
    headline: "How NAAN KABOB grew organic traffic from zero to",
    accent: "30,000 a month.",
    summary:
      "A new Middle Eastern restaurant with one branch and no digital footprint, in one of the most competitive dining markets in Canada. Local SEO, search-led content and link building turned Google into its busiest front door.",
    challenge: [
      "NAAN KABOB came to us as a new restaurant with a single location and no online presence to build on. There was no brand awareness, no search history and no SEO foundation, so every ranking had to be earned from scratch.",
      "The Toronto restaurant scene is crowded, and well-established Middle Eastern eateries already owned the searches and the customer loyalty. The goals were clear: be found on Google, win the Google Maps listing, and turn that visibility into people walking through the door.",
    ],
    approach: [
      {
        title: "Keyword research built around intent",
        note: "A mix of broad and long-tail searches for Middle Eastern food in Toronto, from \"best Middle Eastern food Toronto\" to the restaurant's own name.",
      },
      {
        title: "On-page SEO and content",
        note: "Optimised titles, descriptions and headings, plus blog posts, landing pages and menu pages that answer what diners actually search for.",
      },
      {
        title: "Google Maps and local SEO",
        note: "A complete, regularly updated Google Business Profile with photos, posts and offers, and a consistent name, address and phone number across every directory.",
      },
      {
        title: "Local backlinks",
        note: "Links from local food bloggers, directories and community websites to strengthen the restaurant's local authority.",
      },
      {
        title: "Fast mobile site and reviews",
        note: "A mobile-responsive, fast-loading website, and a steady flow of Google reviews with replies to every one of them.",
      },
    ],
    results: [
      { value: "0 → 30K", label: "Monthly organic visitors" },
      { value: "4,600+", label: "Keywords ranking in Google" },
    ],
    outcome: [
      "Organic traffic climbed from zero to roughly 30,000 visitors a month, and the growth in visibility showed up as more diners walking in after finding the restaurant through search.",
      "The Google Maps listing became a key driver of footfall, ranking prominently for relevant local searches, while content and local outreach established NAAN KABOB as a go-to name for Middle Eastern food in the Greater Toronto Area.",
    ],
    serviceSlugs: ["seo", "content-marketing", "link-building", "web-design"],
    metaTitle: "NAAN KABOB Case Study — 0 to 30,000 Organic Visitors | Race Digital",
    metaDescription:
      "How Race Digital took a new Toronto restaurant from zero to roughly 30,000 monthly organic visitors with local SEO, Google Maps optimisation, content and link building.",
  },
  {
    slug: "roofing-contractors",
    image: roofingImg,
    client: "Rain Safe Roofing & The Roof Medic",
    industry: "Roofing contractors",
    location: "Mississauga & Milton, Ontario",
    duration: "Ongoing",
    headline: "How two roofing contractors reached",
    accent: "#1 in the Google Map Pack.",
    summary:
      "Roofing is one of the most competitive local markets in North America. A Google Business Profile rebuild, a review engine and steady local content put two Ontario contractors at the top of the Map Pack in their cities.",
    challenge: [
      "Rain Safe Roofing in Mississauga was one of 100+ roofing companies competing for the same searches, with no keyword optimisation for \"roofing contractor in Mississauga\", low-quality photos, infrequent updates and weak call and review signals.",
      "The Roof Medic in Milton faced results dominated by older, established roofers. The profile had poor visual quality and little keyword presence in its reviews, so it simply did not appear for \"roofing contractor in Milton\".",
    ],
    approach: [
      {
        title: "Google Business Profile rebuild",
        note: "Optimised primary and secondary categories, a full roofing service list (shingle repair, roof replacement, emergency repair, skylights and more), keyword-rich descriptions, service areas and booking buttons.",
      },
      {
        title: "Local SEO clean-up",
        note: "Consistent name, address and phone data across 40+ directories, geo-tagged job-site photos and location-based service pages.",
      },
      {
        title: "A keyword-aware review engine",
        note: "Automated review requests with prompts like \"roof replacement Mississauga\", plus a reply to every review that reinforces the service and the area.",
      },
      {
        title: "Local content and engagement",
        note: "Weekly Google Posts, job progress photos, optimised Q&A and Milton-specific posts and FAQs built around searches like \"Milton roof repair\".",
      },
      {
        title: "Ongoing tracking",
        note: "Call tracking, UTM tagging and weekly adjustments based on ranking changes and competitor moves.",
      },
    ],
    results: [
      { value: "#1", label: "Map Pack rank in Mississauga" },
      { value: "#1", label: "Map Pack rank in Milton" },
      { value: "5.0★", label: "Google rating, 250+ reviews combined" },
    ],
    outcome: [
      "Rain Safe Roofing reached the top of the Map Pack for \"roofing contractor in Mississauga\", ahead of long-established companies, with a 5.0 rating from 100+ reviews and more calls and direction requests from neighbourhoods such as Erin Mills, Churchill Meadows and Port Credit.",
      "The Roof Medic took the top spot for \"roofing contractor in Milton\" with a 5.0 rating from 150+ reviews, bringing steady enquiries for roof replacements, emergency patching, winter leak repairs and insurance work, without relying on paid ads.",
    ],
    serviceSlugs: ["seo", "content-marketing", "link-building"],
    metaTitle: "Roofing Local SEO Case Study — #1 in the Map Pack | Race Digital",
    metaDescription:
      "How Race Digital ranked two Ontario roofing contractors #1 in the Google Map Pack in Mississauga and Milton with Google Business Profile optimisation, reviews and local content.",
  },
  {
    slug: "london-door-company",
    image: londonDoorImg,
    client: "The London Door Company",
    industry: "Home improvement",
    location: "London, UK",
    duration: "3 months",
    headline: "How we reversed a traffic decline and grew organic traffic by",
    accent: "70% in 3 months.",
    summary:
      "A luxury door maker whose organic visits had been sliding for months. Technical fixes, refreshed content and a tighter keyword strategy turned the trend around and brought more enquiries with it.",
    challenge: [
      "The London Door Company, a provider of bespoke and luxury doors for London homes, came to us in July 2024 with a website that had been losing traffic steadily and was down to around 10,000 monthly visitors.",
      "The market is competitive, the content was outdated and not optimised for keywords, and technical problems such as slow pages, broken links and missing meta tags were compounding the effect of recent Google algorithm changes.",
    ],
    approach: [
      {
        title: "SEO audit and technical fixes",
        note: "Found and fixed the issues holding the site back: slow page speed, broken links and missing meta tags.",
      },
      {
        title: "Content optimisation",
        note: "Updated key landing pages with search-optimised copy and started a blog aimed at high-volume, relevant searches.",
      },
      {
        title: "Keyword strategy",
        note: "Focused on long-tail, high-intent keywords and tightened on-page SEO around them.",
      },
      {
        title: "Backlinks and local SEO",
        note: "Earned high-quality links from relevant sources, and optimised the Google Business Profile with location-specific keywords.",
      },
      {
        title: "Ongoing monitoring",
        note: "Adjusted the plan against performance data as results came in.",
      },
    ],
    results: [
      { value: "+70%", label: "Organic traffic in 3 months" },
      { value: "+40%", label: "Online lead enquiries" },
    ],
    outcome: [
      "Within three months organic traffic was up 70% and online lead enquiries were up 40%, restoring the site's visibility in a highly competitive luxury home improvement market.",
      "The recovery shows how quickly technical fixes combined with content built around conversion can turn organic growth into qualified leads.",
    ],
    serviceSlugs: ["seo", "content-marketing", "link-building"],
    metaTitle: "SEO Recovery Case Study — +70% Organic Traffic | Race Digital",
    metaDescription:
      "How Race Digital grew organic traffic by 70% and online enquiries by 40% in three months for a London luxury door company with technical SEO, content and link building.",
  },
  {
    slug: "air-riderz",
    image: airRiderzImg,
    client: "Air Riderz",
    industry: "Entertainment",
    location: "Ontario, Canada",
    duration: "7 months",
    headline: "How a four-location trampoline park grew organic users by 376% and ticket purchases by",
    accent: "3,029%.",
    summary:
      "Four venues sharing one undifferentiated website. A location-by-location site structure, local content and targeted paid search drove traffic and ticket sales up across the board.",
    challenge: [
      "Air Riderz is a trampoline park brand with four locations: Mississauga, Vaughan, Aurora and New York. All four lived under a single domain with no separation between them, which made it hard to target location-specific keywords.",
      "Without location subdirectories the reach of the keyword set was limited, and localised content was diluted on one shared site, so it did little to bring visitors to a specific venue.",
    ],
    approach: [
      {
        title: "A subdirectory for every location",
        note: "Separate sections such as /mississauga/ and /vaughan/, each with its own pages optimised for local search terms and tailored to that venue's visitors.",
      },
      {
        title: "Local content and on-page SEO",
        note: "Location keywords in meta tags, headings and body copy, with unique content on attractions, events and promotions for each venue.",
      },
      {
        title: "Technical SEO",
        note: "A cleaner site architecture that is easier for visitors and search engines to navigate, plus performance work for faster loading.",
      },
      {
        title: "Localised paid search",
        note: "Campaigns for each venue with location-specific ads, and continuous A/B testing of ad copy and landing pages.",
      },
    ],
    results: [
      { value: "+376%", label: "Organic users" },
      { value: "+3,029%", label: "Ticket purchases (key events)" },
      { value: "+248%", label: "New users" },
    ],
    outcome: [
      "Over the first seven months of 2024, compared with the same period a year earlier, organic traffic grew 392%, paid traffic 59%, overall traffic 260% and total sessions 265%, with key events up more than 3,000%.",
      "The case shows how a tailored SEO and paid search strategy, built around each location, can drive footfall for a multi-location business.",
    ],
    serviceSlugs: ["seo", "content-marketing", "link-building", "ppc", "web-design"],
    metaTitle: "Multi-Location SEO Case Study — +376% Organic Users | Race Digital",
    metaDescription:
      "How Race Digital grew organic users by 376% and ticket purchases by 3,029% in seven months for a four-location trampoline park with location pages, local SEO and paid search.",
  },
  {
    slug: "toyota-dealership",
    image: toyotaImg,
    client: "Toyota Dealer Group",
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
    metaTitle: "Toyota Dealer Group Case Study — 40% More Traffic | Race Digital",
    metaDescription:
      "Technical SEO, service-led content and local search work that grew a Toyota Dealer Group's monthly website users by 40% and tripled service enquiries.",
  },
  {
    slug: "the-cupule-wedding-venue",
    image: cupuleImg,
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
    image: homeDecorImg,
    client: "D2C home décor brand",
    anonymized: true,
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
    image: manufacturingImg,
    client: "Industrial components manufacturer",
    anonymized: true,
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
    image: healthcareImg,
    client: "Multi-speciality clinic network",
    anonymized: true,
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
