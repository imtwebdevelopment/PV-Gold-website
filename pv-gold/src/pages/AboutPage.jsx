import React from 'react';
import About from '../sections/About';
import { Building2, MapPin, PhoneCall } from 'lucide-react';

const AboutPage = () => (
  <div className="pt-[115px] lg:pt-[155px] pb-20">
    <About />

    {/* Official Packer & Marketer Info Card */}
    <section className="py-16 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-[#FAF8F5] border border-gray-100 rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl flex flex-col md:flex-row gap-12 items-center">

          {/* Accent Gold/Red shapes like in flyer */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#E02B2B]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Branding */}
          <div className="md:w-1/3 flex flex-col gap-4 text-center md:text-left relative z-10">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-[#E02B2B]">Official Packer & Marketer</span>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-[#111111] uppercase leading-none">
              Corporate <br />
              <span className="text-[#FFB800]">Presence</span>
            </h3>
            <p className="text-gray-400 text-sm font-medium mt-2 leading-relaxed">
              PV Gold products are packed and marketed by certified distributors ensuring strict sanitation, fresh packing, and secure sealing protocols.
            </p>
          </div>

          {/* Right Column: Detailed Address & Call details */}
          <div className="md:w-2/3 w-full bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-8 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E02B2B]/10 flex items-center justify-center shrink-0">
                <Building2 className="text-[#E02B2B] w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E02B2B] block mb-1">Company Name</span>
                <h4 className="text-2xl font-black text-[#111111] uppercase tracking-tight">Sri Rudreshwara Enterprises</h4>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FFB800]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#FFB800] w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FFB800] block mb-1">Registered Address</span>
                  <p className="text-gray-500 font-semibold text-sm leading-relaxed">
                    Francis Building,<br />
                    Karnataka Layout,<br />
                    Indranagar Main Road,<br />
                    Tiptur - 572 201.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <PhoneCall className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-green-600 block mb-1">Customer Support</span>
                  <a href="tel:8277130774" className="text-gray-900 hover:text-[#E02B2B] font-black text-2xl block transition-colors duration-300">
                    8277130774
                  </a>
                  <p className="text-xs text-gray-400 font-medium mt-1">Monday to Saturday (9 AM - 6 PM)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Vision and Mission Section */}
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
