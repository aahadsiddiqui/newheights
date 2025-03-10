import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const Hero = () => {
  // Add viewport height fix for mobile
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    return () => window.removeEventListener('resize', setVH);
  }, []);

  return (
    <section className="relative h-[100vh] h-[calc(var(--vh,1vh)*100)] w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.jpg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/videos/homepagevideo.mp4" type="video/mp4" />
        </video>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-10 md:py-20">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Building Excellence, Crafting Dreams
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Transform your space with NewHeights Construction. Quality craftsmanship and innovative solutions for your construction needs.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 