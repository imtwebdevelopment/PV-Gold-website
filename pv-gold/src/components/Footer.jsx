import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Instagram } from './SocialIcons';
import logo from '../assets/PV Gold-logo.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Products', to: '/products' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t-4 border-[#E02B2B]">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 – Brand */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-lg">
              <img src={logo} alt="PV GOLD" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="h-[2.5px] w-8 bg-[#FFB800]" />
              <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">PV GOLD</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 leading-none pl-0.5">GRAINS</span>
              <div className="h-[2.5px] w-10 bg-[#FFB800] self-end" />
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Harvesting excellence since decades. PV Gold brings you the world's most premium grains, nurtured by nature and delivered with purity.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-1">
            <a
              href="https://www.instagram.com/pvgoldgrains"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/918277130774"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              aria-label="WhatsApp"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            {/* Phone */}
            <a
              href="tel:+918277130774"
              className="w-9 h-9 rounded-md bg-[#E02B2B] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              aria-label="Call Us"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-white font-black text-base uppercase tracking-widest mb-6 pb-3 border-b border-[#E02B2B]/40">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#FFB800] transition-colors text-sm font-semibold group no-underline"
                >
                  <ChevronRight size={14} className="text-[#E02B2B] group-hover:translate-x-1 transition-transform" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 – Contact Us */}
        <div>
          <h4 className="text-white font-black text-base uppercase tracking-widest mb-6 pb-3 border-b border-[#E02B2B]/40">
            Contact Us
          </h4>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <Phone size={17} className="text-[#E02B2B] mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Phone</p>
                <a href="tel:+918277130774" className="text-gray-200 text-sm font-bold hover:text-[#FFB800] transition-colors no-underline">
                  +91 82771 30774
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={17} className="text-[#E02B2B] mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Email</p>
                <a href="mailto:info@pvgold.in" className="text-gray-200 text-sm font-bold hover:text-[#FFB800] transition-colors no-underline">
                  info@pvgold.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} className="text-[#E02B2B] mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Address</p>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  SRI RUDRESHWARA ENTERPRISES<br />
                  Francis Building, Karnataka Layout,<br />
                  Indranagar Main Road,<br />
                  Tiptur – 572 201.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4 – Locate Us */}
        <div>
          <h4 className="text-white font-black text-base uppercase tracking-widest mb-6 pb-3 border-b border-[#E02B2B]/40">
            Locate Us
          </h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed flex items-start gap-2">
            <MapPin size={15} className="text-[#E02B2B] mt-0.5 shrink-0" />
            Indranagar Main Road, Tiptur, Karnataka – 572 201
          </p>
          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden border-2 border-[#E02B2B]/30 shadow-lg">
            <iframe
              title="PV Gold Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8!2d76.479!3d13.262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbad!2sTiptur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="160"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FFB800]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#111111] text-xs font-black uppercase tracking-wide">
            © {currentYear} PV Gold Grains. All Rights Reserved.
          </p>
          <p className="text-[#111111] text-xs font-black uppercase tracking-wide">
            Powered By <span className="font-black">INNOMATRICS TECHNOLOGIES</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
