import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import productsBg from '../assets/products-bg-home-suitable.png';
import imgBasmati from '../assets/product-basmati.jpg';
import imgBrownRice from '../assets/product-brown-rice.jpg';
import imgToorDal from '../assets/product-toor-dal.jpg';
import imgSonaMasuri from '../assets/product-sona-masuri.jpg';
import imgWheatFlour from '../assets/product-wheat-flour.jpg';

const Products = () => {
  const products = [
    { name: "Premium Basmati Rice", weight: "5KG", price: "750", bestSeller: true, image: imgBasmati },
    { name: "Traditional Brown Rice", weight: "2KG", price: "320", image: imgBrownRice },
    { name: "Organic Toor Dal", weight: "1KG", price: "180", bestSeller: true, image: imgToorDal },
    { name: "Super Sona Masuri", weight: "25KG", price: "1450", image: imgSonaMasuri },
    { name: "Golden Wheat Flour", weight: "10KG", price: "450", bestSeller: true, image: imgWheatFlour }
  ];

  return (
    <section id="products" className="relative py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Popular Dishes Style Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <span className="text-[#E02B2B]">🍽️</span>
             <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">POPULAR GRAINS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] tracking-tighter">
            Our Most Popular Grains
          </h2>
        </div>
        
        {/* Clean, Simple Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
