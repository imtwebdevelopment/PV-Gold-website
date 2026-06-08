import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film } from 'lucide-react';

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      src: "/videos/video-1.mp4",
      title: "Advanced Grains Processing",
      description: "Witness our state-of-the-art milling and sorting technology in full operation.",
      duration: "0:36"
    },
    {
      src: "/videos/video-2.mp4",
      title: "Precision Flour Packaging",
      description: "Automated, ultra-hygienic packing lines sealing in freshness and quality.",
      duration: "0:25"
    },
    {
      src: "/videos/video-3.mp4",
      title: "Rigorous Quality Inspection",
      description: "Our dedicated testing processes ensuring only the finest grains proceed.",
      duration: "0:30"
    }
  ];

  return (
    <section id="videos" className="relative py-24 px-6 md:px-12 bg-[#161616] overflow-hidden border-t-8 border-[#E02B2B]">
      
      {/* Decorative Red Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E02B2B] rounded-full blur-[100px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E02B2B] rounded-full blur-[100px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film size={16} className="text-[#E02B2B]" />
            <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">PROCESSING VIDEOS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Take a virtual tour of our premium grains processing unit and see how we deliver unmatched quality at every step.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onClick={() => setActiveVideo(video)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border-2 border-[#E02B2B]/40 hover:border-[#E02B2B] bg-[#111111] transition-all duration-300 shadow-[0_0_15px_rgba(224,43,43,0.1)] hover:shadow-[0_0_25px_rgba(224,43,43,0.3)] flex flex-col justify-between h-full"
            >
              {/* Video Thumbnail Wrapper */}
              <div className="relative aspect-video overflow-hidden bg-black flex items-center justify-center">
                <video
                  src={video.src}
                  preload="metadata"
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#E02B2B] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="fill-current ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider">
                  {video.duration} MIN
                </div>
              </div>

              {/* Video Info Card */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#E02B2B] transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
                
                <div className="mt-6 flex items-center text-[#E02B2B] font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                  <span>Watch Video</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
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
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 md:-top-14 md:right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Description Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-6 text-center max-w-2xl px-4"
              >
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                  {activeVideo.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mt-2">
                  {activeVideo.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Videos;
