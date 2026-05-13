"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronUp,
  faRoute,
  faShieldHalved,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { scrollToSection } from "../../utils/navigation";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";

const heroBullets = [
  "What it is: a discussion platform where each cohort follows one fragment trail—not a scattered social feed.",
  "What you get: AI screening plus human review before posts go wide to the class.",
  "Who wins: learners earn visible participation; educators who elevate discussion get recognized.",
];

const chips = [
  {
    title: "No credit card",
    sub: "Browse public trails",
  },
  {
    title: "AI + human review",
    sub: "Every post screened",
  },
  {
    title: "Challenges & topics",
    sub: "Themed trails & invites",
  },
];

const STEP_INTERVAL_MS = 4200;

type TrailStep = {
  id: string;
  phase: string;
  title: string;
  context: string;
  badge: string;
  visual: "logo" | "books" | "review";
  educatorHint: string;
  learnerHint: string;
};

const trailSteps: TrailStep[] = [
  {
    id: "open",
    phase: "Opening",
    title: "Educator posts the opening fragment",
    context: "Honors U.S. History · Trail underway",
    badge: "Live",
    visual: "logo",
    educatorHint: "Sourced fragment plus a clear question for the class.",
    learnerHint: "Join when you are ready to read and respond.",
  },
  {
    id: "build",
    phase: "Building",
    title: "The class carries the thread forward",
    context: "Sources and counterpoints stack in order",
    badge: "Growing",
    visual: "books",
    educatorHint: "Steer without micromanaging every reply.",
    learnerHint: "Replies stay visible so the room learns together.",
  },
  {
    id: "review",
    phase: "Review",
    title: "Two checks before a post goes wide",
    context: "Automation first, then trained reviewers",
    badge: "Quality",
    visual: "review",
    educatorHint: "A paper trail admins can stand behind.",
    learnerHint: "Tone and depth closer to seminar norms.",
  },
];

function StepVisual({ kind }: { kind: TrailStep["visual"] }) {
  if (kind === "logo") {
    return (
      <div className="flex min-h-[200px] items-center justify-center sm:min-h-[220px]">
        <Image
          src="/logo-no-bg.png"
          alt=""
          width={400}
          height={400}
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 76vw, 240px"
          className="h-auto w-[76%] max-w-[220px] drop-shadow-[0_16px_32px_rgba(30,64,175,0.12)] sm:max-w-[240px]"
        />
      </div>
    );
  }
  if (kind === "books") {
    return (
      <div className="flex min-h-[200px] items-center justify-center px-3 sm:min-h-[220px]">
        <Image
          src="/books.svg"
          alt=""
          width={200}
          height={180}
          sizes="(max-width: 640px) 70vw, 200px"
          className="h-auto max-h-[180px] w-auto max-w-[min(70vw,200px)] object-contain opacity-95 drop-shadow-[0_12px_28px_rgba(15,118,110,0.12)] sm:max-h-[200px]"
        />
      </div>
    );
  }
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 px-4 sm:min-h-[220px]">
      <p className="text-center text-[10px] font-semibold uppercase tracking-wide text-textMuted">
        AI screen, then human review
      </p>
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl text-highlight-dark shadow-inner ring-1 ring-border-light sm:h-16 sm:w-16 sm:text-2xl">
          <FontAwesomeIcon icon={faShieldHalved} className="h-7 w-7 sm:h-8 sm:w-8" />
        </span>
        <span className="select-none text-xl font-light text-slate-300">+</span>
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-xl text-secondary shadow-inner ring-1 ring-border-light sm:h-16 sm:w-16 sm:text-2xl">
          <FontAwesomeIcon icon={faUserCheck} className="h-7 w-7 sm:h-8 sm:w-8" />
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    setStep((s) => (s + 1) % trailSteps.length);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    timerRef.current = setInterval(advance, STEP_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [advance, reducedMotion]);

  const current = trailSteps[step];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-primary via-primary to-white pb-0 pt-24 md:pt-28"
    >
      {/* Depth: dot grid + soft blobs */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184_/_0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184_/_0.06)_1px,transparent_1px)] bg-[size:44px_44px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full bg-teal-300/20 blur-3xl md:h-[26rem] md:w-[26rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-blue-300/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-white/40 blur-2xl"
        aria-hidden
      />

      <div className="relative z-[2] mx-auto max-w-7xl px-8 pb-16 pt-2 sm:pb-20 lg:px-16 lg:pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 lg:items-center lg:gap-x-24">
          {/* Left: 7 cols on large */}
          <div className="col-span-12 flex flex-col text-center lg:col-span-7 lg:pr-2 lg:text-left">
            <p className="mb-2 inline-flex items-center justify-center gap-2 self-center rounded-full border border-highlight/25 bg-white/80 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-highlight-dark shadow-sm sm:text-[10px] lg:self-start">
              Academic discussion for classrooms & cohorts
            </p>

            <h1 className="text-balance text-2xl font-bold tracking-tight text-secondary sm:text-3xl lg:text-[2rem] lg:leading-tight">
              One <span className="text-highlight-dark">scholarly trail</span> per
              class—<span className="text-accent">moderated</span>, measurable, and
              fair to educators who lead
            </h1>

            <p className="mx-auto mt-3 max-w-[52ch] text-sm font-medium leading-snug text-textDark sm:text-[0.9375rem] lg:mx-0">
              <strong className="font-bold text-secondary">Fragments</strong> replaces
              noisy feeds with ordered fragment trails, two-step review (AI then
              humans), and clear credit for learners and educators.
            </p>

            <p className="mx-auto mt-2 max-w-[52ch] text-xs font-medium leading-relaxed text-textMuted sm:text-sm lg:mx-0">
              If you teach or run a program, you get a surface that reads like serious
              coursework—sources in line, real debate, and a story you can defend to
              families and admins.
            </p>

            <ul className="mx-auto mt-3 max-w-[52ch] space-y-2 text-left text-xs font-medium leading-snug text-textDark sm:text-sm lg:mx-0">
              {heroBullets.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-highlight"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setReadMore((v) => !v)}
              className="mx-auto mt-2 flex items-center gap-1 text-xs font-semibold text-secondary hover:text-highlight-dark sm:text-sm lg:mx-0"
              aria-expanded={readMore}
            >
              {readMore ? (
                <>
                  Read less{" "}
                  <FontAwesomeIcon icon={faChevronUp} className="h-3 w-3" />
                </>
              ) : (
                <>
                  Read more{" "}
                  <FontAwesomeIcon icon={faChevronDown} className="h-3 w-3" />
                </>
              )}
            </button>

            {readMore ? (
              <div className="mx-auto mt-2 max-w-[52ch] space-y-2.5 border-l-2 border-highlight/40 pl-3 text-left text-xs font-medium leading-relaxed text-textMuted sm:text-sm lg:mx-0">
                <p>
                  Fragments is built for serious learners and the educators who guide
                  them: fragment trails keep rigor visible, and two-step moderation
                  gives admins a story they can defend.
                </p>
                <p>
                  District and department leads get a surface that looks like serious
                  coursework—sources in line, clear prompts, and a path families can
                  follow—without the doom-scroll patterns baked into generic social
                  apps.
                </p>
                <p>
                  Start with a public trail, invite your cohort when you are ready,
                  and scale from a single section to a whole program without changing
                  tools.
                </p>
              </div>
            ) : null}

            <div className="mx-auto mt-6 flex w-full max-w-md flex-col gap-2.5 sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
              <Link
                href={`${frontendAppBaseUrl}/auth/register`}
                className="frag-btn-navy inline-flex min-w-[9rem] cursor-pointer px-5 sm:min-w-[9.5rem]"
              >
                Get Started
              </Link>
              <button
                type="button"
                onClick={() => scrollToSection("explore", router)}
                className="frag-btn-secondary inline-flex min-w-[9rem] cursor-pointer px-5 sm:min-w-[9.5rem]"
              >
                Learn More
              </button>
            </div>

            <div className="mx-auto mt-2 text-center text-xs font-medium text-textMuted lg:mx-0 lg:text-left">
              <button
                type="button"
                onClick={() => scrollToSection("why-join", router)}
                className="font-semibold text-highlight-dark underline decoration-highlight/40 underline-offset-2 transition hover:text-secondary"
              >
                Why join Fragments
              </button>
              <span className="text-textMuted"> · </span>
              <button
                type="button"
                onClick={() => scrollToSection("engagement", router)}
                className="font-semibold text-highlight-dark underline decoration-highlight/40 underline-offset-2 transition hover:text-secondary"
              >
                Engagement & growth
              </button>
              {process.env.NEXT_PUBLIC_HOMEPAGE_DEMO_VIDEO_URL ? (
                <>
                  <span className="text-textMuted"> · </span>
                  <button
                    type="button"
                    onClick={() => scrollToSection("demo-video", router)}
                    className="font-semibold text-highlight-dark underline decoration-highlight/40 underline-offset-2 transition hover:text-secondary"
                  >
                    Watch demo
                  </button>
                </>
              ) : null}
            </div>

            <p className="mx-auto mt-3 text-center text-xs font-medium text-textMuted lg:mx-0 lg:text-left">
              No credit card to explore trails · Free account to get started
            </p>

            <div className="mx-auto mt-6 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
              {chips.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200/90 bg-white/90 px-3 py-3 text-center shadow-sm ring-1 ring-slate-100/80 sm:text-left"
                >
                  <p className="text-xs font-bold text-secondary">{c.title}</p>
                  <p className="mt-0.5 text-[11px] font-medium leading-snug text-textMuted">
                    {c.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 5 cols — preview stack */}
          <div className="col-span-12 flex justify-center lg:col-span-5 lg:justify-end">
            <div
              className={`relative w-full max-w-[22rem] motion-reduce:transform-none ${
                reducedMotion
                  ? ""
                  : "sm:-rotate-[1.25deg] motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:rotate-0"
              }`}
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(100%,420px)] w-[min(100%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-200/50 via-blue-200/35 to-white blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 -z-10 hidden translate-x-2 translate-y-3 rotate-[-4deg] rounded-3xl border border-slate-200/60 bg-white/50 shadow-md sm:block"
                aria-hidden
              />

              <div className="relative rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-[0_28px_56px_-16px_rgba(30,64,175,0.18)] ring-1 ring-slate-100/90 backdrop-blur-sm sm:p-6">
                <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-highlight to-secondary text-white shadow-md shadow-teal-900/20">
                    <FontAwesomeIcon icon={faRoute} className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1" aria-live="polite">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-highlight-dark">
                      {current.phase}
                    </p>
                    <p className="text-sm font-bold leading-snug text-secondary sm:text-base">
                      {current.title}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-textMuted sm:text-sm">
                      {current.context}
                    </p>
                  </div>
                  <span className="hidden shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-slate-600 sm:inline-block">
                    {current.badge}
                  </span>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-slate-200/60">
                  <div className="relative min-h-[200px] sm:min-h-[220px]">
                    {trailSteps.map((s, i) => (
                      <div
                        key={s.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:duration-0 ${
                          i === step ? "z-10 opacity-100" : "z-0 opacity-0"
                        }`}
                        aria-hidden={i !== step}
                      >
                        <StepVisual kind={s.visual} />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2 border-t border-slate-100/90 bg-white/95 py-2.5">
                    {trailSteps.map((s, i) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === step
                            ? "w-7 bg-highlight"
                            : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Show trail step ${i + 1}: ${s.phase}`}
                        aria-current={i === step}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/90 p-3 ring-1 ring-slate-100/80">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="min-h-[4.5rem] rounded-lg bg-white/95 p-2.5 ring-1 ring-teal-100/90 sm:p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wide text-highlight-dark">
                        Educator
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-snug text-textDark sm:text-xs">
                        {current.educatorHint}
                      </p>
                    </div>
                    <div className="min-h-[4.5rem] rounded-lg bg-white/95 p-2.5 ring-1 ring-border-light sm:p-3">
                      <p className="text-[9px] font-bold uppercase tracking-wide text-secondary">
                        Learners
                      </p>
                      <p className="mt-1 text-[11px] font-medium leading-snug text-textMuted sm:text-xs">
                        {current.learnerHint}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex gap-1.5" aria-hidden>
                  <span
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                      step === 0 ? "bg-highlight" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                      step === 1 ? "bg-secondary-medium" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${
                      step === 2 ? "bg-secondary" : "bg-slate-200"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal transition into next section */}
      <div
        className="relative z-[1] -mb-px h-14 w-full overflow-hidden sm:h-16 lg:h-20"
        aria-hidden
      >
        <svg
          className="absolute bottom-0 left-1/2 h-full w-[120%] min-w-[800px] -translate-x-1/2 text-white"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,80 L1200,8 L1200,80 Z" />
        </svg>
      </div>
    </section>
  );
}
