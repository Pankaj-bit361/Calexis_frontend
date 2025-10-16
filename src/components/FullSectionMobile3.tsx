// src/layouts/FullPageSections2.jsx

import { forwardRef } from "react";
import Hero from "../pages/Home/components/Hero";
import AIFactory from "../pages/Home/components/AIFactory";
import DataScrapper from "../pages/Home/components/DataScrapper";
import ParsingData from "../pages/Home/components/ParsingData";
import SmartChunking from "../pages/Home/components/SmartChunking";
import DatasetGeneration from "../pages/Home/components/DatasetGeneration";
import Judges from "../pages/Home/components/Judges";
import FineTuneModel from "../pages/Home/components/FineTuneModel";

interface FullPageSectionsProps {
  onScroll: () => void;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}

const FullSectionMobile3 = forwardRef<HTMLDivElement, FullPageSectionsProps>(
  ({ onScroll }, ref) => {
    return (
      // Use a relative container to hold both the video and the scrollable content
      <div className="relative w-screen h-screen">
        {/* 1. The Video is now here, fixed to the background */}
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

        {/* 2. This is your original scrolling container */}
        <div
          ref={ref}
          onScroll={onScroll}
          className="h-screen slider_container w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Your sections remain here */}
          <Hero />
          <DataScrapper />
          <ParsingData />
          <SmartChunking />
          <DatasetGeneration />
          <Judges />
          <FineTuneModel />
          <AIFactory />
        </div>
      </div>
    );
  }
);

export default FullSectionMobile3;