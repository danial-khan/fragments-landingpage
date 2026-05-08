import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Blog";
const description =
  "Product updates, teaching tips, and stories from teams building better class discussions with Fragments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/blog/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/blog/") : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
  },
};

export default function BlogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
