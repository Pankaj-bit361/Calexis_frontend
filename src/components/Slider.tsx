import React, { useState, useEffect, useRef } from "react";

// --- ASSET IMPORTS --- (Your imports remain the same)
import lineProgress from "../assets/line-progress.svg";
import dots from "../assets/dots.svg";
import focusLine from "../assets/focus_line.png";
import FirstFile from "./circular-animator/svgs/first";
import SecondFile from "./circular-animator/svgs/second";
import ThirdFile from "./circular-animator/svgs/third";
import ForthFile from "./circular-animator/svgs/forth";
import FifthFile from "./circular-animator/svgs/fifth";
import SixthFile from "./circular-animator/svgs/sixth";
import Cube from "./circular-animator/Cube";
import AllSvg from "../common/AllSvg";

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

// --- CHILD COMPONENT: CircularAnimator --- (This component remains the same)
const CircularAnimator = ({
  stage = 1,
  className = "",
  scrollProgress = 0,
}: {
  stage: number;
  className?: string;
  scrollProgress: number;
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [stage]);

  const segmentThreshold = 100 / 8; // Each segment represents 12.5% progress

  return (
    <div
      className={`flex justify-center items-center rounded-full ball p-4 relative ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 149 149"
        fill="none"
      >
        <path
          d="M75.207 1.15967C94.8438 1.35809 112.631 9.2786 125.678 22.0294"
          stroke="#2570EB"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 1
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M126.746 23.0972C139.544 36.128 147.509 53.9206 147.739 73.5729"
          stroke="#2570EB"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 2
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M147.742 75.0806C147.576 94.7672 139.649 112.603 126.871 125.677"
          stroke="#5F9BFA"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 3
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M125.805 126.747C112.748 139.571 94.908 147.543 75.207 147.742"
          stroke="#93BBFD"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 4
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M73.6955 147.742C53.9945 147.542 36.1554 139.571 23.0977 126.747"
          stroke="#DAE8FE"
          strokeWidth="2.51872"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 5
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M22.0311 125.677C9.25284 112.603 1.32571 94.767 1.16016 75.0801"
          stroke="#1F55AF"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 6
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M1.16016 73.5691C1.39191 53.9181 9.35674 36.1271 22.1532 23.0972"
          stroke="#172E54"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= segmentThreshold * 7
              ? "opacity-100"
              : "opacity-20"
          }`}
        />
        <path
          d="M23.2227 22.0295C36.2682 9.27936 54.0544 1.35903 73.6897 1.15967"
          stroke="#5F9BFA"
          strokeWidth="1.25936"
          className={`transition-opacity duration-300 ${
            scrollProgress >= 99.9 ? "opacity-100" : "opacity-20"
          }`}
        />
      </svg>
      <img
        src={lineProgress}
        alt="line-progress"
        className="absolute w-full h-full rotate-slowly"
      />
      <img
        src={focusLine}
        alt="focus-line"
        className={`absolute w-[85%] h-[85%] ${
          isAnimating ? "focus-line-wiggle" : ""
        }`}
      />
      <img src={dots} alt="dots" className="absolute w-[50%] h-[50%]" />

      {stage === 0 ? (
        <Cube className="absolute w-[45%] h-[45%]" />
      ) : stage === 1 ? (
        <FirstFile className="absolute w-[45%] h-[45%]" />
      ) : stage === 2 ? (
        <SecondFile className="absolute w-[45%] h-[45%]" />
      ) : stage === 3 ? (
        <ThirdFile className="absolute w-[45%] h-[45%]" />
      ) : stage === 4 ? (
        <ForthFile className="absolute w-[45%] h-[45%]" />
      ) : stage === 5 ? (
        <FifthFile className="absolute w-[45%] h-[45%]" />
      ) : (
        <SixthFile className="absolute w-[45%] h-[45%]" />
      )}
    </div>
  );
};



const FullPageSections: React.FC = () => {
  const [visibleSection, setVisibleSection] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const componentWrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const sections = [
    // --- Your sections data remains the same ---
    {
      stage: 1,
      tagline: "The hunt begins",
      title: "Data Scraper",
      description:
        "Gather data from the farthest corners of the web and your private archives, structured and ready for action.",
      features: [
        "Multi-source scraping (web, APIs, internal DBs)",
        "Handles PDFs, images, HTML, CSVs, Parquet, and more",
        "Auto-detection of language & encoding",
      ],
    },
    {
      stage: 2,
      tagline: "Raw data, refined.",
      title: "Parsing Data Ingestion & Cleaning Engine",
      description:
        "Transform chaos into clarity with automated, context-preserving cleaning.",
      features: [
        "Hybrid cleaning: deterministic rules + AI-assisted refinement",
        "Multilingual OCR (54+ languages, including 22 Indian)",
        "Artifact removal without losing meaning",
        "Context-aware text segmentation",
        "Entity & metadata extraction",
        "Handles mixed content (tables, forms, paragraphs)",
      ],
    },
    {
      stage: 3,
      tagline: "Cut with precision",
      title: "Smart Chunking",
      description:
        "Semantic + heuristic chunking that preserves meaning, not just size.",
      features: [
        "Structure-aware segmentation",
        "Keeps context for downstream models",
        "Optimized for RAG and LLM fine-tuning",
      ],
    },
    {
      stage: 4,
      tagline: "From facts to training fuel",
      title: "Dataset Generation",
      description:
        "AI turns structured chunks into instruction-following datasets.",
      features: [
        "Generates context → instruction → output triplets",
        "Expert-curated golden seed data for accuracy",
        "Auto-scales dataset creation without human bottlenecks",
      ],
    },
    {
      stage: 5,
      tagline: "The wisdom of many, the cost of none.",
      title: "Council of Judges",
      description:
        "Specialized AI Judges validate for accuracy, compliance, and bias — without human armies.",
      features: [
        "Multi-judge cascade validation",
        "Domain-specific expertise encoded in models",
        "Removes bias, errors, and hallucinations",
      ],
    },
    {
      stage: 6,
      tagline: "Your model. Your edge",
      title: "Fine-Tuning Models",
      description: "Turn golden datasets into powerful, hyper-local LLMs.",
      features: [
        "Compatible with Llama, Mistral, Gemini, and more",
        "Fully integrated fine-tuning environment",
        "On-prem or cloud deployment with sovereignty",
      ],
    },
  ];

  // Effect for calculating overall scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScrollableHeight = scrollHeight - clientHeight;
      const currentProgress =
        totalScrollableHeight > 0
          ? (scrollTop / totalScrollableHeight) * 100
          : 0;
      setScrollProgress(currentProgress);
    };

    // Throttle scroll handler to 100ms
    const throttledScroll = throttle(handleScroll, 100);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", throttledScroll as any, { passive: true });
      handleScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", throttledScroll as any);
      }
    };
  }, []);

  // Effect for observing which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleSection(index);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.7,
      }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Scroll locking logic
  useEffect(() => {
    const componentWrapper = componentWrapperRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!componentWrapper || !scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const scrollAmount = e.deltaY;

      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 1;

      if (scrollAmount < 0) {
        if (isAtTop) {
          return;
        } else {
          e.preventDefault();
          scrollContainer.scrollTop += scrollAmount;
        }
      } else if (scrollAmount > 0) {
        if (isAtBottom) {
          return;
        } else {
          e.preventDefault();
          scrollContainer.scrollTop += scrollAmount;
        }
      }
    };

    componentWrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => componentWrapper.removeEventListener("wheel", handleWheel);
  }, []);

  // Force video to play on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (error) {
        console.log("Video autoplay failed:", error);
      }
    };

    // Try to play immediately
    playVideo();

    // Also try when video loads
    video.addEventListener("loadeddata", playVideo);
    
    return () => {
      video.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  return (
    <div
      ref={componentWrapperRef}
      className="w-screen bg-data-scrapper h-screen snap-start relative overflow-hidden bg-gray-900"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      >
        <source
          src={
            "https://pankaj-images-videos.s3.us-east-2.amazonaws.com/Screen+Recording+2025-10-02+at+10.46.05%E2%80%AFPM+(online-video-cutter.com).mp4"
          }
          type="video/mp4"
        />
      </video>

      <div
        ref={scrollContainerRef}
        className="absolute left-0 top-0 w-1/2 h-screen overflow-y-scroll overflow-x-hidden z-10 q-native-scrollbar"
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            data-index={index}
            className={`content-section min-h-screen flex flex-col justify-center gap-[160px] p-12 lg:p-20 text-white transition-all duration-1000 ease-out ${
              visibleSection === index
                ? "opacity-100 translate-y-0"
                : "opacity-40 translate-y-10"
            }`}
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <p className="text-[18px] nohemi-font leading-[28px] tracking-[1.8px] ">
                  {section.tagline}
                </p>
                <AllSvg type="data-scrapper-line" />
              </div>
              <p className="data_scapper_gradient_text text-[32px] md:text-[36px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[60px]">
                {section.title}
              </p>
              <p className="max-w-[50%] text-[16px] leading-6 font-medium geist-font ">
                {section.description}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-[16px] pl-4 leading-6 font-normal text-[#C8CACC] geist-font ">
                <ul className="list-disc">
                  {section.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-screen flex items-center justify-center z-10">
        <div className="transition-all duration-700 ease-out pointer-events-none">
          <CircularAnimator
            stage={sections[visibleSection]?.stage || 1}
            scrollProgress={scrollProgress}
            className="w-[50vh] h-[50vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default FullPageSections;