import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import heroRice from '../assets/hero-rice.png';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-[130px] pb-12 px-6 md:px-12 terra-gradient overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <div className="flex items-center gap-3 mb-6">
           <span className="w-12 h-1 bg-[#E02B2B]"></span>
           <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E02B2B]">WELCOME TO PV GOLD</span>
        </div>
        
        <h1 className="heading-giant mb-8 text-white">
          PREMIUM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E02B2B] to-[#ff5050]">QUALITY</span> <br />
          GRAINS.
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-md leading-relaxed font-medium mb-10">
          Discover our premium hand-selected grains for daily nourishment and pure life energy. Experience the finest quality delivered to your table.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <Link to="/products" className="bg-[#E02B2B] hover:bg-white hover:text-black text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-colors duration-300 flex items-center gap-3">
            Order Now
            <ArrowUpRight size={18} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-[#E02B2B]" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-gray-300">100% Organic</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative lg:pl-12 flex justify-center items-center"
      >
        {/* Large Circular Image container with a red dashed border accent */}
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
           {/* Red dashed decorative circle */}
           <div className="absolute inset-[-20px] rounded-full border-2 border-dashed border-[#E02B2B] opacity-50 animate-[spin_20s_linear_infinite]" />
           
           <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-white">
              <img src={heroRice} alt="Premium Rice" className="w-full h-full object-cover scale-110" />
           </div>

           {/* Floating badges/elements to match the fast food dynamic look */}
           <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 -right-6 bg-[#FFB800] text-black w-24 h-24 rounded-full flex flex-col items-center justify-center transform rotate-12 z-20 shadow-xl border-4 border-white"
           >
             <span className="font-black text-xl leading-none">100%</span>
             <span className="font-bold text-[10px] uppercase">Pure</span>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-2xl z-20 border border-gray-100 flex items-center gap-3"
           >
             <div className="w-10 h-10 bg-[#E02B2B]/10 rounded-full flex items-center justify-center">
               <span className="text-2xl">🌾</span>
             </div>
             <div>
               <div className="text-[10px] font-bold text-gray-500 uppercase">Premium Quality</div>
               <div className="text-sm font-black">Fresh Grains</div>
             </div>
           </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
