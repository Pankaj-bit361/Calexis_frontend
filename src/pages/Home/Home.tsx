import React, { useState, Suspense, lazy } from "react";
import Navbar from "../../common/Navbar";
import AIFactory from "./components/AIFactory";
import Utilities from "./components/Utilities";
import Mastery from "./components/Mastery";
import FullPageSections from "../../components/Slider";
import Hero from "./components/Hero";

// Lazy load components that appear below the fold
const Testimonial = lazy(() => import("./components/Testimonial"));
const FAQ = lazy(() => import("./components/FAQ"));
const Blog = lazy(() => import("./components/Blog"));
const DemoPage = lazy(() => import("./components/DemoPage"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => <div className="h-screen" />;

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

      <Suspense fallback={<LoadingFallback />}>
        <Testimonial />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <DemoPage />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
