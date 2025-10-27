import React from "react";
import { motion } from "framer-motion";
import AllSvg from "../../../common/AllSvg";
import Meter from "../../../assets/meter.png";
import formal from "../../../assets/formal.png";

const Testimonial: React.FC = React.memo(() => {
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

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className="bg-data-scrapper2 relative text-white  p-[40px] md:p-[60px] lg:p-[60px] pt-[60px] md:pt-[80px] lg:pt-[100px] xl:p-[80px] xl:pt-[120px]  gap-[60px] lg:gap-[40px] xl:gap-[60px] overflow-hidden flex flex-col items-center lg:justify-center lg:snap-start lg:h-screen w-screen pb-[60px] lg:pb-0">
      <motion.section
        className="relative z-10 flex flex-col gap-2 lg:gap-2 xl:gap-3 justify-between w-full"
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
            className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal tracking-[1.8px]  leading-[20px] md:leading-[24px] lg:leading-[24px] xl:leading-[28px] text-center nohemi-font"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Testimonial
          </motion.h1>
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-right" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[28px] md:text-[36px] lg:text-[36px] xl:text-[48px] font-medium leading-[36px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px] text-center nohemi-font"
          variants={fadeUpVariants}
        >
          Trusted by Innovators{" "}
          <motion.span
            className="data_scapper_gradient_text3 text-[28px] md:text-[36px] lg:text-[36px] xl:text-[48px] leading-[36px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px]"
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            whileInView={{ opacity: 1, backgroundPosition: "100% 50%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Worldwide
          </motion.span>{" "}
        </motion.h1>
        <motion.p
          className="text-[14px] md:text-[16px] lg:text-[14px] xl:text-[16px]  font-normal leading-5 md:leading-6 lg:leading-5 xl:leading-6 text-center geist-font text-[#C8CACC]"
          variants={fadeUpVariants}
        >
          Real Stories, Real Success: Hear from Our Satisfied Clients
        </motion.p>
      </motion.section>
      <motion.section
        className="relative z-10 max-w-[100%] lg:max-w-[70%] h-full flex flex-col lg:flex-row gap-6 lg:gap-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
      >
        <motion.div
          className=" testimonial_card_bg w-full rounded-[12px] lg:rounded-r-none py-[48px] lg:py-[32px] xl:py-[48px] px-[32px] lg:px-[24px] xl:px-[32px] flex flex-col justify-between  gap-[56px] lg:gap-[36px] xl:gap-[56px]"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
          }}
          style={{ willChange: "transform" }}
        >
          <div className="flex flex-col gap-[56px] lg:gap-[36px] xl:gap-[56px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AllSvg type="meter" />
            </motion.div>
            <motion.p
              className="text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-6 lg:leading-5 xl:leading-6 geist-font text-[#BACFF7]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Integration was quick and AuthKit gave us full control over the
              UI. I have been involved with auth implementations for over a
              decade and this was a dead simple choice.{" "}
            </motion.p>
          </div>
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.img
              className="w-[40px] h-[40px] rounded-full"
              src={Meter}
              loading="lazy"
              alt="Testimonial - Meter"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              }}
              style={{ willChange: "transform" }}
            />
            <div className="flex flex-col">
              <motion.p
                className="text-[14px] font-medium leading-5 geist-font text-[#BACFF7]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Sean Rose
              </motion.p>
              <motion.p
                className="text-[12px] font-normal leading-4 geist-font text-[#C7D3EAA3]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Product at Meter
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className=" testimonial_card_bg w-full rounded-[12px] lg:rounded-l-none py-[48px] lg:py-[32px] xl:py-[48px] px-[32px] lg:px-[24px] xl:px-[32px] flex flex-col justify-between  gap-[56px] lg:gap-[36px] xl:gap-[56px]"
          variants={cardVariants}
          whileHover={{
            y: -8,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
          }}
          style={{ willChange: "transform" }}
        >
          <div className="flex flex-col gap-[56px] lg:gap-[36px] xl:gap-[56px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AllSvg type="Formal" />
            </motion.div>
            <motion.p
              className="text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-6 lg:leading-5 xl:leading-6 geist-font text-[#BACFF7]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Integration was quick and AuthKit gave us full control over the
              UI. I have been involved with auth implementations for over a
              decade and this was a dead simple choice. The migration to WorkOS
              was straightforward and has freed up so much of our engineering
              resources. AuthKit is a game changer for handling user logins.
            </motion.p>
          </div>
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.img
              className="w-[40px] h-[40px] rounded-full"
              src={formal}
              loading="lazy"
              alt="Testimonial - Formal"
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1] as const,
                },
              }}
              style={{ willChange: "transform" }}
            />
            <div className="flex flex-col">
              <motion.p
                className="text-[14px] font-medium leading-5 geist-font text-[#BACFF7]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                Mokhtar Bacha
              </motion.p>
              <motion.p
                className="text-[12px] font-normal leading-4 geist-font text-[#C7D3EAA3]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                Founder at Formal
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
});

export default Testimonial;
