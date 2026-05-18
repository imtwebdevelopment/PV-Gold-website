import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ProductCard = ({ name, weight, price, bestSeller, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const displayImage = image || "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400";

  // Static product contents/facts based on product name
  const getProductContents = (productName) => {
    const nameLower = productName.toLowerCase();
    if (nameLower.includes("basmati")) {
      return {
        origin: "Himalayan Foothills",
        type: "Premium Long Grain (Aged)",
        protein: "8.5g",
        carbs: "78g",
        fiber: "1.5g",
        fat: "0.4g"
      };
    } else if (nameLower.includes("brown")) {
      return {
        origin: "Indo-Gangetic Plains",
        type: "Whole Grain Unpolished",
        protein: "7.9g",
        carbs: "76g",
        fiber: "3.5g",
        fat: "2.2g"
      };
    } else if (nameLower.includes("dal") || nameLower.includes("lentil")) {
      return {
        origin: "Deccan Plateau",
        type: "Yellow Split Pulses",
        protein: "22g",
        carbs: "57g",
        fiber: "15g",
        fat: "1.5g"
      };
    } else if (nameLower.includes("sona")) {
      return {
        origin: "Southern River Basins",
        type: "Lightweight Medium Grain",
        protein: "6.8g",
        carbs: "79g",
        fiber: "0.6g",
        fat: "0.4g"
      };
    } else if (nameLower.includes("flour") || nameLower.includes("wheat")) {
      return {
        origin: "Madhya Pradesh",
        type: "100% Whole Wheat Chakki",
        protein: "12g",
        carbs: "72g",
        fiber: "11g",
        fat: "1.7g"
      };
    }
    return {
      origin: "Standard Indian Farms",
      type: "100% Natural Grain",
      protein: "8.0g",
      carbs: "75g",
      fiber: "2.0g",
      fat: "1.0g"
    };
  };

  const contents = getProductContents(name);

  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full h-[380px] cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* FRONT SIDE */}
        <div 
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 p-6 flex flex-col items-center justify-between text-center transition-all duration-300 group"
        >
          {bestSeller && (
            <div className="absolute top-4 left-4 bg-[#FFB800] text-black text-[10px] font-black px-2 py-1 uppercase tracking-widest z-20">
              HOT
            </div>
          )}

          {/* Circular Image Container */}
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mt-2 border-4 border-gray-50 group-hover:border-[#E02B2B]/20 transition-colors">
            <img 
              src={displayImage} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center gap-1.5 w-full">
            <h4 className="text-sm font-black text-[#111111] uppercase leading-tight line-clamp-2">{name}</h4>
            
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>

            <p className="text-xs text-gray-400 font-bold">{weight}</p>
          </div>

          {/* Price & Click Hint */}
          <div className="w-full mt-2">
            <div className="text-xl font-black text-[#E02B2B]">
              ₹{price}
            </div>
            <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-2 group-hover:text-[#E02B2B] transition-colors">
              Click to View Contents
            </p>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 bg-[#111111] text-white rounded-xl shadow-xl border-2 border-[#E02B2B]/40 p-6 flex flex-col justify-between items-center text-center"
        >
          {/* Back Header */}
          <div className="w-full">
            <span className="text-[9px] uppercase tracking-[0.3em] font-black text-[#E02B2B]">PRODUCT CONTENTS</span>
            <h4 className="text-xs font-black text-white uppercase leading-tight mt-1 mb-2">{name}</h4>
            <div className="h-[2px] w-12 bg-[#FFB800] mx-auto"></div>
          </div>

          {/* Static Contents Facts Table */}
          <div className="w-full text-left bg-white/5 p-3 rounded-lg border border-white/10 flex flex-col gap-2">
            <div className="flex justify-between text-[11px] border-b border-white/5 pb-1">
              <span className="text-gray-400 font-bold">TYPE</span>
              <span className="text-white font-black uppercase text-[10px]">{contents.type}</span>
            </div>
            <div className="flex justify-between text-[11px] border-b border-white/5 pb-1">
              <span className="text-gray-400 font-bold">ORIGIN</span>
              <span className="text-white font-black uppercase text-[10px]">{contents.origin}</span>
            </div>
            <div className="flex justify-between text-[11px] border-b border-white/5 pb-1">
              <span className="text-gray-400 font-bold">PROTEIN (PER 100G)</span>
              <span className="text-white font-black text-[10px]">{contents.protein}</span>
            </div>
            <div className="flex justify-between text-[11px] border-b border-white/5 pb-1">
              <span className="text-gray-400 font-bold">CARBOHYDRATES</span>
              <span className="text-white font-black text-[10px]">{contents.carbs}</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-400 font-bold">DIETARY FIBER</span>
              <span className="text-white font-black text-[10px]">{contents.fiber}</span>
            </div>
          </div>

          {/* Price, Weight, and Back Hint */}
          <div className="w-full">
            <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase text-gray-400 mb-1.5">
              <span>{weight}</span>
              <span className="text-white">|</span>
              <span className="text-[#FFB800] font-black text-sm">₹{price}</span>
            </div>
            <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest">
              Click to Flip Back
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
