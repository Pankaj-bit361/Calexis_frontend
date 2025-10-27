import { useState, useEffect, useRef } from 'react';

const benefitsData = [
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

const CircularAnimator = ({ stage }: { stage: number }) => {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-pulse"></div>
      <div className="absolute inset-8 rounded-full border-2 border-purple-500/20"></div>
      <div className="text-6xl font-bold text-white">{stage}</div>
    </div>
  );
};

const BenefitsScrollSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const segments = 9;

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;

      const container = scrollContainerRef.current;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollProgress = scrollTop / scrollHeight;

      // Calculate which benefit should be shown
      const totalBenefits = benefitsData.length;
      const benefitIndex = Math.min(
        Math.floor(scrollProgress * totalBenefits),
        totalBenefits - 1
      );

      // Calculate progress within current benefit
      const benefitProgress = (scrollProgress * totalBenefits) % 1;
      const progressPercentage = benefitProgress * 100;

      setCurrentIndex(benefitIndex);
      setProgress(progressPercentage);
      setIsComplete(progressPercentage > 95);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const currentBenefit = benefitsData[currentIndex];

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div style={{ height: `${benefitsData.length * 100}vh` }}>
        <div className="sticky top-0 h-screen w-screen">
          <div className="relative text-white h-screen w-screen snap-start p-[120px] gap-[250px] overflow-hidden flex items-center justify-between bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            
            {/* Video Background */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            >
              <source src='https://gretalamda.s3.us-east-2.amazonaws.com/calexis_background.mov' type="video/mp4" />
            </video>

            {/* Left Section - Content */}
            <section className="relative z-10 w-full h-full flex flex-col justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <p className="text-[18px] leading-[28px] tracking-[1.8px] font-light transition-all duration-500">
                    {currentBenefit.tagline}
                  </p>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400"></div>
                </div>
                
                <p className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500">
                  {currentBenefit.title}
                </p>
                
                <p className="max-w-[50%] text-[16px] leading-6 font-medium transition-all duration-500">
                  {currentBenefit.description}
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <ul className="text-[16px] pl-4 leading-6 font-normal text-gray-300 space-y-2">
                  {currentBenefit.features.map((feature, idx) => (
                    <li 
                      key={idx}
                      className="transition-all duration-300"
                      style={{
                        opacity: 1,
                        transform: 'translateX(0)',
                        transitionDelay: `${idx * 100}ms`
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Progress Meter */}
                <div className="w-[360px] h-12 relative overflow-hidden rounded-lg border border-white/20 bg-black/30 backdrop-blur-sm">
                  {/* Progress Fill */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                      isComplete
                        ? "bg-blue-500"
                        : "bg-gradient-to-r from-gray-400 to-gray-300"
                    }`}
                    style={{
                      width: `${progress * 1.125}%`,
                      opacity: isComplete ? 0.9 : 0.6,
                    }}
                  />
                  
                  {/* Segments */}
                  <div className="absolute inset-0 flex py-3">
                    {Array.from({ length: segments - 1 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 border-r border-white/90"
                        style={{ marginRight: i === segments - 2 ? "20px" : "1px" }}
                      />
                    ))}
                  </div>
                  
                  {/* Complete Animation */}
                  {isComplete && (
                    <div className="absolute inset-0 bg-blue-400/30 animate-pulse" />
                  )}
                </div>
              </div>
            </section>

            {/* Right Section - Circular Animator */}
            <section className="relative z-10 w-full h-full flex justify-center items-center">
              <CircularAnimator stage={currentBenefit.stage} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsScrollSection;