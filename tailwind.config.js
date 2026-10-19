// tailwind.config.js - Paleta Slate Profesional
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Color principal - Azul Profesional
        primary: {
          50: '#f1f7f8',
          100: '#dcecef',
          200: '#bcdbe0',
          300: '#8fc0c9',
          400: '#5fa3b0',
          500: '#3b8896',
          600: '#2d6f7d',
          700: '#265b67',
          800: '#234a54',
          900: '#213f47',
          950: '#11262c',
        },
        // Color secundario - Slate Gris Profesional
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Acento
        accent: {
          300: '#a3cbd2',
          400: '#84b6c0',
          500: '#639fac',
          600: '#4c8795',
        }
      },
      backgroundColor: {
        // Fondos personalizados
        'light': '#F8FAFC',
        'dark': '#000000',
      }
    },
  },
  plugins: [],
}