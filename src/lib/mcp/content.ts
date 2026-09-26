// Public marketing content mirrored from the Race Digital website.

export const services = [
  { title: "SEO", note: "Get found online with expert SEO solutions, complemented by user-friendly web design optimized for all devices.", tags: ["Organic growth", "Intent first"] },
  { title: "Link Building", note: "High-quality backlinks that improve search rankings, boost traffic and grow your website's authority.", tags: ["Authority", "Rankings"] },
  { title: "PPC Advertising", note: "Data-driven paid search campaigns built to maximize ROI, visibility and measurable results.", tags: ["Cost efficient", "Sales focused"] },
  { title: "Paid Social Ads", note: "Targeted, engaging social campaigns that drive brand awareness, traffic and conversions.", tags: ["Smart targeting", "High intent"] },
  { title: "Content Marketing", note: "Content created, optimized and distributed to build brand authority and boost conversions.", tags: ["Topic clusters", "Real research"] },
  { title: "Web Design", note: "Responsive, user-friendly websites with seamless navigation and an exceptional user experience.", tags: ["Mobile first", "Conversion led"] },
] as const;

export const caseStudies = [
  {
    client: "NAAN KABOB",
    sector: "Restaurant · Multi-outlet",
    problem:
      "Paid search was buying broad food-delivery terms, so cost per click kept climbing while orders stayed flat.",
    strategy:
      "Rebuilt the campaign around high-intent local queries, tightened match types and rewrote ad copy per outlet.",
    result: "60% lower cost per click",
    detail: "Cheaper CPC with restructured campaigns",
  },
  {
    client: "TOYOTA",
    sector: "Automotive · Dealer network",
    problem:
      "A large site with strong brand demand, but thin organic coverage of model and service searches.",
    strategy:
      "Technical clean-up, model-level content and internal linking mapped to how buyers actually search.",
    result: "+40% monthly website users",
    detail: "Sustained month-on-month growth",
  },
  {
    client: "The Cupule Wedding Venue",
    sector: "Hospitality · Events",
    problem:
      "A beautiful venue nobody could find — enquiries depended entirely on word of mouth and listing sites.",
    strategy:
      "Search-led content, local SEO and a conversion pass on the enquiry journey across every landing page.",
    result: "+190% website traffic",
    detail: "Conversions up 30% alongside it",
  },
] as const;

export const process = [
  { when: "Day 0", title: "Discovery call", body: "Thirty minutes on what you sell, who buys it, and what you've already tried. No deck, no pitch." },
  { when: "Day 1–3", title: "Research & teardown", body: "Half a week inside your analytics, ad accounts, competitors and the last six months of sales calls." },
  { when: "Day 4", title: "One page of strategy", body: "What we're betting on, what we're stopping, and what a good month looks like in rupees." },
  { when: "Day 5–12", title: "Design & build", body: "Tracking first, then creative, then pages. Nothing ships until we can attribute what it did." },
  { when: "Day 14", title: "Launch", body: "Live, with a shared dashboard you don't need us on a call to interpret." },
  { when: "Every Monday", title: "Optimisation", body: "Reviews with the people actually running the account. You'll hear what changed before you ask." },
] as const;

export const faqs = [
  { q: "What services does Race Digital offer?", a: "Tailored solutions in SEO, PPC, content marketing, social media management, web design and more to help your business grow online." },
  { q: "How can digital marketing help my business?", a: "It improves your online visibility, engages potential customers and drives traffic to your website, leading to increased sales and brand growth." },
  { q: "Why should I invest in SEO?", a: "SEO enhances your visibility on search engines, driving organic traffic and improving rankings for better exposure and credibility." },
  { q: "How long does it take to see results from SEO?", a: "SEO is a long-term strategy; results typically begin to show within 3 to 6 months depending on competition and scope of work." },
  { q: "How can I improve my website's performance?", a: "We offer web design and optimization focused on user experience, fast loading speeds and mobile responsiveness." },
  { q: "Can you manage my social media accounts?", a: "Yes — full social media management including content creation, scheduling and engagement strategies." },
] as const;

export const industries = [
  { name: "Restaurants", note: "Multi-outlet F&B" },
  { name: "Automotive", note: "Dealers & service" },
  { name: "Hospitality", note: "Venues & events" },
  { name: "E-commerce", note: "D2C & marketplace" },
  { name: "Healthcare", note: "Clinics & diagnostics" },
  { name: "Real estate", note: "Developers & brokers" },
  { name: "Education", note: "Coaching & institutes" },
  { name: "Startups", note: "Pre-seed to Series A" },
] as const;

export const tools = [
  "Google Ads", "GA4", "Meta Business", "Search Console", "Ahrefs",
  "Semrush", "Figma", "WordPress", "Looker Studio", "Mailchimp", "Shopify",
] as const;

export const contact = {
  studio: "B-810, WTT Tower, Makarba, Ahmedabad, Gujarat 380051",
  email: "info@racedigital.in",
  phone: "+91 635 366 3006",
  whatsapp: "https://wa.me/916353663006",
  hours: "Mon–Sat, 10am to 7pm IST",
  responseTime: "Within one working day",
  social: [
    { label: "Instagram", url: "https://www.instagram.com/theracedigital/" },
    { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61573025625154" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/racedigital/" },
  ],
} as const;
