/**
 * Canonical origin for this marketing site (sitemap, canonical URLs, Open Graph).
 * Set in production, e.g. NEXT_PUBLIC_SITE_URL=https://www.yoursite.com (no trailing slash).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  return raw.replace(/\/+$/, "");
}

export function getMetadataBase(): URL | undefined {
  const origin = getSiteUrl();
  if (!origin) return undefined;
  try {
    return new URL(origin);
  } catch {
    return undefined;
  }
}

/** Matches next.config `trailingSlash: true` for HTML canonicals and sitemap page URLs. */
export function canonicalUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${base}${withSlash}`;
}

/** Public files under `/public` — no trailing slash (avoids `/logo.png/`). */
export function absoluteAsset(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p.replace(/\/+$/, "")}`;
}

export function hasPublicSiteUrl(): boolean {
  return getSiteUrl().length > 0;
}
