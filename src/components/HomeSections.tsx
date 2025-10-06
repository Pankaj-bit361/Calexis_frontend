import Hero from "../pages/Home/components/Hero";
import DataSlider from "../pages/Home/components/DataSlider";
import Utilities from "../pages/Home/components/Utilities";

const HomeSections = () => {
  return (
    <div className="w-full">
      <Hero />
      <DataSlider />
      <Utilities />
    </div>
  );
};

export default HomeSections;
