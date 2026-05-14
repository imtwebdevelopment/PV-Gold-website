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
    <section id="products" className="relative py-20 px-6 md:px-12 overflow-hidden bg-white">
      {/* Suitable Organic Background Overlay */}
      <div className="absolute inset-0 z-0">
          <img src={productsBg} className="w-full h-full object-cover opacity-30" alt="background" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-nature-dark mb-8 leading-none">
            PRODUCTS <span className="opacity-30 uppercase">Page</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium max-w-xl mx-auto">Discover our premium hand-selected grains for daily nourishment.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <Link to="/products" className="bg-black text-white px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-primary hover:scale-105 transition-all shadow-2xl inline-block">
             Explore Full Catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
