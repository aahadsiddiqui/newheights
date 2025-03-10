import { motion } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2019",
    title: "Company Founded",
    description: "NewHeights Construction was established with a vision to transform the construction industry."
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Completed our first large-scale residential renovation project."
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to include specialized experts in various construction fields."
  },
  {
    year: "2022",
    title: "Commercial Division Launch",
    description: "Expanded our services to include commercial construction and renovation projects."
  },
  {
    year: "2023",
    title: "Sustainability Initiative",
    description: "Implemented eco-friendly construction practices and achieved green building certification."
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched our technology-driven approach with smart home integration services."
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Setting new industry standards with AI-powered project management and sustainable building practices."
  }
];

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 min-h-screen" ref={containerRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />

          {/* Timeline Events */}
          <div className="space-y-24 py-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <motion.div 
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-bold text-xl mb-2 block text-primary-600">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div 
                  className="w-4 h-4 bg-primary-600 rounded-full relative z-10"
                  whileInView={{
                    scale: [1, 1.5, 1],
                    transition: { duration: 0.5 }
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-8 h-8 bg-primary-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    whileInView={{
                      scale: [1, 1.5, 1],
                      transition: { duration: 0.5, delay: 0.2 }
                    }}
                    viewport={{ once: true }}
                  />
                </motion.div>

                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 