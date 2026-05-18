import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import productsBg from '../assets/products-bg-home-suitable.png';
import imgRiceFlour from '../assets/product-rice-flour.png';
import imgRagiFlour from '../assets/product-ragi-flour.png';
import imgMaidaFlour from '../assets/product-maida.png';
import imgBansiRava from '../assets/product-bansi-rawa.png';
import imgGramFlour from '../assets/product-gram-flour.png';
import imgBangaloreRawa from '../assets/product-bengaluru-rawa.png';
import imgAvalakki from '../assets/product-avalakki.png';
import imgWheatFlour from '../assets/product-chakki-fresh-atta.png';

const Products = () => {
  const products = [
    { name: "Rice Flour", weight: "1KG", price: "60", bestSeller: true, image: imgRiceFlour },
    { name: "Ragi Flour", weight: "1KG", price: "75", bestSeller: true, image: imgRagiFlour },
    { name: "Maida Flour", weight: "500G | 1KG", price: "35 - 70", image: imgMaidaFlour },
    { name: "Bansi Rava", weight: "500G | 1KG", price: "40 - 80", image: imgBansiRava },
    { name: "Gram Flour", weight: "500G | 1KG", price: "40 - 80", bestSeller: true, image: imgGramFlour },
    { name: "Bangalore Rawa", weight: "500G | 1KG", price: "45 - 90", image: imgBangaloreRawa },
    { name: "Avalakki", weight: "500G | 1KG", price: "50 - 100", image: imgAvalakki },
    { name: "Wheat Flour", weight: "1KG | 5KG", price: "65 - 320", bestSeller: true, image: imgWheatFlour }
  ];

  return (
    <section id="products" className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Popular Dishes Style Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="text-[#E02B2B]">🌾</span>
             <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">PREMIUM SELECTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] tracking-tighter">
            Our Premium Product Range
          </h2>
        </div>
        
        {/* Clean, Simple Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/products" className="bg-[#E02B2B] text-white px-10 py-4 font-black uppercase tracking-widest text-xs transition-colors hover:bg-[#111111] inline-flex items-center gap-2">
             VIEW ALL ITEMS
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
