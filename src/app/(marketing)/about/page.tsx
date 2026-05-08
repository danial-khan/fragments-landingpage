"use client";

import {
  faBook,
  faCertificate,
  faChalkboardUser,
  faCog,
  faComments,
  faDollarSign,
  faLock,
  faScaleBalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.35),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_40%)]"
          aria-hidden
        />
        <div className="relative frag-container">
          <div className="max-w-lg">
            <p className="frag-hero-eyebrow">About us</p>
            <h1 className="frag-hero-h1 mt-1.5">About Fragments</h1>
            <p className="frag-hero-lead max-w-none">
              The only platform online that encourages scholarly discourse while
              financially rewarding knowledgeable and dedicated educators.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">We invite…</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faBook} className="mx-auto h-9 w-9 text-amber-500" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-amber-700">Educators</span> to share
                their expertise with fragments of information.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon icon={faComments} className="mx-auto h-9 w-9 text-teal-600" />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-teal-700">Learners</span> to ask
                questions and participate in scholarly discussion to extend the
                trail of fragments.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-slate-50/80 p-5 ring-1 ring-slate-100 sm:p-6">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="mx-auto h-9 w-9 text-blue-700"
              />
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                <span className="font-bold text-blue-800">Reviewers</span> to provide
                feedback in the spirit of knowledge sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-slate-50 py-12 sm:py-16">
        <div className="frag-container text-center">
          <h2 className="frag-title">Our mission</h2>
          <p className="frag-lead mx-auto mt-3 max-w-2xl">
            Fragments is dedicated to creating an interactive educational platform
            that bridges the gap between traditional learning and modern
            collaboration. We believe in the power of user-generated content to
            create meaningful educational experiences.
          </p>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {[
              { icon: faBook, title: "Learn", sub: "Access quality educational content.", color: "text-blue-700" },
              { icon: faChalkboardUser, title: "Educate", sub: "Share your expertise.", color: "text-amber-600" },
              { icon: faComments, title: "Discuss", sub: "Engage in meaningful dialogue.", color: "text-teal-700" },
              { icon: faScaleBalanced, title: "Debate", sub: "Challenge ideas respectfully.", color: "text-slate-800" },
              { icon: faDollarSign, title: "Reward", sub: "Receive payment for your expertise.", color: "text-amber-600" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5"
              >
                <FontAwesomeIcon icon={item.icon} className={`mx-auto h-7 w-7 ${item.color}`} />
                <h3 className={`mt-2 text-sm font-bold ${item.color}`}>{item.title}</h3>
                <p className="mt-1.5 text-xs font-medium text-textMuted sm:text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="frag-container">
          <h2 className="frag-title text-center">Platform features</h2>
          <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
            {[
              {
                icon: faCog,
                title: "Fragment trails",
                body: "Create and follow educational paths curated by expert contributors.",
                border: "border-l-teal-500",
              },
              {
                icon: faUsers,
                title: "Community engagement",
                body: "Connect with fellow learners and educators in your field of interest.",
                border: "border-l-amber-500",
              },
              {
                icon: faLock,
                title: "Quality assurance",
                body: "AI-powered moderation and expert review process.",
                border: "border-l-blue-600",
              },
              {
                icon: faCertificate,
                title: "Verified contributors",
                body: "Content created by authenticated subject matter experts.",
                border: "border-l-amber-500",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`flex gap-3 rounded-xl border border-slate-200/90 border-l-[3px] bg-slate-50/50 p-4 shadow-sm ring-1 ring-slate-100 sm:gap-4 sm:p-5 ${f.border}`}
              >
                <FontAwesomeIcon icon={f.icon} className="mt-0.5 h-7 w-7 shrink-0 text-secondary" />
                <div>
                  <h3 className="text-[0.9375rem] font-semibold text-secondary">{f.title}</h3>
                  <p className="mt-1 text-[13px] font-medium leading-relaxed text-textMuted sm:text-sm">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
