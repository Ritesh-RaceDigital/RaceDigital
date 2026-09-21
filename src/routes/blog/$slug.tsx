import { pageHead, breadcrumbLd, ORG, SITE_URL } from "@/lib/seo";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import { PageShell } from "@/components/site/page-shell";
import { Reveal } from "@/components/site/reveal";
import { FinalCta } from "@/components/site/final-cta";
import { posts, formatPostDate } from "@/lib/blog-content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post not found — Race Digital" }, { name: "robots", content: "noindex" }],
      };
    }
    const { metaTitle, metaDescription, title, date, author } = loaderData.post;
    const path = `/blog/${params.slug}`;
    return {
      ...pageHead({ title: metaTitle, description: metaDescription, path, type: "article" }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: metaDescription,
            datePublished: date,
            dateModified: date,
            author: { "@type": "Person", name: author },
            publisher: { "@type": "Organization", name: ORG.name, url: SITE_URL },
            mainEntityOfPage: `${SITE_URL}${path}`,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: title, path },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogPostRoute,
});

function BlogPostRoute() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <article>
        <header className="relative overflow-hidden border-b border-border bg-background">
          <span className="pointer-events-none absolute -right-40 -top-32 size-[440px] rounded-full bg-g-yellow-soft blur-3xl" />
          <div className="relative mx-auto max-w-[860px] px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
            <Link to="/blog" className="tag inline-block hover:text-foreground">
              ← all notes
            </Link>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-g-blue">{post.category}</p>
            <h1 className="display-lg mt-4">{post.title}</h1>
            <p className="mt-7 text-[1.05rem] leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">
              {post.author} · {formatPostDate(post.date)} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[860px] px-5 py-16 md:px-8 md:py-24">
          {post.body.map((section, i) => (
            <Reveal key={section.heading} delay={(i % 3) * 60}>
              <section className="mb-12 last:mb-0">
                <h2 className="font-display text-[1.6rem] font-extrabold leading-tight tracking-tight sm:text-[2rem]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="mt-5 text-[1.02rem] leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 md:py-20">
          <p className="tag">keep reading</p>
          <div className="mt-8">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group grid gap-3 border-t border-border py-7 last:border-b md:grid-cols-[9rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.category}
                  </span>
                  <h3 className="font-display text-[1.35rem] font-extrabold leading-tight tracking-tight transition-colors duration-300 group-hover:text-g-blue">
                    {p.title}
                  </h3>
                  <span className="pill-chip shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    <ChevronRight className="size-4" strokeWidth={2.4} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
