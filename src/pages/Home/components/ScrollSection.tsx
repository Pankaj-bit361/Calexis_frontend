import { useInView, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import CircularAnimator from "../../../components/circular-animator";
import AllSvg from "../../../common/AllSvg";
import AIFactory from "./AIFactory";
import Utilities from "./Utilities";
import Mastery from "./Mastery";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Blog from "./Blog";
import DemoPage from "./DemoPage";
import Footer from "./Footer";

const sliderData = [
  {
    id: 1,
    stage: 1,
    tagline: "The hunt begins",
    title: "Data Scraper",
    description: "Gather data from the farthest corners of the web and your private archives, structured and ready for action.",
    features: [
      "Multi-source scraping (web, APIs, internal DBs)",
      "Handles PDFs, images, HTML, CSVs, Parquet, and more",
      "Auto-detection of language & encoding"
    ]
  },
  {
    id: 2,
    stage: 2,
    tagline: "Raw data, refined.",
    title: "Parsing Data Ingestion & Cleaning Engine",
    description: "Transform chaos into clarity with automated, context-preserving cleaning.",
    features: [
      "Hybrid cleaning: deterministic rules + AI-assisted refinement",
      "Multilingual OCR (54+ languages, including 22 Indian)",
      "Artifact removal without losing meaning",
      "Context-aware text segmentation",
      "Entity & metadata extraction",
      "Handles mixed content (tables, forms, paragraphs)"
    ]
  },
  {
    id: 3,
    stage: 3,
    tagline: "Cut with precision",
    title: "Smart Chunking",
    description: "Semantic + heuristic chunking that preserves meaning, not just size.",
    features: [
      "Structure-aware segmentation",
      "Keeps context for downstream models",
      "Optimized for RAG and LLM fine-tuning"
    ]
  },
  {
    id: 4,
    stage: 4,
    tagline: "From facts to training fuel",
    title: "Dataset Generation",
    description: "AI turns structured chunks into instruction-following datasets.",
    features: [
      "Generates context → instruction → output triplets",
      "Expert-curated \"golden\" seed data for accuracy",
      "Auto-scales dataset creation without human bottlenecks"
    ]
  },
  {
    id: 5,
    stage: 5,
    tagline: "The wisdom of many, the cost of none.",
    title: "Council of Judges",
    description: "Specialized AI Judges validate for accuracy, compliance, and bias — without human armies.",
    features: [
      "Multi-judge cascade validation",
      "Domain-specific expertise encoded in models",
      "Removes bias, errors, and hallucinations"
    ]
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
      "On-prem or cloud deployment with sovereignty"
    ]
  }
];

const ScrollSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    // Animation variants for smooth transitions
    const heroExitVariants = {
        initial: { opacity: 1, scale: 1, y: 0 },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: -50,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const
            }
        }
    };

    // Full page animation for hero to first code section transition
    const firstContentEnterVariants = {
        initial: { opacity: 0, scale: 1.05, y: 50 },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
                delay: 0.2
            }
        }
    };

    // Static container for subsequent sections (no page-level animation)
    const staticContentVariants = {
        initial: { opacity: 1 },
        animate: { opacity: 1 }
    };

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

    const container = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const isInView3 = useInView(ref3);
    const isInView4 = useInView(ref4);
    const isInView5 = useInView(ref5);
    const isInView6 = useInView(ref6);
    const isInView7 = useInView(ref7);

    useEffect(() => {
        let newPosition = scrollPosition;

        if (isInView1) {
            newPosition = 1;
        } else if (isInView2) {
            newPosition = 2;
        } else if (isInView3) {
            newPosition = 3;
        } else if (isInView4) {
            newPosition = 4;
        } else if (isInView5) {
            newPosition = 5;
        } else if (isInView6) {
            newPosition = 6;
        } else if (isInView7) {
            newPosition = 7;
        }

        if (newPosition !== scrollPosition) {
            setScrollPosition(newPosition);
        }
    }, [
        isInView1,
        isInView2,
        isInView3,
        isInView4,
        isInView5,
        isInView6,
        isInView7,
        scrollPosition
    ]);
    console.log(
        isInView1,
        isInView2,
        isInView3,
        isInView4,
        isInView5,
        isInView6,
        isInView7,
        scrollPosition
    );

    return (
        <div
            ref={container}
            className="h-screen w-screen overflow-y-scroll smooth-scroll-container"
        >
            <div className="h-[70vh] w-screen snap-start" ref={ref1}></div>
            <div className="h-[70vh] w-screen snap-start" ref={ref2}></div>
            <div className="h-[70vh] w-screen snap-start" ref={ref3}></div>
            <div className="h-[70vh] w-screen snap-start" ref={ref4}></div>
            <div className="h-[70vh] w-screen snap-start" ref={ref5}></div>
            <div className="h-[70vh] w-screen snap-start" ref={ref6}></div>
            <div className="h-[150vh] w-screen snap-start" ref={ref7}></div>
            <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none animation-container">
                <AnimatePresence mode="wait">
                    {scrollPosition === 1 && (
                        <motion.div
                            key="hero"
                            variants={heroExitVariants}
                            initial="initial"
                            animate="initial"
                            exit="exit"
                        >
                            <Hero />
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {scrollPosition >= 2 && (
                        <motion.div
                            key={`content-${scrollPosition}`}
                            variants={scrollPosition === 2 ? firstContentEnterVariants : staticContentVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="bg-data-scrapper relative text-white h-screen w-screen p-10 md:p-20 2xl:p-[120px] pt-24 md:pt-[120px] overflow-hidden flex flex-col md:flex-row items-center justify-between">
                                {/* Video Background - Reverted to original */}
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute object-cover"
                                >
                                    <source
                                        src="https://gretalamda.s3.us-east-2.amazonaws.com/calexis_background.mov"
                                        type="video/mp4"
                                    />
                                </video>

                                <section className="relative z-10 w-full h-full flex flex-col gap-10 md:justify-between">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`text-content-${scrollPosition}`}
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
                                                    {sliderData?.[scrollPosition - 2]?.tagline}
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
                                                {sliderData?.[scrollPosition - 2]?.title}
                                            </motion.p>
                                            <motion.p
                                                className="max-w-[80%] text-xs md:text-sm 2xl:text-[16px] md:leading-6 font-medium geist-font"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                            >
                                                {sliderData?.[scrollPosition - 2]?.description}
                                            </motion.p>
                                        </motion.div>
                                    </AnimatePresence>

                                    <div className="flex flex-col gap-6">
                                        <motion.div
                                            className="text-xs md:text-sm 2xl:text-[16px] pl-4 font-normal text-[#C8CACC] geist-font"
                                            variants={featureContainerVariants}
                                            initial="initial"
                                            animate="animate"
                                            key={`features-container-${scrollPosition}`}
                                        >
                                            {sliderData?.[scrollPosition - 2]?.features?.map((feature, index) => (
                                                <motion.li
                                                    key={`${scrollPosition}-${index}`}
                                                    variants={featureItemVariants}
                                                    custom={index}
                                                    className="mb-0.5 2xl:mb-2"
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </motion.div>
                                    </div>
                                </section>

                                <section className="relative z-10 w-full h-full flex justify-center items-center">
                                    {scrollPosition === 2 ? (
                                        <motion.div
                                            className="w-full h-full flex justify-center items-center"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 0.4 }}
                                        >
                                            <CircularAnimator stage={scrollPosition - 1} className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]" />
                                        </motion.div>
                                    ) : (
                                        <div className="w-full h-full flex justify-center items-center">
                                            <CircularAnimator stage={scrollPosition - 1} className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]" />
                                        </div>
                                    )}
                                </section>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
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
        </div>
    );
};

export default ScrollSection;
