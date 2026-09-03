import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Categories/Navbar";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import FranchiseCard from "../components/Home/FranchiseCard";

interface Franchise {
  _id: string;
  name: string;
  category: string;
  description: string;
  fullDescription?: string;
  investment: string;
  roi?: string;
  unitsOperating?: number;
  yearFounded?: number;
  territories?: string;
  phone?: string;
  image?: string;
  support?: string[];
  requirements?: string[];
}

const investmentFilters = [
  {
    label: "Any Investment",
    value: 0,
  },
  {
    label: "Under $150K",
    value: 150000,
  },
  {
    label: "Under $250K",
    value: 250000,
  },
  {
    label: "Under $350K",
    value: 350000,
  },
  {
    label: "Under $500K",
    value: 500000,
  },
  {
    label: "Under $750K",
    value: 750000,
  },
  {
    label: "Under $1M",
    value: 1000000,
  },
];

export default function Categories() {
  const [franchises, setFranchises] = useState<Franchise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxInvestment, setMaxInvestment] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // =====================================================
  // FETCH FRANCHISES FROM MONGODB
  // =====================================================
  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/franchises`
        ); 

        if (!response.ok) {
          throw new Error("Failed to fetch franchises");
        }

        const data = await response.json();
        console.log(data)

        setFranchises(data);
      } catch (error) {
        console.error("Error fetching franchises:", error);

        setError(
          "Unable to load franchise opportunities. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFranchises();
  }, []);

  // =====================================================
  // GET UNIQUE CATEGORIES
  // =====================================================
  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          franchises.map((franchise) => franchise.category)
        )
      ),
    ];
  }, [franchises]);

  // =====================================================
  // CONVERT INVESTMENT STRING TO NUMBER
  // =====================================================
  const getMinInvestment = (investment: string) => {
    if (!investment) return 0;

    const numbers = investment.match(/[\d,.]+/g);

    if (!numbers || numbers.length === 0) {
      return 0;
    }

    const firstNumber = numbers[0].replace(/,/g, "");

    const value = Number(firstNumber);

    if (Number.isNaN(value)) {
      return 0;
    }

    // Handle values such as "$100K - $250K"
    if (
      investment.toLowerCase().includes("k") &&
      value < 10000
    ) {
      return value * 1000;
    }

    if (
      investment.toLowerCase().includes("m") &&
      value < 100
    ) {
      return value * 1000000;
    }

    return value;
  };

  // =====================================================
  // FILTER FRANCHISES
  // =====================================================
  const filteredFranchises = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return franchises.filter((franchise) => {
      const matchesSearch =
        franchise.name.toLowerCase().includes(query) ||
        franchise.category.toLowerCase().includes(query) ||
        franchise.description.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        franchise.category === selectedCategory;

      const minInvestment = getMinInvestment(
        franchise.investment
      );

      const matchesInvestment =
        maxInvestment === 0 ||
        minInvestment <= maxInvestment;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesInvestment
      );
    });
  }, [
    franchises,
    searchQuery,
    selectedCategory,
    maxInvestment,
  ]);

  // =====================================================
  // CLEAR FILTERS
  // =====================================================
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setMaxInvestment(0);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategory !== "All" ||
    maxInvestment !== 0;

  // =====================================================
  // LOADING STATE
  // =====================================================
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="px-6 py-12 lg:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <div className="h-8 w-64 animate-pulse rounded bg-slate-200" />
              <div className="mt-3 h-4 w-48 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-80 animate-pulse rounded-2xl bg-white"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // =====================================================
  // ERROR STATE
  // =====================================================
  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <section className="px-6 py-20">
          <div className="mx-auto max-w-xl rounded-2xl border border-red-100 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
              <X className="h-7 w-7 text-red-500" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Unable to Load Franchises
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {error}
            </p>

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <section className="px-6 py-12 lg:py-10">
        <div className="mx-auto max-w-7xl">

          {/* Search + Mobile Filter */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                All Franchise Brands
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Showing {filteredFranchises.length} of{" "}
                {franchises.length} opportunities
              </p>
            </div>

            <div className="flex w-full gap-3 lg:w-auto">

              {/* Search */}
              <div className="relative flex-1 lg:w-96">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search brands..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Mobile Filter */}
              <button
                type="button"
                onClick={() =>
                  setShowFilters(!showFilters)
                }
                className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 lg:hidden"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>
          </div>

          {/* =================================================
              CONTENT GRID
          ================================================= */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_1fr]">

            {/* =================================================
                LEFT FILTER SIDEBAR
            ================================================= */}
            <aside
              className={`
                ${showFilters ? "block" : "hidden"}
                lg:block
              `}
            >
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal
                      size={18}
                      className="text-blue-600"
                    />

                    <h3 className="font-bold text-slate-900">
                      Filters
                    </h3>
                  </div>

                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="mt-7">
                  <h4 className="mb-3 text-sm font-semibold text-slate-900">
                    Category
                  </h4>

                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          setSelectedCategory(category)
                        }
                        className={`
                          flex w-full items-center justify-between
                          rounded-lg px-3 py-2.5
                          text-left text-sm
                          transition
                          ${
                            selectedCategory === category
                              ? "bg-blue-50 font-semibold text-blue-600"
                              : "text-slate-600 hover:bg-slate-50"
                          }
                        `}
                      >
                        <span>{category}</span>

                        <span
                          className={`
                            text-xs
                            ${
                              selectedCategory === category
                                ? "text-blue-500"
                                : "text-slate-400"
                            }
                          `}
                        >
                          {
                            franchises.filter(
                              (franchise) =>
                                category === "All" ||
                                franchise.category === category
                            ).length
                          }
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Filter */}
                <div className="mt-7 border-t border-slate-100 pt-6">
                  <h4 className="mb-3 text-sm font-semibold text-slate-900">
                    Maximum Investment
                  </h4>

                  <div className="space-y-2">
                    {investmentFilters.map((filter) => (
                      <button
                        key={filter.value}
                        type="button"
                        onClick={() =>
                          setMaxInvestment(filter.value)
                        }
                        className={`
                          w-full rounded-lg px-3 py-2.5
                          text-left text-sm
                          transition
                          ${
                            maxInvestment === filter.value
                              ? "bg-blue-50 font-semibold text-blue-600"
                              : "text-slate-600 hover:bg-slate-50"
                          }
                        `}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Filters */}
                {hasActiveFilters && (
                  <div className="mt-7 border-t border-slate-100 pt-6">
                    <div className="flex flex-wrap gap-2">

                      {selectedCategory !== "All" && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCategory("All")
                          }
                          className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
                        >
                          {selectedCategory}
                          <X size={13} />
                        </button>
                      )}

                      {maxInvestment !== 0 && (
                        <button
                          type="button"
                          onClick={() =>
                            setMaxInvestment(0)
                          }
                          className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
                        >
                          Under $
                          {maxInvestment / 1000}K
                          <X size={13} />
                        </button>
                      )}

                      {searchQuery.trim() !== "" && (
                        <button
                          type="button"
                          onClick={() =>
                            setSearchQuery("")
                          }
                          className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-600"
                        >
                          Search
                          <X size={13} />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* =================================================
                FRANCHISE CARDS
            ================================================= */}
            <div>
              {filteredFranchises.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

                  {filteredFranchises.map((franchise) => (
                    <FranchiseCard
                      key={franchise._id}
                      id={franchise._id}
                      name={franchise.name}
                      category={franchise.category}
                      investment={franchise.investment}
                      description={franchise.description}
                      image={franchise.image || ""}
                      roi={franchise.roi || ""}
                    />
                  ))}

                </div>
              ) : (
                /* Empty State */
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Search
                      size={28}
                      className="text-slate-400"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    No franchises found
                  </h3>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    We couldn't find any franchise opportunities
                    matching your current filters.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
