import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaYoutube, FaDumbbell, FaRunning, FaMusic, FaPaintBrush, FaCamera, FaBook, FaFilm } from 'react-icons/fa';
import { personalData } from '../data/personalData';
import cuerpoImage from '../assets/cuerpo.jpeg';
import './AboutMeModal.css';

const AboutMeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const hobbyIcons = {
    'Hacer ejercicio': FaDumbbell,
    'Correr': FaRunning,
    'Cantar': FaMusic,
    'Bailar': FaMusic,
    'Pintar en acuarelas': FaPaintBrush,
    'Fotografía': FaCamera,
    'Leer': FaBook,
    'Ver películas': FaFilm,
  };

  const modalContent = (
    <div className="about-me-modal-overlay" onClick={onClose}>
      <div className="about-me-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="about-me-close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="about-me-header">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Sobre Mí :3
          </h2>
          <p className="text-gray-600">
            Un poco más sobre quién soy fuera del código
          </p>
        </div>

        <div className="about-me-photo-section">
          <img
            src={cuerpoImage}
            alt="Iram Azalia"
            className="about-me-photo"
          />
        </div>

        <div className="about-me-section">
          <h3 className="about-me-section-title">Mis Hobbies </h3>
          <div className="hobbies-grid">
            {personalData.hobbies.map((hobby, index) => {
              const Icon = hobbyIcons[hobby] || FaMusic;
              return (
                <div key={index} className="hobby-card">
                  <Icon className="hobby-icon" />
                  <span className="hobby-text">{hobby}</span>
                </div>
              );
            })}
          </div>
        </div>

        {personalData.cosmos && (
          <div className="about-me-section">
            <h3 className="about-me-section-title">Lectura y Cosmos</h3>
            <p className="about-me-description">
              {personalData.cosmos.description}
            </p>
            <a
              href={personalData.cosmos.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cosmos-link"
            >
              <span className="cosmos-link-mark">✶</span>
              <span>Visitar mi Cosmos · {personalData.cosmos.handle}</span>
            </a>
          </div>
        )}

        {personalData.youtube && (
          <div className="about-me-section">
            <h3 className="about-me-section-title">Mi Canal de YouTube </h3>
            <p className="about-me-description">
              {personalData.youtube.description}
            </p>
            <a
              href={personalData.youtube.channel}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-link"
            >
              <FaYoutube className="youtube-icon" />
              <span>Visitar mi canal</span>
            </a>
          </div>
        )}

        {personalData.coolPhotos && personalData.coolPhotos.length > 0 && (
          <div className="about-me-section">
            <h3 className="about-me-section-title">Mis Fotos Cool </h3>
            <div className="photos-grid">
              {personalData.coolPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo.src}
                  alt={photo.alt || `Foto ${index + 1}`}
                  className="cool-photo"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default AboutMeModal;

