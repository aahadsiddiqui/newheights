import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="relative z-10 flex-shrink-0">
            <div className="relative h-12 w-48"> {/* Adjust size as needed */}
              <Image
                src="/images/logo.jpeg"
                alt="NewHeights Construction"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header; 