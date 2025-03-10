import { NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is the timeline for a full house renovation?",
    answer: "Timelines depend on the project size and scope but typically range from 1 to 3 months. We provide detailed project timelines during the initial consultation.",
    category: "Timeline"
  },
  {
    question: "Do you provide design consultation?",
    answer: "Yes, we offer comprehensive design consultation services to help bring your vision to life. Our experienced designers work closely with you to create the perfect space.",
    category: "Services"
  },
  {
    question: "Are your renovations environmentally friendly?",
    answer: "We prioritize sustainable practices and materials whenever possible. This includes using eco-friendly materials, implementing energy-efficient solutions, and proper waste management.",
    category: "Sustainability"
  },
  {
    question: "Can you work within a specific budget?",
    answer: "Absolutely. We tailor projects to meet your budget without compromising quality. During the consultation, we'll discuss your budget constraints and provide transparent cost breakdowns.",
    category: "Budget"
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Yes, we take care of all necessary permits and regulatory approvals for your project. Our team handles the entire process to ensure compliance with local regulations.",
    category: "Process"
  },
  {
    question: "What warranties do you offer?",
    answer: "We provide comprehensive warranties on both workmanship and materials. Specific warranty terms vary by project type and will be detailed in your contract.",
    category: "Warranty"
  }
];

const FAQPage: NextPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(faqItems.map(item => item.category)))];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !activeCategory || activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find answers to common questions about our services
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full px-6 py-3 rounded-lg text-gray-900 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatePresence>
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-600 py-8"
              >
                No questions found matching your search.
              </motion.div>
            ) : (
              <motion.div className="space-y-4">
                {filteredFAQs.map((item, index) => (
                  <motion.div
                    key={item.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedId(expandedId === item.question ? null : item.question)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                    >
                      <span className="font-semibold text-gray-900">{item.question}</span>
                      <motion.span
                        animate={{ rotate: expandedId === item.question ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {expandedId === item.question && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 py-4 bg-gray-50 border-t">
                            <p className="text-gray-600">{item.answer}</p>
                            <div className="mt-2">
                              <span className="inline-block px-3 py-1 text-sm text-primary-600 bg-primary-100 rounded-full">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Contact us for more information about our services.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default FAQPage; 