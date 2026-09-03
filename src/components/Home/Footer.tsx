import { Handshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0d1726] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Handshake size={18} className="text-white" />
              </div>

              <h3 className="text-lg font-bold">FranchiseHub</h3>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-5 text-gray-400">
              Connecting franchise brands with investors worldwide. Your
              gateway to entrepreneurial success.
            </p>
          </div>

          {/* For Investors */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              For Investors
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Browse Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Featured Brands
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Investment Calculator
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* For Brands */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              For Brands
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  List Your Brand
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Marketing Tools
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Company
            </h4>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 FranchiseHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;