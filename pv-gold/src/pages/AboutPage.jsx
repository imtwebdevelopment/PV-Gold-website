import React from 'react';
import About from '../sections/About';

const AboutPage = () => (
  <div className="pt-32 pb-20">
    <About />

    <section className="py-24 px-6 md:px-12 bg-nature-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-8 section-title">Our Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          To become the global leader in sustainable grain production, ensuring every household has access to the purest, most nutrient-rich food directly from nature's lap.
        </p>
      </div>
    </section>
  </div>
);

export default AboutPage;
