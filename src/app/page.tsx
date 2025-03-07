"use client";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faCalculator,
  faCogs,
  faProjectDiagram,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { scrollToSection } from "./utils/navigation";
const FRONTEND_APP_PATH = process.env.NEXT_PUBLIC_FRONTEND_APP_BASE_URL;

config.autoAddCss = false;
export default function Home() {
  const router = useRouter();
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />

      <section
        id="hero"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 px-6 md:px-12 bg-primary space-x-8 items-center"
      >
        <div id="hero-text" className="col-span-1 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4 mt-12 md:mt-24 pr-3 text-secondary">
            Learn, Educate, Discuss, Debate
          </h1>
          <p className="font-bold mb-6 text-left leading-relaxed mx-auto text-secondary">
            Lorem ipsum dolor sit. Aut cupiditate magni id corrupti
            reprehenderit aliquam! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Explicabo distinctio nesciunt pariatur reiciendis.
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-4">
            <Link
              href={`${FRONTEND_APP_PATH}/auth/register`}
              className="bg-secondary text-center text-white px-6 py-2 rounded-lg hover:bg-[#6a3514] hover:text-white transition w-full sm:w-auto cursor-pointer tansition duration-300"
            >
              Get Started
            </Link>
            <button
              onClick={() => scrollToSection("explore", router)}
              className="bg-primary text-secondary px-6 py-2 rounded-lg transition border-2 border-secondary hover:bg-secondary hover:text-white w-full sm:w-auto cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>

        <div
          id="hero-image"
          className="col-span-1 flex justify-center items-center mt-12 mb-4 object-cover"
        >
          <Image
            src="/books.svg"
            alt="Placeholder Image"
            width={500}
            height={500}
            className="w-full md:h-[500px] object-contain"
          />
        </div>
      </section>

      <section
        id="explore"
        className="bg-[#FEFDE9] flex items-center justify-center px-8 w-full py-12 md:px-12"
      >
        <div className="text-secondary w-full max-w-screen-xl">
          <div className="text-center">
            <h1 className="text-primary-foreground text-3xl font-bold mb-4">
              Discover our Features
            </h1>
            <p className="text-secondary font-bold mb-8">
              Everything you need to engage in meaningful academic discussions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white shadow-lg rounded-lg hover:bg-secondary hover:text-white transition-colors duration-500">
              <div className="p-6 border border-primary rounded">
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  className="text-secondary h-5 m-2 group-hover:text-white transition-colors duration-500"
                />
                <h5 className="text-xl font-bold mb-2">Fragment Trails</h5>
                <p className="text-primary-foreground mb-4">
                  With supporting text below as a natural additional content.
                </p>
              </div>
            </div>

            <div className="group bg-white shadow-lg rounded-lg hover:bg-secondary hover:text-white transition-colors duration-500">
              <div className="p-6 border border-primary rounded">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="text-secondary h-5 m-2 group-hover:text-white transition-colors duration-500"
                />
                <h5 className="text-xl font-bold mb-2">Community Learning</h5>
                <p className="text-primary-foreground mb-4">
                  With supporting text below as a natural additional content.
                </p>
              </div>
            </div>

            <div className="group bg-white shadow-lg rounded-lg hover:bg-secondary hover:text-white transition-colors duration-500">
              <div className="p-6 border border-primary rounded">
                <FontAwesomeIcon
                  icon={faCogs}
                  className="text-secondary h-5 m-2 group-hover:text-white transition-colors duration-500"
                />
                <h5 className="text-xl font-bold mb-2">Quality Control</h5>
                <p className="text-primary-foreground mb-4">
                  With supporting text below as a natural additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="academic" className="px-8 py-16 bg-primary">
        <h3 className="text-primary-foreground text-3xl font-bold mb-4 text-center text-secondary">
          Academic Disciplines
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 text-secondary px-8">
          <div className="group bg-white text-center sm:text-start shadow-lg rounded-lg p-4 px-8 text-secondary flex flex-row gap-2 hover:bg-secondary hover:text-white transition-colors duration-300">
            <FontAwesomeIcon
              icon={faBook}
              className="text-secondary h-5 group-hover:text-white transition-colors duration-300"
            />
            <p className="text-primary-foreground">History</p>
          </div>

          <div className="group bg-white text-center sm:text-start shadow-lg rounded-lg p-4 px-8 text-secondary flex flex-row gap-2 hover:bg-secondary hover:text-white transition-colors duration-300">
            <FontAwesomeIcon
              icon={faBook}
              className="text-secondary h-5 group-hover:text-white transition-colors duration-300"
            />
            <p className="text-primary-foreground">Literature</p>
          </div>

          <div className="group bg-white text-center sm:text-start shadow-lg rounded-lg p-4 px-8 text-secondary flex flex-row gap-2 hover:bg-secondary hover:text-white transition-colors duration-300">
            <FontAwesomeIcon
              icon={faReact}
              className="text-secondary h-5 group-hover:text-white transition-colors duration-300"
            />
            <p className="text-primary-foreground">Sciences</p>
          </div>

          <div className="group bg-white text-center sm:text-start shadow-lg rounded-lg p-4 px-8 text-secondary flex flex-row gap-2 hover:bg-secondary hover:text-white transition-colors duration-300">
            <FontAwesomeIcon
              icon={faCalculator}
              className="text-secondary h-5 group-hover:text-white transition-colors duration-300"
            />
            <p className="text-primary-foreground">Mathematics</p>
          </div>
        </div>
      </section>

      <section
        id="journey"
        className="flex flex-col items-center justify-center gap-2 bg-[#b15d28] py-12 px-12"
      >
        <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
          Ready to start your Academic Journey?
        </h3>
        <p className="text-white text-sm sm:text-base mb-4">
          Join community of scholars and contribiute to meaningful academic
          discussions
        </p>
        <button className="bg-white text-secondary text-sm sm:text-base font-bold py-2 px-6 rounded-lg shadow-lg hover:text-white hover:bg-secondary transition duration-300 cursor-pointer">
          Create Your Account
        </button>
      </section>

      <Footer />
    </div>
  );
}
