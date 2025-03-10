import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const partners = [
  { name: "Bella Flooring", logo: "/images/bellaflooring.png" },
  { name: "Home Depot", logo: "/images/homedepot.png" },
  { name: "Milwaukee", logo: "/images/milwaukee.jpg" },
  { name: "Miska Trailers", logo: "/images/miskatrailers.jpeg" }
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/newheights_construction_/',
    icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z'
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Partners Section */}
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-center mb-8">Our Trusted Partners</h3>
        <div className="flex justify-center items-center space-x-12">
          {partners.map((partner) => (
            <motion.div
              key={partner.name}
              className="relative w-32 h-16"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">NewHeights Construction</h4>
              <p className="text-gray-400">Building Excellence Since 2019</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/stories" className="text-gray-400 hover:text-primary-500 transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Home Renovations</li>
                <li className="text-gray-400">Custom Builds</li>
                <li className="text-gray-400">Commercial Projects</li>
                <li className="text-gray-400">24/7 Service Calls</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: contact@newheights.com</p>
                <p>Phone: +1 (647) 643-7782</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NewHeights Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 