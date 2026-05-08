import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "About";
const description =
  "Fragments invites educators, learners, and reviewers into scholarly trails: mission, platform features, and how we bridge traditional learning with modern collaboration.";

export const metadata: Metadata = {
  title,
  description,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/about/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/about/") : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
