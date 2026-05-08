"use client";
import Link from "next/link";
import {
  faRobot,
  faAward,
  faTrash,
  faFlag,
  faInfoCircle,
  faExclamationTriangle,
  faUserShield,
  faComments,
  faTrophy,
  faCheckCircle,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { frontendAppBaseUrl } from "../../utils/frontendAppBaseUrl";

export default function HowItWorks() {
  const rules = [
    {
      icon: faRobot,
      title: "AI & Human Review",
      description:
        "When a fragment is first published, it is evaluated first by AI and second by human reviewers (subscribed users approved to review)",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      icon: faAward,
      title: "Gold Badge Quality",
      description:
        "When a fragment passes the initial AI review it is tagged with a gold badge to demonstrate it has passed this first quality assessment step for plagiarism and validity",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
    },
    {
      icon: faTrash,
      title: "Quality Control",
      description:
        "If the fragment does not pass this first step it is removed",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faFlag,
      title: "Human Reviewer Flags",
      description:
        "The second review is by human reviewers - if a reviewer has concerns over the fragment, that fragment is marked with a red flag",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faInfoCircle,
      title: "Reviewer Feedback",
      description:
        "Users can hover over the red flag and a text box will appear outlining the reviewer's concerns",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
    },
    {
      icon: faExclamationTriangle,
      title: "Three Strikes Rule",
      description:
        "If there are three red flags the fragment is removed",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faUserShield,
      title: "No Self-Review",
      description:
        "Reviewers cannot review themselves",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary",
    },
    {
      icon: faComments,
      title: "AI-Scored Comments",
      description:
        "Users can comment on fragments - these comments are evaluated by AI to give a score of between -1 and +1. The comment and the score show up under the fragment. If the score is between 0 and +1, the comment is marked in green. If the score is between -1 and 0, the comment is marked in red",
      color: "text-highlight",
      bgColor: "bg-highlight/10",
      borderColor: "border-highlight",
    },
    {
      icon: faGraduationCap,
      title: "Educator Rewards",
      description:
        "Payment (Fragments Rewards) can only be earned by educators",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      icon: faTrophy,
      title: "Earning Mechanisms",
      description:
        "The two mechanisms of earning rewards are i) number of upvotes for each fragment published and ii) when the fragment earns a comment by another user that, on a scale of -1 to +1, is adjudged by AI to score at least +0.5",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
    },
  ];

  const readyAside = (
    <aside
      className="rounded-xl border border-accent/20 bg-gradient-to-b from-primary/90 to-white p-4 shadow-sm ring-1 ring-slate-100/90 sm:p-5 lg:border-l-4 lg:border-l-highlight/35 lg:pl-6"
      aria-label="Get started"
    >
      <div className="hidden border-b border-slate-200/80 pb-3 text-[10px] font-bold uppercase tracking-wider text-highlight-dark lg:block">
        Next step
      </div>
      <FontAwesomeIcon
        icon={faCheckCircle}
        className="mb-2 mt-1 text-2xl text-accent lg:mt-2"
        aria-hidden
      />
      <h3 className="text-base font-semibold text-secondary">Ready to start?</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-textMuted sm:text-[13px]">
        Create an account or reach out—we will help you launch trails your learners
        can follow.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <Link
          href={`${frontendAppBaseUrl}/auth/register`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-3 py-2 text-center text-xs font-bold text-white shadow-sm transition hover:bg-accent-dark sm:text-[13px]"
        >
          Create free account
        </Link>
        <Link
          href="/contact/"
          className="inline-flex w-full items-center justify-center rounded-lg border border-highlight bg-white px-3 py-2 text-center text-xs font-semibold text-highlight transition hover:bg-highlight hover:text-white sm:text-[13px]"
        >
          Contact us
        </Link>
      </div>
    </aside>
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-30 bg-[url('/about_header.png')] bg-cover bg-center"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-slate-900/75" aria-hidden />
        <div className="relative frag-container">
          <div className="max-w-lg">
            <p className="frag-hero-eyebrow">Product</p>
            <h1 className="frag-hero-h1 mt-1.5">How it works</h1>
            <p className="frag-hero-lead max-w-md">
              Rules and mechanisms that keep Fragments trustworthy for scholarly
              discourse in classrooms and cohorts.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-slate-200/60 bg-gradient-to-b from-primary/40 to-white py-9 sm:py-12">
        <div className="frag-container">
          <div className="mb-6 lg:hidden">{readyAside}</div>

          <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-10">
            <div className="relative lg:col-span-7 xl:col-span-8">
              <div className="mb-6 text-center lg:mb-8 lg:text-left">
                <p className="frag-eyebrow">Platform</p>
                <h2 className="frag-title mt-1.5">Fragments rules</h2>
                <p className="frag-lead mx-auto mt-2 max-w-md lg:mx-0">
                  Clear, transparent rules for quality, fairness, and meaningful
                  engagement.
                </p>
              </div>

              <div className="relative md:px-2">
                {/* Continuous vertical spine — straight line (desktop only) */}
                <div
                  className="pointer-events-none absolute bottom-4 left-1/2 top-2 hidden w-px -translate-x-1/2 bg-highlight/40 md:block"
                  aria-hidden
                />

                <ol className="relative space-y-6 md:space-y-7">
                  {rules.map((rule, index) => {
                    const step = index + 1;
                    const isRight = index % 2 === 1;

                    return (
                      <li
                        key={rule.title}
                        id={`how-step-${step}`}
                        className="relative flex flex-col gap-3 md:grid md:grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,1fr)] md:items-center md:gap-x-0 md:gap-y-0"
                      >
                        {/* Step node: first on mobile (above card), centered on desktop */}
                        <div className="order-1 flex items-center gap-2 pl-0 md:order-none md:col-start-2 md:flex-col md:items-center md:justify-center md:gap-0.5 md:pl-0 md:py-0.5">
                          <span className="relative z-[2] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-[11px] font-extrabold text-white shadow-sm ring-2 ring-white md:h-9 md:w-9 md:text-xs">
                            {step}
                          </span>
                          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-textMuted md:text-center">
                            Step {step}
                          </span>
                        </div>

                        <article
                          className={`order-2 relative z-[1] w-full max-w-xl frag-card-interactive rounded-lg p-4 !border-l-[3px] md:order-none md:max-w-none md:p-4 ${rule.borderColor} ${
                            isRight
                              ? "md:col-start-3 md:justify-self-start md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-px md:before:w-8 md:before:-translate-x-full md:before:-translate-y-1/2 md:before:bg-highlight/45 md:before:content-['']"
                              : "md:col-start-1 md:justify-self-end md:after:absolute md:after:right-0 md:after:top-1/2 md:after:h-px md:after:w-8 md:after:translate-x-full md:after:-translate-y-1/2 md:after:bg-highlight/45 md:after:content-['']"
                          }`}
                        >
                          <div className="mb-1.5 flex items-center gap-2 md:hidden">
                            <span
                              className={`inline-flex h-8 w-8 items-center justify-center rounded-md ${rule.bgColor} ${rule.color}`}
                            >
                              <FontAwesomeIcon icon={rule.icon} className="text-sm" />
                            </span>
                          </div>
                          <div className="hidden items-start gap-2.5 md:flex">
                            <div
                              className={`${rule.bgColor} ${rule.color} flex h-8 w-8 shrink-0 items-center justify-center rounded-md`}
                            >
                              <FontAwesomeIcon icon={rule.icon} className="text-sm" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-[0.9375rem] font-semibold leading-snug text-secondary">
                                {rule.title}
                              </h3>
                              <p className="mt-1 text-[13px] leading-snug text-textDark sm:text-sm">
                                {rule.description}
                              </p>
                            </div>
                          </div>
                          <div className="md:hidden">
                            <h3 className="text-[0.9375rem] font-semibold leading-snug text-secondary">
                              {rule.title}
                            </h3>
                            <p className="mt-1 text-[13px] leading-snug text-textDark">
                              {rule.description}
                            </p>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            <div className="mt-10 hidden lg:col-span-5 lg:mt-0 lg:block xl:col-span-4">
              <div className="sticky top-24">{readyAside}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
