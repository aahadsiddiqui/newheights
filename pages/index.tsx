import { NextPage } from 'next';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';

const HomePage: NextPage = () => {
  const services = [
    {
      title: "Home Renovations",
      description: "Transform your living space with our comprehensive renovation services.",
      icon: "🏠",
      link: "/services#renovations"
    },
    {
      title: "Custom Builds",
      description: "Create your dream home from the ground up with our expert builders.",
      icon: "🏗️",
      link: "/services#custom-builds"
    },
    {
      title: "Commercial Projects",
      description: "Professional renovation and construction services for businesses.",
      icon: "🏢",
      link: "/services#commercial"
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "6+", label: "Years Experience" },
    { value: "50+", label: "Team Members" }
  ];

  const buildingBlocks = [
    { icon: "🏗️", label: "Expert Team", color: "bg-primary-100" },
    { icon: "🔨", label: "Quality Work", color: "bg-primary-200" },
    { icon: "⚡", label: "Fast Delivery", color: "bg-primary-300" },
    { icon: "🤝", label: "Client Focus", color: "bg-primary-400" },
    { icon: "🎯", label: "Precision", color: "bg-primary-500" },
    { icon: "💪", label: "Strength", color: "bg-primary-600" },
  ];

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Team Section - Replaces static image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose NewHeights</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our skilled professionals bring years of experience and dedication to every project.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Quality Guaranteed</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and quality assurance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">On-Time Delivery</h3>
                    <p className="text-gray-600">We respect your time and ensure projects are completed as scheduled.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Interactive Building Blocks */}
            <motion.div 
              className="grid grid-cols-2 gap-4 relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {buildingBlocks.map((block, index) => (
                <motion.div
                  key={block.label}
                  className={`${block.color} p-6 rounded-xl shadow-lg cursor-pointer`}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [-1, 1],
                    transition: { 
                      rotate: { repeat: Infinity, duration: 0.3, repeatType: "reverse" }
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-2">{block.icon}</div>
                  <h3 className="font-bold text-primary-900">{block.label}</h3>
                  <motion.div
                    className="h-1 bg-primary-600 mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                </motion.div>
              ))}

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 text-6xl"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🏗️
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 text-6xl"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                🏢
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Connection Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg className="w-full h-full">
              <motion.path
                d="M0,50 Q100,50 200,50"
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ed1c1c" stopOpacity="0" />
                  <stop offset="50%" stopColor="#ed1c1c" />
                  <stop offset="100%" stopColor="#ed1c1c" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project cards will go here */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={`/images/IMG_496${index + 3}.jpg`}
                    alt={`Project ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project Title {index + 1}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the project and its unique features.</p>
                  <Link href="/stories" className="text-primary-600 hover:underline">
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/stories"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-lg font-semibold"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage; 