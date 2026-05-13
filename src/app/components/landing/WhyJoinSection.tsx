"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faGift,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const pillars = [
  {
    icon: faBookOpenReader,
    title: "Learning that sticks",
    body:
      "Fragment trails keep sources, questions, and debate in one readable thread—so students see how ideas build instead of losing them in a noisy feed.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faGift,
    title: "Rewards for showing up well",
    body:
      "Participation is visible: quality replies, evidence-backed posts, and steady contribution show up in the trail—useful for rubrics, honors reviews, and celebrating growth.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
  {
    icon: faMedal,
    title: "Recognition for educators",
    body:
      "Educators who set the tone, moderate with care, and raise the level of the room get credit for it—not buried under vanity metrics from generic social apps.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
] as const;

export default function WhyJoinSection() {
  return (
    <section
      id="why-join"
      className="relative scroll-mt-24 border-y border-slate-200/60 bg-gradient-to-b from-white via-primary/30 to-white py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Why join</p>
          <h2 className="frag-title mt-3">
            Learning, rewards, and recognition—on purpose
          </h2>
          <p className="frag-lead mt-4">
            Fragments is for cohorts that want depth and accountability: students
            learn in the open, effort is legible, and educators who lead great
            discussions are seen.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.title} delayMs={i * 90}>
              <article className="frag-card-interactive flex h-full flex-col p-5 sm:p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${p.iconBg}`}
                >
                  <FontAwesomeIcon icon={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-secondary sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
                  {p.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
