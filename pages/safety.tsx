import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface SafetyPillar {
  title: string;
  description: string;
  icon: string;
  details: string[];
}

const safetyPillars: SafetyPillar[] = [
  {
    title: "Safety Training Programs",
    description: "Regular workshops and certifications to ensure employees are trained in the latest safety protocols.",
    icon: "📚",
    details: [
      "WHMIS Certification",
      "Fall Protection Training",
      "First Aid & CPR",
      "Equipment Safety Workshops",
      "Emergency Response Training"
    ]
  },
  {
    title: "On-Site Safety Measures",
    description: "Comprehensive safety equipment, hazard assessments, and emergency response plans to minimize risks.",
    icon: "🛡️",
    details: [
      "Daily Safety Inspections",
      "Personal Protective Equipment",
      "Hazard Communication",
      "Emergency Response Plans",
      "Regular Safety Audits"
    ]
  },
  {
    title: "Health & Wellness",
    description: "Support programs that promote physical and mental well-being, including access to healthcare and stress management resources.",
    icon: "💪",
    details: [
      "Mental Health Support",
      "Wellness Programs",
      "Work-Life Balance",
      "Healthcare Benefits",
      "Stress Management Resources"
    ]
  }
];

const SafetyPage: NextPage = () => {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [animateCount, setAnimateCount] = useState(false);

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
            Our Commitment to Safety
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              At NewHeights Construction, safety isn't just a policy—it's a cornerstone of our company culture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Days Without Incidents", value: 365 },
              { label: "Safety Training Hours", value: 2400 },
              { label: "Certified Team Members", value: 50 },
              { label: "Safety Protocols", value: 100 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onViewportEnter={() => setAnimateCount(true)}
              >
                <motion.div
                  className="text-4xl font-bold text-primary-600 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {animateCount ? `${stat.value}+` : '0+'}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Safety Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedPillar === pillar.title ? 'ring-2 ring-primary-600' : ''
                }`}
                onClick={() => setSelectedPillar(
                  selectedPillar === pillar.title ? null : pillar.title
                )}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-primary-600">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pillar.description}
                  </p>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: selectedPillar === pillar.title ? 'auto' : 0 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-4 border-t pt-4">
                      {pillar.details.map((detail) => (
                        <li key={detail} className="flex items-center text-gray-700">
                          <div className="bg-primary-100 p-2 rounded-lg">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Commitment Statement */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Safety Promise</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Every employee goes home safe, every day. Through comprehensive safety training, 
            adherence to industry regulations, and proactive risk management, we ensure that 
            every job site meets the highest safety standards.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Safety Programs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default SafetyPage; 