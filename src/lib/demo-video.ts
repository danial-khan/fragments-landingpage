/**
 * Build a privacy-friendly embed URL for homepage demo video.
 * Supports common YouTube and Vimeo public URLs.
 */
export function getDemoVideoEmbedSrc(rawUrl: string): string | null {
  const url = rawUrl.trim();
  if (!url) return null;

  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = parsed.pathname.replace(/^\//, "").split("/")[0];
    if (id && /^[\w-]{11}$/.test(id)) {
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
    }
  }

  if (host === "youtube.com" || host === "m.youtube.com") {
    if (parsed.pathname === "/watch") {
      const id = parsed.searchParams.get("v");
      if (id && /^[\w-]{11}$/.test(id)) {
        return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}`;
      }
    }
    const shorts = parsed.pathname.match(/^\/shorts\/([\w-]{11})/);
    if (shorts) {
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(shorts[1])}`;
    }
    const embed = parsed.pathname.match(/^\/embed\/([\w-]+)/);
    if (embed) {
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(embed[1])}`;
    }
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const fromPlayer = parsed.pathname.match(/^\/video\/(\d+)/);
    if (fromPlayer) {
      return `https://player.vimeo.com/video/${fromPlayer[1]}`;
    }
    const fromWatch = parsed.pathname.match(/^\/(\d+)/);
    if (fromWatch) {
      return `https://player.vimeo.com/video/${fromWatch[1]}`;
    }
  }

  return null;
}
