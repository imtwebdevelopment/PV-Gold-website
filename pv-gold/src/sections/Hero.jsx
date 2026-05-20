import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import maidaBanner from '../assets/Website Banner-01-01.jpg.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-[#1a2a5e]"
      style={{ marginTop: '135px' }}
    >
      {/* Wrapper: position:relative so the button can be absolutely placed over the image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
      >
        {/* w-full h-auto → image renders at full width, natural height, zero cropping */}
        <img
          src={maidaBanner}
          alt="PV Gold Premium Maida Banner"
          className="w-full h-auto block"
        />

        {/* Subtle gradient so Enquiry button stays readable over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a5e]/60 via-transparent to-transparent pointer-events-none" />

        {/* Enquiry Now button — bottom-left corner of the image */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 w-full max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#E02B2B] hover:bg-white hover:text-[#1a2a5e] text-white px-8 py-4 font-black uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 shadow-2xl rounded-sm group"
            >
              Enquiry Now
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;


