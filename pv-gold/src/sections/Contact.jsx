import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import luxuryMesh from '../assets/luxury-mesh-bg.svg';
import contactBg from '../assets/contact-card-bg.svg';
import bgThematic from '../assets/contact-premium-new.jpg';
import aboutBg from '../assets/about-bg-suitable.png';
import contactSideImg from '../assets/contact-rice-macro.png';

const Contact = () => (
  <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
    <div className="max-w-7xl mx-auto relative z-10">
      
      <div className="text-center mb-16 md:mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
           <Phone size={16} className="text-[#E02B2B]" />
           <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">GET IN TOUCH</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] tracking-tighter">
          Contact Us
        </h2>
      </div>

      <div className="bg-[#111111] rounded-xl text-white flex flex-col lg:flex-row relative overflow-hidden shadow-2xl">
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/3 bg-[#E02B2B] p-10 md:p-16 flex flex-col justify-center relative">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_2px,_transparent_2px)] bg-[size:20px_20px]"></div>
          
          <h3 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-tight">Visit Our Store</h3>
          <div className="space-y-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Packed & Marketed by</p>
                <p className="text-sm font-bold leading-relaxed">
                  SRI RUDRESHWARA ENTERPRISES<br />
                  <span className="text-[12px] font-medium text-white/90 leading-relaxed block mt-1">
                    Francis Building, Karnataka Layout,<br />
                    Indranagar Main Road,<br />
                    Tiptur - 572 201.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Direct Line</p>
                <p className="text-sm font-bold">+91 82771 30774</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Support</p>
                <p className="text-sm font-bold truncate">info@pvgold.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Column */}
        <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-3xl font-black mb-2 tracking-tight uppercase">Send a Message</h3>
            <p className="text-gray-400 text-sm font-medium">We'll get back to you within 24 hours.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" placeholder="Full Name" className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="Subject" className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500" />
            </div>
            <div>
              <textarea rows={4} placeholder="Your Message..." className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 resize-none" />
            </div>
            <button className="w-full md:w-auto px-10 bg-[#E02B2B] text-white py-4 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-3">
              Submit Request <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
