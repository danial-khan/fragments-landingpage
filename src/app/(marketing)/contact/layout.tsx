import type { Metadata } from "next";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

const title = "Contact";
const description =
  "Reach the Fragments team for product questions, district pilots, press, or feedback. We route every message to the right person.";

export const metadata: Metadata = {
  title,
  description,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/contact/") }
    : undefined,
  openGraph: {
    title: `${title} | Fragments`,
    description,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/contact/") : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Fragments`,
    description,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
