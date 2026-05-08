"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateOnScroll from "./AnimateOnScroll";
import {
  faCogs,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
  return (
    <section
      id="explore"
      className="relative border-y border-slate-200/60 bg-gradient-to-b from-bgLight via-white to-primary/40 py-20 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <AnimateOnScroll className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Platform</p>
          <h2 className="frag-title mt-3">
            Everything you need to run discussions you are proud of
          </h2>
          <p className="frag-lead mt-4">
            Purpose-built for depth, accountability, and outcomes, not vanity
            metrics or endless notifications.
          </p>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <AnimateOnScroll className="lg:col-span-2" delayMs={0}>
            <article className="frag-card-interactive group relative flex h-full flex-col overflow-hidden p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-44 w-44 translate-x-10 -translate-y-10 rounded-full bg-highlight/10 blur-3xl transition group-hover:bg-highlight/20" />
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-highlight-dark ring-1 ring-border-light">
              <FontAwesomeIcon icon={faProjectDiagram} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-secondary sm:text-xl">Fragment trails</h3>
            <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-textMuted">
              Package your best thinking into short, sourced fragments that kick off
              a trail. Students extend it with questions and debate, so the whole
              class can see how ideas evolve, week after week.
            </p>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll delayMs={100}>
            <article className="frag-card-interactive group flex h-full flex-col bg-gradient-to-b from-white to-primary/50 p-5 sm:p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-secondary ring-1 ring-border-light">
              <FontAwesomeIcon icon={faUsers} className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-secondary sm:text-xl">Peer-powered learning</h3>
            <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-textMuted">
              Learners teach each other in the open. You get a living record of who
              contributed rigor, which is great for participation rubrics and honors reviews.
            </p>
            </article>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-3" delayMs={180}>
            <article className="frag-card-interactive group flex h-full flex-col p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-8">
            <div className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-accent-darker ring-1 ring-accent/25 lg:mb-0">
              <FontAwesomeIcon icon={faCogs} className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-secondary sm:text-xl">
                Moderation you can stand behind
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-textMuted lg:max-w-3xl">
                Every fragment is checked for plagiarism and baseline quality before
                it goes wide. Human reviewers handle nuance, tone, and academic
                fit, so your program stays aligned with district policies and your
                own standards.
              </p>
            </div>
            </article>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
