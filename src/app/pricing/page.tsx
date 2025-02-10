"use client"

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
          Choose Your Learning Journey
        </h1>
        <p className="text-gray-600 mt-3 md:text-lg text-sm text-center">
          Select the plan that suits your educational needs and start exploring
          the world of knowledge
        </p>

        {/* Pricing Cards  */}
        <section id="pricing" className="flex items-center justify-center">
          <div className="container mx-auto px-4 pb-8">
            <div className="grid md:grid-cols-3 gap-10 md:gap-6 mt-10">
              {/* Basic Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 lg:px-10 md:px-10 text-center md:text-start">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  Basic Scholar
                </h3>
                <div className="text-4xl font-bold text-secondary mt-4 text-center">
                  $9 <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm text-center">
                  Perfect for curious minds
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔ Access to all basic fragments</li>
                  <li>✔ Join 3 fragment trails</li>
                  <li>✔ Basic discussion participation</li>
                </ul>
                <button className="mt-6 md:w-full bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition cursor-pointer">
                  Get Started
                </button>
              </div>

              {/* Most Popular Plan */}
              <div className="bg-white shadow-xl rounded-lg p-8 border-2 border-secondary transform scale-105 relative lg:px-10 md:px-10 text-center md:text-start">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 bg-secondary text-white text-xs uppercase px-4 py-1 rounded-full font-bold text-center">
                  Most Popular
                </div>
                <h3 className="text-3xl font-semibold text-gray-800 text-center">
                  Pro Scholar
                </h3>
                <div className="text-5xl font-bold mt-4 text-secondary text-center">
                  $19 <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm text-center">
                  For dedicated learners
                </p>
                <ul className="mt-4 space-y-2 text-gray-600 lg:px-10">
                  <li>✔ All Basic Scholar features</li>
                  <li>✔ Unlimited fragment trails</li>
                  <li>✔ Priority Support</li>
                  <li>✔ Ad free experience</li>
                </ul>
                <button className="mt-6 font-bold md:w-full bg-secondary text-white hover:bg-semiSecondary py-2 px-6 rounded-lg transition cursor-pointer">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 lg:px-10 md:px-10 text-center md:text-start">
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  Expert Scholar
                </h3>
                <div className="text-4xl font-bold mt-4 text-secondary text-center">
                  $39{" "}
                  <span className="text-lg text-gray-600 text-center">
                    /month
                  </span>
                </div>
                <p className="text-gray-600 mt-2 text-center">
                  For knowledge creators
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>✔ AI Pro Scholar features</li>
                  <li>✔ Create fragment trails</li>
                  <li>✔ Advanced analytics</li>
                  <li>✔ Verified author badge</li>
                </ul>
                <button className="mt-6 md:w-full bg-primary text-secondary font-bold py-2 px-6 rounded-lg hover:bg-secondary hover:text-white transition cursor-pointer">
                  Get Started
                </button>
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
                Can I upgrade my plan later?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 2 && (
                <div className="px-6 py-4 text-gray-600">
                  Yes, you can upgrade or downgrade your plan anytime from your
                  account settings.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(3)}
              >
                Do you offer customer support?
                <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
              </button>
              {activeFAQ === 3 && (
                <div className="px-6 py-4 text-gray-600">
                  Yes, our support team is available 24/7 via live chat and
                  email.
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