import React from "react";
import { motion } from "framer-motion";
import AllSvg from "../../../common/AllSvg";
import Brain from "../../../assets/Brain.png";
import Dancing from "../../../assets/Dancing.png";
import Workflow from "../../../assets/workflow.png";

const Blog: React.FC = React.memo(() => {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="bg-data-scrapper2 relative text-white p-[40px] md:p-[60px] lg:p-[40px] xl:p-[80px] pt-[60px] md:pt-[80px] lg:pt-[80px]  gap-[60px] lg:gap-[24px] xl:gap-[60px] overflow-hidden flex flex-col items-center lg:justify-center lg:snap-start lg:h-screen w-screen pb-[60px] lg:pb-0">
      <motion.section
        className="relative z-10 flex flex-col gap-3 lg:gap-1 xl:gap-3 justify-between w-full"
        variants={headerVariants}
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
            className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal tracking-[1.8px]  leading-[20px] md:leading-[28px] lg:leading-[24px] xl:leading-[32px] text-center nohemi-font"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Blog
          </motion.h1>
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-right" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[28px] md:text-[36px] lg:text-[28px] xl:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[34px] xl:leading-[60px]  font-medium text-center nohemi-font"
          variants={fadeUpVariants}
        >
          Calaxis{" "}
          <motion.span
            className="data_scapper_gradient_text3 text-[28px] md:text-[36px] lg:text-[28px] xl:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[34px] xl:leading-[60px]"
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            whileInView={{ opacity: 1, backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Insights
          </motion.span>{" "}
        </motion.h1>
        <motion.p
          className="text-[14px] md:text-[16px] lg:text-[12px] xl:text-[16px] font-normal leading-5 md:leading-6 lg:leading-4 xl:leading-6 text-center geist-font text-[#C8CACC]"
          variants={fadeUpVariants}
        >
          Stay Updated on AI Trends, Automation, and Business Growth.
        </motion.p>
      </motion.section>
      <motion.section
        className="relative z-10 w-full flex flex-col lg:flex-row gap-6 lg:gap-3 xl:gap-6"
        variants={cardsContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          className=" ulitity_card_bg  w-full rounded-[12px] overflow-hidden flex flex-col  gap-[10px] lg:gap-[6px] xl:gap-[10px]"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] bg-blog-image overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.img
              src={Brain}
              loading="lazy"
              alt="Blog - Predictive Analytics"
              className="w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 lg:gap-1 xl:gap-3 p-6 lg:p-[10px] xl:p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                20 Nov 2025
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <circle cx="2" cy="2.7207" r="2" fill="#007BFF" />
              </svg>
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                AI Automation
              </p>
            </motion.div>
            <motion.p
              className="text-[20px] md:text-[24px] lg:text-[14px] xl:text-[24px]  font-medium leading-7 md:leading-8 lg:leading-5 xl:leading-8 nohemi-font text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              How Predictive Analytics Drives Smarter Business Decisions
            </motion.p>
            <motion.p
              className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-4 xl:leading-6 geist-font text-white underline py-4 lg:py-1 xl:py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
              style={{ cursor: "pointer" }}
            >
              Read More
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          className=" ulitity_card_bg  w-full rounded-[12px] overflow-hidden flex flex-col  gap-[10px] lg:gap-[6px] xl:gap-[10px]"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] bg-blog-image overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.img
              src={Dancing}
              loading="lazy"
              alt="Blog - Machine Learning"
              className="w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 lg:gap-1 xl:gap-3 p-6 lg:p-[10px] xl:p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                18 Nov 2025
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <circle cx="2" cy="2.7207" r="2" fill="#007BFF" />
              </svg>
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                Machine Learning
              </p>
            </motion.div>
            <motion.p
              className="text-[20px] md:text-[24px] lg:text-[14px] xl:text-[24px] font-medium leading-8 md:leading-9 lg:leading-5 xl:leading-9 nohemi-font text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              How Predictive Analytics Drives Smarter Business Decisions
            </motion.p>
            <motion.p
              className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-4 xl:leading-6 geist-font text-white underline py-4 lg:py-1 xl:py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
              style={{ cursor: "pointer" }}
            >
              Read More
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className=" ulitity_card_bg  w-full rounded-[12px] overflow-hidden flex flex-col  gap-[10px] lg:gap-[6px] xl:gap-[10px]"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
          }}
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="flex flex-col gap-[10px] bg-blog-image overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.img
              src={Workflow}
              loading="lazy"
              alt="Blog - Workflow Automation"
              className="w-full h-full"
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>
          <motion.div
            className="flex flex-col gap-3 lg:gap-1 xl:gap-3 p-6 lg:p-[10px] xl:p-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="flex gap-2 items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                10 Nov 2024
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="5"
                viewBox="0 0 4 5"
                fill="none"
              >
                <circle cx="2" cy="2.7207" r="2" fill="#007BFF" />
              </svg>
              <p className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-3 xl:leading-6 geist-font text-[#B0B0B0]">
                AI Automation
              </p>
            </motion.div>
            <motion.p
              className="text-[20px] md:text-[24px] lg:text-[14px] xl:text-[24px] font-medium leading-8 md:leading-9 lg:leading-5 xl:leading-9 nohemi-font text-white"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              The Future of Workflow Automation with AI
            </motion.p>
            <motion.p
              className="text-[16px] lg:text-[10px] xl:text-[16px] font-medium leading-6 lg:leading-4 xl:leading-6 geist-font text-white underline py-4 lg:py-1 xl:py-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
              style={{ cursor: "pointer" }}
            >
              Read More
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="blog-button-container"
      >
        <motion.button
          className="blog_bg_button"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
          style={{ willChange: "transform" }}
        >
          View All Post
        </motion.button>
      </motion.section> */}
    </div>
  );
});

export default Blog;
