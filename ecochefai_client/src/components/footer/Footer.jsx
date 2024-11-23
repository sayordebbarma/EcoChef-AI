import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base mb-4">
          © 2024 EcoChefAI. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;