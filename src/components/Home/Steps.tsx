import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Browse Categories",
    description:
      "Explore franchise opportunities across multiple industries and find the perfect match for your investment goals.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: "2",
    title: "Connect with Brands",
    description:
      "Review detailed brand profiles, investment requirements, and success stories to make informed decisions.",
    color: "bg-green-100 text-green-600",
  },
  {
    number: "3",
    title: "Start Your Journey",
    description:
      "Submit your application and begin the franchise process with comprehensive support and guidance.",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function Steps() {
  return (
    <section
      id="how-it-works"
      className="bg-slate-50 px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How FranchiseHub Works
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
            Simple steps to connect franchise brands with potential investors
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-slate-100 bg-white px-6 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Number */}
              <div
                className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${step.color}`}
              >
                <span className="text-sm font-bold">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-base font-bold text-slate-900 sm:text-lg">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-[260px] text-sm leading-5 text-slate-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}