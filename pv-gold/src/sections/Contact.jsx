import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import luxuryMesh from '../assets/luxury-mesh-bg.svg';
import contactBg from '../assets/contact-card-bg.svg';
import bgThematic from '../assets/contact-premium-new.jpg';
import aboutBg from '../assets/about-bg-suitable.png';

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

      <div className="bg-[#061a10] rounded-[40px] md:rounded-[60px] p-6 md:p-16 text-white flex flex-col lg:flex-row gap-12 md:gap-16 relative overflow-hidden shadow-2xl border border-white/5">
        {/* Premium Card Background Texture */}
        <div
          className="absolute inset-0 z-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Luxury Mesh Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url(${luxuryMesh})`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Contact Info Column */}
        <div className="flex-1 relative z-10 space-y-12 md:space-y-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Visit Our Office</h3>
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-2">Location</p>
                <p className="text-lg md:text-xl font-bold leading-relaxed">
                  123 Grain Valley, Nature District,<br />
                  Sustainability Park, India
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-2">Direct Line</p>
                <p className="text-xl md:text-2xl font-bold">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary transition-all group-hover:bg-primary group-hover:text-white shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-2">Support</p>
                <p className="text-xl md:text-2xl font-bold break-all">hello@pvgold.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 relative z-10 bg-white/5 p-6 md:p-12 rounded-[30px] md:rounded-[40px] border border-white/10 backdrop-blur-xl">
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
