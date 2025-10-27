import { motion } from "framer-motion";
import CircularAnimator from "../../../components/circular-animator";

const Hero = () => {
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.3
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col cal-hero-bg text-white text-4xl h-screen w-screen snap-start  overflow-hidden z-10 relative">
      <motion.div
        className="flex flex-col  pt-[120px] max-w-[805px] w-[90vw] m-auto pb-20 items-center justify-center md:justify-between h-full gap-10 md:gap-4 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="hero-container-1 flex flex-col justify-center items-center gap-3"
          variants={textVariants}
        >
          <motion.h1
            className="text-[32px] md:text-[64px] font-semibold leading-10 md:leading-[72px] text-center nohemi-font"
            variants={textVariants}
          >
            From raw data to refined intelligence at scale.
          </motion.h1>

          <motion.p
            className="max-w-[90%] md:max-w-[70%] text-center text-[#C8CACC] text-[16px] leading-6 font-medium geist-font"
            variants={textVariants}
          >
            Calaxis is the fully integrated AI factory, automating every stage
            from data collection to model deployment.
          </motion.p>
        </motion.section>

        <motion.section
          className="flex items-center justify-center"
          variants={imageVariants}
        >
          <CircularAnimator stage={0} className="w-[70vw] h-[70vw] md:w-[50vh] md:h-[50vh]" />
        </motion.section>
      </motion.div>
    </section>
  );
};

export default Hero;
