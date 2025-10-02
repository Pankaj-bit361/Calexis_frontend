// Navbar.js
import { useState, useEffect, useRef } from 'react';
import AllSvg from "./AllSvg";

interface NavbarProps {
  scrollPosition: number;
}

const Navbar = ({ scrollPosition }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideTimeoutRef = useRef<number | null>(null);

  const resetHideTimer = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    
    setIsVisible(true);
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 6000);
  };

  useEffect(() => {
    // Reset timer on scroll activity
    resetHideTimer();
    
    // If scrolling down and navbar is visible, hide it
    if (scrollPosition > lastScrollY && scrollPosition > 100) {
      setIsVisible(false);
    } 
    // If scrolling up and navbar is hidden, show it
    else if (scrollPosition < lastScrollY) {
      setIsVisible(true);
    }
    
    setLastScrollY(scrollPosition);
  }, [scrollPosition, lastScrollY]);

  useEffect(() => {
    // Initial timer
    resetHideTimer();
    
    // Cleanup on unmount
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav 
      onMouseEnter={resetHideTimer}
      className={`navbar fixed top-0 w-full flex items-center justify-between bg-[#060811] px-[120px] py-5 z-50 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
      }`}
    >
      <section className="nav-section flex gap-2 items-center justify-center">
        <div>
          <AllSvg type="CalexisLogo" />
        </div>
        <p className="text-[28px] leading-[32px] text-white cursor-pointer">
          Calaxis
        </p>
      </section>
      <section className="nav-section text-white flex py-2 items-center justify-center px-3 gap-3 navbar_items_section">
        <p className="px-3 cursor-pointer">Home</p>
        <p className="px-3 cursor-pointer">Products</p>
        <p className="px-3 cursor-pointer">Pricing</p>
        <p className="px-3 cursor-pointer">Blog</p>
        <p className="px-3 cursor-pointer">Contact</p>
      </section>
      <section className="nav-section">
        <button className="nav-section-button flex min-h-[32px] px-3 py-[6px] justify-center items-center gap-[6px] text-[16px] leading-6 geist-font text-white rounded-[733px]">
          Get started
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
