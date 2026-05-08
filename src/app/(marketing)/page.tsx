import type { Metadata } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/seo-constants";
import { canonicalUrl, hasPublicSiteUrl } from "@/lib/site";
import MarketingHomeClient from "./MarketingHomeClient";

export const metadata: Metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  alternates: hasPublicSiteUrl()
    ? { canonical: canonicalUrl("/") }
    : undefined,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: hasPublicSiteUrl() ? canonicalUrl("/") : undefined,
    images: hasPublicSiteUrl()
      ? [
          {
            url: "/logo-no-bg.png",
            width: 512,
            height: 512,
            alt: "Fragments",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
};

export default function HomePage() {
  return <MarketingHomeClient />;
}
