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
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Contacto
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">¿Tienes un proyecto en mente? Hablemos</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href={`mailto:${personalInfo.contact.email}`}
            className="flex items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 text-primary-400 mr-4 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-gray-100">{personalInfo.contact.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.contact.phone}`}
            className="flex items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-primary-900/30 hover:border-primary-500/50 transition-all duration-300 group"
          >
            <Phone className="w-8 h-8 text-primary-400 mr-4 group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-sm text-gray-400">Teléfono / WhatsApp</p>
              <p className="text-gray-100">{personalInfo.contact.phone}</p>
            </div>
          </a>

          <div className="flex items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-primary-900/30">
            <MapPin className="w-8 h-8 text-primary-400 mr-4" />
            <div>
              <p className="text-sm text-gray-400">Ubicación</p>
              <p className="text-gray-100">{personalInfo.contact.location}</p>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-primary-900/30">
            <div className="flex space-x-6">
              <a
                href={personalInfo.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors hover:scale-110 transform"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-primary-900/30">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-primary-900/30 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black/50 border border-primary-900/30 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-primary-900/30 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100"
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/50 border border-primary-900/30 rounded-lg focus:border-primary-500 focus:outline-none text-gray-100"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/50"
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;