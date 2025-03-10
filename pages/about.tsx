import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Timeline from '../components/Timeline';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  experience: number;
  expertise: string[];
  image: string;
  achievements: string[];
}

interface Milestone {
  year: number;
  title: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alexander Cotovio",
    role: "CEO & Founder",
    bio: "With over 6 years of industry experience, Alexander leads NewHeights with a vision for innovation and excellence in construction.",
    experience: 6,
    expertise: [
      "Project Management",
      "Strategic Planning",
      "Sustainable Construction",
      "Team Leadership"
    ],
    image: "/images/alexander.jpg",
    achievements: [
      "Led over 100+ successful projects",
      "Pioneered sustainable construction practices",
      "Developed innovative project management systems"
    ]
  },
  {
    name: "Ryan Subramaniam",
    role: "Director of Sales and Relationships",
    bio: "Ryan ensures client satisfaction through exceptional communication and project coordination.",
    experience: 5,
    expertise: [
      "Client Relations",
      "Sales Strategy",
      "Project Coordination",
      "Quality Assurance"
    ],
    image: "/images/ryan.jpg",
    achievements: [
      "Maintained 95% client satisfaction rate",
      "Established key business partnerships",
      "Streamlined client communication processes"
    ]

  }
];

const milestones: Milestone[] = [
  {
    year: 2019,
    title: "Company Founded",
    description: "NewHeights Construction was established with a vision to transform the construction industry."
  },
  {
    year: 2020,
    title: "First Major Project",
    description: "Completed our first large-scale residential renovation project."
  },
  {
    year: 2021,
    title: "Team Expansion",
    description: "Grew our team to include specialized experts in various construction fields."
  },
  {
    year: 2022,
    title: "Commercial Division",
    description: "Launched our commercial construction division."
  },
  {
    year: 2023,
    title: "Sustainability Initiative",
    description: "Implemented green building practices and sustainable construction methods."
  }
];

const AboutPage: NextPage = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<'vision' | 'values' | 'approach'>('vision');

  const sections = {
    vision: {
      title: "Our Vision",
      content: "At NewHeights Construction, we believe in building more than just structures; we build trust, innovation, and lasting relationships. Our vision is to transform the construction industry through innovative solutions and exceptional service.",
      icon: "🎯"
    },
    values: {
      title: "Our Values",
      content: "Integrity, excellence, and client satisfaction are at the core of everything we do. We prioritize quality, safety, and sustainable practices in every project.",
      icon: "⭐"
    },
    approach: {
      title: "Our Approach",
      content: "We start every project by listening. Your vision guides our process as we combine innovative ideas with practical solutions to deliver results that exceed expectations.",
      icon: "🔧"
    }
  };

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
            About NewHeights Construction
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building Excellence Since 2019
          </motion.p>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(sections).map(([key, _]) => (
              <motion.button
                key={key}
                onClick={() => setActiveSection(key as 'vision' | 'values' | 'approach')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeSection === key
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {sections[key as keyof typeof sections].title}
              </motion.button>
            ))}
          </div>
          
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-4xl mb-4">{sections[activeSection].icon}</div>
            <h2 className="text-3xl font-bold mb-4">{sections[activeSection].title}</h2>
            <p className="text-xl text-gray-600">{sections[activeSection].content}</p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMember(member.name)}
              >
                <div className="relative h-[400px] mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-3 py-1 text-sm text-primary-600 bg-primary-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      {selectedMember && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            {teamMembers.find(m => m.name === selectedMember) && (
              <div className="p-6">
                <div className="relative h-[400px] mb-6">
                  <Image
                    src={teamMembers.find(m => m.name === selectedMember)!.image}
                    alt={selectedMember}
                    fill
                    className="object-contain object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{selectedMember}</h3>
                <p className="text-primary-600 font-semibold mb-4">
                  {teamMembers.find(m => m.name === selectedMember)!.role}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.find(m => m.name === selectedMember)!.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="inline-block px-3 py-1 text-sm text-primary-600 bg-primary-100 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {teamMembers.find(m => m.name === selectedMember)!.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-8 w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Client-Focused Approach</h3>
              <p className="text-gray-600">We prioritize your vision and ensure clear communication throughout the project.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-4">Expert Team</h3>
              <p className="text-gray-600">Our skilled professionals bring years of experience and dedication to every project.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -10 }}
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties and quality assurance.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage; 