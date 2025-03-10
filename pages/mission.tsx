import { NextPage } from 'next';
import { motion } from 'framer-motion';

interface ValueProp {
  title: string;
  description: string;
  icon: string;
}

const valuePropsList: ValueProp[] = [
  {
    title: "Experienced Leadership",
    description: "With Alexander and Ryan at the helm, our team is guided by over two decades of combined experience in construction and project management.",
    icon: "👥"
  },
  {
    title: "Client-Centered Approach",
    description: "We prioritize open communication and a personalized touch, ensuring that every project reflects our clients' unique needs and visions.",
    icon: "🤝"
  },
  {
    title: "Quality Craftsmanship",
    description: "From the smallest detail to the final touch, we uphold the highest standards in materials, design, and execution.",
    icon: "⭐"
  },
  {
    title: "Open Communication",
    description: "Transparency is key. You'll always be informed and involved throughout every phase of your project.",
    icon: "💬"
  },
  {
    title: "Tailored Solutions",
    description: "We collaborate closely with you to design and build spaces that reflect your needs, style, and budget.",
    icon: "🎯"
  },
  {
    title: "Timely Delivery",
    description: "We respect your time and ensure every project is completed on schedule without compromising quality.",
    icon: "⏱️"
  }
];

const MissionPage: NextPage = () => {
  return (
    <main className="min-h-screen">
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
            Our Mission
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-4">
              To transform visions into reality through exceptional construction services. 
              We aim to create spaces that inspire, function seamlessly, and stand the test of time.
            </p>
            <p>
              Your satisfaction is our success. We're not just here to build structures—we're here 
              to create spaces where your life, business, and community can thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose NewHeights?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuePropsList.map((prop, index) => (
              <motion.div
                key={prop.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{prop.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary-600">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let us turn your vision into a reality
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              that stands the test of time
            </p>
            <div className="flex justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MissionPage; 