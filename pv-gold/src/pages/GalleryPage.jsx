import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../sections/Gallery';

const GalleryPage = () => {
  return (
    <div className="bg-[#111111] min-h-screen pt-[115px] lg:pt-[155px] overflow-hidden">
      <div>
        <Gallery isDedicated={true} />
      </div>
    </div>
  );
};

export default GalleryPage;

