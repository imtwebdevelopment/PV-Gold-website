import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Facebook, Twitter, Instagram } from './SocialIcons';
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
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61590377008023"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              aria-label="Facebook"
            >
              <Facebook size={16} fill="currentColor" />
            </a>
            {/* Twitter/X */}
            <a
              href="https://x.com/pvgold_123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-black flex items-center justify-center text-white hover:scale-110 transition-transform shadow border border-gray-800"
              aria-label="Twitter / X"
            >
              <Twitter size={16} fill="currentColor" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/pvgold2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md bg-gradient-to-br from-[#E1306C] to-[#F77737] flex items-center justify-center text-white hover:scale-110 transition-transform shadow"
              aria-label="Instagram"
            >
              <Instagram size={16} />
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
                <a href="mailto:info@pvgold.in" className="text-gray-200 text-sm font-bold hover:text-[#FFB800] transition-colors no-underline block">
                  info@pvgold.in
                </a>
                <a href="mailto:pvgold2026@gmail.com" className="text-gray-200 text-sm font-bold hover:text-[#FFB800] transition-colors no-underline block mt-1">
                  pvgold2026@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={17} className="text-[#E02B2B] mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-1">Address</p>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  SRI RUDRESHWARA ENTERPRISES<br />
                  Francis Building,<br />
                  Karnataka Layout,<br />
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
          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden border-2 border-[#E02B2B]/30 shadow-lg">
            <iframe
              title="PV Gold Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3883.566712065434!2d76.46860187508132!3d13.252486287089267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDE1JzA5LjAiTiA3NsKwMjgnMTYuMiJF!5e0!3m2!1sen!2sin!4v1779771644236!5m2!1sen!2sin"
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
