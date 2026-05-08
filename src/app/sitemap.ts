import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "./(marketing)/blog/_data";
import { canonicalUrl, getSiteUrl } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/blog/",
  "/contact/",
  "/how-it-works/",
  "/pricing/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) {
    return [];
  }

  const lastmod = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: canonicalUrl(path),
    lastModified: lastmod,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}/`),
    lastModified: lastmod,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticEntries, ...blogPosts];
}
