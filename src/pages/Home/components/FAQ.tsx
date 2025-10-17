import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import AllSvg from "../../../common/AllSvg";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "What is NeuraFlow?",
      answer:
        "NeuraFlow automates repetitive tasks by integrating with your existing systems and analyzing your data in real time. The AI engine identifies patterns, suggests optimizations, and runs tasks automatically, allowing you to focus on higher-level business operations.",
    },
    {
      question: "How does NeuraFlow's AI automation work?",
      answer:
        "NeuraFlow uses advanced machine learning algorithms to analyze your workflow patterns and data. It connects to your existing tools via APIs, learns from your processes, and automatically executes tasks based on predefined rules and intelligent predictions.",
    },
    {
      question: "Can I integrate NeuraFlow with my current tools?",
      answer:
        "Yes, NeuraFlow offers seamless integration with popular business tools and platforms. Our system supports REST APIs, webhooks, and native integrations with major CRM, project management, and communication platforms.",
    },
    {
      question: "Is NeuraFlow suitable for small businesses?",
      answer:
        "Absolutely! NeuraFlow is designed to scale with your business. We offer flexible pricing plans and features that work for small businesses, startups, and enterprise organizations alike. You only pay for what you use.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const headerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const faqContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <div className="bg-data-scrapper2 relative text-white  p-[40px] md:p-[60px] lg:p-[80px]  gap-[60px] overflow-hidden flex flex-col lg:flex-row">
      <motion.section 
        className="w-full lg:w-[35%] flex flex-col gap-3"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, }}
      >
        <motion.div 
          className="flex gap-2 -ml-[36px] md:ml-0 items-center text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-[20px] md:leading-[24px] lg:leading-[28px] tracking-[1.8px] nohemi-font"
          variants={headerItemVariants}
        >
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="block lg:hidden"
          >
            <AllSvg type="utilities-line-left" />
          </motion.div>
          FAQ
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AllSvg type="utilities-line-right" />
          </motion.div>
        </motion.div>
        <motion.h2 
          className="text-[28px] md:text-[36px] text-center md:text-left lg:text-[48px] font-medium leading-[36px] md:leading-[48px] lg:leading-[60px] nohemi-font"
          variants={headerItemVariants}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p 
          className="text-[14px] md:text-[16px] text-center md:text-left w-[100%] md:w-[70%] lg:w-[60%] font-normal leading-5 md:leading-6 geist-font text-white"
          variants={headerItemVariants}
        >
          Everything You Need to Know About Working With Us
        </motion.p>
      </motion.section>

      <motion.section 
        className="lg:w-[65%] flex flex-col gap-6"
        variants={faqContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={faqItemVariants}
            className="border border-gray-800 rounded-xl overflow-hidden ulitity_card_bg transition-all duration-300 hover:border-gray-700"
            whileHover={{
              y: -4,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
            }}
            style={{ willChange: "transform" }}
          >
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 pb-3 text-left   transition-colors"
              whileHover={{ scale: 1.002 }}
              whileTap={{ scale: 0.998 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[28px] lg:leading-[32px] geist-font text-white">
                {faq.question}
              </span>
              <motion.div 
                className="flex-shrink-0 p-2 rounded-[5px] border border-[#191C1F]"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  rotate: openIndex === index ? 90 : 0,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {openIndex === index ? (
                    <motion.div
                      key="x"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="plus"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                      opacity: { duration: 0.25, delay: 0.1 }
                    }
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <motion.div 
                    className="p-6 pt-0 text-[14px] md:text-[16px]  font-normal leading-5 md:leading-6 geist-font text-[#B0B0B0]"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default FAQ;