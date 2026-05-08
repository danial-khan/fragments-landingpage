export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  read: string;
  excerpt: string;
  /** ISO 8601 for structured data and Open Graph */
  publishedISO: string;
};

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "welcome-to-fragments",
    title: "Welcome to Fragments",
    description:
      "Why Fragments exists: scholarly trails, educator recognition, and quality at scale.",
    date: "April 12, 2026",
    read: "4 min read",
    excerpt:
      "Why we built a discussion platform that treats educators like partners, not an afterthought.",
    publishedISO: "2026-04-12",
  },
  {
    slug: "fragment-trails-explained",
    title: "Fragment trails, explained",
    description:
      "How fragment trails keep class discussions structured, cumulative, and easy to follow.",
    date: "April 5, 2026",
    read: "6 min read",
    excerpt:
      "A quick tour of how trails stay rigorous, readable, and worth your class time.",
    publishedISO: "2026-04-05",
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
