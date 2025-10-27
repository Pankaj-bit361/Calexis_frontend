import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import AllSvg from "../common/AllSvg";
import CircularAnimator from "./circular-animator";
import Hero from "../pages/Home/components/Hero";

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

const MidSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isScrolling, setIsScrolling] = useState(false);

    // Create individual refs for each section
    const heroRef = useRef<HTMLDivElement>(null);
    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);
    const section3Ref = useRef<HTMLDivElement>(null);
    const section4Ref = useRef<HTMLDivElement>(null);
    const section5Ref = useRef<HTMLDivElement>(null);
    const section6Ref = useRef<HTMLDivElement>(null);

    // Create useInView hooks for each section with 50% threshold (half screen)
    const isInView1 = useInView(section1Ref, { margin: "-50% 0px -50% 0px" });
    const isInView2 = useInView(section2Ref, { margin: "-50% 0px -50% 0px" });
    const isInView3 = useInView(section3Ref, { margin: "-50% 0px -50% 0px" });
    const isInView4 = useInView(section4Ref, { margin: "-50% 0px -50% 0px" });
    const isInView5 = useInView(section5Ref, { margin: "-50% 0px -50% 0px" });
    const isInView6 = useInView(section6Ref, { margin: "-50% 0px -50% 0px" });

    const inViewStates = [isInView1, isInView2, isInView3, isInView4, isInView5, isInView6];

    // Function to get the correct ref for each section
    const getSectionRef = (index: number) => {
        switch (index) {
            case 0: return section1Ref;
            case 1: return section2Ref;
            case 2: return section3Ref;
            case 3: return section4Ref;
            case 4: return section5Ref;
            case 5: return section6Ref;
            default: return section1Ref;
        }
    };

    useEffect(() => {
        inViewStates.forEach((isInView, index) => {
            if (isInView) {
                const newPage = index + 1;
                console.log(`Section ${newPage} is now in view - updating current page`);
                setCurrentPage(newPage);
            }
        });
    }, [isInView1, isInView2, isInView3, isInView4, isInView5, isInView6]);

    // Smooth scroll functionality for Hero to first section (original working version)
    useEffect(() => {
        const handleWheelOnHero = (e: WheelEvent) => {
            console.log('Hero wheel event:', e.deltaY, 'isScrolling:', isScrolling);

            if (isScrolling) return;

            const heroElement = heroRef.current;
            const firstSectionElement = section1Ref.current;

            if (!heroElement || !firstSectionElement) {
                console.log('Elements not found:', { heroElement, firstSectionElement });
                return;
            }

            // Check if we're currently on the hero section
            const heroRect = heroElement.getBoundingClientRect();
            const isOnHero = heroRect.top <= 0 && heroRect.bottom > 0;

            console.log('Hero rect:', heroRect, 'isOnHero:', isOnHero);

            if (isOnHero && e.deltaY > 0) {
                console.log('Triggering scroll from Hero to first section');
                e.preventDefault();
                setIsScrolling(true);

                // Smooth scroll to first section
                firstSectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Reset scrolling state after animation
                setTimeout(() => {
                    setIsScrolling(false);
                }, 800);
            }
        };

        window.addEventListener('wheel', handleWheelOnHero, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheelOnHero);
        };
    }, [isScrolling]);

    // Additional smooth scroll for reverse direction (first section back to hero)
    useEffect(() => {
        const handleWheelReverse = (e: WheelEvent) => {
            if (isScrolling) return;

            const heroElement = heroRef.current;
            const firstSectionElement = section1Ref.current;

            if (!heroElement || !firstSectionElement) return;

            // Check if we're on the first section
            const firstSectionRect = firstSectionElement.getBoundingClientRect();
            const isOnFirstSection = firstSectionRect.top <= 0 && firstSectionRect.bottom > 0;

            if (isOnFirstSection && e.deltaY < 0) {
                e.preventDefault();
                setIsScrolling(true);

                // Smooth scroll back to hero
                heroElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Reset scrolling state after animation
                setTimeout(() => {
                    setIsScrolling(false);
                }, 800);
            }
        };

        window.addEventListener('wheel', handleWheelReverse, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheelReverse);
        };
    }, [isScrolling]);

    return (
        <div>
            <div ref={heroRef}>
                <Hero />
            </div>
            <div className="relative flex">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="fixed inset-0 w-full h-full object-cover z-0 opacity-90"
                >
                    <source
                        src="https://pankaj-images-videos.s3.us-east-2.amazonaws.com/Screen+Recording+2025-10-02+at+10.46.05%E2%80%AFPM+(online-video-cutter.com).mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Scroll Section */}
                <div className="w-1/2">
                    {sections.map((section, index) => (
                        <div
                            key={section.stage}
                            ref={getSectionRef(index)}
                            className="bg-transparent relative text-white h-screen w-screen snap-start p-[40px] pt-[100px] md:pt-[100px] md:p-[60px] lg:pt-[80px] lg:pb-[120px] lg:p-[120px] gap-[40px] md:gap-[200px] lg:gap-[250px]  overflow-hidden flex flex-col lg:flex-row items-center justify-between"
                        >
                            <section
                                className="relative z-10 w-full h-fit lg:h-full flex flex-col justify-top gap-6 md:gap-20 lg:justify-between"
                            >
                                <div className="flex flex-col gap-2 md:gap-3">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-[12px] md:text-[14px] lg:text-[18px] nohemi-font leading-[16px] md:leading-[24px] lg:leading-[28px]  tracking-[1.8px] ">
                                            {section.tagline}
                                        </p>
                                        <AllSvg type="data-scrapper-line" />
                                    </div>
                                    <p className="data_scapper_gradient_text3 text-[28px] md:text-[36px] lg:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[60px]">
                                        {section.title}
                                    </p>
                                    <p className="max-w-[100%] md:max-w-[60%] lg:max-w-[50%] text-[14px]  md:text-[16px] leading-5 md:leading-6 font-medium geist-font ">
                                        {section.description}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="text-[12px] md:text-[14px] lg:text-[16px] pl-4 leading-4 md:leading-5 lg:leading-6 font-normal text-[#C8CACC] geist-font ">
                                        {section.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
                <div className="sticky right-0 top-0 w-1/2 h-screen flex items-center justify-center z-10">
                    <div className="transition-all duration-700 ease-out pointer-events-none">
                        <CircularAnimator
                            stage={currentPage}
                            className="w-[50vh] h-[50vh]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidSection;
