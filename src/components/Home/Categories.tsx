import {
  Utensils,
  HeartPulse,
  Shirt,
  Laptop,
  GraduationCap,
  Car,
  Dumbbell,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Category {
  name: string;
  brands: number;
}

interface CategoryUI {
  description: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
}

const categoryUI: Record<string, CategoryUI> = {
  "Food & Beverage": {
    description: "Restaurants, cafes, and food services",
    icon: Utensils,
    color: "bg-orange-100",
    iconColor: "bg-orange-500",
  },

  "Health & Wellness": {
    description: "Fitness, medical, and wellness services",
    icon: HeartPulse,
    color: "bg-green-100",
    iconColor: "bg-green-500",
  },

  "Fashion & Retail": {
    description: "Clothing, accessories, and retail stores",
    icon: Shirt,
    color: "bg-purple-100",
    iconColor: "bg-purple-500",
  },

  Technology: {
    description: "IT services, software, and tech solutions",
    icon: Laptop,
    color: "bg-blue-100",
    iconColor: "bg-blue-500",
  },

  Education: {
    description: "Schools, training, and learning centers",
    icon: GraduationCap,
    color: "bg-yellow-100",
    iconColor: "bg-yellow-500",
  },

  Automotive: {
    description: "Car services, dealerships, and repairs",
    icon: Car,
    color: "bg-red-100",
    iconColor: "bg-red-500",
  },

  Fitness: {
    description: "Gyms, studios, and fitness centers",
    icon: Dumbbell,
    color: "bg-indigo-100",
    iconColor: "bg-indigo-500",
  },

  "Home Services": {
    description: "Cleaning, maintenance, and home care",
    icon: Wrench,
    color: "bg-teal-100",
    iconColor: "bg-teal-500",
  },
};

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/categories`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const data: Category[] = await response.json();

        setCategories(data);
      } catch (error) {
        console.error("Category fetch error:", error);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section
      id="categories"
      className="scroll-mt-20 bg-white px-6 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Explore Franchise Categories
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Discover opportunities across diverse industries with vetted
            brands ready for expansion.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="h-52 animate-pulse rounded-xl bg-slate-100"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl bg-red-50 px-6 py-8 text-center text-red-600">
            {error}
          </div>
        )}

        {/* No Categories */}
        {!loading && !error && categories.length === 0 && (
          <div className="rounded-xl bg-slate-50 px-6 py-10 text-center text-slate-500">
            No franchise categories available.
          </div>
        )}

        {/* Categories Grid */}
        {!loading && !error && categories.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const ui = categoryUI[category.name];

              // Fallback UI for a new category added from MongoDB
              const Icon = ui?.icon || Wrench;
              const color = ui?.color || "bg-slate-100";
              const iconColor = ui?.iconColor || "bg-slate-500";
              const description =
                ui?.description || "Explore franchise opportunities in this category.";

              return (
                <div
                  key={category.name}
                  className={`
                    group cursor-pointer rounded-xl
                    ${color}
                    p-6 text-center
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  `}
                >
                  {/* Icon */}
                  <div
                    className={`
                      mx-auto mb-5 flex h-11 w-11
                      items-center justify-center
                      rounded-lg
                      ${iconColor}
                      text-white
                      shadow-sm
                    `}
                  >
                    <Icon size={21} strokeWidth={2.2} />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-slate-500 sm:text-sm">
                    {description}
                  </p>

                  {/* Brand Count */}
                  <div className="mt-5 inline-flex rounded-full bg-white px-4 py-1.5">
                    <span className="text-xs font-semibold text-slate-600 sm:text-sm">
                      {category.brands} Brands
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
} 
