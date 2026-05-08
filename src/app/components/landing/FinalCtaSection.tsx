"use client";

import Link from "next/link";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FinalCtaSection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-20 sm:py-28"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary-dark via-secondary to-slate-900"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_25%_25%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_85%_55%,rgba(251,146,60,0.15),transparent_40%)] motion-safe:animate-pulse motion-reduce:animate-none"
        aria-hidden
      />
      <AnimateOnScroll className="relative frag-container">
        <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-balance text-xl font-bold tracking-tight text-white sm:text-2xl">
          Bring Fragments to your learners this term
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-snug text-primary/95 sm:text-[0.9375rem]">
          Create a free account in minutes. Invite your cohort, launch your first
          trail, and see how fast the room levels up. No enterprise sales call
          required to get started.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3">
          <Link
            href={`${frontendAppBaseUrl}/auth/register`}
            className="frag-btn-primary inline-flex min-w-[10rem] px-5 shadow-md shadow-orange-500/25 sm:min-w-[11rem]"
          >
            Create free account
          </Link>
          <Link
            href={`${frontendAppBaseUrl}/auth/login`}
            className="inline-flex min-w-[10rem] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-4 py-2.5 text-xs font-bold text-white backdrop-blur transition hover:border-highlight-light/50 hover:bg-white/15 sm:min-w-[11rem] sm:text-sm"
          >
            I already have access
          </Link>
        </div>
        <p className="mt-6 text-xs font-medium text-primary/70">
          Need a district-wide rollout or custom terms?{" "}
          <Link href="/contact/" className="text-highlight-light underline-offset-2 hover:underline">
            Talk to our team
          </Link>
          .
        </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
