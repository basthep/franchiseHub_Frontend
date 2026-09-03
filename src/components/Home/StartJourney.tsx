import { useNavigate } from "react-router-dom";

const StartJourney = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ready to Start Your Franchise Journey?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 md:text-base">
          Join thousands of successful entrepreneurs who found their perfect
          franchise match through FranchiseHub.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("/categories")}
            className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-gray-100"
          >
            Explore Opportunities
          </button>

          <button
            type="button"
            className="rounded-lg border-2 border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            List Your Brand
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartJourney;