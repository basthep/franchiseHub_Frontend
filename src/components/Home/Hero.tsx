import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/franchise-hero.png";

interface HeroProps {
  onListBrand: () => void;
}

const stats = [
  {
    value: "500+",
    label: "Active Brands",
  },
  {
    value: "12",
    label: "Categories",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
];

export default function Hero({
  onListBrand,
}: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">

      {/* Background Decoration */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-2 lg:py-7">

        {/* Left Content */}
        <div className="relative">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

            <span className="h-2 w-2 rounded-full bg-green-500" />

            Live Franchise Opportunities

          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl">

            Connect with

            <span className="block text-blue-600">
              Premium Franchise
            </span>

            <span className="block">
              Opportunities
            </span>

          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">
            Discover vetted franchise brands across multiple
            industries. Start your entrepreneurial journey with
            trusted partners and proven business models.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            {/* Explore Franchises */}
            <button
              type="button"
              onClick={() => navigate("/categories")}
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Explore Franchises

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* List Your Brand */}
            <button
              type="button"
              onClick={onListBrand}
              className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
            >
              List Your Brand
            </button>

          </div>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-10">

            {stats.map((stat) => (
              <div key={stat.label}>

                <div className="text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>

                <div className="mt-1 text-xs font-medium text-slate-500">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-slate-300/40">

            <img
              src={heroImage}
              alt="Business partners discussing a franchise opportunity"
              className="h-[480px] w-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}