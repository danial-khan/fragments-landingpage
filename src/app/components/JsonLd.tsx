import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/lib/seo-constants";
import { absoluteAsset, canonicalUrl, hasPublicSiteUrl } from "@/lib/site";

/**
 * Site-wide Organization + WebSite structured data for rich results.
 */
export default function JsonLd() {
  if (!hasPublicSiteUrl()) return null;

  const url = canonicalUrl("/");
  const payload = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}#organization`,
        name: SITE_NAME,
        url,
        description: DEFAULT_DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          url: absoluteAsset("/logo-no-bg.png"),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        name: SITE_NAME,
        url,
        description: DEFAULT_DESCRIPTION,
        publisher: { "@id": `${url}#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON-LD requires inline script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
