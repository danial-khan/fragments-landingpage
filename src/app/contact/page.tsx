"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Loader";

// Validation Schema using yup
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

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  const onSubmit = (data: FormData) => {
    alert("Message sent successfully");
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div>
      {loading && <Loader />}
      <Navbar />
      <div className="px-12 py-16 flex items-center justify-center bg-yellow-50">
        <div className="flex flex-col lg:flex-row md:max-w-7xl w-full">
          {/* Left Side: Contact Form */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-3 border outline-none rounded ${
                    errors.name ? "border-red-500" : "border-primary"
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-3 border outline-none rounded ${
                    errors.email ? "border-red-500" : "border-primary"
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full p-3 border outline-none rounded ${
                    errors.subject ? "border-red-500" : "border-primary"
                  }`}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Your Message"
                  className={`w-full p-3 border outline-none rounded ${
                    errors.message ? "border-red-500" : "border-primary"
                  }`}
                  rows={5}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="p-3 text-white bg-secondary rounded hover:bg-semiSecondary flex items-center justify-center space-x-2 h-8 w-60 justify-self-center"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-4"/>
                <span>Submit</span>
              </button>
            </form>
          </div>

          {/* Right Side: Contact Information */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-500">
              Contact us for inquiries or feedback. We value your thoughts and
              are here to help you.
            </p>
            <div className="space-y-5 mt-5">
              <ContactInfo
                icon={faEnvelope}
                title="Our Email"
                content="support@fragments.com"
              />
              <ContactInfo
                icon={faPhone}
                title="Our Phone"
                content="+1 (123) 456-7890"
              />
              <ContactInfo
                icon={faMapMarkerAlt}
                title="Our Office"
                content="123 Knowledge Lane, Scholar City"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface ContactInfoProps {
  icon: import("@fortawesome/fontawesome-svg-core").IconDefinition;
  title: string;
  content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
  return (
    <div className="flex items-center gap-3 bg-white py-4 px-6 shadow-md border border-yellow-300 rounded-lg">
      <button className="bg-white border border-secondary rounded-lg p-3 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-secondary h-4" />
      </button>
      <div>
        <h2 className="text-lg text-secondary font-bold">{title}</h2>
        <p className="text-secondary font-normal">{content}</p>
      </div>
    </div>
  );
};

export default Contact;