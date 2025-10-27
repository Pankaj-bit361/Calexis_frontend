import React from "react";
import { motion } from "framer-motion";
import AllSvg from "../../../common/AllSvg";

const Utilities: React.FC = React.memo(() => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Fade up animation for children
  const fadeUpVariants = {
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

  // Card animation variants
  const cardVariants = {
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

  // Line animation variants
  const lineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="bg-data-scrapper2 relative text-white  p-[40px] md:p-[60px] lg:p-[60px] xl:p-[80px] gap-[60px] lg:gap-[40px] xl:gap-[60px] overflow-hidden lg:snap-start lg:h-screen w-screen flex flex-col items-center lg:justify-center py-[60px] lg:py-0">
      <motion.section
        className="relative z-10 flex flex-col gap-3 lg:gap-2 xl:gap-3 justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex gap-2 justify-center items-center"
          variants={fadeUpVariants}
        >
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-left" />
          </motion.div>
          <motion.h1
            className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal tracking-[1.8px]  leading-[20px] md:leading-[24px] lg:leading-[24px] xl:leading-[28px] text-center nohemi-font"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Utilities
          </motion.h1>
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-right" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[48px] font-medium leading-[36px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px] text-center nohemi-font"
          variants={fadeUpVariants}
        >
          One Platform. Infinite{" "}
          <motion.span
            className="data_scapper_gradient_text3 text-[28px] md:text-[36px] lg:text-[36px] xl:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px]"
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            whileInView={{ opacity: 1, backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Possibilities
          </motion.span>{" "}
        </motion.h1>
        <motion.p
          className="px-[20px] md-px-0 text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 text-center geist-font text-[#C8CACC]"
          variants={fadeUpVariants}
        >
          Calaxis adapts to every user type whether you are learning, building,
          or scaling.
        </motion.p>
      </motion.section>
      <motion.section 
        className="relative z-10 w-full h-full flex flex-col lg:flex-row gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className=" ulitity_card_bg  w-full rounded-[12px] py-[48px] lg:py-[32px] xl:py-[48px] px-[32px] lg:px-[24px] xl:px-[32px] flex flex-col   gap-9 lg:gap-6 xl:gap-9"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] lg:gap-[6px] xl:gap-[10px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px] font-normal leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[28px]  nohemi-font text-white"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Classroom curiosity to AI reality.
            </motion.p>
            <motion.p
              className="text-[48px] md:text-[64px] lg:text-[48px] xl:text-[64px]  font-normal leading-[60px] md:leading-[72px] lg:leading-[56px] xl:leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text2 "
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Students
            </motion.p>
            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Research with Freedom
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC] ">
              With{" "}
              <motion.span
                className="font-medium text-white"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                UNILabs powered by Calaxis
              </motion.span>
              , students can design and train their own local LLMs. Perfect for
              research projects, thesis work, or learning advanced AI workflows.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className=" ulitity_card_bg2  w-full rounded-[12px] py-[48px] lg:py-[32px] xl:py-[48px] px-[32px] lg:px-[24px] xl:px-[32px] flex flex-col  gap-9 lg:gap-6 xl:gap-9"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] lg:gap-[6px] xl:gap-[10px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px] font-normal leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[28px]  nohemi-font text-white"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Build smarter, launch faster.{" "}
            </motion.p>
            <motion.p
              className="text-[48px] md:text-[64px] lg:text-[48px] xl:text-[64px] font-normal leading-[60px] md:leading-[72px] lg:leading-[56px] xl:leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Startups
            </motion.p>
            <motion.p
              className="text-[14px]  md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Innovation at Speed{" "}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC] ">
              Calaxis empowers startups to create modular LLMs tailored to their
              unique use cases from industry-specific assistants to
              product-focused AI copilots.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className=" ulitity_card_bg w-full rounded-[12px] py-[48px] lg:py-[32px] xl:py-[48px] px-[32px] lg:px-[24px] xl:px-[32px] flex flex-col  gap-9 lg:gap-6 xl:gap-9"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] lg:gap-[6px] xl:gap-[10px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[18px] font-normal leading-[20px] md:leading-[24px] lg:leading-[20px] xl:leading-[28px]  nohemi-font text-white"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Your AI. Your edge.{" "}
            </motion.p>
            <motion.p
              className="text-[48px] md:text-[64px] lg:text-[48px] xl:text-[64px] font-normal leading-[60px] md:leading-[72px] lg:leading-[56px] xl:leading-[72px] tracking-[0.64px] geist-font data_scapper_gradient_text2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Enterprises
            </motion.p>
            <motion.p
              className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Scale with Sovereignty{" "}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 geist-font text-[#C8CACC] ">
              For large organizations, Calaxis provides a sovereign, end-to-end
              AI factory. Build, fine-tune, and scale enterprise-grade LLMs
              based on your proprietary data and workflows.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
});

export default Utilities;