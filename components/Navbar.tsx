import React, { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Mission', href: '/mission' },
  { label: 'Services', href: '/services' },
  { label: 'Safety', href: '/safety' },
  { label: 'Success Stories', href: '/stories' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact Us', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-end w-full md:w-auto">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-primary-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap md:items-center absolute md:relative top-full md:top-auto right-0 md:right-auto w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none mt-2 md:mt-0 py-4 md:py-0 px-4 md:px-0 z-50`}
      >
        {navItems.map((item) => (
          <li key={item.href} className="mb-2 md:mb-0 md:mr-4 lg:mr-6">
            <Link
              href={item.href}
              className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 md:hover:bg-transparent rounded whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar; 