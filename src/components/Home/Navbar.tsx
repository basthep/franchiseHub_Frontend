import { Menu, X, Handshake } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  onListBrand: () => void;
}

export default function Navbar({
  onListBrand,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  // Check if user is logged in
  const isLoggedIn =
    !!localStorage.getItem("token") ||
    !!sessionStorage.getItem("token");

  // =====================================================
  // LIST YOUR BRAND
  // =====================================================
  const handleBrandClick = () => {
    setIsOpen(false);

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    onListBrand();
  };

  // =====================================================
  // GO TO HOME SECTION
  // =====================================================
  const handleSectionClick = (sectionId: string) => {
    setIsOpen(false);

    // If already on home page
    if (window.location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
        });

      return;
    }

    // If on another page, go to home with hash
    navigate(`/#${sectionId}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <Handshake
            size={32}
            className="text-blue-600"
          />

          <span className="text-xl font-bold tracking-tight text-slate-900">
            FranchiseHub
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Categories */}
          <Link
            to="/categories"
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Categories
          </Link>

          {/* How It Works */}
          <button
            type="button"
            onClick={() =>
              handleSectionClick("how-it-works")
            }
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            How It Works
          </button>

          {/* Success Stories */}
          <button
            type="button"
            onClick={() =>
              handleSectionClick("featured")
            }
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Success Stories
          </button>

          {/* Contact */}
          <button
            type="button"
            onClick={() =>
              handleSectionClick("contact")
            }
            className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
          >
            Contact
          </button>
        </div>

        {/* =================================================
            DESKTOP RIGHT SIDE
        ================================================= */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Login */}
          {!isLoggedIn && (
            <Link
              to="/login"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Login
            </Link>
          )}

          {/* List Your Brand */}
          <button
            type="button"
            onClick={handleBrandClick}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            List Your Brand
          </button>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* =================================================
          MOBILE NAVIGATION
      ================================================= */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {/* Categories */}
            <Link
              to="/categories"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Categories
            </Link>

            {/* How It Works */}
            <button
              type="button"
              onClick={() =>
                handleSectionClick("how-it-works")
              }
              className="text-left text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              How It Works
            </button>

            {/* Success Stories */}
            <button
              type="button"
              onClick={() =>
                handleSectionClick("success-stories")
              }
              className="text-left text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Success Stories
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() =>
                handleSectionClick("contact")
              }
              className="text-left text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              Contact
            </button>

            <div className="mt-2 border-t border-slate-100 pt-4">

              {/* Mobile Login */}
              {!isLoggedIn && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="mb-3 block text-sm font-medium text-slate-700 transition hover:text-blue-600"
                >
                  Login
                </Link>
              )}

              {/* Mobile Brand */}
              <button
                type="button"
                onClick={handleBrandClick}
                className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                List Your Brand
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
