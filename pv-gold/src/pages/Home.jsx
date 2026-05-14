import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Products from '../sections/Products';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import { Play } from 'lucide-react';

const Home = () => (
  <>
    <Hero />
    
    <About />

    <Products />


    <Gallery />
    <Contact />
  </>
);

export default Home;
