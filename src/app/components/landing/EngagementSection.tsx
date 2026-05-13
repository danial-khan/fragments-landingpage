"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faFlagCheckered,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  {
    icon: faFlagCheckered,
    title: "Challenges & themed prompts",
    body:
      "Kick off trails around a topic, a text, or a weekly challenge so the cohort has a shared focal point—and a clear finish line for discussion.",
    iconBg: "bg-primary text-secondary ring-1 ring-border-light",
  },
  {
    icon: faArrowTrendUp,
    title: "Momentum on topics that matter",
    body:
      "Replies stack in order on the trail, so learners feel where the conversation is heating up inside your class—without random algorithmic trending from the wider web.",
    iconBg: "bg-primary text-highlight-dark ring-1 ring-border-light",
  },
  {
    icon: faUserPlus,
    title: "Referrals & controlled growth",
    body:
      "Invite partner classrooms, colleagues, and trusted learners with links and cohorts you govern—grow participation without losing moderation or context.",
    iconBg: "bg-accent/15 text-accent-darker ring-1 ring-accent/25",
  },
] as const;

export default function EngagementSection() {
  return (
    <section
      id="engagement"
      className="relative scroll-mt-24 border-b border-slate-200/60 bg-gradient-to-b from-bgLight/80 via-white to-primary/25 py-20 sm:scroll-mt-28 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Engagement</p>
          <h2 className="frag-title mt-3">
            Features learners feel—and admins can steer
          </h2>
          <p className="frag-lead mt-4">
            Challenges, topical energy, and referrals work best when they live
            inside a serious discussion surface. Fragments is built around trails,
            review, and invites you control.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item, i) => (
            <AnimateOnScroll key={item.title} delayMs={i * 100}>
              <article className="frag-card-interactive flex h-full flex-col p-5 sm:p-6">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBg}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-secondary sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
                  {item.body}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
