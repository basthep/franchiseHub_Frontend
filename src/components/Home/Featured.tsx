import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FranchiseCard from "./FranchiseCard";

interface Franchise {
  _id: string;
  name: string;
  category: string;
  investment: string;
  description: string;
  image?: string;
  roi?: string;
}

export default function Featured() {
  const [franchises, setFranchises] = useState<Franchise[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch franchises from MongoDB through backend
  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5000/api/franchises"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch franchises");
        }

        const data = await response.json();

        console.log("Franchises from MongoDB:", data);

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

  // Filter franchises based on search
  const filteredFranchises = franchises.filter((franchise) => {
    const query = searchQuery.toLowerCase().trim();

    return (
      franchise.name.toLowerCase().includes(query) ||
      franchise.category.toLowerCase().includes(query)
    );
  });

  // Show only first 6 by default
  // When searching, show all matching franchises
  const displayedFranchises = searchQuery.trim()
    ? filteredFranchises
    : filteredFranchises.slice(0, 6);

  return (
    <section
      id="featured"
      className="bg-white px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Featured Franchise Opportunities
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Browse our curated selection of franchise brands across
            various industries.
          </p>

          {/* Search Bar */}
          <div className="relative mx-auto mt-8 max-w-2xl">
            <Search
              size={21}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              type="text"
              placeholder="Search by brand name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 rounded-xl border-slate-200 bg-white pl-12 text-base shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-[400px] animate-pulse rounded-xl bg-slate-100"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-red-600">
              Something went wrong
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {error}
            </p>
          </div>
        )}

        {/* Franchise Grid */}
        {!loading && !error && displayedFranchises.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedFranchises.map((franchise) => (
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
        )}

        {/* Empty State */}
        {!loading &&
          !error &&
          displayedFranchises.length === 0 && (
            <div className="py-16 text-center">
              <Search
                size={40}
                className="mx-auto mb-4 text-slate-300"
              />

              <h3 className="text-lg font-semibold text-slate-900">
                No franchises found
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Try searching for a different brand or category.
              </p>
            </div>
          )}

        {/* Show More Message */}
        {!loading &&
          !error &&
          !searchQuery.trim() &&
          franchises.length > 6 && (
            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">
                Showing 6 of {franchises.length} franchise opportunities
              </p>
            </div>
          )}

      </div>
    </section>
  );
} 
