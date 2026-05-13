"use client";

import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import AdSenseDisplay from "../components/AdSenseDisplay";
import Hero from "../components/landing/Hero";
import TrustStrip from "../components/landing/TrustStrip";
import WhyJoinSection from "../components/landing/WhyJoinSection";
import EngagementSection from "../components/landing/EngagementSection";
import DemoVideoSection from "../components/landing/DemoVideoSection";
import WorkflowSection from "../components/landing/WorkflowSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ComparisonSection from "../components/landing/ComparisonSection";
import PilotVoicesSection from "../components/landing/PilotVoicesSection";
import DisciplinesSection from "../components/landing/DisciplinesSection";
import SuggestDisciplineSection from "../components/landing/SuggestDisciplineSection";
import FinalCtaSection from "../components/landing/FinalCtaSection";

config.autoAddCss = false;

export default function MarketingHomeClient() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyJoinSection />
      <EngagementSection />

      {process.env.NEXT_PUBLIC_ADSENSE_SLOT_LANDING ? (
        <section
          className="border-y border-slate-200/80 bg-white py-8"
          aria-label="Advertisement"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <AdSenseDisplay
              slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_LANDING}
              className="min-h-[120px]"
            />
          </div>
        </section>
      ) : null}

      <DemoVideoSection />
      <WorkflowSection />
      <FeaturesSection />
      <ComparisonSection />
      <PilotVoicesSection />
      <DisciplinesSection />
      <SuggestDisciplineSection />
      <FinalCtaSection />
    </>
  );
}
