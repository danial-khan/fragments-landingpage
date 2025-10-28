"use client"

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FRONTEND_APP_PATH = process.env.NEXT_PUBLIC_FRONTEND_APP_BASE_URL;

const Pricing = () => {
    const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

    const toggleFAQ = (faqNumber: number) => {
      setActiveFAQ(activeFAQ === faqNumber ? null : faqNumber);
    };
  return (
    <div>
      <Navbar />
      <main className="bg-[#f9f5f0] py-10 md:px-10 px-4">
        <h1 className="font-bold md:text-3xl text-2xl text-center">
        Choose Your Fragments Journey
        </h1>
        <p className="text-gray-600 mt-3 md:text-lg text-sm text-center">
        Whether you&apos;re here to learn or teach, we have the perfect plan for you
        </p>

        {/* Pricing Cards  */}
        <section id="pricing" className="flex items-center justify-center">
          <div className="container mx-auto px-4 pb-8">
            {/* Learner Plans */}
            <div className="mt-10 mb-8">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                For Learners
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Learner */}
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Basic Learner
                  </h3>
                  <div className="text-4xl font-bold text-secondary mt-4">
                    $5 <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Perfect for curious minds starting their learning journey
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 text-left">
                    <li>✔ Access to all fragments</li>
                    <li>✔ Join fragment trails</li>
                    <li>✔ Basic discussion participation</li>
                    <li className="text-orange-600">⚠ Contains advertisements</li>
                  </ul>
                  <a
                    href={`${FRONTEND_APP_PATH}/auth/register?plan=basic_learner`}
                    className="mt-6 w-full bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition cursor-pointer block text-center"
                  >
                    Get Started
                  </a>
                </div>

                {/* Pro Learner */}
                <div className="bg-white shadow-xl rounded-lg p-6 border-2 border-secondary relative text-center transform hover:scale-105 transition-transform">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 bg-secondary text-white text-xs uppercase px-4 py-1 rounded-full font-bold">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                    Pro Learner
                  </h3>
                  <div className="text-4xl font-bold text-secondary mt-4">
                    $15 <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    For dedicated learners who want an ad-free experience
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 text-left">
                    <li>✔ All Basic Learner features</li>
                    <li>✔ <strong>Ad-free experience</strong></li>
                    <li>✔ Weekly curated newsletter</li>
                    <li>✔ Priority support</li>
                  </ul>
                  <a
                    href={`${FRONTEND_APP_PATH}/auth/register?plan=pro_learner`}
                    className="mt-6 w-full bg-secondary text-white hover:bg-semiSecondary font-bold py-2 px-6 rounded-lg transition cursor-pointer block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* Educator Plans */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                For Educators
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Basic Educator */}
                <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Basic Educator
                  </h3>
                  <div className="text-4xl font-bold text-secondary mt-4">
                    $20 <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    For educators who want to share knowledge
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 text-left">
                    <li>✔ Create fragments</li>
                    <li>✔ Create fragment trails</li>
                    <li>✔ Advanced analytics</li>
                    <li className="text-orange-600">⚠ Contains advertisements</li>
                  </ul>
                  <a
                    href={`${FRONTEND_APP_PATH}/auth/register?plan=basic_educator`}
                    className="mt-6 w-full bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition cursor-pointer block text-center"
                  >
                    Get Started
                  </a>
                </div>

                {/* Pro Educator */}
                <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-orange-500 text-center transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-2">
                    <span className="border-orange-500 text-white text-xs uppercase px-3 py-1 rounded-full font-bold">
                      Premium
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Pro Educator
                  </h3>
                  <div className="text-4xl font-bold text-secondary mt-4">
                    $30 <span className="text-lg text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">
                    Premium features for professional educators
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 text-left">
                    <li>✔ All Basic Educator features</li>
                    <li>✔ <strong>Ad-free experience</strong></li>
                    <li>✔ Weekly curated newsletter</li>
                    <li>✔ Verified educator badge</li>
                    <li>✔ Priority support</li>
                  </ul>
                  <a
                    href={`${FRONTEND_APP_PATH}/auth/register?plan=pro_educator`}
                    className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 font-bold py-2 px-6 rounded-lg transition cursor-pointer block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ  */}
        <section className="container mx-auto py-4 md:py-12 lg:max-w-2xl md:max-w-xl max-w-lg">
          <h2 className="md:text-3xl text-2xl font-bold text-center text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(1)}
              >
                What is your refund policy?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 1 && (
                <div className="px-6 py-4 text-gray-600">
                  We offer a 30-day money-back guarantee on all plans. No
                  questions asked.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(2)}
              >
                What&apos;s the difference between Learner and Educator plans?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 2 && (
                <div className="px-6 py-4 text-gray-600">
                  Learner plans are for those who want to consume and engage with educational content. Educator plans include all learner features plus the ability to create fragments, build trails, and access advanced analytics to track your impact.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(3)}
              >
                What does &quot;ad-free experience&quot; mean?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 3 && (
                <div className="px-6 py-4 text-gray-600">
                  Basic plans (Learner & Educator) include educational advertisements to keep costs low. Pro plans remove all ads for an uninterrupted learning and teaching experience.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(4)}
              >
                Can I switch between plans?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 4 && (
                <div className="px-6 py-4 text-gray-600">
                  Yes! You can upgrade or downgrade your plan anytime from your account settings. If you switch from Learner to Educator or vice versa, you&apos;ll get access to the appropriate features immediately.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Pricing