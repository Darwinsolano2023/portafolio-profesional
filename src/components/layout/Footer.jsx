// src/components/layout/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 dark:text-slate-400 transition-colors duration-300">
          © 2025 Darwin Solano. Todos los derechos reservados.
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mt-2 transition-colors duration-300">
          Ingeniero de Software especializado en Analítica & Big Data
        </p>
      </div>
    </footer>
  );
};

export default Footer;