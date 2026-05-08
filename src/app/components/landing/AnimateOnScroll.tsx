"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Applied before the element enters the viewport */
  inactiveClass?: string;
  /** Applied once visible (include transition here) */
  activeClass?: string;
  /** Stagger multiple siblings by passing 0, 80, 160, … */
  delayMs?: number;
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

export default function AnimateOnScroll({
  children,
  className = "",
  inactiveClass = "translate-y-8 opacity-0",
  activeClass =
    "translate-y-0 opacity-100 transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
  delayMs = 0,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  /** Show immediately when already in view or when motion is reduced (avoids stuck opacity-0). */
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const roughVisible =
      rect.bottom > 0 &&
      rect.top < vh &&
      rect.right > 0 &&
      rect.left < vw;
    if (roughVisible) {
      if (delayMs <= 0) {
        setOn(true);
        return;
      }
      const t = window.setTimeout(() => setOn(true), delayMs);
      return () => window.clearTimeout(t);
    }
  }, [delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let showTimer: number | undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showTimer = window.setTimeout(() => {
            setOn(true);
            if (once) obs.disconnect();
          }, delayMs);
        } else if (!once) {
          if (showTimer) window.clearTimeout(showTimer);
          setOn(false);
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (showTimer) window.clearTimeout(showTimer);
    };
  }, [delayMs, once, rootMargin, threshold]);

  return (
    <div
      ref={ref}
      className={`${on ? activeClass : inactiveClass} motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
