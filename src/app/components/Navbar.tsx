"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { scrollToSection } from "../utils/navigation";
import { frontendAppBaseUrl } from "../utils/frontendAppBaseUrl";

const navLinkClass =
  "rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:text-sm";

const moreItemClass =
  "block w-full rounded-lg px-3 py-2.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50 sm:text-sm";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreWrapRef = useRef<HTMLLIElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const goExplore = () => {
    setOpen(false);
    if (pathname === "/") {
      scrollToSection("explore", router);
    } else {
      router.push("/#explore");
    }
  };

  useEffect(() => {
    if (!moreOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (
        moreWrapRef.current &&
        !moreWrapRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-8 lg:px-16">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-bold tracking-tight text-slate-900"
          onClick={() => setOpen(false)}
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-white ring-1 ring-slate-200/80">
            <Image
              src="/logo-no-bg.png"
              alt=""
              width={36}
              height={36}
              sizes="36px"
              fetchPriority="low"
              className="object-contain p-1"
            />
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">Fragments</span>
        </Link>

        <div className="hidden flex-1 items-center justify-end lg:flex">
          <ul className="flex items-center gap-0.5 pr-2 xl:gap-1 xl:pr-3">
            <li>
              <Link href="/" className={navLinkClass}>
                Home
              </Link>
            </li>
            <li>
              <button type="button" onClick={goExplore} className={navLinkClass}>
                Product tour
              </button>
            </li>
            <li>
              <Link href="/about/" className={navLinkClass}>
                About
              </Link>
            </li>
            <li>
              <Link href="/how-it-works/" className={navLinkClass}>
                How it works
              </Link>
            </li>
            <li>
              <Link href="/pricing/" className={navLinkClass}>
                Pricing
              </Link>
            </li>
            <li className="relative" ref={moreWrapRef}>
              <button
                type="button"
                className={`${navLinkClass} inline-flex items-center gap-1`}
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                More
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`h-3 w-3 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                />
              </button>
              {moreOpen ? (
                <ul
                  className="absolute right-0 top-full z-50 mt-1 min-w-[10.5rem] rounded-xl border border-slate-200/90 bg-white py-1 shadow-lg ring-1 ring-slate-100/90"
                  role="menu"
                >
                  <li role="none">
                    <Link
                      href="/blog/"
                      className={moreItemClass}
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      href="/contact/"
                      className={moreItemClass}
                      role="menuitem"
                      onClick={() => setMoreOpen(false)}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              ) : null}
            </li>
          </ul>

          <div className="flex items-center gap-2 border-l border-slate-200/90 pl-4 xl:gap-3 xl:pl-5">
            <a
              href={`${frontendAppBaseUrl}/auth/login`}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200/90 transition hover:bg-slate-50 xl:px-4"
            >
              Sign in
            </a>
            <a
              href={`${frontendAppBaseUrl}/auth/register`}
              className="rounded-xl bg-accent px-3 py-2 text-sm font-bold text-white shadow-md shadow-orange-500/25 transition hover:bg-accent-dark xl:px-4"
            >
              Get started
            </a>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-700 ring-1 ring-slate-200/90 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-5 w-5" />
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200/80 bg-white px-8 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={goExplore}
              >
                Product tour
              </button>
            </li>
            <li>
              <Link
                href="/about/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                More
              </p>
            </li>
            <li>
              <Link
                href="/blog/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact/"
                className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
            <a
              href={`${frontendAppBaseUrl}/auth/login`}
              className="block rounded-xl py-3 text-center text-sm font-semibold text-slate-800 ring-1 ring-slate-200"
            >
              Sign in
            </a>
            <a
              href={`${frontendAppBaseUrl}/auth/register`}
              className="block rounded-xl bg-accent py-3 text-center text-sm font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-accent-dark"
            >
              Get started
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
