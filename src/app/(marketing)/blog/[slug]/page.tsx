import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { BlogPostMeta } from "../_data";
import { BLOG_POSTS, getBlogPost } from "../_data";
import { SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: { absolute: "Post not found | Blog" } };
  }
  const pageTitle = `${post.title} | Blog`;
  return {
    title: { absolute: pageTitle },
    description: post.description,
    alternates: hasPublicSiteUrl()
      ? { canonical: canonicalUrl(`/blog/${slug}/`) }
      : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedISO,
      url: hasPublicSiteUrl() ? canonicalUrl(`/blog/${slug}/`) : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function BlogPostingJsonLd({ post, slug }: { post: BlogPostMeta; slug: string }) {
  if (!hasPublicSiteUrl()) return null;
  const payload = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedISO,
    url: canonicalUrl(`/blog/${slug}/`),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl(`/blog/${slug}/`),
    },
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: absoluteAsset("/logo-no-bg.png"),
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}

function PostBody({ slug }: { slug: string }) {
  switch (slug) {
    case "welcome-to-fragments":
      return (
        <>
          <p>
            Class forums should not feel like social media with a syllabus stapled
            on top. Fragments is built for the moment when a student finally asks
            the right follow-up, and when an educator&apos;s careful explanation
            deserves to be seen, extended, and credited.
          </p>
          <p>
            We combine <strong>fragment trails</strong> (structured, cumulative
            threads) with <strong>two-step moderation</strong> so rigor is the
            default, not the exception. Educators who consistently raise the level
            of the room get recognized, because sustainable learning cultures start
            with respect for teaching time.
          </p>
          <p>
            Whether you lead AP sections, graduate seminars, or independent cohorts,
            Fragments is here to help you run discussions you are proud to show
            families and administrators.
          </p>
        </>
      );
    case "fragment-trails-explained":
      return (
        <>
          <p>
            A <strong>fragment</strong> is a tight piece of teaching: sources in
            line, context, and a question that invites the room to think, not a wall
            of text or a drive-by hot take.
          </p>
          <p>
            A <strong>trail</strong> is what happens next. Learners extend the thread
            with follow-ups, counter-evidence, and clarifications. Because everything
            stays in one readable path, you can see how understanding evolved, and who
            contributed rigor along the way.
          </p>
          <p>
            Trails pair naturally with rubrics: participation becomes observable, and
            quality moderation means the conversation stays on standard without
            constant instructor triage.
          </p>
        </>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="border-b border-slate-200/80 bg-white">
      <BlogPostingJsonLd post={post} slug={slug} />
      <div className="frag-container">
        <div className="mx-auto max-w-3xl py-12 sm:py-16">
          <Link
            href="/blog/"
            className="text-sm font-bold text-highlight-dark transition hover:text-secondary"
          >
            ← Back to blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-textMuted">
            {post.date} · {post.read}
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-secondary sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-8 max-w-none space-y-4 text-base font-medium leading-relaxed text-textDark">
            <PostBody slug={slug} />
          </div>
        </div>
      </div>
    </article>
  );
}
