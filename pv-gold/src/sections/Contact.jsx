import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import luxuryMesh from '../assets/luxury-mesh-bg.svg';
import contactBg from '../assets/contact-card-bg.svg';
import bgThematic from '../assets/contact-premium-new.jpg';
import aboutBg from '../assets/about-bg-suitable.png';
import contactSideImg from '../assets/contact-rice-macro.png';

const Contact = () => (
  <section id="contact" className="py-20 px-6 md:px-12 relative overflow-hidden">
    {/* Section Background Layer - Refined Light Visual */}
    <div
      className="absolute inset-0 z-0 opacity-40 bg-fixed"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/100 via-white/80 to-white/100" />

    <div className="max-w-7xl mx-auto relative z-10">
      {/* Updated CONTACT US Section Header */}
      <div className="text-center mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black tracking-tighter text-nature-dark mb-4 md:mb-8 leading-none uppercase"
        >
          CONTACT <span className="opacity-30">Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-base md:text-lg text-gray-400 font-medium max-w-xl mx-auto px-4"
        >
          Let's discuss how we can bring nature's purest grains to your doorstep.
        </motion.p>
      </div>

      <div className="bg-[#061a10] rounded-[40px] md:rounded-[60px] text-white flex flex-col lg:flex-row relative overflow-hidden shadow-2xl border border-white/5">
        {/* Left Side: Premium Image & Info Overlay */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
          <img src={contactSideImg} alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061a10]/60 via-transparent to-transparent" />
          
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-[30px] border border-white/10 max-w-sm"
            >
              <h3 className="text-2xl font-bold mb-6 tracking-tight">Visit Our Office</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary/20">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Location</p>
                    <p className="text-sm font-bold leading-relaxed">
                      123 Grain Valley, Nature District,<br />
                      Sustainability Park, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Direct Line</p>
                    <p className="text-sm font-bold">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Support</p>
                    <p className="text-sm font-bold truncate">hello@pvgold.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form Column */}
        <div className="lg:w-1/2 relative z-10 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">Send a Message</h3>
            <p className="text-gray-400 text-sm font-medium">We'll get back to you within 24 hours.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">Name</label>
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">Email</label>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">Subject</label>
              <input type="text" placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">Message</label>
              <textarea rows={4} placeholder="Your message here..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all placeholder:text-white/10 text-white font-medium resize-none" />
            </div>
            <button className="w-full bg-primary text-white py-4 md:py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95 transform">
              Send Message <Send size={14} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
