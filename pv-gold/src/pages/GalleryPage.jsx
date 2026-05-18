import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../sections/Gallery';

const GalleryPage = () => {
  return (
    <div className="bg-[#111111] min-h-screen pt-[116px] overflow-hidden">
      <div className="relative z-10">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;

