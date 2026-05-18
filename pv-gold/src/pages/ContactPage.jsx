import Contact from '../sections/Contact';
import { motion } from 'framer-motion';
import aboutBg from '../assets/about-bg-suitable.png';

const ContactPage = () => (
  <div className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-white">
    {/* Full Page Suitable Background Texture */}
    <div
      className="absolute inset-0 z-0 opacity-40 bg-fixed"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/100 via-white/80 to-white/100" />
    
    <div className="relative z-10">
      <Contact />
      
      {/* Premium Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-terra mb-6 inline-block">Location</span>
          <h3 className="text-5xl font-black text-nature-dark tracking-tighter uppercase mb-4">Find Us In <span className="text-primary">Tiptur</span></h3>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">Discover our premium processing and packaging facilities in Karnataka, India.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-[600px] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-white relative group"
        >
          {/* Decorative Overlay for a premium feel */}
          <div className="absolute inset-0 pointer-events-none border-[1px] border-primary/10 rounded-[48px] z-20" />
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.513689408665!2d76.4756!3d13.2637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb023d8c2b740ef%3A0x2f94c3d82a1708ab!2sTiptur%2C%20Karnataka%20572201!5e0!3m2!1sen!2sin!4v1715690000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-all duration-700 group-hover:grayscale-0"
          ></iframe>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ContactPage;
