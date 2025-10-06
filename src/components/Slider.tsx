// FullPageSections.js
import { forwardRef } from "react";
import Hero from "../pages/Home/components/Hero";
import DataScrapper from "../pages/Home/components/DataScrapper";
import ParsingData from "../pages/Home/components/ParsingData";
import SmartChunking from "../pages/Home/components/SmartChunking";
import DatasetGeneration from "../pages/Home/components/DatasetGeneration";
import FineTuneModel from "../pages/Home/components/FineTuneModel";
import Judges from "../pages/Home/components/Judges";


interface FullPageSectionsProps {
  onScroll: () => void;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

const FullPageSections = forwardRef<HTMLDivElement, FullPageSectionsProps>(
  ({ onScroll }, ref) => {
    return (
      <div
        ref={ref}
        onScroll={onScroll}
        className="h-screen slider_container w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        <Hero />
        <DataScrapper />
        <ParsingData />
        <SmartChunking />
        <DatasetGeneration />
        <Judges />
        <FineTuneModel />
       
      </div>
    );
  }
);

export default FullPageSections;
