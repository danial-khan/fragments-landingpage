import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Pricing";
const description =
  "Choose a Fragments plan for learners or educators: transparent pricing for fragment trails, moderation, and cohort-ready discussion.";

export const metadata: Metadata = {
  title,
  description,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/pricing/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/pricing/") : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
  },
};

export default function PricingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
