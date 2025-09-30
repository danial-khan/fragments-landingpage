"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section id="footer" className="bg-secondary text-white py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4 px-8 md:px-16">
        {/* Brand Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <img src="/logo-no-bg.png" className="w-10 mr-2" />
            Fragment
          </h4>
          <p className="text-sm">
            Fostering a scholarly environment where knowledge meets community,
            and learning knoves no bounds
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-primary">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-white hover:text-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-4 w-4" />
                <span>fragments@twitter.com</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                <span>fragments@facebook.com</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white hover:text-primary flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
                <span>fragments@linkedIn.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <footer className="text-center text-white pt-8 border-t border-gray-500">
        <p className="text-sm">
          © 2025 All Rights Reserved. Powered by Fragments
        </p>
      </footer>
    </section>
  );
}
