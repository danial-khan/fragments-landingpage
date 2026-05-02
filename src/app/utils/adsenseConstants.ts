/** Matches the AdSense account; override with NEXT_PUBLIC_ADSENSE_CLIENT_ID if needed. */
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-9403979213834433";

export function adsenseLoaderSrc(): string {
  return `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(ADSENSE_CLIENT_ID)}`;
}
