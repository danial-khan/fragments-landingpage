"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const ours = [
  "Structured fragment trails, not endless scroll",
  "Two-step moderation: AI screening + human judgment",
  "Educators rewarded when the room levels up",
  "Transparent, syllabus-friendly discussion",
];

const theirs = [
  "Hot takes drown out careful explanations",
  "Spam and off-topic replies burn instructor time",
  "Great teaching rarely gets recognized",
  "Hard to show rigor to admins or families",
];

export default function ComparisonSection() {
  return (
    <section className="border-y border-slate-200/60 bg-gradient-to-b from-white to-primary/35 py-20 sm:py-24 lg:py-28">
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Why switch</p>
          <h2 className="frag-title mt-3">
            Built for serious learners, not generic social feeds
          </h2>
          <p className="frag-lead mt-4">
            If you have ever moderated a class forum that went sideways, you
            already know why Fragments exists.
          </p>
        </AnimateOnScroll>

        <div className="mx-auto mt-14 grid w-full max-w-6xl gap-6 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="frag-card-interactive h-full bg-gradient-to-b from-primary to-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-highlight-dark">
                With Fragments
              </p>
              <ul className="mt-6 space-y-4">
                {ours.map((line) => (
                  <li key={line} className="flex gap-3 text-textDark">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight text-white">
                      <FontAwesomeIcon icon={faCheck} className="h-3 w-3" />
                    </span>
                    <span className="text-xs font-medium leading-snug sm:text-sm">
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delayMs={120}>
            <div className="frag-card-interactive h-full bg-slate-50/70 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Status quo forums
              </p>
              <ul className="mt-6 space-y-4">
                {theirs.map((line) => (
                  <li key={line} className="flex gap-3 text-textMuted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                      <FontAwesomeIcon icon={faXmark} className="h-3 w-3" />
                    </span>
                    <span className="text-xs leading-snug sm:text-sm">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
