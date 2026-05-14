import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/PV Gold-logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // Handle scroll for navbar color change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children }) => (
    <Link 
      to={to} 
      className={`${isActive(to) ? 'text-black font-bold' : 'text-black/50 hover:text-black'} transition-colors text-xs font-bold uppercase tracking-widest`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex justify-between items-center ${isScrolled ? 'bg-white shadow-xl py-4' : 'bg-transparent py-8'}`}>
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 relative overflow-hidden rounded-full shadow-md border-2 border-white bg-white">
            <img src={logo} alt="PV GOLD Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-black">PV GOLD</span>
        </Link>
      </div>

      <div className="hidden md:flex gap-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>

      <div className="flex items-center gap-6 text-black">
        <Link to="/contact" className={`hidden lg:block py-3 px-8 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${isScrolled ? 'bg-black text-white' : 'bg-black text-white'}`}>
          Get in Touch
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-8 flex flex-col gap-6 md:hidden border-t border-black/5"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
