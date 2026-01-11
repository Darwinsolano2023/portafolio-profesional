// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
    alert('Formulario enviado - Integrar con backend');
  };

  return (
    <section id="contacto" className="py-20 bg-slate-100 dark:bg-black transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-primary-700 dark:bg-gradient-to-r dark:from-accent-400 dark:to-primary-500 dark:bg-clip-text dark:text-transparent">
            Contacto
          </span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12 transition-colors duration-300 text-lg">
          ¿Tienes un proyecto en mente? Hablemos
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="flex items-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 group shadow-sm hover:shadow-lg"
          >
            <Mail className="w-8 h-8 text-primary-600 dark:text-accent-400 mr-4 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">{personalInfo.contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.contact.phone}`}
            className="flex items-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-primary-400 dark:hover:border-accent-400 transition-all duration-300 group shadow-sm hover:shadow-lg"
          >
            <Phone className="w-8 h-8 text-primary-600 dark:text-accent-400 mr-4 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Teléfono / WhatsApp</p>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">{personalInfo.contact.phone}</p>
            </div>
          </a>

          <div className="flex items-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm">
            <MapPin className="w-8 h-8 text-primary-600 dark:text-accent-400 mr-4" />
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Ubicación</p>
              <p className="text-slate-900 dark:text-slate-100 font-semibold">{personalInfo.contact.location}</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex space-x-6">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;