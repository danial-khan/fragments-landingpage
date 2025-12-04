"use client";
import {
  faRobot,
  faAward,
  faTrash,
  faFlag,
  faInfoCircle,
  faExclamationTriangle,
  faUserShield,
  faComments,
  faDollarSign,
  faTrophy,
  faCheckCircle,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HowItWorks() {
  const rules = [
    {
      icon: faRobot,
      title: "AI & Human Review",
      description:
        "When a fragment is first published, it is evaluated first by AI and second by human reviewers (subscribed users approved to review)",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      icon: faAward,
      title: "Gold Badge Quality",
      description:
        "When a fragment passes the initial AI review it is tagged with a gold badge to demonstrate it has passed this first quality assessment step for plagiarism and validity",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
    },
    {
      icon: faTrash,
      title: "Quality Control",
      description:
        "If the fragment does not pass this first step it is removed",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faFlag,
      title: "Human Reviewer Flags",
      description:
        "The second review is by human reviewers - if a reviewer has concerns over the fragment, that fragment is marked with a red flag",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faInfoCircle,
      title: "Reviewer Feedback",
      description:
        "Users can hover over the red flag and a text box will appear outlining the reviewer's concerns",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-400",
    },
    {
      icon: faExclamationTriangle,
      title: "Three Strikes Rule",
      description:
        "If there are three red flags the fragment is removed",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-400",
    },
    {
      icon: faUserShield,
      title: "No Self-Review",
      description:
        "Reviewers cannot review themselves",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary",
    },
    {
      icon: faComments,
      title: "AI-Scored Comments",
      description:
        "Users can comment on fragments - these comments are evaluated by AI to give a score of between -1 and +1. The comment and the score show up under the fragment. If the score is between 0 and +1, the comment is marked in green. If the score is between -1 and 0, the comment is marked in red",
      color: "text-highlight",
      bgColor: "bg-highlight/10",
      borderColor: "border-highlight",
    },
    {
      icon: faGraduationCap,
      title: "Educator Rewards",
      description:
        "Payment (Fragments Rewards) can only be earned by educators",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent",
    },
    {
      icon: faTrophy,
      title: "Earning Mechanisms",
      description:
        "The two mechanisms of earning rewards are i) number of upvotes for each fragment published and ii) when the fragment earns a comment by another user that, on a scale of -1 to +1, is adjudged by AI to score at least +0.5",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-400",
    },
  ];

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
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-secondary font-semibold text-center md:text-start">
                Understanding the rules and mechanisms that make Fragments a
                trusted platform for scholarly discourse and education.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-bgAlt">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-secondary">
                Fragments Rules
              </h2>
              <p className="text-lg text-textDark max-w-2xl mx-auto">
                Our platform operates on a set of clear, transparent rules
                designed to ensure quality, fairness, and meaningful engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${rule.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`${rule.bgColor} ${rule.color} p-4 rounded-lg flex-shrink-0`}
                    >
                      <FontAwesomeIcon icon={rule.icon} className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-secondary mb-2">
                        {rule.title}
                      </h3>
                      <p className="text-textDark leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-accent">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-5xl text-accent mb-4"
              />
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-textDark mb-6">
                Join our community of educators, learners, and reviewers to
                contribute to meaningful scholarly discourse.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

