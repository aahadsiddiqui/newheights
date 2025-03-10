import { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Modern Bathroom Design",
    category: "Bathroom Renovation",
    description: "Contemporary bathroom featuring sleek fixtures and elegant tiling",
    image: "/images/IMG_4470.jpg"
  },
  {
    id: "2",
    title: "Luxury Bathroom Suite",
    category: "Bathroom Renovation",
    description: "High-end bathroom renovation with premium materials and modern aesthetics",
    image: "/images/IMG_4471.jpg"
  },
  {
    id: "3",
    title: "Luxury Freestanding Tub",
    category: "Bathroom Renovation",
    description: "Elegant spa-inspired bathroom featuring a premium freestanding soaker tub with modern matte black fixtures",
    image: "/images/IMG_4472.jpg"
  },
  {
    id: "4",
    title: "Luxury Flooring & Staircase",
    category: "Interior Design",
    description: "Premium hardwood flooring installation with custom staircase featuring elegant black metal spindles and natural wood handrails",
    image: "/images/IMG_4473.jpg"
  },
  {
    id: "5",
    title: "Elegant Master Bath",
    category: "Bathroom Renovation",
    description: "Luxurious master bathroom featuring high-end finishes",
    image: "/images/IMG_4474.jpg"
  },
  {
    id: "6",
    title: "Modern Bath Suite",
    category: "Bathroom Renovation",
    description: "Contemporary bathroom design with premium fixtures",
    image: "/images/IMG_4475.jpg"
  },
  {
    id: "7",
    title: "Spa-Inspired Bathroom",
    category: "Bathroom Renovation",
    description: "Relaxing spa-like bathroom with premium amenities",
    image: "/images/IMG_4476.jpg"
  },
  {
    id: "8",
    title: "Luxury Bathroom Remodel",
    category: "Bathroom Renovation",
    description: "Complete bathroom renovation with high-end finishes",
    image: "/images/IMG_4478.jpg"
  },
  {
    id: "9",
    title: "Modern Kitchen Design",
    category: "Kitchen Remodeling",
    description: "Contemporary kitchen featuring custom cabinetry and premium appliances",
    image: "/images/IMG_4594.jpg"
  },
  {
    id: "10",
    title: "Luxury Accent Wall Design",
    category: "Interior Design",
    description: "Modern accent wall featuring black vertical slats with gold trim accents and integrated TV mount, creating a sophisticated entertainment space",
    image: "/images/IMG_4697.jpg"
  },
  {
    id: "11",
    title: "Luxury Home Renovation",
    category: "Home Renovation",
    description: "Complete home transformation with modern design elements",
    image: "/images/IMG_4958.jpg"
  },
  {
    id: "12",
    title: "Contemporary Living Space",
    category: "Interior Design",
    description: "Modern living area with custom features",
    image: "/images/IMG_4960.jpg"
  },
  {
    id: "13",
    title: "Custom Interior Design",
    category: "Interior Design",
    description: "Bespoke interior featuring premium materials",
    image: "/images/IMG_4964.jpg"
  },
  {
    id: "14",
    title: "Modern Home Design",
    category: "Home Renovation",
    description: "Contemporary home renovation with luxury finishes",
    image: "/images/IMG_4965.jpg"
  },
  {
    id: "15",
    title: "Custom Commercial Barber Shop",
    category: "Commercial",
    description: "Luxurious barber shop renovation featuring premium chairs, custom lighting, and modern finishes",
    image: "/images/IMG_5220.jpg"
  },
  {
    id: "16",
    title: "Luxury Home Construction",
    category: "New Construction",
    description: "High-end home build with premium features",
    image: "/images/IMG_5509.jpg"
  },
  {
    id: "17",
    title: "Modern Home Project",
    category: "New Construction",
    description: "Contemporary new build with custom design elements",
    image: "/images/IMG_8436.jpg"
  }
];

const SuccessStoriesPage: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our portfolio of transformative projects and stunning renovations
          </motion.p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-5xl mx-auto h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Main Image */}
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-8 text-white z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-3"
                key={currentIndex + '-title'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {projects[currentIndex].title}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-200 mb-2"
                key={currentIndex + '-category'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {projects[currentIndex].category}
              </motion.p>
              <motion.p 
                className="text-base md:text-lg text-gray-300 max-w-3xl"
                key={currentIndex + '-desc'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {projects[currentIndex].description}
              </motion.p>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-6' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">95%</h3>
              <p className="text-gray-600">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">6+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from(new Set(projects.map(project => project.category))).map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary-600 mb-4">{category}</h3>
                <p className="text-gray-600">
                  {projects.filter(p => p.category === category).length} Projects
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today for a consultation.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default SuccessStoriesPage; 