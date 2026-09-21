export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  nav: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  bullets: string[];
  aside: string;
  lead: { heading: string; body: string[] };
  offerings: { title: string; note: string }[];
  offeringsHeading: string;
  offeringsAside: string;
  reasons: { title: string; note: string }[];
  reasonsHeading: string;
  faqs: ServiceFaq[];
  faqNote: string;
  metaTitle: string;
  metaDescription: string;
};

export const services: ServiceContent[] = [
  {
    slug: "seo",
    nav: "SEO",
    eyebrow: "search engine optimisation",
    title: "SEO strategies that drive",
    accent: "real results.",
    intro:
      "At Race Digital we build SEO programmes that help businesses in Ahmedabad rank higher and reach their ideal customers — keyword research, content optimisation, technical SEO and link building, done ethically.",
    bullets: [
      "Ethical, Google-compliant techniques",
      "Local and national search coverage",
      "Reporting tied to revenue, not rankings alone",
    ],
    aside: "Rankings are the by-product. Qualified traffic is the point.",
    lead: {
      heading: "SEO that works for your business",
      body: [
        "Having a website isn't enough — you need the right strategy to get noticed. We help businesses grow by improving search rankings, driving organic traffic and increasing conversions, so the right audience finds you at the right moment.",
        "We don't believe in one-size-fits-all strategies. Every business is different, so our approach is shaped around your goals: more traffic, more leads, or more sales. Whichever it is, the plan is written for you.",
      ],
    },
    offeringsHeading: "What an SEO engagement includes",
    offeringsAside: "Seven moving parts. One compounding outcome.",
    offerings: [
      {
        title: "Keyword research & strategy",
        note: "Success starts with the right keywords. We research the search terms your customers actually use, then align your content with that intent.",
      },
      {
        title: "On-page optimisation",
        note: "We fine-tune site structure, meta tags, headings and copy so search engines understand — and rank — every page properly.",
      },
      {
        title: "Technical SEO",
        note: "Fast, mobile-friendly and secure. We fix crawl issues, improve speed and clear the technical debt holding your rankings back.",
      },
      {
        title: "Content creation & optimisation",
        note: "SEO isn't only about ranking. We create genuinely useful content that ranks well and moves readers to act.",
      },
      {
        title: "Link building & authority",
        note: "We secure high-quality, relevant links from trusted sources to strengthen credibility and lift rankings.",
      },
      {
        title: "Local SEO",
        note: "For location-led businesses we optimise your Google Business Profile, build citations and win the map pack.",
      },
      {
        title: "Monitoring & reporting",
        note: "SEO is ongoing. We track progress in clear reports, analyse the data and refine the strategy every month.",
      },
    ],
    reasonsHeading: "What makes our SEO approach different",
    reasons: [
      {
        title: "Customised strategies",
        note: "No generic plans — only solutions built around your industry, audience and goals.",
      },
      {
        title: "Transparent process",
        note: "You stay informed with clear reports and regular updates. Nothing happens in a black box.",
      },
      {
        title: "Ethical SEO practices",
        note: "We follow Google's best practices, so growth holds instead of collapsing after an update.",
      },
      {
        title: "Results-driven",
        note: "The goal isn't higher rankings alone — it's real business growth in traffic, leads and revenue.",
      },
    ],
    faqNote: "Your go-to source for answers about SEO at Race Digital.",
    faqs: [
      {
        q: "Why should I invest in SEO?",
        a: "SEO enhances your website's visibility on search engines, driving organic traffic and improving your rankings for better exposure and credibility.",
      },
      {
        q: "How long does it take to see results from SEO?",
        a: "SEO is a long-term strategy, and results typically begin to show within 3 to 6 months, depending on competition and the scope of work.",
      },
      {
        q: "Do you handle technical SEO as well as content?",
        a: "Yes. We audit and fix site speed, crawlability, indexation and mobile experience alongside on-page content and internal linking.",
      },
      {
        q: "Can you help a local business rank in Ahmedabad?",
        a: "Absolutely. We optimise your Google Business Profile, build local citations and target location-based search terms to attract nearby customers.",
      },
      {
        q: "What reporting do I get?",
        a: "A monthly report covering rankings, organic traffic, conversions and the work completed — plus a walkthrough call whenever you want one.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No credible agency can. We commit to ethical execution, transparent reporting and measurable improvement in traffic and conversions.",
      },
    ],
    metaTitle: "SEO Services in Ahmedabad — Race Digital",
    metaDescription:
      "Ethical, data-driven SEO from Race Digital, Ahmedabad. Keyword research, technical SEO, content and link building built to grow organic traffic and revenue.",
  },
  {
    slug: "ppc",
    nav: "PPC Advertising",
    eyebrow: "google ads & ppc",
    title: "Custom PPC strategies to",
    accent: "scale your business.",
    intro:
      "We craft targeted Google Ads and PPC campaigns that drive traffic, boost conversions and make every click count — whether you're chasing sales or building a brand.",
    bullets: [
      "Search, display, remarketing and shopping",
      "Budget discipline and wasted-spend cuts",
      "Conversion tracking configured properly",
    ],
    aside: "Your business deserves more than clicks. It needs growth you can bank.",
    lead: {
      heading: "Maximise your ROI with expert Google Ads management",
      body: [
        "In a fast-paced digital world, visibility matters. We help businesses of every size grow with high-performing Google Ads and PPC campaigns that drive real results — more traffic, more leads, more sales.",
        "Unlike organic strategies that take time, PPC provides instant visibility, putting your business in front of the right audience at the right time. Our data-driven approach makes sure your ad spend is optimised for maximum return.",
      ],
    },
    offeringsHeading: "Our Google Ads & PPC services",
    offeringsAside: "Full-funnel paid search, managed end to end.",
    offerings: [
      {
        title: "Google Ads campaign management",
        note: "From keyword selection to ad copy and landing page optimisation, we build campaigns that bring qualified leads while cutting wasted spend.",
      },
      {
        title: "Search ads (Google & Bing)",
        note: "We select high-intent keywords so your ads reach ready-to-buy searchers, improving click-through rates and conversions.",
      },
      {
        title: "Display & remarketing ads",
        note: "Stay visible across millions of sites and apps, and re-engage the visitors who already showed interest in your brand.",
      },
      {
        title: "Shopping ads & eCommerce PPC",
        note: "We optimise product feeds, bids and targeting so Google Shopping puts your catalogue in front of buyers, not browsers.",
      },
      {
        title: "Social media ads",
        note: "Our expertise extends beyond Google — engaging campaigns on Facebook, Instagram and LinkedIn built for the right audience.",
      },
      {
        title: "Landing page optimisation",
        note: "A click is only valuable if it converts. We build landing pages designed to hold attention and turn visitors into customers.",
      },
      {
        title: "Tracking & performance analysis",
        note: "We monitor CTR, CPC and conversion rate continuously, then fine-tune campaigns to keep ROI climbing.",
      },
    ],
    reasonsHeading: "Why work with Race Digital for PPC",
    reasons: [
      {
        title: "Customised strategies",
        note: "No cookie-cutter campaigns. Every PPC plan is tailored to your business goals and margins.",
      },
      {
        title: "Budget-friendly approach",
        note: "Get the best value from your ad spend without overspending on vanity impressions.",
      },
      {
        title: "Transparent reporting",
        note: "Detailed reports with real-time performance metrics, explained in plain language.",
      },
      {
        title: "Expert optimisation",
        note: "We refine ads continually to improve results and bring costs down over time.",
      },
    ],
    faqNote: "Quick answers for your Google Ads and PPC questions.",
    faqs: [
      {
        q: "How quickly will I see results from PPC?",
        a: "Campaigns can start driving traffic within days of launch. Meaningful optimisation data usually takes two to four weeks to accumulate.",
      },
      {
        q: "What budget do I need to start?",
        a: "It depends on your industry and competition. We'll model a realistic starting budget from keyword costs and your target cost per lead before you commit.",
      },
      {
        q: "Do you write the ad copy and build landing pages?",
        a: "Yes. Ad copy, creative and conversion-focused landing pages are part of the engagement, not an add-on.",
      },
      {
        q: "Who owns the Google Ads account?",
        a: "You do, always. We work inside your account so the history and data stay with your business.",
      },
      {
        q: "Can you audit an existing account?",
        a: "We can. Most audits surface wasted spend within the first hour — poor match types, missing negatives and untracked conversions.",
      },
      {
        q: "How do you report performance?",
        a: "Monthly reports covering spend, CTR, CPC, conversions and cost per acquisition, with the next month's plan attached.",
      },
    ],
    metaTitle: "PPC & Google Ads Management in Ahmedabad — Race Digital",
    metaDescription:
      "Custom PPC strategies from Race Digital. Google Ads, shopping, display and remarketing campaigns managed for maximum ROI and lower cost per lead.",
  },
  {
    slug: "paid-social-ads",
    nav: "Paid Social Ads",
    eyebrow: "paid social advertising",
    title: "Drive conversions through",
    accent: "data-driven paid social.",
    intro:
      "Reach the right audience at the right time with data-backed paid social. We create high-converting campaigns that deliver measurable results across Meta, LinkedIn and beyond.",
    bullets: [
      "Full-funnel campaign architecture",
      "Creative and copy built per platform",
      "Real-time optimisation, never set-and-forget",
    ],
    aside: "We don't chase impressions. We chase outcomes you can count.",
    lead: {
      heading: "Campaigns that drive targeted traffic and conversions",
      body: [
        "We don't just run ads — we create social strategies tailored to your audience. Every rupee of ad spend is pushed toward maximum ROI, whether the goal is awareness, leads or direct sales. From Meta to LinkedIn, we place your brand where your customers scroll.",
        "Creative storytelling meets precise targeting. Every campaign is monitored, tested and optimised in real time, so you get results you can measure rather than reach you can't use.",
      ],
    },
    offeringsHeading: "Our paid social expertise",
    offeringsAside: "Insight first, creative second, iteration always.",
    offerings: [
      {
        title: "Full-funnel campaign strategy",
        note: "We go beyond boosting posts — full-funnel plans built around audience behaviour and business goals, backed by insight rather than guesswork.",
      },
      {
        title: "Ad creative & messaging",
        note: "Scroll-stopping visuals and copy, A/B tested by audience and adapted across single image, carousel, video and story placements.",
      },
      {
        title: "Audience targeting & retargeting",
        note: "Layered segmentation, lookalike modelling and platform-native tools connect you with the people most likely to convert.",
      },
      {
        title: "Platform coverage",
        note: "Facebook, Instagram, LinkedIn, X and YouTube — we choose platforms based on where your audience actually spends time.",
      },
      {
        title: "Landing & conversion flow",
        note: "The ad is half the job. We make sure the destination page, offer and form finish it.",
      },
      {
        title: "Monitoring & reporting",
        note: "Platform dashboards, UTM tracking and custom reports keep reach, CTR and cost-per-conversion in plain view.",
      },
    ],
    reasonsHeading: "Why choose us for paid social",
    reasons: [
      {
        title: "Data-driven strategy",
        note: "Smart targeting backed by real-time analytics — from audience segmentation to bid strategy.",
      },
      {
        title: "Performance-focused creative",
        note: "Ads built for each stage of the customer journey, designed to be remembered as well as seen.",
      },
      {
        title: "Transparent reporting",
        note: "Clear, timely reporting on the metrics that matter, with no vanity padding.",
      },
      {
        title: "Full-funnel expertise",
        note: "From awareness to re-engagement, we build cohesive funnels that are cost-effective and conversion-optimised.",
      },
    ],
    faqNote: "Quick answers for your paid social advertising queries.",
    faqs: [
      {
        q: "What platforms do you run paid social ads on?",
        a: "We run campaigns on Facebook, Instagram, LinkedIn, Twitter and YouTube — choosing platforms based on where your audience spends the most time and what aligns best with your campaign goals.",
      },
      {
        q: "How do you measure the success of a paid social campaign?",
        a: "We track reach, engagement, click-through rate, cost-per-click, conversions and return on ad spend. Our reports focus on business impact, not vanity metrics.",
      },
      {
        q: "What industries do you specialise in?",
        a: "We work across e-commerce, healthcare, education, SaaS and B2B services, tailoring each strategy to the industry's audience and competitive landscape.",
      },
      {
        q: "Do you handle ad creatives and copywriting?",
        a: "Yes. Our team creates visuals, copy and formats specific to each platform, and we A/B test messaging to improve results over time.",
      },
      {
        q: "What's your approach to targeting and retargeting?",
        a: "We build audience segments from behaviour, interests, location and platform data, then use lookalikes and advanced retargeting to re-engage warm users.",
      },
      {
        q: "What's the minimum budget required to start?",
        a: "We recommend a minimum of ₹25,000–₹50,000 per month depending on platform and campaign type, customised to your goals and expected returns.",
      },
    ],
    metaTitle: "Paid Social Ads Agency in Ahmedabad — Race Digital",
    metaDescription:
      "Data-driven paid social campaigns on Meta, Instagram and LinkedIn. Race Digital builds full-funnel social advertising that converts, not just reaches.",
  },
  {
    slug: "content-marketing",
    nav: "Content Marketing",
    eyebrow: "content marketing",
    title: "Content that converts —",
    accent: "every single time.",
    intro:
      "Race Digital is a data-driven content marketing agency in Ahmedabad, known for creating content that not only ranks but resonates. We blend storytelling with strategy to build authority and measurable results.",
    bullets: [
      "SEO-aligned editorial planning",
      "Visual storytelling, not walls of text",
      "Multi-channel distribution built in",
    ],
    aside: "Great content that nobody sees is just an expensive diary entry.",
    lead: {
      heading: "Planning that is purposeful and powerful",
      body: [
        "If your goal is to attract, engage and convert, it starts with a powerful content strategy. We combine storytelling with SEO and analytics to craft content that supports business goals and answers real audience needs.",
        "Every brief begins with the reader: what they're searching for, what's stopping them, and what would genuinely help. Then we write it, design it and put it where they already are.",
      ],
    },
    offeringsHeading: "The pillars we build on",
    offeringsAside: "Four foundations. One editorial engine.",
    offerings: [
      {
        title: "Audience-focused creation",
        note: "Persona development, topic ideation, keyword alignment, intent-driven copywriting and consistent brand voice across every piece.",
      },
      {
        title: "Visual storytelling & branding",
        note: "Graphic-supported blogs, infographics, branded content series and story-based visuals that improve recall and retention.",
      },
      {
        title: "Distribution & publishing",
        note: "Social calendars, email copy, guest blogging, influencer outreach and publishing across owned, earned and paid media.",
      },
      {
        title: "Performance & refresh",
        note: "We audit existing pages for gaps and decay, then refresh and repurpose the content that deserves another run.",
      },
    ],
    reasonsHeading: "Why brands trust our content team",
    reasons: [
      {
        title: "Strategy before words",
        note: "Data-backed plans built on audience insight and competitor analysis — never a random blog calendar.",
      },
      {
        title: "SEO built in",
        note: "Strategic keywords, clean formatting and internal linking are part of the draft, not a retrofit.",
      },
      {
        title: "Editorial standards",
        note: "Written by people who care about a sentence. Reviewed before it ever reaches your brand.",
      },
      {
        title: "Measured on outcomes",
        note: "Traffic, engaged reading time, assisted conversions — we report on what content actually earned.",
      },
    ],
    faqNote: "Quick answers for your content marketing questions.",
    faqs: [
      {
        q: "What types of content do you create?",
        a: "SEO blogs, website copy, landing pages, email campaigns, social media posts, whitepapers and more — tailored to your brand and business goals.",
      },
      {
        q: "How does content marketing help my business grow?",
        a: "Effective content attracts your ideal audience, builds trust and nurtures leads through the funnel. It improves rankings, drives traffic and lifts conversion rates over time.",
      },
      {
        q: "Will the content be SEO-friendly?",
        a: "Yes. Every piece is optimised with strategic keywords, proper formatting and internal linking so it ranks well and matches search intent.",
      },
      {
        q: "Can you help with content strategy too?",
        a: "Absolutely. We develop data-backed strategies based on audience insights, competitor analysis and business objectives to maximise ROI.",
      },
      {
        q: "How often should we publish new content?",
        a: "It depends on your goals and industry, but we typically recommend weekly or bi-weekly publishing for blogs, with regular web and social updates.",
      },
      {
        q: "Do you offer content audits or updates to existing pages?",
        a: "Yes. We audit existing content for gaps and outdated information, then refresh and repurpose it to improve performance and relevance.",
      },
    ],
    metaTitle: "Content Marketing Services in Ahmedabad — Race Digital",
    metaDescription:
      "Strategic content marketing from Race Digital, Ahmedabad. SEO blogs, web copy, visual storytelling and distribution built to rank, resonate and convert.",
  },
  {
    slug: "link-building",
    nav: "Link Building",
    eyebrow: "link building",
    title: "Backlinks that build",
    accent: "lasting authority.",
    intro:
      "Work with a trusted link building agency in Ahmedabad. We deliver high-quality backlink strategies that lift domain authority, organic rankings and search visibility — ethically.",
    bullets: [
      "White-hat link building services",
      "Contextual and niche-relevant links",
      "Transparent reporting and affordable plans",
    ],
    aside: "No PBNs. No link farms. Nothing you'd have to disavow later.",
    lead: {
      heading: "Building authority through links that deliver",
      body: [
        "Ranking well isn't just about great content — it's about earning trust and credibility online. One of the most powerful ways to do that is through high-quality backlinks that Google genuinely values.",
        "We focus on acquiring links from real, authoritative websites within your industry. Each placement is chosen to support your SEO goals, using white-hat techniques that deliver long-term results without risking your site's reputation.",
      ],
    },
    offeringsHeading: "The categories we build in",
    offeringsAside: "Manual outreach. Real editors. Real sites.",
    offerings: [
      {
        title: "Guest post outreach",
        note: "Authentic outreach campaigns that place your content on credible, high-traffic sites — earning natural links and targeted referral traffic.",
      },
      {
        title: "Resource page link building",
        note: "Deep research to find relevant resource pages, then outreach positioning your content as a genuine addition worth listing.",
      },
      {
        title: "Broken link building",
        note: "We scan industry sites for dead outbound links and offer your content as the updated replacement — better for them, better for you.",
      },
      {
        title: "Local & niche citations",
        note: "Trusted local sources and industry directories that support map-pack visibility and regional rankings.",
      },
    ],
    reasonsHeading: "Why choose Race Digital for link building",
    reasons: [
      {
        title: "Ethical, white-hat practices",
        note: "Manual outreach and editorial placements, fully compliant with Google's guidelines.",
      },
      {
        title: "Strong publisher network",
        note: "Contextual, niche-relevant links from sites with real audiences and real traffic.",
      },
      {
        title: "Transparent reporting",
        note: "Every link reported with its metrics, so you can verify the value of each placement.",
      },
      {
        title: "85% client retention",
        note: "Results-driven strategy at competitive rates — most clients stay long after the first campaign.",
      },
    ],
    faqNote: "Quick answers for your link building and SEO queries.",
    faqs: [
      {
        q: "What is link building and why does it matter?",
        a: "Link building is the process of acquiring backlinks from other websites to yours. It improves domain authority, boosts search rankings and drives organic traffic.",
      },
      {
        q: "Do you use white-hat link building techniques?",
        a: "Yes. We strictly follow ethical white-hat practices including manual outreach, editorial placements and compliance with Google's guidelines.",
      },
      {
        q: "How long does it take to see results?",
        a: "Results vary by industry, but most clients begin to see measurable improvements in rankings and traffic within 2–3 months.",
      },
      {
        q: "Can you guarantee a specific number of backlinks?",
        a: "We offer customised packages based on your goals. Each campaign ensures high-quality, niche-relevant backlinks with transparent monthly reporting.",
      },
      {
        q: "Do you offer local link building services?",
        a: "Absolutely. We tailor local backlink strategies that help businesses rank in their specific city or region using trusted, relevant local sources.",
      },
      {
        q: "What industries do you serve?",
        a: "We've worked with e-commerce, tech, healthcare, legal, SaaS and more. Our approach is tailored to your niche to maximise link value.",
      },
    ],
    metaTitle: "Link Building Services in Ahmedabad — Race Digital",
    metaDescription:
      "White-hat link building from Race Digital. Guest posts, resource pages and broken link outreach that raise domain authority and organic rankings.",
  },
  {
    slug: "web-design",
    nav: "Web Design",
    eyebrow: "web design & ux",
    title: "Websites built to",
    accent: "earn attention and act.",
    intro:
      "Elevate your brand with impactful web design, seamless UX and a digital strategy behind it. Race Digital builds professional websites that help businesses thrive online.",
    bullets: [
      "Your vision, our execution",
      "Crafting ideas into digital reality",
      "Competitive pricing, quality work",
    ],
    aside: "Your website is the front door. Most of them slam shut in five seconds.",
    lead: {
      heading: "More than websites — scalable digital platforms",
      body: [
        "We're a results-driven web design agency delivering affordable, high-quality digital platforms across India. We build more than websites; we build scalable assets that connect brands with their audience and grow with them.",
        "Poor design pushes potential customers away in seconds. A professional build creates a lasting first impression and an experience that earns trust and encourages action.",
      ],
    },
    offeringsHeading: "What we design and build",
    offeringsAside: "Design, build, launch, and keep improving.",
    offerings: [
      {
        title: "Custom website design",
        note: "Distinctive, brand-led designs built around your positioning rather than a recycled template.",
      },
      {
        title: "UI/UX development",
        note: "User behaviour analysis, wireframes and prototypes, then intuitive interface design focused on engagement and retention.",
      },
      {
        title: "Mobile-first responsive builds",
        note: "Every layout adapts perfectly across phones, tablets and desktops — because that's where most of your traffic lives.",
      },
      {
        title: "E-commerce development",
        note: "Conversion-ready storefronts that streamline the customer journey and grow revenue, not just catalogue size.",
      },
      {
        title: "Website redesigning",
        note: "Revamp an existing site with a modern look and better performance — speed, SEO and usability first.",
      },
      {
        title: "SEO-ready foundations",
        note: "Clean markup, fast Core Web Vitals and discoverable structure so marketing isn't fighting the build.",
      },
    ],
    reasonsHeading: "Why we're considered among India's best",
    reasons: [
      {
        title: "Experience that shows",
        note: "Years of practice means industry best practices are baked in from the first wireframe.",
      },
      {
        title: "Always current",
        note: "We track digital trends so your site looks fresh and stays ahead of the curve.",
      },
      {
        title: "Built to be found",
        note: "SEO-friendly landing pages designed to increase discoverability and traffic from day one.",
      },
      {
        title: "Looked after",
        note: "Round-the-clock monitoring for site health and uptime — we treat your site as a long-term asset.",
      },
    ],
    faqNote: "Get quick answers to your web design questions.",
    faqs: [
      {
        q: "What services do you offer?",
        a: "Custom website design, UI/UX development, mobile responsiveness, e-commerce development, website redesigning and SEO-ready builds.",
      },
      {
        q: "How much does a new website cost?",
        a: "Cost varies with design complexity, number of pages, functionality and integrations. We offer transparent, scalable pricing.",
      },
      {
        q: "Can you assist with SEO and digital marketing strategies?",
        a: "Yes. We integrate SEO best practices into the design and offer complete digital marketing support to drive traffic and visibility.",
      },
      {
        q: "Can you describe your UX research and design process?",
        a: "We start with user behaviour analysis, then create wireframes and prototypes, followed by intuitive UI design focused on engagement and retention.",
      },
      {
        q: "What's your approach to accessibility?",
        a: "We follow WCAG guidelines to create inclusive websites that are keyboard-friendly, screen reader compatible and easy to navigate for everyone.",
      },
      {
        q: "Can you develop Progressive Web Apps (PWAs)?",
        a: "Yes. We build PWAs that combine the best of web and mobile — fast, reliable, installable and optimised for modern browsers.",
      },
    ],
    metaTitle: "Web Design Agency in Ahmedabad, India — Race Digital",
    metaDescription:
      "Professional web design and UX from Race Digital. Custom websites, e-commerce builds and redesigns that load fast, rank well and convert visitors.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)!;
}
