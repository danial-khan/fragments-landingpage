"use client";

import { useEffect, useRef, useState } from "react";
import { getDemoVideoEmbedSrc } from "@/lib/demo-video";
import AnimateOnScroll from "./AnimateOnScroll";

const rawUrl = process.env.NEXT_PUBLIC_HOMEPAGE_DEMO_VIDEO_URL ?? "";
const embedSrc = rawUrl ? getDemoVideoEmbedSrc(rawUrl) : null;
const iframeTitle =
  process.env.NEXT_PUBLIC_HOMEPAGE_DEMO_VIDEO_TITLE?.trim() ||
  "How Fragments works — product demo video";

export default function DemoVideoSection() {
  const [loadIframe, setLoadIframe] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedSrc) return;

    const el = sentinelRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoadIframe(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setLoadIframe(true);
          obs.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!embedSrc) {
    return null;
  }

  return (
    <section
      id="demo-video"
      className="scroll-mt-24 border-y border-slate-200/60 bg-gradient-to-b from-white via-primary/20 to-white py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
      aria-labelledby="demo-video-heading"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Watch</p>
          <h2 id="demo-video-heading" className="frag-title mt-3">
            See how it works
          </h2>
          <p className="frag-lead mt-4">
            A short walkthrough beats a long scroll. Turn sound on for narration, or
            follow along with captions on YouTube or Vimeo.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mx-auto mt-10 max-w-4xl" delayMs={80}>
          <div
            ref={sentinelRef}
            className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900/5 shadow-lg ring-1 ring-slate-100/90"
          >
            {loadIframe ? (
              <iframe
                title={iframeTitle}
                src={
                  embedSrc.includes("youtube-nocookie.com")
                    ? `${embedSrc}${embedSrc.includes("?") ? "&" : "?"}rel=0`
                    : embedSrc
                }
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div
                className="flex h-full min-h-[12rem] items-center justify-center px-6 text-center sm:min-h-[14rem]"
                aria-hidden
              >
                <p className="text-sm font-medium text-textMuted">
                  Loading video…
                </p>
              </div>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
