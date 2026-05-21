import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../assets/Website Banner-01.jpg.jpeg';
import banner2 from '../assets/Website Banner-02.jpg.jpeg';
import banner3 from '../assets/Website Banner-03.jpg.jpeg';
import banner4 from '../assets/Website Banner-04.jpg.jpeg';
import banner5 from '../assets/Website Banner-05.jpg.jpeg';
import banner6 from '../assets/Website Banner-06.jpg.jpeg';
import banner7 from '../assets/Website Banner-07.jpg.jpeg';
import banner8 from '../assets/Website Banner-08.jpg.jpeg';

const banners = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovered, setIsHovered] = useState(false);
  const autoplayRef = useRef(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds per slide
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Premium horizontal Parallax transition variants
  const parallaxVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      scale: 1.05,
      opacity: 0
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1
    },
    exit: (dir) => ({
      x: dir < 0 ? '-25%' : '25%',
      scale: 0.96,
      opacity: 0
    })
  };

  // Premium spring physics transition
  const parallaxTransition = {
    x: { type: 'spring', stiffness: 220, damping: 26 },
    opacity: { duration: 0.5 },
    scale: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-transparent overflow-hidden"
      style={{ marginTop: '135px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Carousel Wrapper - aspect ratio is locked to 16:9 to perfectly fit the banners without cropping */}
      <div className="relative w-full overflow-hidden aspect-[16/9] h-auto bg-transparent">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={parallaxVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={parallaxTransition}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={banners[currentIndex]}
              alt={`PV Gold Premium Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover block"
              loading={currentIndex === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle gradient overlay at the bottom so overlay text/buttons stay highly legible */}
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none z-10" />


        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              handlePrev();
            }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#E02B2B] text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto transition-colors duration-300 shadow-lg cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => {
              e.preventDefault();
              handleNext();
            }}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-[#E02B2B] text-white flex items-center justify-center backdrop-blur-sm pointer-events-auto transition-colors duration-300 shadow-lg cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </motion.button>
        </div>

        {/* Premium Indicator Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === index
                  ? 'w-6 md:w-8 bg-[#E02B2B] shadow-lg shadow-[#E02B2B]/40'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Enquiry Now Button Overlay - bottom-left of the banner image */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 left-0 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block pointer-events-auto"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#E02B2B] hover:bg-white hover:text-[#1a2a5e] text-white px-5 py-3 sm:px-8 sm:py-4 font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-sm transition-all duration-300 shadow-2xl rounded-sm group"
            >
              Enquiry Now
              <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Predictive background preloader - pre-downloads adjacent banners so they show up instantly */}
        <div className="hidden" aria-hidden="true">
          <img src={banners[(currentIndex + 1) % banners.length]} alt="preload" />
          <img src={banners[(currentIndex - 1 + banners.length) % banners.length]} alt="preload" />
        </div>
      </div>
    </section>
  );
};

export default Hero;



