export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  metaTitle: string;
  metaDescription: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "seo-checklist-for-ahmedabad-businesses",
    title: "The local SEO checklist we run before touching anything else",
    excerpt:
      "Before we chase keywords, we fix the boring things: business listings, service pages and the internal links nobody audits. Here's the exact order we work in.",
    category: "SEO",
    date: "2026-07-28",
    readTime: "6 min read",
    author: "Kishan Parmar",
    metaTitle: "Local SEO Checklist for Ahmedabad Businesses — Race Digital",
    metaDescription:
      "The practical local SEO checklist Race Digital runs for Ahmedabad businesses: listings, service pages, internal links and the tracking that proves it worked.",
    body: [
      {
        heading: "Start with what already ranks",
        paragraphs: [
          "Most sites we inherit already rank for something useful — it's just buried on page two with a page nobody has touched in three years. We pull Search Console data first and sort by impressions, not clicks. That gap is the cheapest growth in the account.",
          "Fixing an existing page is faster than writing a new one, and it compounds: better titles, tighter intros, one honest FAQ block, and the page moves within weeks.",
        ],
      },
      {
        heading: "Fix the listings nobody owns",
        paragraphs: [
          "Google Business Profile, Justdial, Sulekha, the industry directories — half of them carry an old phone number or a closed address. Every mismatch costs you trust in local packs.",
          "We build one source of truth for name, address, hours and categories, then push it everywhere before we spend a rupee on content.",
        ],
      },
      {
        heading: "One page per service, written like a human",
        paragraphs: [
          "A single 'Services' page trying to rank for six things will rank for none of them. Split them, give each one a real intro, real pricing signals, and a real next step.",
          "Then link them to each other from the body copy, not just the footer. Internal links are the most under-used lever in Indian SMB sites.",
        ],
      },
    ],
  },
  {
    slug: "cut-wasted-google-ads-spend",
    title: "Where your Google Ads budget quietly leaks every month",
    excerpt:
      "Four audits later, the same five leaks show up: broad match without guardrails, no negatives, unsegmented brand, ignored search terms and untracked calls.",
    category: "PPC",
    date: "2026-07-12",
    readTime: "5 min read",
    author: "Ritesh Priyankar",
    metaTitle: "Where Google Ads Budget Leaks — PPC Notes | Race Digital",
    metaDescription:
      "The five recurring leaks we find in Google Ads accounts — broad match, missing negatives, brand blending, ignored search terms and untracked calls.",
    body: [
      {
        heading: "Broad match without a leash",
        paragraphs: [
          "Broad match isn't the villain — broad match with no negative list and no audience signal is. Give the algorithm conversion data worth learning from, or it will spend your budget learning the wrong lesson.",
        ],
      },
      {
        heading: "Brand and non-brand in one campaign",
        paragraphs: [
          "When brand terms sit alongside generic ones, your ROAS looks great and your growth stalls. Split them so you can see what new demand actually costs.",
        ],
      },
      {
        heading: "Calls you never counted",
        paragraphs: [
          "For most service businesses in Ahmedabad, the conversion is a phone call. If calls aren't tracked as conversions, every optimisation decision is made on a fraction of the truth.",
        ],
      },
    ],
  },
  {
    slug: "landing-pages-that-convert",
    title: "A landing page is a conversation, not a brochure",
    excerpt:
      "Most pages answer questions nobody asked and skip the three that matter. Here's the structure we use when a campaign has to earn its budget back.",
    category: "Web Design",
    date: "2026-06-30",
    readTime: "4 min read",
    author: "Neha Trivedi",
    metaTitle: "Landing Pages That Convert — Structure We Use | Race Digital",
    metaDescription:
      "The landing page structure Race Digital uses for paid campaigns: one promise, proof early, objections handled and a single obvious next step.",
    body: [
      {
        heading: "One promise, above the fold",
        paragraphs: [
          "If a visitor can't repeat your offer back after four seconds, the page has failed. Say the specific thing, to the specific person, in plain language.",
        ],
      },
      {
        heading: "Proof before persuasion",
        paragraphs: [
          "Numbers, names and screenshots beat adjectives. Put one piece of real proof within the first scroll and the rest of the page gets easier to write.",
        ],
      },
      {
        heading: "Handle the objection you're avoiding",
        paragraphs: [
          "Price, timelines, contract length — the thing you'd rather not mention is exactly what stalls the form fill. Answer it and conversion rates move.",
        ],
      },
    ],
  },
  {
    slug: "content-that-earns-links",
    title: "Why most 'link building' fails before the first email",
    excerpt:
      "Outreach doesn't fix weak assets. If the page you're pitching has nothing worth citing, the reply rate tells you exactly that.",
    category: "Content",
    date: "2026-06-14",
    readTime: "5 min read",
    author: "Kishan Parmar",
    metaTitle: "Content That Earns Links — Link Building | Race Digital",
    metaDescription:
      "Why link building campaigns fail, and the kinds of assets — original data, useful tools, honest guides — that editors actually cite.",
    body: [
      {
        heading: "Editors link to information, not opinions",
        paragraphs: [
          "A blog post restating what three other blogs said earns nothing. Original numbers from your own operations, however small, get cited.",
        ],
      },
      {
        heading: "Relevance beats domain rating",
        paragraphs: [
          "One link from a trade publication your buyers read is worth ten from a general-interest site with a nice metric attached.",
        ],
      },
    ],
  },
  {
    slug: "ga4-reporting-that-leadership-reads",
    title: "Build the one report your leadership actually opens",
    excerpt:
      "Nobody reads a 40-tab dashboard. We ship a single page: what we spent, what came back, what changed, and what happens next month.",
    category: "Analytics",
    date: "2026-05-29",
    readTime: "4 min read",
    author: "Ritika Nair",
    metaTitle: "GA4 Reporting Leadership Reads — Race Digital",
    metaDescription:
      "How to build a one-page marketing report from GA4: spend, return, what changed and next month's plan — without the dashboard clutter.",
    body: [
      {
        heading: "Four questions, one page",
        paragraphs: [
          "What did we spend, what did it return, what changed since last month, and what are we doing about it. Everything else is an appendix.",
        ],
      },
      {
        heading: "Name the misses out loud",
        paragraphs: [
          "Reports that only show wins stop being believed. We list what underperformed and what we're retiring — it buys credibility for the parts that worked.",
        ],
      },
    ],
  },
  {
    slug: "meta-ads-creative-testing",
    title: "How we test Meta creative without burning the budget",
    excerpt:
      "Three hooks, one offer, a hard stop at the learning threshold. A simple loop beats a clever one you can't repeat every week.",
    category: "Paid Social",
    date: "2026-05-08",
    readTime: "5 min read",
    author: "Ritesh Priyankar",
    metaTitle: "Meta Ads Creative Testing Framework — Race Digital",
    metaDescription:
      "A repeatable Meta ads creative testing loop: three hooks, one offer, clear thresholds and weekly iteration that keeps CPA under control.",
    body: [
      {
        heading: "Test hooks, not colours",
        paragraphs: [
          "The first three seconds carry the result. Change the angle — problem, proof, price — before you change the button shade.",
        ],
      },
      {
        heading: "Decide the kill rule before launch",
        paragraphs: [
          "Write down the spend and the signal that ends the test. Without it, every losing ad gets 'one more day' and the month disappears.",
        ],
      },
    ],
  },
];

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
