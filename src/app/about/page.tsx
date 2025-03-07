"use client";
import {
  faBook,
  faCertificate,
  faChalkboardUser,
  faCog,
  faComments,
  faLock,
  faScaleBalanced,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <>
      <Navbar />
      <div className="font-sans">
        <section className="relative w-full h-96 p-10 md:p-20 bg-primary shadow-lg">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/about_header.png')" }}
            ></div>

            {/* Overlay (Color Shade) */}
            <div className="absolute inset-0 bg-white opacity-70"></div>

          <div className="relative flex items-center w-full h-full">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary text-center md:text-start">
                About Fragments
              </h2>
              <p className="text-lg md:text-xl text-secondary font-semibold text-center md:text-start">
                Fostering a scholarly environment where knowledge meets
                community, and learning knoves no bounds
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-[#f9f5f0] flex justify-center items-center">
          <div className="text-center text-secondary max-w-4xl flex flex-col gap-5">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>

            <p className="font-semibold px-10">
              Fragments is dedicated to creating an interactive educational
              platform that bridges the gap between traditional learning and
              modern collaboration. We believe in the power of user-generated
              content to create meaningful educational experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 pt-10 md:pt-5 gap-10 md:gap-20">
              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faBook}
                  className="text-secondary h-8 w-8"
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Learn
                </h3>
                <p className="text-sm max-w-[8rem]">
                  Access quality educational content.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faChalkboardUser}
                  className="text-secondary h-8 w-8"
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Educate
                </h3>
                <p className="text-sm max-w-[8rem]">Share your expertise.</p>
              </div>

              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faComments}
                  className="text-secondary h-8 w-8"
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Discuss
                </h3>
                <p className="text-sm max-w-[8rem]">
                  Engage in meaningful dialogue.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  className="text-secondary h-8 w-8"
                />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Debate
                </h3>
                <p className="text-sm max-w-[8rem]">
                  Challenge ideas respectfully.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-[#FEFDE9] flex justify-center items-center">
          <div className="text-center px-4 text-secondary max-w-6xl">
            <h2 className="text-3xl font-semibold mb-8">Platform Features</h2>
            {/* hover:bg-secondary hover:text-white transition-colors duration-300 TO PUT HOVER EFFECT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-4">
              <div className="bg-white shadow-lg rounded-lg p-4 flex gap-3 border border-secondary">
                <div>
                  <FontAwesomeIcon icon={faCog} className="text-3xl" />
                </div>
                <div className="text-start">
                  <h3 className="text-xl font-semibold">Fragment Trails</h3>
                  <p className="text-semibold text-sm mt-2">
                    Create and follow educational paths curated by expert
                    contribiuters
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 flex gap-3 border border-secondary">
                <div>
                  <FontAwesomeIcon icon={faUsers} className="text-3xl" />
                </div>
                <div className="text-start">
                  <h3 className="text-xl md:text-lg font-bold">
                    Community Engagement
                  </h3>
                  <p className="text-semibold text-sm mt-2">
                    Connect with fellow learners and educators in your field of
                    interest
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 flex gap-3 border border-secondary">
                <div>
                  <FontAwesomeIcon icon={faLock} className="text-3xl" />
                </div>
                <div className="text-start">
                  <h3 className="text-xl md:text-lg font-semibold">
                    Quality Assurance
                  </h3>
                  <p className="text-semibold text-sm mt-2">
                    AI-powered moderation and expert review process
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-4 flex gap-3 border border-secondary">
                <div>
                  <FontAwesomeIcon icon={faCertificate} className="text-3xl" />
                </div>
                <div className="text-start">
                  <h3 className="text-xl md:text-lg font-semibold">
                    Verified Contribiuters
                  </h3>
                  <p className="text-semibold text-sm mt-2">
                    Content created by authenticated subject matter experts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-[#f9f5f0] flex justify-center items-center">
          <div className="text-center text-secondary max-w-4xl">
            <h2 className="text-3xl font-semibold text-secondary mb-8">
              Our Team
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-20 md:gap-32">
              <div className="flex flex-col items-center">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Team Member 1"
                  width={128}
                  height={128}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-sm">CEO</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Team Member 2"
                  width={128}
                  height={128}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-sm">Marketing Manager</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Team Member 3"
                  width={128}
                  height={128}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Emily Johnson</h3>
                <p className="text-sm">Lead Developer</p>
              </div>

              <div className="flex flex-col items-center">
                <Image
                  src="https://github.com/shadcn.png"
                  alt="Team Member 4"
                  width={128}
                  height={128}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Michael Brown</h3>
                <p className="text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
