"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function SuggestDisciplineSection() {
  const [value, setValue] = useState("");

  return (
    <section
      id="suggest-discipline"
      className="border-t border-slate-200/60 bg-gradient-to-b from-primary/40 via-white to-bgAlt/60 py-20 sm:py-24"
    >
      <div className="frag-container">
        <div className="mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <p className="frag-eyebrow">Roadmap</p>
          <h2 className="frag-title mt-3">Request your next subject pathway</h2>
          <p className="frag-lead mx-auto mt-4 max-w-xl">
            Districts and departments move fast, and so do we. Tell us what discipline
            or standards alignment you need, and our team will prioritize the
            roadmap.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll className="mx-auto mt-10 max-w-md" delayMs={100}>
          <div className="frag-card-interactive rounded-2xl p-6 shadow-lg shadow-slate-900/5 sm:p-8">
            <label htmlFor="discipline-input" className="sr-only">
              Discipline name
            </label>
            <input
              id="discipline-input"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g., AP Environmental Science, Logic, Astronomy"
              className="frag-input text-center text-base font-medium"
            />
            <button type="button" className="frag-btn-primary mt-4 w-full py-3.5">
              Send request
            </button>
          </div>
        </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
