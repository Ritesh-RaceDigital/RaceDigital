import { pageHead, breadcrumbLd, serviceLd, faqLd } from "@/lib/seo";
import { createFileRoute, notFound } from "@tanstack/react-router";

import { ServicePage } from "@/components/site/service-page";
import { services } from "@/lib/services-content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — Race Digital" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { metaTitle, metaDescription, nav } = loaderData.service;
    const path = `/services/${params.slug}`;
    return {
      ...pageHead({ title: metaTitle, description: metaDescription, path }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(serviceLd({ name: nav, description: metaDescription, path })),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: nav, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(loaderData.service.faqs)),
        },
      ],
    };
  },
  component: ServiceRoute,
});

function ServiceRoute() {
  const { service } = Route.useLoaderData();
  return <ServicePage service={service} />;
}
