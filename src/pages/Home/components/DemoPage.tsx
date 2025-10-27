import React from "react";
import { motion } from "framer-motion";

const DemoPage: React.FC = () => {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const subtextVariants = {
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

  // Button variants
  const buttonContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-data-scrapper2 relative  text-white  p-[40px]  md:p-[60px] lg:p-[60px] xl:p-[80px] gap-[60px] lg:gap-[40px] xl:gap-[60px] overflow-hidden flex  items-center lg:justify-center lg:snap-start lg:h-screen w-screen py-[60px] lg:py-0">
      <motion.section
        className="demo-section-bg flex flex-col min-h-[340px] md:min-h-[458px] lg:min-h-[400px] xl:min-h-[568px] gap-6 lg:gap-4 xl:gap-6 w-full h-full justify-center items-center p-5 md:p-8 lg:p-6 xl:p-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex flex-col gap-3 lg:gap-2 xl:gap-3 w-[100%] lg:w-[65%]"
          variants={containerVariants}
        >
          <motion.p
            className="demopage_gradient_text text-[30px] leading-9 md:text-[48px] md:leading-[60px]  lg:text-[48px] lg:leading-[56px] xl:text-[64px] xl:leading-[72px]"
            variants={textVariants}
            initial={{ opacity: 0, y: 30, backgroundPosition: "0% 50%" }}
            whileInView={{
              opacity: 1,
              y: 0,
              backgroundPosition: "100% 50%"
            }}
            viewport={{ once: true }}
            transition={{
              opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
              y: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
              backgroundPosition: { duration: 2, delay: 0.3 }
            }}
          >
            From raw data to refined intelligence at scale.
          </motion.p>
          <motion.p
            className="text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-normal text-center leading-4 md:leading-5 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC]"
            variants={subtextVariants}
          >
            Calaxis is the fully integrated AI factory, automating every stage
            from data collection to model deployment.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex  gap-7 items-center"
          variants={buttonContainerVariants}
        >
          <motion.button
            className="flex gap-2 items-center justify-center px-3 py-[6px] bg-white rounded-[100px] text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-medium leading-4 md:leading-5 lg:leading-5 xl:leading-7 text-[#010314]"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ willChange: "transform" }}
          >
            Book a demo
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="17"
              viewBox="0 0 11 17"
              fill="none"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <path
                d="M1.19922 4.14648L5.19922 8.14648L1.19922 12.1465"
                stroke="#010314"
                strokeWidth="1.6"
              />
            </motion.svg>
          </motion.button>
          <motion.p
            className=" cursor-pointer text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-medium leading-4 md:leading-5 lg:leading-5 xl:leading-7  text-white"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              x: 5,
              transition: { duration: 0.2 }
            }}
          >
            Try for free
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default DemoPage;