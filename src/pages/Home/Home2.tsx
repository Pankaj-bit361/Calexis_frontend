import { useRef, useState } from "react";
import Navbar from "../../common/Navbar";
import FullPageSections from "../../components/Slider2";
import Utilities from "./components/Utilities";
import Mastery from "./components/Mastery";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import DemoPage from "./components/DemoPage";
import Footer from "./components/Footer";
import AIFactory from "./components/AIFactory";
import Hero from "./components/Hero";
import MidSection from "../../components/MidSection";

const Home2 = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   if (scrollContainerRef.current) {
  //     setScrollPosition(scrollContainerRef.current.scrollTop);
  //   }
  // };

  return (
    <div className="relative">
      <Navbar />
      
      {/* Snap scroll wale sections - Hero, FullPageSections, AIFactory */}
      {/* <FullPageSections
        ref={scrollContainerRef}
        onScroll={handleScroll}
        scrollContainerRef={scrollContainerRef}
      /> */}
      {/* <Hero /> */}
      <MidSection />

      <AIFactory />
      <Utilities />
      <Mastery />
      <Testimonial />
      <FAQ />
      <Blog />
      <DemoPage />
      <Footer />
    </div>
  );
};

export default Home2;