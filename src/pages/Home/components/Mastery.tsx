import React from "react";
import { motion } from "framer-motion";
import AllSvg from "../../../common/AllSvg";

interface DataItem {
  name: string;
  svg: string;
}

const Data: DataItem[] = [
  { name: "Judiciary", svg: "Judiciary" },
  { name: "Regtech & Compliance", svg: "RegtectCompliance" },
  { name: "FinTech & Lending", svg: "FinTechLending" },
  { name: "Healthcare", svg: "Healthcare" },
  { name: "Language Translation & Preservation", svg: "langaugeTranslation" },
  { name: "Real Estate & Property Tech", svg: "RealEstate" },
  { name: "AgriTech", svg: "Agritech" },
  { name: "LegalTech", svg: "legalTech" },
  { name: "Consumer Protection & Grievances", svg: "ConsumerProtection" },
  { name: "Calaxis", svg: "CalexisLogo2" },
  { name: "Tourism & Cultural Intelligence", svg: "TourismAndCulture" },
  { name: "MSME", svg: "MSME" },
  { name: "Transport & Last-Mile Logistics", svg: "TransportAndLogistics" },
  { name: "Research and Development", svg: "ResearchAndDevelopment" },
  { name: "Public Service Delivery", svg: "PublicService" },
  { name: "Climate Risk & Disaster Management", svg: "ClimateRiskAndDisaster" },
  { name: "Skilling & Vocational Training", svg: "SkillAndVocational" },
  { name: "EdTech", svg: "EdTech" },
  { name: "Insurance", svg: "Insurance" },
];

const Mastery: React.FC = () => {
  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

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

  // Card item component with hover effects
  const CardItem = ({
    data,
    index,
    className,
    style,
    isCenter = false
  }: {
    data: DataItem;
    index: number;
    className?: string;
    style?: React.CSSProperties;
    isCenter?: boolean;
  }) => {
    return (
      <motion.div
        className={className}
        style={style}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.22, 1, 0.36, 1] as const
        }}
      >
        <motion.div
          className={`${isCenter ? "w-[82px] h-[85px] bg-[#1E2A3F] border border-[#2A3952]" : "w-14 h-14 bg-[#0A0F1A] border border-[#1A2332]"} rounded-xl flex items-center justify-center ${isCenter ? "shadow-lg shadow-blue-900/20" : ""}`}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }
          }}
          style={{ willChange: "transform" }}
        >
          <AllSvg type={data.svg} />
        </motion.div>
        <motion.div
          className={`relative ${isCenter ? "" : "flex items-center justify-center"} overflow-hidden rounded-[4px] bg-[#060311] p-1 px-[6px] max-w-[180px] ${isCenter ? "min-w-[150px] flex items-center justify-center mastery_calaxis_logo_bg" : ""}`}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <span className={`${isCenter ? "text-sm font-medium text-center text-white" : "text-xs font-inter text-center text-[#FFFFFFB8]"} ${data.name === "Regtech & Compliance" || data.name === "Language Translation & Preservation" || data.name === "Real Estate & Property Tech" || data.name === "Consumer Protection & Grievances" || data.name === "Tourism & Cultural Intelligence" || data.name === "Climate Risk & Disaster Management" || data.name === "Research and Development" || data.name === "Public Service Delivery" || data.name === "Transport & Last-Mile Logistics" || data.name === "Skilling & Vocational Training" ? "max-w-[150px]" : ""}`}>
            {data.name}
          </span>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="bg-data-scrapper2 relative text-white pt-[40px] md:pt-[60px] lg:pt-[60px] xl:pt-[80px] pb-[40px] md:pb-[60px] lg:pb-0  gap-[60px] lg:gap-[40px] xl:gap-[60px]  overflow-hidden flex flex-col items-center lg:justify-center lg:snap-start lg:h-screen w-screen">
      <motion.section
        className="relative z-10 w-full flex flex-col gap-3 lg:gap-2 xl:gap-3 px-10 justify-between"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex gap-2 justify-center items-center"
          variants={fadeUpVariants}
        >
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-left" />
          </motion.div>
          <motion.h1
            className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-normal tracking-[1.8px] leading-[20px] md:leading-[24px] lg:leading-[24px] xl:leading-[28px] text-center nohemi-font"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Usecase
          </motion.h1>
          <motion.div variants={lineVariants}>
            <AllSvg type="utilities-line-right" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-[32px] md:text-[36px] lg:text-[36px] xl:text-[48px] font-medium leading-[40px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px] text-center nohemi-font"
          variants={fadeUpVariants}
        >
          From Global Models to Local{" "}
          <motion.span
            className="data_scapper_gradient_text text-[32px] md:text-[36px] lg:text-[36px] xl:text-[48px] leading-[40px] md:leading-[48px] lg:leading-[44px] xl:leading-[60px]"
            initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
            animate={{ opacity: 1, backgroundPosition: "100% 50%" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Mastery
          </motion.span>{" "}
        </motion.h1>
        <motion.p
          className="text-[16px] lg:text-[14px] xl:text-[16px] font-normal leading-6 lg:leading-5 xl:leading-6 text-center geist-font text-[#C8CACC]"
          variants={fadeUpVariants}
        >
          Calaxis empowers any organization to build Hyper Localized LLMs,
          turning their unique data into a competitive advantage.
        </motion.p>
      </motion.section>
      {/* Desktop Version - Hidden on Mobile */}
      <section className="relative z-10 w-full hidden lg:flex gap-6 master_bg h-full">
        <div className="absolute inset-0 w-full h-full overflow-visible z-0">
          {/* Row 1 - Top Row */}
          <CardItem
            data={Data[0]}
            index={0}
            className="animate-float absolute top-[6%] left-[3%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.1s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[1]}
            index={1}
            className="animate-float absolute top-[7%] left-[14%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.2s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[2]}
            index={2}
            className="animate-float absolute top-[5%] left-[32%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.3s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[3]}
            index={3}
            className="animate-float absolute top-[8%] left-[54%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.4s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[4]}
            index={4}
            className="animate-float absolute top-[9%] left-[66%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.5s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[5]}
            index={5}
            className="animate-float absolute top-[2%] right-[5%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.6s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Row 2 - Middle Row */}
          <CardItem
            data={Data[6]}
            index={6}
            className="animate-float absolute top-[38%] left-[6%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.7s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[7]}
            index={7}
            className="animate-float absolute top-[42%] left-[18%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.8s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[8]}
            index={8}
            className="animate-float absolute top-[38%] left-[29%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.9s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Center - Calaxis (highlighted and larger) */}
          <CardItem
            data={Data[9]}
            index={9}
            isCenter={true}
            className="animate-pulse-slow absolute top-[35%] left-[47%]  flex flex-col items-center gap-2"
            style={{
              animationDelay: "0.3s",
              animationDuration: "8s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[10]}
            index={10}
            className="animate-float absolute top-[40%] left-[62%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.0s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[11]}
            index={11}
            className="animate-float absolute top-[42%] left-[77%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.1s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[12]}
            index={12}
            className="animate-float absolute top-[35%] right-[2%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.2s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          {/* Row 3 - Bottom Row */}
          <CardItem
            data={Data[13]}
            index={13}
            className="animate-float absolute bottom-[10%] left-[4%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.3s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[14]}
            index={14}
            className="animate-float absolute bottom-[8%] left-[20%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.4s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[15]}
            index={15}
            className="animate-float absolute bottom-[8%] left-[40%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.5s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[16]}
            index={16}
            className="animate-float absolute bottom-[8%] left-[60%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.6s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[17]}
            index={17}
            className="animate-float absolute bottom-[12%] left-[80%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.7s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />

          <CardItem
            data={Data[18]}
            index={18}
            className="animate-float absolute bottom-[15%] right-[4%] flex flex-col items-center gap-2"
            style={{
              animationDelay: "1.8s",
              animationDuration: "6s",
              backfaceVisibility: "hidden",
              willChange: "transform",
            }}
          />
        </div>
      </section>

      {/* Mobile Version - Grid Layout with Featured Center Item */}
      <section className="relative z-10 w-full lg:hidden px-[40px] md:px-[60px]">
        {/* First 8 items in grid (items 0-7) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {Data.slice(0, 8).map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 bg-[#0A0F1A] border border-[#1A2332] rounded-xl flex items-center justify-center"
              >
                <AllSvg type={item.svg} />
              </div>
              <div
                className="flex items-center justify-center overflow-hidden rounded-[4px] bg-[#060311] p-1 px-[6px] max-w-[180px]"
              >
                <span className={`text-xs font-inter text-center text-[#FFFFFFB8] ${item.name === "Regtech & Compliance" || item.name === "Language Translation & Preservation" || item.name === "Real Estate & Property Tech" || item.name === "Consumer Protection & Grievances" || item.name === "Tourism & Cultural Intelligence" || item.name === "Climate Risk & Disaster Management" || item.name === "Research and Development" || item.name === "Public Service Delivery" || item.name === "Transport & Last-Mile Logistics" || item.name === "Skilling & Vocational Training" ? "max-w-[150px]" : ""}`}>
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Calaxis Item (10th item - index 9) - Full Width */}
        <div
          className="flex flex-col items-center gap-3 mb-8 py-6"
        >
          <div
            className="w-[100px] h-[105px] bg-[#1E2A3F] border-2 border-[#2A3952] shadow-2xl shadow-blue-900/40 rounded-2xl flex items-center justify-center"
          >
            <AllSvg type={'CalexisLogo2'} />
          </div>
          <div
            className="mastery_calaxis_logo_bg min-w-[180px] flex items-center justify-center overflow-hidden rounded-lg bg-[#060311] p-2 px-4"
          >
            <span className="text-lg font-semibold text-center text-white">
              {Data[9].name}
            </span>
          </div>
        </div>

        {/* Remaining items (10-18) + item 9 at the end */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[...Data.slice(10), Data[8]].map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-14 h-14 bg-[#0A0F1A] border border-[#1A2332] rounded-xl flex items-center justify-center"
              >
                <AllSvg type={item.svg} />
              </div>
              <div
                className="flex items-center justify-center overflow-hidden rounded-[4px] bg-[#060311] p-1 px-[6px] max-w-[180px]"
              >
                <span className={`text-xs font-inter text-center text-[#FFFFFFB8] ${item.name === "Regtech & Compliance" || item.name === "Language Translation & Preservation" || item.name === "Real Estate & Property Tech" || item.name === "Consumer Protection & Grievances" || item.name === "Tourism & Cultural Intelligence" || item.name === "Climate Risk & Disaster Management" || item.name === "Research and Development" || item.name === "Public Service Delivery" || item.name === "Transport & Last-Mile Logistics" || item.name === "Skilling & Vocational Training" ? "max-w-[150px]" : ""}`}>
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mastery;