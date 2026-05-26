import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import gallary1 from '../assets/Gallary1.jpeg';
import gallary2 from '../assets/Gallary2.jpeg';
import gallary4 from '../assets/Gallary4.jpeg';
import gallary5 from '../assets/Gallary5.jpeg';
import gallary7 from '../assets/Gallary7.jpeg';
import gallary9 from '../assets/Gallary9.jpeg';

const Gallery = ({ isDedicated = false }) => {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    { src: gallary1, span: "lg:col-span-4", title: "Premium Grains Quality" },
    { src: gallary2, span: "lg:col-span-8", title: "Flour Processing Excellence" },
    { src: gallary4, span: "lg:col-span-6", title: "Hygienic Packaging Line" },
    { src: gallary5, span: "lg:col-span-4", title: "Strict Quality Control" },
    { src: gallary7, span: "lg:col-span-4", title: "Ready-to-Ship Logistics" },
    { src: gallary9, span: "lg:col-span-6", title: "Hygienic Heat Sealing" },
  ];

  return (
    <section id="gallery" className="relative py-24 px-6 md:px-12 bg-[#111111] overflow-hidden border-t-8 border-[#E02B2B]">

      {/* Decorative Red Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E02B2B] rounded-full blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E02B2B] rounded-full blur-[100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera size={16} className="text-[#E02B2B]" />
            <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">OUR GALLERY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
            Signature Grains Visuals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              onClick={() => setActiveImage(img)}
              className="relative rounded-xl overflow-hidden group cursor-pointer border-2 border-[#E02B2B]/60 hover:border-[#E02B2B] transition-colors duration-300 shadow-[0_0_10px_rgba(224,43,43,0.15)] hover:shadow-[0_0_20px_rgba(224,43,43,0.4)] bg-[#1a1a1a]"
            >
              <img src={img.src} alt={img.title} className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <Camera size={32} className="mb-3 text-[#E02B2B]" />
                <span className="text-sm font-black uppercase tracking-widest text-center px-4">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {!isDedicated && (
          <div className="mt-16 text-center">
            <Link to="/gallery" className="bg-[#E02B2B] text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black inline-flex items-center gap-2">
              View Full Gallery
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full flex flex-col items-center z-10"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 md:-top-14 md:right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl max-h-[75vh] md:max-h-[80vh] flex items-center justify-center bg-[#111]">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain"
                />
              </div>

              {/* Title label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-4 flex items-center gap-2 bg-[#E02B2B] text-white px-4 py-2 rounded-full shadow-lg"
              >
                <Camera size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">{activeImage.title}</span>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;


