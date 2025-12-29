import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import { personalData } from '../data/personalData';
import './Contact.css';
import cvPdf from '../assets/cv.pdf';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: FaLinkedin, url: personalData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalData.socialLinks.github, label: 'GitHub' },
    { icon: FaTwitter, url: personalData.socialLinks.twitter, label: 'Twitter' },
    { icon: FaInstagram, url: personalData.socialLinks.instagram, label: 'Instagram' },
  ];

  return (
    <section id="contact" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Hablemos!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="neuromorphic p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-pastel-blue focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-pastel-blue focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-pastel-blue focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full neuromorphic-sm py-3 px-6 font-semibold text-gray-800 hover:neuromorphic-hover transition-all duration-300 bg-gradient-to-r from-pastel-blue to-pastel-green"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="neuromorphic p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-pastel-blue transition-colors"
                >
                  <div className="neuromorphic-sm p-3">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <span>{personalData.email}</span>
                </a>
                <a
                  href={`tel:${personalData.phone}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-pastel-blue transition-colors"
                >
                  <div className="neuromorphic-sm p-3">
                    <FaPhone className="text-xl" />
                  </div>
                  <span>{personalData.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="neuromorphic-sm p-3">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <span>{personalData.location}</span>
                </div>
                <a
                  href={cvPdf}
                  download="Iram_Azalia_Ruiz_Aparicio_CV.pdf"
                  className="flex items-center gap-4 text-gray-700 hover:text-pastel-blue transition-colors"
                >
                  <div className="neuromorphic-sm p-3">
                    <FaFileDownload className="text-xl" />
                  </div>
                  <span>Descargar mi CV</span>
                </a>
              </div>
            </div>

            <div className="neuromorphic p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sígueme en redes
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neuromorphic-sm p-4 hover:neuromorphic-hover transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="text-2xl text-gray-700" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

