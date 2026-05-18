import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import g1 from '../assets/gallery-1.png';
import g2 from '../assets/gallery-2.png';
import g3 from '../assets/gallery-3.png';
import g4 from '../assets/gallery-4.png';
import bgNature from '../assets/bg-nature.png';

const Gallery = () => {
  const images = [
    { src: g1, span: "lg:col-span-4", title: "Premium Quality" },
    { src: g2, span: "lg:col-span-8", title: "Fresh Harvest" },
    { src: g3, span: "lg:col-span-6", title: "Organic Grains" },
    { src: g4, span: "lg:col-span-6", title: "Pure Nature" },
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span} aspect-[4/3] lg:aspect-auto h-[350px] lg:h-[400px] border border-[#333]`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white border-4 border-[#E02B2B] m-2 rounded-lg">
                <Camera size={32} className="mb-3 text-[#E02B2B]" />
                <span className="text-sm font-black uppercase tracking-widest">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-[#E02B2B] text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black inline-flex items-center gap-2">
            View Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


