import  { useRef, useState } from "react";
import Navbar from "../../common/Navbar";
import FullPageSections from "../../components/Slider";

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
    </div>
  );
};

export default Home;
