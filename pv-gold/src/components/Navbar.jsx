import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';
import { Facebook, Twitter, Instagram } from './SocialIcons';
import logo from '../assets/PV Gold-logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Sticky Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Link Component
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`${
        isActive(to)
          ? 'text-[#E02B2B]'
          : 'text-white hover:text-[#E02B2B]'
      } transition-all duration-300 text-[13px] font-bold uppercase flex items-center relative group tracking-wider`}
      onClick={() => setIsOpen(false)}
    >
      <span className="flex items-center gap-1.5">
        {children}
        <span className="text-[14px] font-normal opacity-70 group-hover:rotate-90 transition-transform duration-300">
          +
        </span>
      </span>

      <span
        className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#E02B2B] transform origin-left transition-transform duration-300 ${
          isActive(to)
            ? 'scale-x-100'
            : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-2xl">
      
      {/* Top Bar */}
      <div
        className={`hidden lg:flex justify-between items-center px-12 bg-[#E02B2B] text-white text-xs transition-all duration-500 overflow-hidden ${
          isScrolled
            ? 'max-h-0 py-0 opacity-0'
            : 'max-h-[40px] py-2.5 opacity-100'
        }`}
      >
        {/* Left Side */}
        <div className="flex items-center gap-2 font-bold tracking-wide">
          <span className="flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>

            09:00 am - 10:00 pm
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span className="font-bold tracking-wide mr-2">
            Follow Us:
          </span>

          <div className="flex items-center gap-3">
            <Link
              to="#"
              className="hover:text-black transition-colors transform hover:scale-110"
            >
              <Facebook size={14} fill="currentColor" />
            </Link>

            <Link
              to="#"
              className="hover:text-black transition-colors transform hover:scale-110"
            >
              <Twitter size={14} fill="currentColor" />
            </Link>

            <Link
              to="#"
              className="hover:text-black transition-colors transform hover:scale-110"
            >
              <Instagram size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full bg-[#111111] transition-all duration-300 ${
          isScrolled ? 'h-[80px]' : 'h-[95px]'
        }`}
      >
        <div className="flex justify-between items-stretch h-full max-w-[1600px] mx-auto">

          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center bg-white text-[#111111] pl-6 pr-16 md:pl-12 md:pr-24 relative overflow-hidden group shadow-[5px_0_15px_rgba(0,0,0,0.2)]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
            }}
          >
            <div className="flex items-center gap-4 z-10 relative">

              {/* Logo */}
              <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0">
                <img
                  src={logo}
                  alt="PV GOLD Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-stretch gap-1">

                {/* Top Yellow Line */}
                <div className="h-[2.5px] w-10 bg-[#FFB800] self-start"></div>

                {/* Main Title */}
                <span className="text-xl md:text-2xl font-black tracking-tight leading-none whitespace-nowrap text-[#111111] uppercase">
                  PV GOLD
                </span>

                {/* Subtitle */}
                <span className="text-[9px] uppercase tracking-[0.2em] font-black text-gray-500 leading-none self-start pl-0.5">
                  PURE GRAIN PURE LIFE
                </span>

                {/* Bottom Yellow Line */}
                <div className="h-[2.5px] w-12 bg-[#FFB800] self-end mt-0.5"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 px-4 flex-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-0 h-full">

            {/* Search */}
            <div className="hidden sm:flex items-center gap-6 px-6 h-full">
              <button className="text-white hover:text-[#E02B2B] transition-all duration-300 hover:scale-110">
                <Search size={18} />
              </button>
            </div>

            {/* Enquiry Button */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center justify-center bg-[#E02B2B] hover:bg-white hover:text-black text-white h-full px-6 md:px-8 font-black text-[12px] uppercase tracking-widest transition-colors duration-300 group"
            >
              ENQUIRY NOW

              <span className="ml-3 bg-white text-[#E02B2B] w-5 h-5 flex items-center justify-center font-bold text-[14px] group-hover:bg-[#E02B2B] group-hover:text-white transition-colors">
                +
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white hover:text-[#E02B2B] px-6 h-full border-l border-[#333]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-[#111111] shadow-xl lg:hidden border-t border-[#333] overflow-hidden"
            >
              <div className="flex flex-col py-4 px-6 gap-4">

                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold uppercase text-sm border-b border-[#333] pb-2"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold uppercase text-sm border-b border-[#333] pb-2"
                >
                  About Us
                </Link>

                <Link
                  to="/products"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold uppercase text-sm border-b border-[#333] pb-2"
                >
                  Products
                </Link>

                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold uppercase text-sm border-b border-[#333] pb-2"
                >
                  Gallery
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold uppercase text-sm border-b border-[#333] pb-2"
                >
                  Contact Us
                </Link>

                {/* Search Mobile */}
                <div className="flex items-center gap-6 pt-2">
                  <button className="text-white hover:text-[#E02B2B] transition-colors flex items-center gap-2 text-sm font-bold">
                    <Search size={18} /> Search
                  </button>
                </div>

                {/* Mobile Button */}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#E02B2B] text-white py-4 px-6 font-black text-xs uppercase tracking-widest text-center w-full mt-2 rounded flex items-center justify-center gap-3"
                >
                  ENQUIRY NOW

                  <span className="bg-white text-[#E02B2B] w-5 h-5 flex items-center justify-center font-bold text-[14px]">
                    +
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;