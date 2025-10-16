import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AIFactory from "./AIFactory";
import Utilities from "./Utilities";
import Mastery from "./Mastery";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Blog from "./Blog";
import DemoPage from "./DemoPage";
import Footer from "./Footer";
import Hero from "./Hero";
import CircularAnimator from "../../../components/circular-animator";
import AllSvg from "../../../common/AllSvg";

const sliderData = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        stage: 4,
        tagline: "From facts to training fuel",
        title: "Dataset Generation",
        description:
            "AI turns structured chunks into instruction-following datasets.",
        features: [
            "Generates context → instruction → output triplets",
            'Expert-curated "golden" seed data for accuracy',
            "Auto-scales dataset creation without human bottlenecks",
        ],
    },
    {
        id: 5,
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
        id: 6,
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

const clamp = (num: number, min: number, max: number) =>
    Math.max(min, Math.min(max, num));

export default function ScrollSlider() {
    const total = sliderData.length + 2; // +1 for hero page
    const [index, setIndex] = useState(0);
    const [, setProgress] = useState(0);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const lockRef = useRef(false);
    const animMs = 600;

    const safeIndex = clamp(index, 0, total - 1);
    const current = safeIndex < 7 ? sliderData[safeIndex - 1] : sliderData[safeIndex - 2];

    // Page loading progress effect
    useEffect(() => {
        const loadingDuration = 2000; // 2 seconds to complete loading
        const startTime = performance.now();

        const animateLoading = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progressValue = Math.min(elapsed / loadingDuration, 1);


            if (progressValue < 1) {
                requestAnimationFrame(animateLoading);
            } else {
                // Add a small delay before marking as loaded for smooth transition
                setTimeout(() => {
                    setIsPageLoaded(true);
                }, 300);
            }
        };

        requestAnimationFrame(animateLoading);
    }, []);

    // Animation variants for smooth transitions
    const textAnimationVariants = {
        initial: { opacity: 0, y: 20, scale: 0.98 },
        animate: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const
            }
        },
        exit: {
            opacity: 0,
            y: -15,
            scale: 1.02,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    // Hero normal disappear animation variants
    const heroDisappearVariants = {
        initial: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            y: -15,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    // Scroll section entrance animation variants
    const scrollSectionVariants = {
        initial: {
            opacity: 0,
            scale: 1.02,
            y: 20
        },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: 0.1
            }
        }
    };

    // Enhanced staggered animation for feature points
    const featureItemVariants = {
        initial: { opacity: 0, x: -30, scale: 0.9 },
        animate: (index: number) => ({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: 0.6 + (index * 0.15) // Increased delay for better staggering
            }
        }),
        exit: {
            opacity: 0,
            x: -15,
            scale: 0.95,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    // Container animation for feature list
    const featureContainerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.3,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const snapTo = (target: number) => {
        const next = clamp(target, 0, total - 1);
        setIndex(next);
        if (typeof window === "undefined") return;

        const targetY = next * window.innerHeight;
        lockRef.current = true;

        const startY = window.scrollY;
        const dist = targetY - startY;
        const startT = performance.now();
        const ease = (t: number) => 1 - Math.pow(1 - t, 3);

        const step = (now: number) => {
            const t = clamp((now - startT) / animMs, 0, 1);
            const y = startY + dist * ease(t);
            window.scrollTo(0, y);
            setProgress(t);
            if (t < 1) requestAnimationFrame(step);
            else lockRef.current = false;
        };

        requestAnimationFrame(step);
    };

    useEffect(() => {
        const onWheel = (e: WheelEvent) => {
            if (lockRef.current || !isPageLoaded) return; // Prevent scrolling until page is loaded
            const threshold = 40;
            const animationEnd = sliderData.length * window.innerHeight;

            // Allow natural scroll after animation section ends
            if (window.scrollY >= animationEnd - 50) return;

            if (e.deltaY > threshold && safeIndex < total - 1) {
                e.preventDefault();
                snapTo(safeIndex + 1);
            } else if (
                e.deltaY < -threshold &&
                safeIndex > 0 &&
                window.scrollY < animationEnd - 50
            ) {
                e.preventDefault();
                snapTo(safeIndex - 1);
            }
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [safeIndex, total, isPageLoaded]);

    useEffect(() => {
        const onScroll = () => {
            if (!isPageLoaded) return; // Only track scroll progress after page is loaded
            const scrollY = window.scrollY;
            const vh = window.innerHeight;
            const localProgress = (scrollY - safeIndex * vh) / vh;
            setProgress(clamp(localProgress, 0, 1));
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [safeIndex, isPageLoaded]);

    return (
        <>
            <div
                className="bg-black text-white font-sans"
                style={{ height: `${total * 100}vh` }}
            >
                <div className="sticky top-0 flex items-center justify-center h-screen">


                    <AnimatePresence mode="wait">
                        {safeIndex === 0 ? (
                            <motion.div
                                key="hero-section"
                                variants={heroDisappearVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full h-full relative z-0"
                            >
                                <Hero />
                            </motion.div>
                        ) : (
                            // SCROLL SECTION DESIGN
                            <motion.div
                                key="scroll-section"
                                variants={scrollSectionVariants}
                                initial="initial"
                                animate="animate"
                                className="w-full h-full relative z-0"
                            >
                                <div className="bg-data-scrapper relative text-white h-screen w-screen p-10 md:p-20 2xl:p-[120px] pt-24 md:pt-[120px] overflow-hidden flex flex-col md:flex-row items-center justify-between">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute object-cover scale-125"
                                    >
                                        <source
                                            src="https://pankaj-images-videos.s3.us-east-2.amazonaws.com/bg_final.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <section className="relative z-10 w-full h-full flex flex-col gap-10 md:justify-between max-h-full md:max-h-[700px]">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`text-content-${current.id}`}
                                                className="flex flex-col gap-2 2xl:gap-3"
                                                variants={textAnimationVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                            >
                                                <motion.div
                                                    className="flex gap-2 items-center"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.2 }}
                                                >
                                                    <motion.p
                                                        className="text-sm 2xl:text-[18px] nohemi-font leading-[24px] xl:leading-[28px] tracking-[1.8px]"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{ duration: 0.5, delay: 0.3 }}
                                                    >
                                                        {current.tagline}
                                                    </motion.p>
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ duration: 0.4, delay: 0.4 }}
                                                    >
                                                        <AllSvg type="data-scrapper-line" className="w-[60px] md:w-[167px]" />
                                                    </motion.div>
                                                </motion.div>
                                                <motion.p
                                                    className="data_scapper_gradient_text3 text-[28px] lg:text-[36px] 2xl:text-[48px] leading-8 lg:leading-[48px] 2xl:leading-[60px]"
                                                    initial={{ opacity: 0, y: 30 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.7, delay: 0.4 }}
                                                >
                                                    {current.title}
                                                </motion.p>
                                                <motion.p
                                                    className="max-w-[80%] text-xs md:text-sm 2xl:text-[16px] md:leading-6 font-medium geist-font"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.5 }}
                                                >
                                                    {current.description}
                                                </motion.p>
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="flex flex-col gap-6">
                                            <motion.div
                                                className="text-xs md:text-sm 2xl:text-[16px] pl-4 font-normal text-[#C8CACC] geist-font"
                                                variants={featureContainerVariants}
                                                initial="initial"
                                                animate="animate"
                                                key={`features-container-${current.id}`}
                                            >
                                                {current.features?.map((feature, index) => (
                                                    <motion.li
                                                        key={`${current.id}-${index}`}
                                                        variants={featureItemVariants}
                                                        custom={index}
                                                        className="mb-0.5 2xl:mb-2"
                                                    >
                                                        {feature}
                                                    </motion.li>
                                                ))}
                                            </motion.div>
                                            {/* <div className="flex gap-6 items-center loader-scroller px-4 py-3.5 w-fit relative overflow-hidden">
                                                {
                                                    new Array(13).fill(0).map((_, index) => (
                                                        <div key={index} className="w-[1px] h-3 rounded-full bg-white/50"></div>
                                                    ))
                                                }
                                                <div className="w-[3px] h-4 rounded-full bg-[linear-gradient(136deg,_#3C82F6_0%,_#8CD1FB_100%)]"></div>
                                                <motion.div
                                                    className="bg-[linear-gradient(90deg,_rgba(255,_255,_255,_0.15)_21.38%,_rgba(255,_255,_255,_0.15)_21.38%)] h-3 absolute left-4 max-w-[calc(100%-32px)]"
                                                    animate={{
                                                        width: `${isPageLoaded ? progress * 100 : loadingProgress}%`
                                                    }}
                                                    transition={{
                                                        duration: isPageLoaded ? 0.1 : 0.05,
                                                        ease: isPageLoaded ? "linear" : "easeOut"
                                                    }}
                                                ></motion.div>
                                            </div> */}
                                        </div>
                                    </section>

                                    <section className="relative z-10 w-full h-full flex justify-center items-center">
                                        <motion.div
                                            className="w-full h-full flex justify-center items-center"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <CircularAnimator stage={safeIndex} className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]" />
                                        </motion.div>
                                    </section>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90vw] max-w-3xl h-2 bg-white/15 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 transition-[width] duration-150" style={{ width: `${progress * 100}%` }}></div>
                    </div> */}
                </div>
            </div>

            {/* Bottom section */}
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
        </>
    );
}
