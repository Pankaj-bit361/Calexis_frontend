// src/layouts/FullPageSections2.jsx

import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
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
import { useInView, useScroll } from "framer-motion";
import CircularAnimator from "./circular-animator";

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
  scrollPosition: number;
}

const FullPageSections2 = forwardRef<HTMLDivElement, FullPageSectionsProps>(
  ({ onScroll, scrollPosition }, ref) => {
    // Throttle the scroll handler to 100ms
    const throttledScroll = useCallback(throttle(onScroll, 100), [onScroll]);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);

    const isInView1 = useInView(ref1, { amount: 0.3 });
    const isInView2 = useInView(ref2, { amount: 0.3 });
    const isInView3 = useInView(ref3, { amount: 0.3 });
    const isInView4 = useInView(ref4, { amount: 0.3 });
    const isInView5 = useInView(ref5, { amount: 0.3 });
    const isInView6 = useInView(ref6, { amount: 0.3 });
    const isInView7 = useInView(ref7, { amount: 0.5 });
    const [page, setPage] = useState(0);
    const [shouldShowBall, setShouldShowBall] = useState(false);

    useEffect(() => {
      if (isInView1) {
        setPage(1);
        setShouldShowBall(true);
      } else if (isInView2) {
        setPage(2);
        setShouldShowBall(true);
      } else if (isInView3) {
        setPage(3);
        setShouldShowBall(true);
      } else if (isInView4) {
        setPage(4);
        setShouldShowBall(true);
      } else if (isInView5) {
        setPage(5);
        setShouldShowBall(true);
      } else if (isInView6) {
        setPage(6);
        setShouldShowBall(true);
      } else if (isInView7) {
        setPage(7);
        setShouldShowBall(false);
      } else {
        // Don't change page when scrolling to top, just hide the ball
        setShouldShowBall(false);
      }
    }, [isInView1, isInView2, isInView3, isInView4, isInView5, isInView6, isInView7]);
    console.log(Math.floor((scrollPosition - (window.innerHeight *.8)) / 100))
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
              <div>
                <DataScrapper ref={ref1} />
                <ParsingData ref={ref2} />
                <SmartChunking ref={ref3} />
                <DatasetGeneration ref={ref4} />
                <Judges ref={ref5} />
                <FineTuneModel ref={ref6} />
              </div>
              <div
                className="hidden lg:flex fixed right-0 top-0 w-1/2 h-screen items-center justify-center z-10 pointer-events-none"
                style={{
                  opacity: Math.floor((scrollPosition - (window.innerHeight *.8)) / 100),
                  transition: Math.floor((scrollPosition - (window.innerHeight *.8)) / 100) > 0 ? 'opacity 0.2s ease-in-out' : ''
                }}
              >
                <CircularAnimator
                    stage={page}
                    className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]"
                  />
              </div>
            </div>
          </div>
        {/* )} */}

        <AIFactory ref={ref7} />

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
