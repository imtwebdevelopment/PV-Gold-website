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
    { src: g1, span: "lg:col-span-4", title: "Pure Harvest" },
    { src: g2, span: "lg:col-span-8", title: "Emerald Fields" },
    { src: g3, span: "lg:col-span-6", title: "Daily Balance" },
    { src: g4, span: "lg:col-span-6", title: "Nature's Energy" },
  ];

  return (
    <section id="gallery" className="relative py-16 px-6 md:px-12 overflow-hidden">
      {/* Premium Background Layer - Increased visibility */}
      <div
        className="absolute inset-0 z-0 opacity-70 bg-fixed"
        style={{
          backgroundImage: `url(${bgNature})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Newly Created Noise Texture Overlay */}
      {/* Removed Noise Texture Overlay */}

      {/* Lighter Overlay to show background more clearly */}
      <div className="absolute inset-0 z-0 bg-[#f4f7f0]/60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black uppercase tracking-[0.5em] text-[9px] mb-6"
          >
            Our Visual Journey
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-[#061a10] mb-4 md:mb-6 leading-none"
          >
            Gallery <span className="text-[#9ca3af]">Moments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-base text-[#6b7280] font-medium max-w-xl mx-auto"
          >
            Experience the beauty of nature through our lens.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative rounded-[40px] overflow-hidden group cursor-pointer ${img.span} aspect-[4/3] lg:aspect-auto h-[350px] lg:h-[500px] shadow-xl`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                <Camera size={28} className="mb-3" />
                <span className="text-[10px] font-black uppercase tracking-widest">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-black text-white rounded-full px-12 py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-lg">
            Explore More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;


