import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowRight } from 'lucide-react';
import phoneMockup from '../assets/phone-mockup.png';
import luxuryGrains from '../assets/luxury-grains.png';
import aboutBg from '../assets/about-bg-suitable.png';

const About = () => (
  <section id="about" className="relative py-16 px-6 md:px-12 overflow-hidden">
    {/* Suitable Organic Background Overlay */}
    <div className="absolute inset-0 z-0 opacity-40 bg-fixed">
       <img src={aboutBg} className="w-full h-full object-cover" alt="background" />
       <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Updated ABOUT US Section Header to match Products Style */}
      <div className="text-center mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-nature-dark mb-4 md:mb-8 leading-none"
        >
          About <span className="opacity-30">Us</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-base md:text-lg text-gray-400 font-medium max-w-xl mx-auto px-4"
        >
          Crafting purity from nature's lap for over three decades.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Large Phone Mockup (Col 1-5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 rounded-[40px] overflow-hidden bg-white shadow-sm h-[350px] md:h-[500px] lg:h-[650px]"
        >
          <img src={phoneMockup} alt="PV GOLD Mobile" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Column: Split Content (Col 6-12) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Top Right: Balanced Path Intro */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-16 flex-1 flex flex-col justify-center shadow-sm relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-6xl font-medium tracking-tighter leading-[0.95] text-black mb-6 md:mb-10">
              Start <span className="text-black/30">your</span> <br />
              personalized <span className="text-black/30 font-light">path</span> <br />
              <span className="text-black/30 font-light">to</span> natural <span className="font-bold">balance</span>
            </h2>
            <p className="text-sm md:text-gray-500 font-medium leading-relaxed max-w-xl mb-8 md:mb-12">
              At PV GOLD, we believe that true wellness starts with the ground beneath our feet. For over three decades, our family-led heritage has been dedicated to sourcing the most pristine, nutrient-rich grains from across India's fertile valleys. Our rigorous selection process ensures that every grain meeting your table is a testament to purity, traditional harvest wisdom, and modern safety standards.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
               <a href="#" className="text-base md:text-lg font-bold underline underline-offset-8 decoration-2 whitespace-nowrap">Quality Assessment</a>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                     <FlaskConical size={20} />
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 max-w-[180px] leading-tight">Experience our newly enhanced natural process</p>
               </div>
            </div>
          </motion.div>

          {/* Bottom Right: Power of Nature Image Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden h-[250px] md:h-[300px] shadow-sm"
          >
            <img src={luxuryGrains} alt="Grains Detail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center p-8 md:p-12">
               <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                  The Power <span className="text-white/40 font-light">of</span> <br />
                  Nature <span className="text-white/40 font-light">in</span> Every <br />
                  Grain.
               </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
);

export default About;
