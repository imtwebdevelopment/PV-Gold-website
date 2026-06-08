import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film } from 'lucide-react';

const ReelCard = ({ video, index, onClick }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Playback play interrupted:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border-2 border-[#E02B2B]/40 hover:border-[#E02B2B] bg-[#111111] transition-all duration-300 shadow-[0_0_15px_rgba(224,43,43,0.15)] hover:shadow-[0_0_30px_rgba(224,43,43,0.4)] w-full max-w-sm mx-auto aspect-[9/16]"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.src}
        preload="auto"
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity duration-500"
      />

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:via-black/20 transition-all duration-500 pointer-events-none" />

      {/* Floating Play Indicator (fades out when playing) */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
        <div className="w-16 h-16 rounded-full bg-[#E02B2B]/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
          <Play size={24} className="fill-current ml-1" />
        </div>
      </div>


    </motion.div>
  );
};

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      src: "/videos/video-1.mp4",
      title: "Advanced Grains Processing"
    },
    {
      src: "/videos/video-2.mp4",
      title: "Precision Flour Packaging"
    },
    {
      src: "/videos/video-3.mp4",
      title: "Rigorous Quality Inspection"
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
            Hover over any reel to see our processing unit in action, and click to view in full-screen.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <ReelCard
              key={i}
              video={video}
              index={i}
              onClick={() => setActiveVideo(video)}
            />
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
              className="relative max-w-lg w-full flex flex-col items-center z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 md:-top-14 md:right-0 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Video Player (Vertical Reels Aspect Ratio inside lightbox too) */}
              <div className="relative w-full aspect-[9/16] max-h-[80vh] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>


            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Videos;
