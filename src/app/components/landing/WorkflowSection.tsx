"use client";

const steps = [
  {
    title: "Launch or join a trail",
    body: "Teachers post a sourced opening fragment. Students pick trails that match their course, interests, or prep goals.",
  },
  {
    title: "Keep the bar high",
    body: "Questions, counter-evidence, and clarifications stack in one readable thread: civil, on-topic, and easier to grade later.",
  },
  {
    title: "Moderation you can defend",
    body: "AI flags plagiarism and low-effort noise. Human reviewers handle tone, depth, and academic fit, so admins get a clear paper trail.",
  },
  {
    title: "Credit where it is due",
    body: "When educators consistently raise the level of the room, Fragments recognizes that work, because retention starts with respect.",
  },
];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="border-y border-slate-200/60 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="frag-container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="frag-eyebrow">Workflow</p>
          <h2 className="frag-title mt-3">How It Works</h2>
          <p className="frag-lead mt-4">
            Run fragment trails from the first post to recognition in four
            straightforward steps.
          </p>
        </header>

        {/* Mobile: stacked with vertical accent */}
        <ol className="relative mx-auto mt-14 max-w-lg space-y-10 md:hidden">
          <span
            className="absolute left-[1.9375rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-highlight via-secondary-medium to-highlight"
            aria-hidden
          />
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-5 pl-1">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-highlight to-secondary text-lg font-bold text-white shadow-lg shadow-teal-900/25 ring-4 ring-white">
                {i + 1}
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="text-[0.9375rem] font-semibold text-secondary">{step.title}</h3>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-textMuted sm:text-sm">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Desktop: horizontal stepper + connector line */}
        <div className="relative mx-auto mt-16 hidden w-full max-w-6xl md:block lg:mt-20">
          <div
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 h-[3px] rounded-full bg-gradient-to-r from-highlight via-secondary-medium to-highlight shadow-sm shadow-teal-900/15"
            aria-hidden
          />
          <ol className="relative grid grid-cols-4 gap-4 lg:gap-6">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex flex-col items-center px-1 text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-highlight to-secondary text-xl font-bold text-white shadow-lg shadow-teal-900/30 ring-[5px] ring-white">
                  {i + 1}
                </div>
                <h3 className="mt-6 text-sm font-semibold leading-snug text-secondary sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-textMuted sm:text-sm">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
