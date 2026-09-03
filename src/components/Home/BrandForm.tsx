import { useState } from "react";
import { X, Building2, CheckCircle2, AlertCircle } from "lucide-react";

interface BrandFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  companyName: string;
  category: string;
  yearStarted: string;
  investment: string;
  roi: string;
  requirements: string;
  description: string;
}

const initialFormData: FormData = {
  companyName: "",
  category: "",
  yearStarted: "",
  investment: "",
  roi: "",
  requirements: "",
  description: "",
};

export default function BrandForm({
  open,
  onClose,
}: BrandFormProps) {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
        HTMLTextAreaElement |
        HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // SUBMIT BRAND
  // =====================================================
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/brand-submissions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit brand"
        );
      }

      // Success
      setSuccess(
        "Your brand has been submitted successfully! Our admin team will review your details and contact you soon."
      );

      // Reset form
      setFormData(initialFormData);

      // Close modal after 2.5 seconds
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 2500);
    } catch (error) {
      console.error(
        "Brand submission error:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Failed to submit brand. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (loading) return;

    setFormData(initialFormData);
    setSuccess("");
    setError("");
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-slate-100 bg-white px-6 py-5 sm:px-8">

          {/* Close */}
          <button
            type="button"
            onClick={handleClose}
            disabled={loading}
            className="absolute right-5 top-5 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Close form"
          >
            <X size={21} />
          </button>

          <div className="flex items-center gap-3 pr-10">

            {/* Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
              <Building2
                size={22}
                className="text-blue-600"
              />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                List Your Brand
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Tell us about your franchise opportunity.
              </p>
            </div>

          </div>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mx-6 mt-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 sm:mx-8">
            <CheckCircle2
              className="mt-0.5 flex-shrink-0 text-green-600"
              size={22}
            />

            <div>
              <p className="font-semibold text-green-800">
                Brand submitted successfully!
              </p>

              <p className="mt-1 text-sm text-green-700">
                Our admin team will review your details
                and contact you soon.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mx-6 mt-6 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 sm:mx-8">
            <AlertCircle
              className="mt-0.5 flex-shrink-0 text-red-600"
              size={22}
            />

            <div>
              <p className="font-semibold text-red-800">
                Submission failed
              </p>

              <p className="mt-1 text-sm text-red-700">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6 sm:p-8"
        >
          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Company / Brand Name
            </label>

            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="e.g. Premium Coffee Co."
              value={formData.companyName}
              onChange={handleChange}
              required
              disabled={loading}
              className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Business Category
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              disabled={loading}
              className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
            >
              <option value="">
                Select a category
              </option>

              <option value="Food & Beverage">
                Food & Beverage
              </option>

              <option value="Health & Fitness">
                Health & Fitness
              </option>

              <option value="Fashion & Retail">
                Fashion & Retail
              </option>

              <option value="Technology">
                Technology
              </option>

              <option value="Education">
                Education
              </option>

              <option value="Automotive">
                Automotive
              </option>

              <option value="Home Services">
                Home Services
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* Year + Investment */}
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Year Started */}
            <div>
              <label
                htmlFor="yearStarted"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Year Started
              </label>

              <input
                id="yearStarted"
                name="yearStarted"
                type="number"
                placeholder="e.g. 2018"
                min="1900"
                max={new Date().getFullYear()}
                value={formData.yearStarted}
                onChange={handleChange}
                required
                disabled={loading}
                className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
              />
            </div>

            {/* Investment */}
            <div>
              <label
                htmlFor="investment"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Required Investment
              </label>

              <input
                id="investment"
                name="investment"
                type="text"
                placeholder="e.g. $250K - $500K"
                value={formData.investment}
                onChange={handleChange}
                required
                disabled={loading}
                className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
              />
            </div>
          </div>

          {/* ROI */}
          <div>
            <label
              htmlFor="roi"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Expected / Average ROI
            </label>

            <input
              id="roi"
              name="roi"
              type="text"
              placeholder="e.g. 25% - 35%"
              value={formData.roi}
              onChange={handleChange}
              required
              disabled={loading}
              className="h-12 w-full rounded-lg border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Brand Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Tell potential franchise investors about your business..."
              value={formData.description}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Requirements */}
          <div>
            <label
              htmlFor="requirements"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Franchise Requirements
            </label>

            <textarea
              id="requirements"
              name="requirements"
              rows={4}
              placeholder="e.g. Minimum liquid capital, net worth, experience, location requirements..."
              value={formData.requirements}
              onChange={handleChange}
              required
              disabled={loading}
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 disabled:cursor-not-allowed disabled:bg-slate-50"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">

            {/* Cancel */}
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit Brand"}
            </button>

          </div>
        </form>
      </div>
    </div>
  );
} 
