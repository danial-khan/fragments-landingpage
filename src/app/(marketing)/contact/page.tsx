"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../components/Loader";
import axios from "axios";
import { toast } from "react-toastify";

const validationSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message cannot be empty"),
  })
  .required();

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: IconDefinition;
  title: string;
  content: string;
}) => (
  <div className="frag-card flex items-center gap-4 p-5">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-highlight-dark ring-1 ring-border-light">
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
    </span>
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-textMuted">
        {title}
      </h3>
      <p className="mt-1 font-semibold text-secondary">{content}</p>
    </div>
  </div>
);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/contact-us`, data)
      .then(() => {
        toast("Form has been submitted successfully", { type: "success" });
      })
      .catch(() => {
        toast("Something went wrong, please try submitting again", {
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
    reset();
  };

  const inputClass = (err?: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-textDark outline-none transition placeholder:text-textMuted/80 focus:ring-2 focus:ring-highlight/25 ${
      err ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-highlight"
    }`;

  return (
    <>
      {loading ? <Loader /> : null}
      <section className="border-b border-slate-200/80 bg-slate-900 py-10 sm:py-14">
        <div className="frag-container">
          <p className="frag-hero-eyebrow">Contact</p>
          <h1 className="frag-hero-h1 mt-1.5">We&apos;d love to hear from you</h1>
          <p className="frag-hero-lead max-w-2xl">
            Product questions, district pilots, press, or feedback: send a note and
            our team will route it to the right person.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="frag-container flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 sm:p-8">
            <h2 className="text-lg font-semibold text-secondary sm:text-xl">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <label className="sr-only" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  className={inputClass(!!errors.name)}
                  {...register("name")}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Work email"
                  className={inputClass(!!errors.email)}
                  {...register("email")}
                />
                {errors.email ? (
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject"
                  className={inputClass(!!errors.subject)}
                  {...register("subject")}
                />
                {errors.subject ? (
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {errors.subject.message}
                  </p>
                ) : null}
              </div>
              <div>
                <label className="sr-only" htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="How can we help?"
                  rows={6}
                  className={inputClass(!!errors.message)}
                  {...register("message")}
                />
                {errors.message ? (
                  <p className="mt-1 text-sm font-medium text-red-600">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:from-amber-400 hover:to-orange-500 sm:w-auto sm:px-10"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
                Submit
              </button>
            </form>
          </div>

          <div className="flex flex-1 flex-col justify-center lg:max-w-md">
            <div className="relative mx-auto mb-8 h-32 w-32">
              <Image
                src="/logo-no-bg.png"
                alt="Fragments"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Get in touch</h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
              We read every message. For fastest help with billing or classroom
              rollout, include your organization name and time zone.
            </p>
            <div className="mt-8 space-y-4">
              <ContactInfo
                icon={faEnvelope}
                title="Our email"
                content="support@fragments.com"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
