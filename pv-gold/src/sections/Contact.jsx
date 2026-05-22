import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import luxuryMesh from '../assets/luxury-mesh-bg.svg';
import contactBg from '../assets/contact-card-bg.svg';
import bgThematic from '../assets/contact-premium-new.jpg';
import aboutBg from '../assets/about-bg-suitable.png';
import contactSideImg from '../assets/contact-rice-macro.png';

// EmailJS Configuration - Replace these placeholders with your real credentials from https://dashboard.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_c7flu0a';
const EMAILJS_TEMPLATE_ID = 'template_7lf4i3j';
const EMAILJS_PUBLIC_KEY = 'gsP1ZSzpLbHD6VA_R';

const Contact = () => {
  const location = useLocation();
  const prepopulatedProduct = location.state?.product || '';
  const prepopulatedWeight = location.state?.weight || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prepopulatedProduct ? `Product Inquiry: ${prepopulatedProduct}` : '',
    message: prepopulatedProduct ? `Hello, I would like to inquire about your ${prepopulatedProduct} (${prepopulatedWeight}). Please provide more details regarding pricing and availability.` : ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMsg('All fields are required. Please fill out the form entirely.');
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    const serviceId = EMAILJS_SERVICE_ID;
    const templateId = EMAILJS_TEMPLATE_ID;
    const publicKey = EMAILJS_PUBLIC_KEY;

    // Check if configuration exists and is not placeholders
    const isConfigured = 
      serviceId && serviceId !== 'your_emailjs_service_id' && serviceId.trim() !== '' &&
      templateId && templateId !== 'your_emailjs_template_id' && templateId.trim() !== '' &&
      publicKey && publicKey !== 'your_emailjs_public_key' && publicKey.trim() !== '';

    if (!isConfigured) {
      console.warn(
        "EmailJS is not fully configured.\n" +
        "Please open Contact.jsx and replace placeholders with credentials from your EmailJS dashboard.\n" +
        "Running in DEMO / SIMULATION mode now."
      );

      // Simulate a premium API delay
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Reset status back to idle after 5 seconds to allow another message
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset status back to idle after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS submission error:', error);
      setStatus('error');
      setErrorMsg(error?.text || 'An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Phone size={16} className="text-[#E02B2B]" />
             <span className="text-[#E02B2B] text-xs font-black uppercase tracking-[0.3em]">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#111111] leading-[1.1] tracking-tighter">
            Contact Us
          </h2>
        </div>

        <div className="bg-[#111111] rounded-xl text-white flex flex-col lg:flex-row relative overflow-hidden shadow-2xl">
          {/* Left Side: Contact Info */}
          <div className="lg:w-1/3 bg-[#E02B2B] p-10 md:p-16 flex flex-col justify-center relative">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_2px,_transparent_2px)] bg-[size:20px_20px]"></div>
            
            <h3 className="text-3xl font-black mb-8 relative z-10 uppercase tracking-tight">Visit Our Store</h3>
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Packed & Marketed by</p>
                  <p className="text-sm font-bold leading-relaxed">
                    SRI RUDRESHWARA ENTERPRISES<br />
                    <span className="text-[12px] font-medium text-white/90 leading-relaxed block mt-1">
                      Francis Building,<br />
                      Karnataka Layout,<br />
                      Indranagar Main Road,<br />
                      Tiptur - 572 201.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Direct Line</p>
                  <p className="text-sm font-bold">+91 82771 30774</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-black mb-1">Support</p>
                  <a href="mailto:info@pvgold.in" className="text-sm font-bold hover:text-[#FFB800] transition-colors duration-300 block truncate text-white no-underline">
                    info@pvgold.in
                  </a>
                  <a href="mailto:pvgold2026@gmail.com" className="text-sm font-bold hover:text-[#FFB800] transition-colors duration-300 block truncate text-white no-underline mt-1.5">
                    pvgold2026@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Column */}
          <div className="lg:w-2/3 p-10 md:p-16 flex flex-col justify-center">
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-2 tracking-tight uppercase">Send a Message</h3>
              <p className="text-gray-400 text-sm font-medium">We'll get back to you within 24 hours.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Full Name" 
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Email Address" 
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Phone Number" 
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Subject" 
                    className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                  />
                </div>
              </div>
              <div>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="Your Message..." 
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded px-6 py-4 focus:border-[#E02B2B] outline-none transition-all text-white font-medium placeholder:text-gray-500 resize-none disabled:opacity-50 disabled:cursor-not-allowed" 
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded text-sm font-bold flex items-start gap-3"
                  >
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold uppercase tracking-wider text-xs">Success</p>
                      <p className="text-white/80 font-medium mt-0.5">Thank you! Your message has been sent successfully.</p>
                      {(!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_emailjs_service_id') && (
                        <p className="text-[10px] text-amber-400/80 font-semibold italic mt-1 uppercase tracking-wider">
                          [Dev Note: Running in Demo Mode. Update credentials inside Contact.jsx to send live emails]
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-red-950/40 border border-red-500/30 text-red-400 rounded text-sm font-bold flex items-start gap-3"
                  >
                    <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold uppercase tracking-wider text-xs">Submission Error</p>
                      <p className="text-white/80 font-medium mt-0.5">{errorMsg}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full md:w-auto px-10 bg-[#E02B2B] text-white py-4 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    Sending Inquiry <Loader2 size={14} className="animate-spin text-white" />
                  </>
                ) : (
                  <>
                    Submit Request <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

