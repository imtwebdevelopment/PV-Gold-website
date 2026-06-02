import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';

// Assets
import productsBg from '../assets/product-bg-suitable.png';
import imgRiceFlour from '../assets/product-rice-flour.png';
import imgRagiFlour from '../assets/product-ragi-flour.png';
import imgMaidaFlour from '../assets/product-maida.png';
import imgBansiRava from '../assets/product-bansi-rawa.png';
import imgGramFlour from '../assets/product-gram-flour.png';
import imgBangaloreRawa from '../assets/product-bengaluru-rawa.png';
import imgAvalakki from '../assets/product-avalakki.png';
import imgWheatFlour from '../assets/product-chakki-fresh-atta.png';

const products = [
  { id: 1, name: "Rice Flour", category: "Flours", price: "60", weight: "1KG", image: imgRiceFlour, bestSeller: true },
  { id: 2, name: "Ragi Flour", category: "Flours", price: "75", weight: "1KG", image: imgRagiFlour, bestSeller: true },
  { id: 3, name: "Maida Flour", category: "Flours", price: "35 - 70", weight: "500G | 1KG", image: imgMaidaFlour },
  { id: 4, name: "Bansi Rava", category: "Rawa", price: "40 - 80", weight: "500G | 1KG", image: imgBansiRava },
  { id: 5, name: "Gram Flour", category: "Flours", price: "40 - 80", weight: "500G | 1KG", image: imgGramFlour, bestSeller: true },
  { id: 6, name: "Bangalore Rawa", category: "Rawa", price: "45 - 90", weight: "500G | 1KG", image: imgBangaloreRawa },
  { id: 7, name: "Avalakki", category: "Grains", price: "50 - 100", weight: "500G | 1KG", image: imgAvalakki },
  { id: 8, name: "Wheat Flour", category: "Flours", price: "65 - 320", weight: "500G | 1KG | 5KG", image: imgWheatFlour, bestSeller: true }
];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Flours", "Rawa", "Grains"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-[115px] lg:pt-[155px] pb-20 relative bg-white overflow-hidden">
      {/* Suitable Product Background */}
      <div className="absolute top-0 left-0 w-full h-[800px] z-0 opacity-20 pointer-events-none">
         <img src={productsBg} className="w-full h-full object-cover" alt="bg" />
         <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
           <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-10 md:mb-12 uppercase">
             Our <span className="text-black/30">Premium</span> <br />
             Product <span className="text-primary">Selection</span>
           </h1>
           <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto font-medium leading-relaxed px-4">
             Discover our earth-based collections, nurtured for daily balance and clean energy. From the heart of nature to your table.
           </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg ${activeCategory === cat ? 'bg-primary text-white shadow-primary/20 scale-105' : 'bg-white text-gray-400 hover:bg-gray-50 border border-gray-100'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        {/* Product Grid - Using consistent ProductCard with 3D Flip */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"
        >
           <AnimatePresence mode="popLayout">
             {filteredProducts.map((product) => (
               <motion.div
                 layout
                 key={product.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9 }}
                 transition={{ duration: 0.4 }}
               >
                 <ProductCard {...product} />
               </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default ProductsPage;
