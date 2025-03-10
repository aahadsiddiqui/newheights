import { NextPage } from 'next';
import Hero from '../NewHeights Construction/components/Hero';
import ServiceCard from '../NewHeights Construction/components/ServiceCard';
import Testimonial from '../NewHeights Construction/components/Testimonial';

const services = [
  {
    title: 'Renovations',
    description: 'Transform your space with our expert renovation services',
    icon: '🏗️',
  },
  {
    title: 'Safety First',
    description: 'Committed to maintaining the highest safety standards',
    icon: '🛡️',
  },
  {
    title: 'Success Stories',
    description: 'See how we have helped clients achieve their dreams',
    icon: '📈',
  },
];

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home; 