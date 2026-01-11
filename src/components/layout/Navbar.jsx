// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const menuItems = ['Inicio', 'Servicios', 'Habilidades', 'Experiencia', 'Proyectos', 'Contacto'];

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-lg z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-slate-900/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 dark:from-accent-400 dark:to-primary-500 bg-clip-text text-transparent">
            I.D.S
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-400 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            
            {/* Theme Toggle Button - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group border border-slate-200 dark:border-slate-700"
              aria-label="Cambiar tema"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent-400 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary-600 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors duration-300"
              aria-label="Cambiar tema"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-accent-400" />
              ) : (
                <Moon className="w-5 h-5 text-primary-600" />
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-600 dark:text-accent-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-accent-400 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;