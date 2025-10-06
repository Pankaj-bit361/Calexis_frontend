import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AllSvg from "./AllSvg";

const Navbar: React.FC<{ scrollPosition: number }> = ({ scrollPosition }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);

  // Detect mobile (SSR-safe)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 786);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const resetHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setIsVisible(true);
    hideTimeoutRef.current = setTimeout(() => {
      if (!isMobile) setIsVisible(false);
    }, 6000);
  };

  // Desktop auto-hide logic
  useEffect(() => {
    if (isMobile) return;

    resetHideTimer();
    
    if (scrollPosition > lastScrollY && scrollPosition > 100) {
      setIsVisible(false);
    } else if (scrollPosition < lastScrollY) {
      setIsVisible(true);
    }
    
    setLastScrollY(scrollPosition);
  }, [scrollPosition, lastScrollY, isMobile]);

  useEffect(() => {
    resetHideTimer();
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Close drawer when switching to desktop
  useEffect(() => {
    if (!isMobile && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [isMobile, isDrawerOpen]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  // Menu items animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1] as const
      }
    })
  };

  // Mobile menu variants
  const drawerVariants = {
    hidden: { 
      y: '-100%',
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    },
    exit: { 
      y: '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  // ===== DESKTOP NAVBAR =====
  if (!isMobile) {
    return (
      <motion.nav 
        onMouseEnter={resetHideTimer}
        className={`navbar fixed top-0 w-full flex items-center justify-between bg-[#060811] px-[80px] md:px-[100px] lg:px-[120px] py-5 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <motion.section 
          className="nav-section flex gap-2 items-center justify-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            transition={{ duration: 0.4 }}
          >
            <AllSvg type="CalexisLogo" />
          </motion.div>
          <motion.p 
            className="text-[28px] leading-[32px] text-white cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Calaxis
          </motion.p>
        </motion.section>
        <section className="nav-section text-white flex py-2 items-center justify-center px-3 gap-3 navbar_items_section">
          {['Home', 'Products', 'Pricing', 'Blog', 'Contact'].map((item, i) => (
            <motion.p
              key={item}
              className="px-3 cursor-pointer"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={menuItemVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {item}
            </motion.p>
          ))}
        </section>
        <motion.section 
          className="nav-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button 
            className="nav-section-button flex min-h-[32px] px-3 py-[6px] justify-center items-center gap-[6px] text-[16px] leading-6 geist-font text-white rounded-[733px]"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ 
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            Get started
          </motion.button>
        </motion.section>
      </motion.nav>
    );
  }

  // ===== MOBILE NAVBAR =====
  return (
    <>
      {/* Always-visible mobile header */}
      <motion.div 
        className="fixed top-0 w-full flex items-center justify-between bg-[#060811] px-6 py-5 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <motion.section 
          className="nav-section flex gap-2 items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AllSvg type="CalexisLogo" />
          <p className="text-[24px] leading-[28px] text-white">Calaxis</p>
        </motion.section>
        <motion.button 
          onClick={toggleDrawer}
          className="text-white focus:outline-none p-1"
          aria-label={isDrawerOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-6 h-5 flex flex-col justify-center">
            <motion.span 
              className="block w-6 h-0.5 bg-white"
              animate={{
                rotate: isDrawerOpen ? 45 : 0,
                y: isDrawerOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-white my-1"
              animate={{
                opacity: isDrawerOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="block w-6 h-0.5 bg-white"
              animate={{
                rotate: isDrawerOpen ? -45 : 0,
                y: isDrawerOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            className="fixed top-0 left-0 right-0 bg-[#060811] z-40"
            style={{ paddingTop: '72px' }}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-6 pb-6">
              <section className="nav-section text-white flex flex-col py-2 gap-3">
                {['Home', 'Products', 'Pricing', 'Blog', 'Contact'].map((item) => (
                  <motion.p
                    key={item}
                    className="px-3 py-2 cursor-pointer hover:text-[#6366f1] transition-colors"
                    variants={mobileMenuItemVariants}
                    onClick={() => setIsDrawerOpen(false)}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.p>
                ))}
              </section>
              <motion.section 
                className="nav-section mt-4"
                variants={mobileMenuItemVariants}
              >
                <motion.button 
                  className="nav-section-button flex min-h-[32px] w-full px-3 py-[6px] justify-center items-center gap-[6px] text-[16px] leading-6 geist-font text-white rounded-[733px]"
                  onClick={() => setIsDrawerOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
                </motion.button>
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-20 z-30"
            onClick={() => setIsDrawerOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;