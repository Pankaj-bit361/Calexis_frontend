import React, { useState } from "react";
import Navbar from "../../common/Navbar";
import AIFactory from "./components/AIFactory";
import Utilities from "./components/Utilities";
import Mastery from "./components/Mastery";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import DemoPage from "./components/DemoPage";
import Footer from "./components/Footer";
import FullPageSections from "../../components/Slider";
import Hero from "./components/Hero";

const Home: React.FC = () => {
  const [scrollPosition] = useState<number>(0);

  return (
    <div className="relative">
      <Navbar scrollPosition={scrollPosition} />
      <Hero />
      <FullPageSections />
      {/* <ScrollSection /> */}
      <div className="mastery_section">
        <AIFactory />
      </div>
      <Utilities />
      <div className="mastery_section">
        <Mastery />
      </div>

      <Testimonial />
      <FAQ />
      <Blog />
      <DemoPage />
      <Footer />
    </div>
  );
};

export default Home;
