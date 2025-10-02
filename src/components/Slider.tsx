import React, { useState, useEffect, useRef } from 'react';

const ScrollSections = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useScrollTrigger = (threshold = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, [threshold]);

    return { ref: elementRef, isVisible };
  };

  const Section1 = () => {
    const { ref, isVisible } = useScrollTrigger(0.3);
    
    return (
      <section 
        ref={ref}
        className="h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at ${50 + scrollY * 0.1}% ${50 + scrollY * 0.05}%, rgba(255,255,255,0.1) 0%, transparent 70%)`,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
        </div>
        
        <div 
          className={`text-center z-10 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform translate-y-20 scale-95'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Section One
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the magic of scroll-triggered animations with beautiful parallax effects
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-full bg-cyan-400 transition-all duration-700 ${
                  isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
                }`}
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Section2 = () => {
    const { ref, isVisible } = useScrollTrigger(0.4);
    
    return (
      <section 
        ref={ref}
        className="h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                transform: `translateY(${scrollY * (0.2 + Math.random() * 0.3)}px)`,
                animationDelay: `${i * 100}ms`
              }}
            />
          ))}
        </div>
        
        <div 
          className={`text-center z-10 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 rotate-0' 
              : 'opacity-0 transform translate-y-32 rotate-3'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
            Section Two
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            {[1, 2, 3].map((item, i) => (
              <div
                key={item}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-16'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg mb-4 mx-auto" />
                <h3 className="text-white text-lg font-semibold mb-2">Feature {item}</h3>
                <p className="text-gray-300 text-sm">Beautiful animations that respond to your scroll</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const Section3 = () => {
    const { ref, isVisible } = useScrollTrigger(0.3);
    
    return (
      <section 
        ref={ref}
        className="h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `conic-gradient(from ${scrollY * 0.1}deg, rgba(255,182,193,0.1), rgba(147,51,234,0.1), rgba(255,182,193,0.1))`,
              transform: `scale(${1 + scrollY * 0.0001}) rotate(${scrollY * 0.02}deg)`
            }}
          />
        </div>
        
        <div 
          className={`text-center z-10 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 transform translate-y-0 scale-100' 
              : 'opacity-0 transform -translate-y-20 scale-110'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-purple-400">
            Section Three
          </h1>
          <div className="relative max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The final section with stunning visual effects and smooth transitions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['Smooth', 'Beautiful', 'Responsive', 'Modern'].map((word, i) => (
                <span
                  key={word}
                  className={`px-6 py-3 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-lg rounded-full text-white border border-white/20 transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {word}
                </span>
              ))}
            </div>
            
            <div 
              className={`mt-12 transition-all duration-1000 delay-500 ${
                isVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-16'
              }`}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-400 mx-auto rounded-full" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="relative">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default ScrollSections;