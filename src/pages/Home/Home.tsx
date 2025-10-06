import { useRef, useState } from "react";
import Navbar from "../../common/Navbar";
import FullPageSections from "../../components/Slider";
import AIFactory from "./components/AIFactory";
import Utilities from "./components/Utilities";
import Mastery from "./components/Mastery";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import DemoPage from "./components/DemoPage";
import Footer from "./components/Footer";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
    }
  };

  return (
    <div className="relative">
      <Navbar scrollPosition={scrollPosition} />
      <FullPageSections
        ref={scrollContainerRef}
        onScroll={handleScroll}
        scrollContainerRef={scrollContainerRef}
      />
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
