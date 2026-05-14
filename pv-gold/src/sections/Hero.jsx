import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import heroRice from '../assets/hero-rice.png';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 terra-gradient overflow-hidden">
    {/* Subtle Nature Pattern Overlay */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
       <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_#fff_0%,_transparent_70%)]" />
    </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-white"
      >
        <div className="flex items-center gap-2 mb-8">
           <span className="w-10 h-[2px] bg-white opacity-40 rounded-full" />
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-80">PV GOLD PURE GRAINS</span>
        </div>
        
        <h1 className="heading-giant mb-12">
          The Power <span className="opacity-40">of</span> <br />
          Nature <span className="opacity-40">in</span> Every <br />
          Grain.
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block ml-4 align-middle"
          >
            <CheckCircle2 size={48} className="text-white opacity-40" />
          </motion.div>
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
          <Link to="/products" className="terra-btn text-lg group no-underline">
            Explore Now
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          
          <p className="text-sm md:text-base opacity-70 max-w-xs leading-relaxed font-medium">
            Discover our premium hand-selected grains for daily nourishment and pure life energy.
          </p>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative lg:pl-12 perspective-1000"
      >
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          whileHover={{ scale: 1.05, rotateY: -10 }}
          className="relative z-10"
        >
           {/* Organic Blob Container */}
           <div className="w-full aspect-square bg-white/20 p-4 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm">
              <img src={heroRice} alt="Premium Rice" className="w-full h-full object-cover scale-110" />
           </div>
        </motion.div>

        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px] -z-10" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
