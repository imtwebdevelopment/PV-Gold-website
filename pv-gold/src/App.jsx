import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

import './index.css';

const App = () => {
  return (
    <Router>
      <div className="bg-nature-bg min-h-screen text-nature-dark selection:bg-primary/20">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        <FloatingActions />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
