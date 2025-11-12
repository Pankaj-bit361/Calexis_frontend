// src/layouts/FullPageSections2.jsx

import { forwardRef, useCallback } from "react";
import Hero from "../pages/Home/components/Hero";
import AIFactory from "../pages/Home/components/AIFactory";
import DataScrapper from "../pages/Home/components/DataScrapper";
import ParsingData from "../pages/Home/components/ParsingData";
import SmartChunking from "../pages/Home/components/SmartChunking";
import DatasetGeneration from "../pages/Home/components/DatasetGeneration";
import Judges from "../pages/Home/components/Judges";
import FineTuneModel from "../pages/Home/components/FineTuneModel";

import Utilities from "../pages/Home/components/Utilities";
import Mastery from "../pages/Home/components/Mastery";
import Testimonial from "../pages/Home/components/Testimonial";
import FAQ from "../pages/Home/components/FAQ";
import Blog from "../pages/Home/components/Blog";
import DemoPage from "../pages/Home/components/DemoPage";
import Footer from "../pages/Home/components/Footer";

// Throttle utility function
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

interface FullPageSectionsProps {
  onScroll: () => void;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

const FullPageSections2 = forwardRef<HTMLDivElement, FullPageSectionsProps>(
  ({ onScroll }, ref) => {
    // Throttle the scroll handler to 100ms
    const throttledScroll = useCallback(throttle(onScroll, 100), [onScroll]);
    return (
      <div
        ref={ref}
        onScroll={throttledScroll as any}
        className="h-screen slider_container w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        <Hero />

        {/* {
        
        window.innerWidth > 1000 ? (
          <FullPageSections />
        ) : ( */}
          <div className="relative bg-data-scrapper w-screen h-screen">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="fixed inset-0 w-full h-full object-cover z-[-1] opacity-90" // Key change: fixed and z-[-1]
            >
              <source
                src="https://pankaj-images-videos.s3.us-east-2.amazonaws.com/Screen+Recording+2025-10-02+at+10.46.05%E2%80%AFPM+(online-video-cutter.com).mp4"
                type="video/mp4"
              />
            </video>

            <div
              ref={ref}
              onScroll={onScroll}
              className="h-screen slider_container w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
              style={{ scrollBehavior: "smooth" }}
            >
              <DataScrapper />
              <ParsingData />
              <SmartChunking />
              <DatasetGeneration />
              <Judges />
              <FineTuneModel />
            </div>
          </div>
        {/* )} */}

        <AIFactory />

        {/* These sections only show on desktop (>= 1000px) */}
        <div className="hidden lg:block">
          <Utilities />
          <Mastery />
          <Testimonial />
          <FAQ />
          <Blog />
          <DemoPage />
          <Footer />
        </div>
      </div>
    );
  }
);

export default FullPageSections2;
