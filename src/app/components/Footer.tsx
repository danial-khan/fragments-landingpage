"use client";

import Link from "next/link";
import Image from "next/image";
import AdSenseDisplay from "./AdSenseDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const footerAdSlot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_FOOTER ?? "";

const linkClass =
  "text-sm text-slate-400 transition hover:text-white";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgb(51_65_85_/_0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgb(51_65_85_/_0.35)_1px,transparent_1px)] bg-[size:56px_56px]"
        aria-hidden
      />
      <div className="relative frag-container py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10">
                <Image
                  src="/logo-no-bg.png"
                  alt=""
                  width={36}
                  height={36}
                  sizes="36px"
                  className="object-contain p-1"
                />
              </span>
              Fragments
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400/95">
              The discussion platform for U.S. schools and serious learners: guided
              trails, transparent moderation, and credit for educators who show
              up with rigor.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about/" className={linkClass}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog/" className={linkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#explore" className={linkClass}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className={linkClass}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact/" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Legal
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="#" className={linkClass}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className={linkClass}>
                  Terms of service
                </Link>
              </li>
              <li>
                <Link id="cookie-policy" href="/#cookie-policy" className={linkClass}>
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Follow us
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <FontAwesomeIcon icon={faTwitter} className="h-4 w-4 text-slate-500" />
                  fragments@twitter.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <FontAwesomeIcon icon={faFacebook} className="h-4 w-4 text-slate-500" />
                  fragments@facebook.com
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 text-slate-500" />
                  fragments@linkedin.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {footerAdSlot ? (
          <div className="mt-12 flex justify-center" aria-label="Advertisement">
            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-4">
              <AdSenseDisplay slot={footerAdSlot} className="min-h-[100px]" />
            </div>
          </div>
        ) : null}

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Fragments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
