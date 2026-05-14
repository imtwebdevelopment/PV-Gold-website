import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../sections/Gallery';

const GalleryPage = () => {
  return (
    <div className="terra-new-bg min-h-screen pt-20 pb-20 overflow-hidden">
      <div className="relative z-10">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;

