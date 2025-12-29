import { useEffect, useRef, useState } from 'react';
import Parallax from 'parallax-js';
import MoodCollage from './MoodCollage';
import PlaylistWidget from './PlaylistWidget';
import './HeroSection.css';

const HeroSection = ({ profileImage, quotes, playlist }) => {
  const parallaxRef = useRef(null);
  const [parallaxInstance, setParallaxInstance] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(48);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('.header-container');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    const timer = setTimeout(updateHeaderHeight, 100);
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (parallaxRef.current && !parallaxInstance) {
      try {
        const instance = new Parallax(parallaxRef.current, {
          relativeInput: true,
          hoverOnly: true,
        });
        setParallaxInstance(instance);
      } catch (error) {
        console.log('Parallax error:', error);
      }
    }

    return () => {
      if (parallaxInstance) {
        parallaxInstance.destroy();
      }
    };
  }, [parallaxInstance]);

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ 
        paddingTop: `${headerHeight}px`
      }}
    >
      <div ref={parallaxRef} className="parallax-wrapper">
        <div data-depth="0.2" className="parallax-bg"></div>
        
        <div className="hero-wrapper">
          <div className="hero-grid">
            <div data-depth="0.3" className="hero-col-left">
              <MoodCollage profileImage={profileImage} quotes={quotes} />
            </div>

            <div data-depth="0.1" className="hero-col-right">
              <div className="intro-box">
                <h1 className="intro-title">
                  Hola, soy{' '}
                  <span className="intro-name">Iram Azalia</span>
                </h1>
                <p className="intro-role">
                  Desarrolladora Full Stack | Especialista en Backend
                </p>
                <p className="intro-text">
                  Desarrolladora de software con experiencia en desarrollo backend y full stack. 
                  Experiencia en desarrollo end-to-end de sistemas de gestión financiera, desde diseño UI/UX 
                  hasta implementación backend con C#, JWT y despliegue en Hostinger. Competente en arquitecturas 
                  escalables, seguridad de aplicaciones y desarrollo móvil.
                </p>
              </div>

              <PlaylistWidget songs={playlist} />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
