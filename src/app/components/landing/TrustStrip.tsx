"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faShieldHalved,
  faUserCheck,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import AnimateOnScroll from "./AnimateOnScroll";

const items = [
  {
    icon: faShieldHalved,
    title: "Academic integrity first",
    sub: "AI + human review on every fragment",
  },
  {
    icon: faUserCheck,
    title: "Built for real classrooms",
    sub: "K–12, higher ed, and independent experts",
  },
  {
    icon: faGraduationCap,
    title: "Educators get credit",
    sub: "Quality teaching is recognized, not buried.",
  },
  {
    icon: faWandMagicSparkles,
    title: "Signal over noise",
    sub: "Threaded trails that stay on topic",
  },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trust and product highlights"
      className="relative z-0 -mt-px border-b border-slate-200/70 bg-gradient-to-b from-white via-primary/30 to-bgAlt/80 py-12 sm:py-14"
    >
      <div className="frag-container">
        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {items.map((item, i) => (
            <li key={item.title}>
              <AnimateOnScroll delayMs={i * 75} className="h-full">
                <div className="frag-card-interactive flex h-full gap-4 p-4 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-highlight to-secondary text-white shadow-md shadow-teal-900/15">
                    <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-secondary sm:text-sm">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-snug text-textMuted sm:text-sm">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
