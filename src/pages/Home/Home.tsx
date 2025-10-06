import { useState } from "react";
import Navbar from "../../common/Navbar";
import ScrollSection from "./components/ScrollSection";

const Home = () => {
  const [scrollPosition] = useState(0);
  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   if (scrollContainerRef.current) {
  //     setScrollPosition(scrollContainerRef.current.scrollTop);
  //   }
  // };

  return (
    <div className="relative">
      <Navbar scrollPosition={scrollPosition} />
      {/* <FullPageSections
        ref={scrollContainerRef}
        onScroll={handleScroll}
        scrollContainerRef={scrollContainerRef}
      /> */}
      <ScrollSection />
      {/* <div className="mastery_section">
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
      <Footer /> */}
    </div>
  );
};

export default Home;
