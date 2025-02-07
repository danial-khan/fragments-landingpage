"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { scrollToSection } from "../utils/navigation";
const FRONTEND_APP_PATH = process.env.FRONTEND_APP_BASE_URL;

export default function Navbar() {
  const [toggleMenu, setTogglemenu] = useState(false);
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };
  return (
    <>
      <nav className="border-b border-gray-300 px-6 py-4 flex justify-between items-center bg-primary md:px-15">
        <div className="flex items-center gap-2 sm:text-2xl font-bold text-secondary">
          <FontAwesomeIcon
            icon={faFeatherPointed}
            className="text-secondary h-6"
          />
          <span>Fragments</span>
        </div>
        <ul className="hidden lg:flex text-secondary gap-8 font-semibold text-xl">
          <li
            className="bg-primary text-secondary rounded py-2 px-5 items-center hover:text-white hover:bg-secondary border border-secondary cursor-pointer transition duration-300"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="bg-primary text-secondary rounded py-2 px-4 hover:text-white hover:bg-secondary border border-secondary cursor-pointer transition duration-300"
            onClick={() => {
              scrollToSection("explore", router);
            }}
          >
            Explore
          </li>
          <li
            className="bg-primary text-secondary rounded py-2 px-4 hover:text-white hover:bg-secondary border border-secondary cursor-pointer transition duration-300"
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            className="bg-primary text-secondary rounded py-2 px-4 hover:text-white hover:bg-secondary border border-secondary cursor-pointer transition duration-300"
            onClick={() => {
              scrollToSection("footer", router);
            }}
          >
            Contact
          </li>
        </ul>

        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden text-secondary cursor-pointer h-5"
          id="navbar-toggle"
          onClick={() => {
            setTogglemenu(!toggleMenu);
            console.log(toggleMenu);
          }}
        />

        <div className="hidden lg:flex flex-row gap-4 p-4">
          <a
            href={`${FRONTEND_APP_PATH}/auth/login`}
            id="sign-in-button"
            className="bg-primary text-secondary py-2 px-6 rounded hover:bg-secondary hover:text-white cursor-pointer text-center border border-secondary whitespace-nowrap transition duration-300"
          >
            Sign In
          </a>
          <a
            href={`${FRONTEND_APP_PATH}/auth/register`}
            id="register-button"
            className="bg-secondary text-white py-2 px-6 rounded hover:bg-[#6a3514] cursor-pointer text-center whitespace-nowrap min-w-[120px] flex-shrink-0 transition duration-300"
          >
            Register
          </a>
        </div>
      </nav>
      {/* Toggle Menu */}
      {toggleMenu && (
        <div
          className="lg:hidden navbar-menu shadow-lg border border-gray-300 bg-white rounded-lg"
          aria-hidden="true"
        >
          <ul className="flex flex-col text-white bg-secondary gap-4 font-semibold p-4 w-full text-center">
            <li className="text-secondary cursor-pointer hover:bg-[#e8dac8] border border-orange-100 rounded py-2 bg-primary">
              Home
            </li>
            <li className="text-secondary cursor-pointer hover:bg-[#e8dac8] border border-orange-100 rounded py-2 bg-primary">
              Explore
            </li>
            <li className="text-secondary cursor-pointer hover:bg-[#e8dac8] border border-orange-100 rounded py-2 bg-primary">
              About
            </li>
            <li className="text-secondary cursor-pointer hover:bg-[#e8dac8] border border-orange-100 rounded py-2 bg-primary">
              Contact
            </li>
          </ul>
          <div className="sm:flex flex-col gap-4 p-4 bg-secondary justify-items-center">
            <button
              id="sign-in-button"
              className="bg-secondary text-primary py-2 px-4 rounded hover:bg-[#6a3514] hover:text-white cursor-pointer text-center border border-primary whitespace-nowrap w-full"
            >
              Sign In
            </button>
            <button
              id="register-button"
              className="bg-secondary text-white py-2 px-4 rounded hover:bg-[#6a3514] cursor-pointer text-center border border-primary w-full"
            >
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
}
