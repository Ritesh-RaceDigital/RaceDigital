export const SITE_URL = "https://human-crafted-design.lovable.app";

export const ORG = {
  name: "Race Digital",
  legalName: "Race Digital",
  phone: "+91-6353663006",
  email: "info@racedigital.in",
  street: "B-812/A, World Trade Tower, Makarba",
  city: "Ahmedabad",
  region: "Gujarat",
  postalCode: "380051",
  country: "IN",
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

/** Builds the meta + canonical link pair for a leaf route. */
export function pageHead({ title, description, path, type = "website", image }: PageSeo) {
  const url = `${SITE_URL}${path}`;
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: ORG.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path}`,
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    areaServed: { "@type": "City", name: ORG.city },
    provider: {
      "@type": "Organization",
      name: ORG.name,
      url: SITE_URL,
      telephone: ORG.phone,
    },
  };
}
