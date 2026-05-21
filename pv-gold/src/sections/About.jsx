import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import phoneMockup from '../assets/phone-mockup.png';
import pvGoldLogo from '../assets/PV Gold-logo.jpeg';
import aboutBg from '../assets/about-bg-suitable.png';

const About = () => (
  <section id="about" className="relative py-24 px-6 md:px-12 bg-[#FAF8F5] overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
      
      {/* Left Column: Image with Circle Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
          {/* Yellow/Orange background circle like in the design */}
          <div className="absolute top-10 -left-10 w-[80%] h-[80%] bg-[#FFB800] rounded-full z-0"></div>
          
          {/* Main Image */}
          <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-white">
            <img src={pvGoldLogo} alt="PV Gold Grains" className="w-full h-full object-contain p-6" />
          </div>
          
          {/* Floating Element like the leaves in the design */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-5 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100"
          >
             <span className="text-4xl">🌾</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Column: Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6"
      >
        {/* ABOUT US Label */}
        <div className="flex items-center gap-2">
          <FlaskConical size={16} className="text-[#E02B2B]" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E02B2B]">ABOUT US</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.15] tracking-tighter">
          <span className="block text-[#0B6E3F]">PV Gold</span>
          <span className="block text-2xl md:text-4xl font-semibold text-[#0B6E3F] mt-2 tracking-normal">
            Pure Grain, Pure Life
          </span>
        </h2>

        {/* Description Text */}
        <p className="text-gray-500 font-medium leading-relaxed">
          PV Gold – Pure Grain, Pure Life is a trusted wholesaler and retailer of everyday staples, specializing in premium flours (atta/maida), sooji. We source directly from reliable mills and growers, ensuring consistent quality, clean processing, and competitive pricing. Our product range serves families, kirana stores, supermarkets, HORECA, and bulk buyers, with pack sizes from consumer pouches to wholesale sacks. With streamlined procurement, hygienic packaging, and on-time delivery.
        </p>

        <p className="text-gray-500 font-medium leading-relaxed">
          PV Gold focuses on freshness, nutrition, and value. Guided by a “Pure Grain, Pure Life” promise, we provide transparent specifications, responsive customer support, and steady supply—helping partners and households stock better, eat better, and live better.
        </p>

        {/* Features Row */}
        <div className="grid grid-cols-2 gap-8 my-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E02B2B]/10 flex items-center justify-center shrink-0">
               <span className="text-xl">🌾</span>
             </div>
            <div>
              <h4 className="font-bold text-[#111111] text-sm mb-1 uppercase tracking-wider">Direct Sourcing</h4>
              <p className="text-xs text-gray-500">Mills & growers ensuring quality</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FFB800]/20 flex items-center justify-center shrink-0">
               <span className="text-xl">📦</span>
             </div>
            <div>
              <h4 className="font-bold text-[#111111] text-sm mb-1 uppercase tracking-wider">Hygienic Packaging</h4>
              <p className="text-xs text-gray-500">Freshness, nutrition, and value</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div>
          <Link to="/about" className="inline-flex items-center gap-3 bg-[#E02B2B] hover:bg-[#111111] text-white px-8 py-4 font-black uppercase tracking-widest text-xs transition-colors duration-300">
            About Us
            <ArrowRight size={16} />
          </Link>
        </div>

      </motion.div>
    </div>
  </section>
);

export default About;
