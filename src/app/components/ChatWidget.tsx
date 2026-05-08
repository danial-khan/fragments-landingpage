"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

type Role = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: Role;
  text: string;
};

const WELCOME =
  "Hi, I am the Fragments assistant. Type a question below and I will do my best to help. For anything about your account, billing, or a district pilot, our team can follow up securely from the contact page.";

function replyFor(userText: string): string {
  const t = userText.toLowerCase();
  if (/price|plan|cost|billing|subscribe|upgrade/.test(t)) {
    return "You can compare learner and educator plans on the pricing page. If you are pricing a department or district, say that in your message when you contact us so we can match you with the right options.";
  }
  if (/refund|money back|cancel/.test(t)) {
    return "Paid plans include a 30-day money-back window. If your situation is unusual, contact us with your account email and we will confirm the details.";
  }
  if (/how|work|fragment|trail|moderat|review/.test(t)) {
    return "In short: educators open a trail with a sourced fragment, learners build the thread with evidence and questions, and every post is checked by automation first and then by trained reviewers when needed. The How it works page walks through it step by step.";
  }
  if (/pilot|district|school|department|admin/.test(t)) {
    return "We work with schools, departments, and independent educators. Tell us your timeline and audience on the contact form and we will get back with next steps.";
  }
  if (/hello|hi\b|hey/.test(t)) {
    return "Hello. What would you like to know about Fragments? You can ask about plans, trails, moderation, or getting your group set up.";
  }
  return "Thanks for your message. A teammate reads these during business hours and usually replies within one day. For anything sensitive (login, invoices, contracts), please use the contact form so we can respond securely.";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      setMessages([]);
      setInput("");
      setTyping(false);
      return;
    }
    setMessages([{ id: "welcome", role: "assistant", text: WELCOME }]);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    listRef.current?.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  const send = useCallback(
    (raw: string) => {
      const text = raw.trim();
      if (!text || typing) return;

      const userMsg: ChatMessage = {
        id: `u-${Date.now()}`,
        role: "user",
        text,
      };
      setMessages((m) => [...m, userMsg]);
      setInput("");
      setTyping(true);

      window.setTimeout(() => {
        const answer = replyFor(text);
        setMessages((m) => [
          ...m,
          { id: `a-${Date.now()}`, role: "assistant", text: answer },
        ]);
        setTyping(false);
      }, 700);
    },
    [typing]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  const quickSend = (text: string) => send(text);

  return (
    <div
      className="fixed bottom-5 right-5 z-[105] flex flex-col items-end gap-3 sm:bottom-8 sm:right-8"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      {open ? (
        <div
          id="chat-widget-panel"
          className="flex max-h-[min(72vh,28rem)] w-[min(100vw-2.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/15 ring-1 ring-slate-100/90 motion-safe:animate-fade-in motion-reduce:animate-none"
          role="dialog"
          aria-modal="false"
          aria-labelledby="chat-widget-title"
        >
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-100 px-4 pb-3 pt-4">
            <div>
              <p
                id="chat-widget-title"
                className="text-sm font-extrabold text-secondary"
              >
                Chat with Fragments
              </p>
              <p className="mt-0.5 text-[11px] font-medium leading-relaxed text-textMuted">
                Ask a question below. This is an automated assistant; a human can
                follow up from{" "}
                <Link
                  href="/contact/"
                  className="font-semibold text-highlight-dark underline-offset-2 hover:underline"
                >
                  Contact
                </Link>
                .
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              aria-label="Close chat"
            >
              <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
            </button>
          </div>

          <div
            ref={listRef}
            className="min-h-[10rem] flex-1 space-y-3 overflow-y-auto px-4 py-3"
            role="log"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[92%] rounded-2xl px-3 py-2 text-xs font-medium leading-relaxed sm:text-[13px] ${
                    msg.role === "user"
                      ? "rounded-br-md bg-gradient-to-br from-highlight to-secondary text-white"
                      : "rounded-bl-md bg-slate-100 text-textDark"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-slate-100 px-3 py-2 text-xs text-textMuted">
                  <span className="inline-flex gap-1">
                    <span className="animate-pulse">Thinking</span>
                    <span className="inline-block w-4">...</span>
                  </span>
                </div>
              </div>
            ) : null}
          </div>

          <div className="shrink-0 border-t border-slate-100 px-3 pb-3 pt-2">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-textMuted">
              Quick prompts
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {[
                "What are your prices?",
                "How do fragment trails work?",
                "We are interested in a pilot.",
              ].map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => quickSend(q)}
                  disabled={typing}
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-secondary transition hover:border-highlight hover:bg-primary disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex gap-2">
              <label htmlFor="chat-widget-input" className="sr-only">
                Message
              </label>
              <input
                id="chat-widget-input"
                type="text"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                disabled={typing}
                className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-textDark shadow-inner outline-none ring-0 placeholder:text-slate-400 focus:border-highlight focus:ring-2 focus:ring-highlight/25 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={typing || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-md shadow-orange-500/20 transition hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1 border-t border-slate-50 pt-2 text-[10px] font-semibold">
              <Link
                href="/contact/"
                className="text-highlight-dark underline-offset-2 hover:underline"
                onClick={close}
              >
                Full contact form
              </Link>
              <Link
                href="/pricing/"
                className="text-secondary underline-offset-2 hover:underline"
                onClick={close}
              >
                Pricing
              </Link>
              <Link
                href="/how-it-works/"
                className="text-secondary underline-offset-2 hover:underline"
                onClick={close}
              >
                How it works
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-highlight to-secondary text-white shadow-lg shadow-teal-900/30 ring-2 ring-white/90 transition hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls="chat-widget-panel"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        <FontAwesomeIcon
          icon={open ? faXmark : faComments}
          className="h-6 w-6"
          aria-hidden
        />
      </button>
    </div>
  );
}
