import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  CleaningEngineSVG,
  ConnectingLine,
  CouncilOfJudgesSVG,
  DataScraperSVG,
  DatasetGenerationSVG,
  FineTuningModelsSVG,
  SmartChunkingSVG,
} from "../../../common/Svg";
import AIfactory from "../../../assets/stage7.svg";

const AIFactory: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [completedIndices, setCompletedIndices] = useState<number[]>([]);
  const hasAnimated = useRef<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const Data = [
    { name: "Data Scraper", Component: DataScraperSVG },
    { name: "Cleaning Engine", Component: CleaningEngineSVG },
    { name: "Smart Chunking", Component: SmartChunkingSVG },
    { name: "Dataset Generation", Component: DatasetGenerationSVG },
    { name: "Council of Judges", Component: CouncilOfJudgesSVG },
    { name: "Fine-Tuning Models", Component: FineTuningModelsSVG },
  ];

  useEffect(() => {
    const animateSequence = async () => {
      if (hasAnimated.current || !isVisible) return;
      hasAnimated.current = true;

      for (let i = 0; i < Data.length; i++) {
        setActiveIndex(i);
        await new Promise((resolve) => setTimeout(resolve, 1300));
        setCompletedIndices((prev) => [...prev, i]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setActiveIndex(-1);
    };

    animateSequence();
  }, [isVisible]);

  const isItemActive = (index : number) => activeIndex === index;
  const isItemCompleted = (index : number) => completedIndices.includes(index);

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const stageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const stageItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const bottomTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="bg-data-scrapper2 hidden lg:flex relative text-white snap-start  h-screen w-screen   p-[40px] md:p-[60px] lg:p-[80px] gap-[80px] md:gap-[120px] lg:gap-[160px]  overflow-hidden flex flex-col items-center justify-between">
      <motion.section
        className="relative z-10 w-full max-w-[200px] h-full flex justify-center"
        variants={logoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={() => setIsVisible(true)}
      >
        <motion.img 
          src={AIfactory} 
          alt="AI Factory"
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.5 }
          }}
        />
      </motion.section>
      <section className="w-full  flex flex-col items-center justify-center gap-[80px]">
        <motion.div
          className="flex w-full max-w-[1450px] items-center justify-between"
          variants={stageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Data.map((item, index) => (
            <motion.div key={index} style={{ display: "contents" }}>
              <motion.div 
                className="flex flex-col items-center gap-4"
                variants={stageItemVariants}
              >
                <motion.div
                  className={`
                  relative  w-[64px] h-[64px] rounded-[14px] flex items-center justify-center
                   transition-all duration-500
                  ${
                    isItemActive(index) || isItemCompleted(index)
                      ? "bg-[rgba(252,252,252,0.09)] "
                      : "bg-[rgba(252,252,252,0.09)] opacity-40"
                  }
                  ${isItemActive(index) ? "scale-110" : ""}
                  ${isItemCompleted(index) ? " backdrop-blur-[6px]" : ""}
                `}
                  whileHover={
                    !isItemActive(index) && !isItemCompleted(index)
                      ? {
                          scale: 1.1,
                          opacity: 1,
                          transition: { duration: 0.3 }
                        }
                      : {}
                  }
                  style={{ willChange: "transform" }}
                >
                  <item.Component
                    isActive={isItemActive(index)}
                    isCompleted={isItemCompleted(index)}
                  />

                  {isItemActive(index) && (
                    <motion.div 
                      className="absolute inset-0 rounded-2xl bg-[rgba(252,252,252,0.09)] opacity-20 animate-pulse"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.2, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                <motion.p
                  className={`
                  text-[16px] font-normal leading-5 text-center transition-all duration-500
                  ${
                    isItemActive(index) || isItemCompleted(index)
                      ? "text-slate-200"
                      : "text-slate-600 opacity-40"
                  }
                  ${isItemActive(index) ? "text-white font-semibold" : ""}
                `}
                  animate={{
                    y: isItemActive(index) ? -2 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  {item.name}
                </motion.p>
              </motion.div>

              {index !== Data.length - 1 && (
                <div className=" flex items-center -mt-[16px]">
                  <ConnectingLine
                    isActive={
                      activeIndex === index && !completedIndices.includes(index)
                    }
                    isCompleted={completedIndices.includes(index)}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          className="flex flex-col gap-3 items-center justify-center text-center"
          variants={bottomTextVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.p 
            className="text-[48px] font-medium leading-[60px] text-center nohemi-font"
            variants={textItemVariants}
          >
            Calaxis The Modular{" "}
            <motion.span 
              className="data_scapper_gradient_text text-[32px] md:text-[36px] lg:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[60px]"
              initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
              whileInView={{ opacity: 1, backgroundPosition: "100% 50%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              AI Factory
            </motion.span>
          </motion.p>
          <motion.p 
            className="max-w-[60%]  text-[16px] leading-6 font-medium geist-font"
            variants={textItemVariants}
          >
            Automating every stage from data collection to model deployment,
            with each feature designed as a modular component of the whole
            Calaxis system.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default AIFactory;