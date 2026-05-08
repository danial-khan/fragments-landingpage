import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "How it works";
const description =
  "Rules and mechanisms behind Fragments: AI and human review, badges, flags, rewards, and how fragment trails stay trustworthy for schools.";

export const metadata: Metadata = {
  title,
  description,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/how-it-works/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/how-it-works/") : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
