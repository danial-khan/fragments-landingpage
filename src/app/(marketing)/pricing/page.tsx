"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";
import UserPanelAdSense from "../../components/UserPanelAdSense";

const userPanelAdSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_USER_PANEL ?? "";

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  blurb: string;
  features: { text: string; warn?: boolean }[];
  cta: string;
  href: string;
  variant: "default" | "popular" | "premium";
};

const learnerPlans: Plan[] = [
  {
    id: "basic_learner",
    name: "Basic Learner",
    price: "$5",
    period: "/month",
    blurb: "For curious minds starting their learning journey.",
    features: [
      { text: "Access to all fragments" },
      { text: "Join fragment trails" },
      { text: "Basic discussion participation" },
      { text: "Contains advertisements", warn: true },
    ],
    cta: "Get started",
    href: `${frontendAppBaseUrl}/auth/register?plan=basic_learner`,
    variant: "default",
  },
  {
    id: "pro_learner",
    name: "Pro Learner",
    price: "$15",
    period: "/month",
    blurb: "Ad-free learning with a few extras for serious students.",
    features: [
      { text: "Everything in Basic Learner" },
      { text: "Ad-free experience" },
      { text: "Weekly curated newsletter" },
      { text: "Priority support" },
    ],
    cta: "Get started",
    href: `${frontendAppBaseUrl}/auth/register?plan=pro_learner`,
    variant: "popular",
  },
];

const educatorPlans: Plan[] = [
  {
    id: "basic_educator",
    name: "Basic Educator",
    price: "$20",
    period: "/month",
    blurb: "Share knowledge and run trails with core tools.",
    features: [
      { text: "Create fragments" },
      { text: "Create fragment trails" },
      { text: "Advanced analytics" },
      { text: "Contains advertisements", warn: true },
    ],
    cta: "Get started",
    href: `${frontendAppBaseUrl}/auth/register?plan=basic_educator`,
    variant: "default",
  },
  {
    id: "pro_educator",
    name: "Pro Educator",
    price: "$30",
    period: "/month",
    blurb: "Premium tools and visibility for professional educators.",
    features: [
      { text: "Everything in Basic Educator" },
      { text: "Ad-free experience" },
      { text: "Weekly curated newsletter" },
      { text: "Verified educator badge" },
      { text: "Priority support" },
    ],
    cta: "Get started",
    href: `${frontendAppBaseUrl}/auth/register?plan=pro_educator`,
    variant: "premium",
  },
];

const faqs = [
  {
    q: "What is your refund policy?",
    a: "We offer a 30-day money-back guarantee on all plans. No questions asked.",
  },
  {
    q: "What is the difference between Learner and Educator plans?",
    a: "Learner plans are for people who want to read, join trails, and discuss. Educator plans add creating fragments and trails plus deeper analytics so you can lead and measure impact.",
  },
  {
    q: "What does ad-free experience mean?",
    a: "Basic Learner and Basic Educator include ads to keep pricing lower. Pro plans remove ads so the interface stays focused on teaching and learning.",
  },
  {
    q: "Can I switch between plans?",
    a: "Yes. You can upgrade or downgrade anytime from your account settings. When you move between Learner and Educator tiers, your permissions update right away.",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const isPopular = plan.variant === "popular";
  const isPremium = plan.variant === "premium";

  const shell =
    isPopular
      ? "border-secondary/45 ring-2 ring-secondary/20 shadow-md"
      : isPremium
        ? "border-accent/35 ring-2 ring-accent/15 shadow-md"
        : "border-slate-200/90";

  return (
    <article
      className={`frag-card-interactive relative flex h-full flex-col overflow-hidden p-5 text-left sm:p-6 ${shell}`}
    >
      {(isPopular || isPremium) && (
        <div
          className={`absolute left-0 right-0 top-0 h-1 ${isPopular ? "bg-secondary" : "bg-accent"}`}
          aria-hidden
        />
      )}

      <div className={isPopular || isPremium ? "pt-3" : "pt-1"}>
        {isPopular ? (
          <p className="mb-3 text-center">
            <span className="inline-flex rounded-full bg-secondary/12 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-secondary sm:text-[10px]">
              Most popular
            </span>
          </p>
        ) : null}
        {isPremium ? (
          <p className="mb-3 text-center">
            <span className="inline-flex rounded-full bg-accent/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-accent-dark sm:text-[10px]">
              Premium
            </span>
          </p>
        ) : null}

        <h3 className="text-center text-base font-bold text-secondary sm:text-lg">
          {plan.name}
        </h3>
        <div className="mt-2 text-center">
          <span className="text-xl font-extrabold tracking-tight text-secondary sm:text-2xl">
            {plan.price}
          </span>
          <span className="text-xs font-semibold text-textMuted sm:text-sm">
            {plan.period}
          </span>
        </div>
        <p className="mt-2 text-center text-xs font-medium leading-relaxed text-textMuted sm:text-sm">
          {plan.blurb}
        </p>

        <ul className="mt-5 flex flex-1 flex-col gap-2 text-xs font-medium leading-snug text-textDark sm:gap-2.5 sm:text-sm">
          {plan.features.map((f) => (
            <li key={f.text} className="flex gap-2.5">
              {f.warn ? (
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-accent-dark">
                  <FontAwesomeIcon icon={faTriangleExclamation} className="h-3.5 w-3.5" />
                </span>
              ) : (
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight">
                  <FontAwesomeIcon icon={faCheck} className="h-2.5 w-2.5" />
                </span>
              )}
              <span className={f.warn ? "text-textMuted" : ""}>{f.text}</span>
            </li>
          ))}
        </ul>

        <a
          href={plan.href}
          className={
            isPopular
              ? "frag-btn-navy mt-6 w-full"
              : isPremium
                ? "frag-btn-primary mt-6 w-full"
                : "mt-6 inline-flex w-full items-center justify-center rounded-lg border-2 border-secondary bg-white px-4 py-2.5 text-center text-xs font-bold text-secondary shadow-sm transition hover:bg-secondary hover:text-white sm:text-sm"
          }
        >
          {plan.cta}
        </a>
      </div>
    </article>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainColumn = (
    <div className="min-w-0 flex-1 space-y-12 sm:space-y-14">
      <section
        id="pricing"
        className="border-y border-slate-200/60 bg-gradient-to-b from-primary/50 via-white to-white py-10 sm:py-14"
        aria-labelledby="learners-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="frag-eyebrow">Learners</p>
          <h2 id="learners-heading" className="frag-title mt-2">
            For learners
          </h2>
          <p className="frag-lead mx-auto mt-2 max-w-lg">
            Read, join trails, and discuss—pick ad-supported Basic or focused Pro.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {learnerPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section
        className="border-b border-slate-200/60 bg-white pb-10 sm:pb-14"
        aria-labelledby="educators-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="frag-eyebrow">Educators</p>
          <h2 id="educators-heading" className="frag-title mt-2">
            For educators
          </h2>
          <p className="frag-lead mx-auto mt-2 max-w-lg">
            Create fragments and trails, see analytics, and scale with your cohorts.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {educatorPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-2xl pb-6" aria-labelledby="faq-heading">
        <div className="text-center">
          <p className="frag-eyebrow">Support</p>
          <h2 id="faq-heading" className="frag-title mt-2">
            Frequently asked questions
          </h2>
        </div>
        <div className="mt-6 space-y-2.5 sm:mt-8">
          {faqs.map((item, i) => {
            const n = i + 1;
            const open = openFaq === n;
            return (
              <div
                key={item.q}
                className="frag-card overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-xs font-semibold text-secondary transition hover:bg-primary/40 sm:px-5 sm:py-3.5 sm:text-sm"
                  onClick={() => setOpenFaq(open ? null : n)}
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`h-3.5 w-3.5 shrink-0 text-textMuted transition-transform duration-200 sm:h-4 sm:w-4 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open ? (
                  <div className="border-t border-slate-100 bg-slate-50/60 px-4 py-3 text-xs font-medium leading-relaxed text-textMuted sm:px-5 sm:text-sm">
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative frag-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="frag-hero-eyebrow">Pricing</p>
            <h1 className="frag-hero-h1 mt-1.5">Choose your Fragments journey</h1>
            <p className="frag-hero-lead mx-auto !max-w-xl text-balance">
              Whether you are here to learn or to teach, pick a plan that matches how
              you use fragment trails.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-slate-50/50">
        <div className="frag-container py-10 sm:py-12">
          <div
            className={
              userPanelAdSlot
                ? "flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-12"
                : "flex flex-col"
            }
          >
            {mainColumn}
            {userPanelAdSlot ? (
              <aside className="mx-auto w-full max-w-[320px] shrink-0 xl:sticky xl:top-24 xl:self-start">
                <UserPanelAdSense />
              </aside>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
