import { useState } from "react";

import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Steps from "../components/Home/Steps";
import Featured from "../components/Home/Featured";
import StartJourney from "../components/Home/StartJourney";
import Footer from "../components/Home/Footer";
import BrandForm from "../components/Home/BrandForm";
import AIChatbot from "../components/Home/AIChatbot";

export default function Home() {
  const [showBrandForm, setShowBrandForm] = useState(false);

  const openBrandForm = () => {
    setShowBrandForm(true);
  };

  const closeBrandForm = () => {
    setShowBrandForm(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <Navbar onListBrand={openBrandForm} />

      {/* Hero */}
      <Hero onListBrand={openBrandForm} />

      {/* Home Sections */}
      <Categories />
      <Steps />
      <Featured />
      <StartJourney />
      <Footer />

      {/* Brand Form Modal */}
      <BrandForm
        open={showBrandForm}
        onClose={closeBrandForm}
      />

      <AIChatbot />

    </div>
  );
}