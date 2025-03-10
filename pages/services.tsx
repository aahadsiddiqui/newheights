import { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Service {
  name: string;
  description: string;
  features: string[];
  icon: string;
}

interface ServiceCategory {
  title: string;
  services: Service[];
  icon: string;
  description: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Home Renovations",
    icon: "🏠",
    description: "Transform your living space with our comprehensive renovation services.",
    services: [
      {
        name: "Full House Renovations",
        description: "Complete home transformation tailored to your vision.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Kitchen Renovations",
        description: "Modern kitchen designs that combine style with functionality.",
        icon: "🍳",
        features: [
          "Custom cabinetry",
          "Premium countertops",
          "Modern appliance integration",
          "Optimal space planning"
        ]
      },
      {
        name: "Bathroom Renovations",
        description: "Luxurious bathroom upgrades for your comfort.",
        icon: "🛁",
        features: [
          "Spa-like designs",
          "High-end fixtures",
          "Waterproofing solutions",
          "Custom tile work"
        ]
      }
    ]
  },
  {
    title: "Custom Solutions",
    icon: "🎨",
    description: "Unique designs tailored to your vision and lifestyle.",
    services: [
      {
        name: "Custom Builds",
        description: "Unique designs tailored to your vision and lifestyle.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Garden Suites",
        description: "Creating secondary living spaces in your backyard.",
        icon: "🌳",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Lane Suites",
        description: "Adding value with compact, functional living units in urban spaces.",
        icon: "🏙️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      }
    ]
  },
  {
    title: "Commercial & Restoration",
    icon: "🏢",
    description: "Tailored solutions for office spaces, retail stores, and other commercial properties.",
    services: [
      {
        name: "Commercial Renovations",
        description: "Tailored solutions for office spaces, retail stores, and other commercial properties.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Revitalizations",
        description: "Restoring outdated structures while incorporating modern touches.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      }
    ]
  },
  {
    title: "Exterior & Hardscape",
    icon: "🏗️",
    description: "Driveways, walkways, patios, retaining walls, and more.",
    services: [
      {
        name: "Hardscape Solutions",
        description: "Driveways, walkways, patios, retaining walls, and more.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Roofing Services",
        description: "Repairs, eavestrough, metal work, and commercial flat top roofing.",
        icon: "🏗️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      }
    ]
  },
  {
    title: "Additional Services",
    icon: "🛠️",
    description: "Emergency plumbing, electrical, and HVAC services.",
    services: [
      {
        name: "24/7 Service Calls",
        description: "Emergency plumbing, electrical, and HVAC services.",
        icon: "🛠️",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      },
      {
        name: "Landscaping",
        description: "Professional sod removal and installation services.",
        icon: "🌳",
        features: [
          "Custom design consultation",
          "Complete project management",
          "Quality materials and craftsmanship",
          "Energy-efficient solutions"
        ]
      }
    ]
  }
];

const ServicesPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Comprehensive construction and renovation solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="sticky top-20 bg-white shadow-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar py-4 gap-4">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`flex items-center px-6 py-3 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === category.title 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {selectedCategory ? (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Category Overview */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">
                      {serviceCategories.find(cat => cat.title === selectedCategory)?.icon}
                    </span>
                    <div>
                      <h2 className="text-3xl font-bold">{selectedCategory}</h2>
                      <p className="text-gray-600">
                        {serviceCategories.find(cat => cat.title === selectedCategory)?.description}
                      </p>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceCategories
                      .find(cat => cat.title === selectedCategory)
                      ?.services.map((service) => (
                        <motion.div
                          key={service.name}
                          className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-2xl">{service.icon}</span>
                            <h3 className="text-xl font-semibold">{service.name}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li key={feature} className="flex items-center text-gray-700">
                                <svg className="w-5 h-5 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-xl text-gray-600">
                  Select a service category to view details
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Contact us today for a free consultation and estimate
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage; 