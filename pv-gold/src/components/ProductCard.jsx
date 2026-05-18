import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, weight, price, bestSeller, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayImage = image || "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400";

  // Static product contents/facts based on product name
  const getProductContents = (productName) => {
    const nameLower = productName.toLowerCase();
    if (nameLower.includes("rice flour")) {
      return {
        origin: "Karnataka, India",
        type: "Pure Ground Rice Flour",
        protein: "6.0g",
        carbs: "80g",
        fiber: "2.4g",
        fat: "1.4g"
      };
    } else if (nameLower.includes("ragi")) {
      return {
        origin: "Karnataka, India",
        type: "Nutritious Finger Millet Flour",
        protein: "7.3g",
        carbs: "72g",
        fiber: "11.5g",
        fat: "1.3g"
      };
    } else if (nameLower.includes("maida")) {
      return {
        origin: "Karnataka, India",
        type: "Premium Refined Wheat Flour",
        protein: "10.3g",
        carbs: "74g",
        fiber: "2.7g",
        fat: "1.0g"
      };
    } else if (nameLower.includes("bangalore")) {
      return {
        origin: "Karnataka, India",
        type: "Premium Bangalore Semolina",
        protein: "11.5g",
        carbs: "74g",
        fiber: "3.9g",
        fat: "1.0g"
      };
    } else if (nameLower.includes("bansi") || nameLower.includes("rava") || nameLower.includes("rawa")) {
      return {
        origin: "Karnataka, India",
        type: "Premium Hard Wheat Semolina",
        protein: "12.0g",
        carbs: "73g",
        fiber: "3.9g",
        fat: "1.1g"
      };
    } else if (nameLower.includes("gram") || nameLower.includes("besan")) {
      return {
        origin: "Karnataka, India",
        type: "Pure Chickpea Flour",
        protein: "22.4g",
        carbs: "58g",
        fiber: "10.8g",
        fat: "5.0g"
      };
    } else if (nameLower.includes("avalakki") || nameLower.includes("poha")) {
      return {
        origin: "Karnataka, India",
        type: "Premium Flattened Rice",
        protein: "6.6g",
        carbs: "77g",
        fiber: "0.7g",
        fat: "1.2g"
      };
    } else if (nameLower.includes("chakki") || nameLower.includes("atta") || nameLower.includes("wheat flour")) {
      return {
        origin: "Karnataka, India",
        type: "100% Whole Wheat Stoneground",
        protein: "12.0g",
        carbs: "72g",
        fiber: "11.2g",
        fat: "1.8g"
      };
    } else if (nameLower.includes("basmati")) {
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
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="w-full bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center justify-between text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer group relative"
      >
        {bestSeller && (
          <div className="absolute top-4 left-4 bg-[#FFB800] text-black text-[10px] font-black px-2.5 py-1 uppercase tracking-widest z-10 rounded-sm">
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
        <div className="flex flex-col items-center gap-1.5 w-full mt-4">
          <h4 className="text-sm font-black text-[#111111] uppercase leading-tight line-clamp-2">{name}</h4>
          
          {/* Stars */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-[#FFB800] text-[#FFB800]" />
            ))}
          </div>

          <p className="text-xs text-gray-400 font-bold">{weight}</p>
        </div>

        {/* Actions */}
        <div className="w-full flex gap-3 mt-5" onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={() => setIsOpen(true)}
            className="flex-1 bg-gray-50 hover:bg-[#E02B2B] border border-gray-200 hover:border-[#E02B2B] text-[#111111] hover:text-white text-[10px] font-black uppercase tracking-widest py-3 px-2 transition-all duration-300 shadow-sm hover:shadow-md rounded-md text-center"
          >
            View
          </button>
          <Link 
            to="/contact"
            className="flex-1 bg-[#E02B2B] hover:bg-[#111111] border border-[#E02B2B] hover:border-[#111111] text-white text-[10px] font-black uppercase tracking-widest py-3 px-2 transition-all duration-300 shadow-sm hover:shadow-md rounded-md text-center flex items-center justify-center"
          >
            Enquiry
          </Link>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 md:p-6 overflow-y-auto pt-24 md:pt-28 pb-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 flex flex-col md:flex-row h-auto max-h-[85vh] md:max-h-[80vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors z-30 flex items-center justify-center cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Left Column: Contents */}
              <div className="flex-1 p-5 md:p-8 overflow-y-auto flex flex-col justify-between">
                <div>
                  {bestSeller && (
                    <span className="bg-[#FFB800] text-black text-[9px] font-black px-2.5 py-1 uppercase tracking-widest rounded-sm mb-4 inline-block">
                      HOT
                    </span>
                  )}
                  <h3 className="text-lg md:text-2xl font-black text-[#111111] uppercase tracking-tight leading-none mb-2">
                    {name}
                  </h3>
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>

                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                    PACKAGING SIZES: {weight}
                  </p>

                  <h5 className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Product Information
                  </h5>
                  
                  <div className="w-full text-left bg-gray-50/50 p-3 md:p-3.5 rounded-xl border border-gray-100 flex flex-col gap-2">
                    <div className="flex justify-between text-[11px] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Type</span>
                      <span className="text-[#111111] font-black uppercase">{contents.type}</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Origin</span>
                      <span className="text-[#111111] font-black uppercase">{contents.origin}</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Protein (per 100g)</span>
                      <span className="text-[#111111] font-black">{contents.protein}</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Carbohydrates</span>
                      <span className="text-[#111111] font-black">{contents.carbs}</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-gray-100 pb-1.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Dietary Fiber</span>
                      <span className="text-[#111111] font-black">{contents.fiber}</span>
                    </div>
                    <div className="flex justify-between text-[11px] pb-0.5">
                      <span className="text-gray-400 font-bold uppercase tracking-wider">Fat</span>
                      <span className="text-[#111111] font-black">{contents.fat}</span>
                    </div>
                  </div>
                </div>

                {/* Enquiry CTA inside Modal */}
                <div className="mt-5">
                  <Link 
                    to="/contact"
                    className="w-full bg-[#E02B2B] hover:bg-[#111111] border border-[#E02B2B] hover:border-[#111111] text-white text-[11px] font-black uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Send Product Enquiry
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </Link>
                </div>
              </div>

              {/* Right Column: Product Image */}
              <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6 md:p-8 relative overflow-hidden border-t md:border-t-0 md:border-l border-gray-100 min-h-[250px] md:min-h-0">
                {/* Subtle organic bg shape */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ background: 'radial-gradient(circle at center, #E02B2B 0%, transparent 70%)' }}
                />
                
                <img 
                  src={displayImage} 
                  alt={name} 
                  className="w-40 h-40 md:w-60 md:h-60 object-contain filter drop-shadow-xl hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCard;
