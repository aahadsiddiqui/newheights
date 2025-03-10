import React from 'react';

interface TestimonialProps {
  name: string;
  company: string;
  testimonial: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, company, testimonial, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{testimonial}</p>
    </div>
  );
};

export default Testimonial; 