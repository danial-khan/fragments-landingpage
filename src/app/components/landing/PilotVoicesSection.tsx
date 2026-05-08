"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const voices = [
  {
    initials: "JM",
    accent: "from-highlight to-secondary",
    quote:
      "I finally have a place where students argue with evidence, not emojis. The trail format keeps AP-style rigor visible to parents, too.",
    name: "Jordan M.",
    role: "High school social studies lead · U.S. pilot",
  },
  {
    initials: "RK",
    accent: "from-secondary to-secondary-dark",
    quote:
      "Office hours used to mean repeating the same answer in twelve Slack threads. Now I drop one strong fragment and extend it in public.",
    name: "Riley K.",
    role: "STEM lecturer · Research university",
  },
  {
    initials: "AT",
    accent: "from-highlight to-secondary",
    quote:
      "As an independent tutor, I am tired of platforms that treat educators like content farms. Fragments actually puts reputation first.",
    name: "Alex T.",
    role: "Online writing coach · Independent educator",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FontAwesomeIcon key={i} icon={faStar} className="h-4 w-4" />
      ))}
    </div>
  );
}

export default function PilotVoicesSection() {
  return (
    <section
      id="voices"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(45,212,191,0.12),transparent)]"
        aria-hidden
      />
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Testimonials</p>
          <h2 className="frag-title mt-3">
            What educators told us in pilots and interviews
          </h2>
          <p className="mt-3 text-sm font-medium text-textMuted">
            Composite themes from U.S. and international pilot participants;
            individual experiences may vary.
          </p>
        </AnimateOnScroll>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {voices.map((v, i) => (
            <li key={v.initials}>
              <AnimateOnScroll delayMs={i * 90}>
                <div className="frag-card-interactive flex h-full flex-col p-8 shadow-md shadow-slate-900/5 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-bold text-white shadow-md ${v.accent}`}
                        aria-hidden
                      >
                        {v.initials}
                      </span>
                      <div>
                        <p className="font-bold text-secondary">{v.name}</p>
                        <p className="text-xs font-semibold uppercase tracking-wide text-textMuted">
                          {v.role}
                        </p>
                      </div>
                    </div>
                    <Stars />
                  </div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-textDark sm:text-[0.9375rem]">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs font-medium text-textMuted">
          Names and quotes are illustrative composites from pilot interviews and
          user research, not endorsements by specific individuals or institutions.
        </p>
      </div>
    </section>
  );
}
