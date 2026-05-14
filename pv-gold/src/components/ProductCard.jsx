import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Plus, ShoppingBag } from 'lucide-react';

const ProductCard = ({ name, weight, price, bestSeller, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Placeholder image if none provided
  const displayImage = image || "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="perspective-1000 w-full h-[480px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* FRONT SIDE: Fully Image */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[40px] overflow-hidden shadow-xl border border-black/5 group-hover:shadow-2xl transition-all duration-500">
          {bestSeller && (
            <div className="absolute top-6 right-6 bg-primary text-white text-[8px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl z-20">
              Best Seller
            </div>
          )}
          
          <div className="w-full h-full relative">
            <img 
              src={displayImage} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/80 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
               <div className="flex gap-1 mb-2 opacity-60">
                 {[...Array(5)].map((_, i) => <Star key={i} size={8} className="fill-secondary text-secondary" />)}
               </div>
               <h4 className="text-2xl font-black text-white mb-1 tracking-tighter leading-tight">{name}</h4>
               <div className="flex justify-between items-center mt-3">
                 <p className="text-[10px] text-white/50 font-black uppercase tracking-widest">{weight}</p>
                 <div className="text-xl font-black text-primary bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-white/10">₹{price}</div>
               </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE: Product Content */}
        <div className="absolute inset-0 backface-hidden bg-nature-dark rounded-[40px] p-10 text-white rotate-y-180 flex flex-col items-center justify-center text-center shadow-2xl">
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto border border-primary/20">
               <ShoppingBag size={32} />
            </div>
            <h4 className="text-3xl font-black tracking-tighter text-white leading-tight mb-2">{name}</h4>
            <div className="h-1 w-12 bg-secondary mx-auto rounded-full" />
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 font-medium italic">
            "Experience the purity of nature with our hand-selected {name.toLowerCase()}. Nurtured in the heart of Punjab for the perfect taste and aroma."
          </p>
          
          <div className="space-y-4 w-full">
            <div className="flex justify-between text-xs font-black uppercase tracking-widest py-3 border-b border-white/5">
               <span className="text-gray-500">Net Weight</span>
               <span className="text-secondary">{weight}</span>
            </div>
            <div className="flex justify-between text-xs font-black uppercase tracking-widest py-3 border-b border-white/5">
               <span className="text-gray-500">Premium Grade</span>
               <span className="text-secondary">A+ Export</span>
            </div>
          </div>

          <div className="mt-auto w-full pt-10">
             <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center gap-3">
               Select Option <ArrowRight size={14} />
             </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
