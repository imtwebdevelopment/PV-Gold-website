import React from 'react';
import { Facebook, Instagram, Youtube } from './SocialIcons';
import logo from '../assets/PV Gold-logo.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32 relative z-10">
          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Our Story</h4>
            <p className="text-gray-500 leading-relaxed text-sm font-medium">
              Harvesting excellence since decades. PV Gold brings you the world's most premium basmati rice, nurtured by nature and delivered with purity.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li><Link to="/products" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">Premium Selection</Link></li>
              <li><Link to="/gallery" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">Visual Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">Our Story</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-primary font-black uppercase text-xs tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-bold">
              <li><Link to="/about" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">Contact Support</Link></li>
              <li><Link to="/privacy" className="hover:text-primary cursor-pointer transition-all hover:translate-x-1 inline-block w-full no-underline">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#" className="flex items-center gap-2 hover:text-[#1877F2] transition-colors group">
            <Facebook size={14} className="group-hover:scale-110 transition-transform" /> Facebook
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#E4405F] transition-colors group">
            <Instagram size={14} className="group-hover:scale-110 transition-transform" /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#FF0000] transition-colors group">
            <Youtube size={14} className="group-hover:scale-110 transition-transform" /> Youtube
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#1DA1F2] transition-colors group">
             <div className="w-3.5 h-3.5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
             </div>
             Twitter
          </a>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300">
          DESIGNED BY PV INNOMATRICS TECHNOLOGIES
        </div>
      </div>
    </footer>
  );
};

export default Footer;
