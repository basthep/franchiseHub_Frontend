import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Handshake } from "lucide-react";

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

  const navLinks = [
    {
      name: "Categories",
      href: "/categories",
    },
    {
      name: "How It Works",
      href: "#how-it-works",
    },
    {
      name: "Success Stories",
      href: "#success-stories",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  // =====================================================
  // LIST YOUR BRAND
  // =====================================================
  const handleBrandClick = () => {
    setIsOpen(false);

    // User is not logged in
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // User is logged in
    onListBrand();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">

      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

      <a href="/" className="flex items-center gap-2">
       <Handshake size={32} className="text-blue-600" />

       <span className="text-xl font-bold tracking-tight text-slate-900">
        FranchiseHub
       </span>
      </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Login - Only show when NOT logged in */}
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

        {/* Mobile Menu Button */}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-2 border-t border-slate-100 pt-4">

              {/* Mobile Login - Only show when NOT logged in */}
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
