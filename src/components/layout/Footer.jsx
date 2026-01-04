// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-teal-900/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          © 2025 Darwin Solano. Todos los derechos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Ingeniero de Software especializado en Analítica & Big Data
        </p>
      </div>
    </footer>
  );
};

export default Footer;