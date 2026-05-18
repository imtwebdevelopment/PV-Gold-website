import React from 'react';
import About from '../sections/About';

const AboutPage = () => (
  <div className="pt-32 pb-20">
    <About />

    <section className="py-24 px-6 md:px-12 bg-[#FAF8F5] border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Our Vision Card */}
        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-6">
          <div className="w-12 h-12 rounded-full bg-[#E02B2B]/10 flex items-center justify-center shrink-0">
            <span className="text-2xl">👁️</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111111]">Our Vision</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            To become the global leader in sustainable grain production, ensuring every household has access to the purest, most nutrient-rich food directly from nature's lap.
          </p>
        </div>

        {/* Our Mission Card */}
        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col gap-6">
          <div className="w-12 h-12 rounded-full bg-[#FFB800]/20 flex items-center justify-center shrink-0">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111111]">Our Mission</h3>
          <p className="text-gray-500 font-medium leading-relaxed">
            To nurture health and longevity by delivering uncompromised, premium grains. We partner closely with dedicated farmers, employing eco-friendly harvest wisdom and strict quality criteria, ensuring nature's purest energy reaches every dining table.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
