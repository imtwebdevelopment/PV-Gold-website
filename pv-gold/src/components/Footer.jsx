import React from 'react';
import { Facebook, Instagram, Youtube } from './SocialIcons';
import logo from '../assets/PV Gold-logo.jpeg';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 pb-12 px-6 overflow-hidden border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto relative">
        {/* Top Section: Branding & Copyright */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse" />
              <img src={logo} alt="PV GOLD" className="w-16 h-16 rounded-full border-2 border-secondary/30 shadow-2xl relative z-10 bg-white object-contain" />
            </div>
            <span className="text-4xl font-black text-primary tracking-tighter">PV GOLD</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-[11px] md:text-[13px] uppercase tracking-[0.6em] font-black"
          >
            © {currentYear} PV GOLD GRAINS — PURE GRAIN PURE LIFE
          </motion.p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 relative z-10">
          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Our Story</h4>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Harvesting excellence since decades. PV Gold brings you the world's most premium basmati rice, nurtured by nature and delivered with purity.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Premium Basmati</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Organic Grains</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Sustainability</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Gallery</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Contact Support</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full">Terms of Use</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Newsletter</h4>
            <p className="text-gray-500 text-sm font-medium">Join our harvest mailing list for seasonal recipes and exclusive offers.</p>
            <div className="flex gap-2 p-1 bg-gray-50 rounded-2xl border border-gray-100">
              <input type="email" placeholder="Your email" className="bg-transparent px-4 py-3 outline-none text-sm w-full font-medium" />
              <button className="bg-primary text-white px-6 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-nature-dark transition-all">Join</button>
            </div>
          </div>
        </div>

        {/* Large Visual Icons (Matching Screenshot Aesthetic) */}
        <div className="flex justify-center items-end gap-6 md:gap-16 opacity-[0.1] pointer-events-none select-none -mb-8 overflow-hidden">
          <Facebook className="w-24 h-24 md:w-48 md:h-48 text-primary" strokeWidth={0.8} />
          <Instagram className="w-24 h-24 md:w-48 md:h-48 text-primary" strokeWidth={0.8} />
          <Youtube className="w-24 h-24 md:w-48 md:h-48 text-primary" strokeWidth={0.8} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
          <span className="hover:text-primary cursor-pointer">Facebook</span>
          <span className="hover:text-primary cursor-pointer">Instagram</span>
          <span className="hover:text-primary cursor-pointer">Youtube</span>
          <span className="hover:text-primary cursor-pointer">Twitter</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
          DESIGNED BY PV INNOMATRICS TECHNOLOGIES
        </div>
      </div>
    </footer>
  );
};

export default Footer;
