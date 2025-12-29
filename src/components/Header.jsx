import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import AboutMeModal from './AboutMeModal';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-content">
          <div className="header-logo">
            <span className="logo-text">
              Iram Azalia
            </span>
          </div>

          <ul className="header-menu-desktop">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="header-menu-item"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setIsAboutMeOpen(true)}
                className="header-menu-item about-me-btn"
                title="Sobre Mí"
              >
                <FaUser className="inline mr-1" />
                About Me
              </button>
            </li>
          </ul>

          <button
            className="header-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="header-menu-mobile">
            <ul className="header-menu-mobile-list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="header-menu-item-mobile"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setIsAboutMeOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="header-menu-item-mobile about-me-btn"
                >
                  <FaUser className="inline mr-1" />
                  About Me
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      <AboutMeModal isOpen={isAboutMeOpen} onClose={() => setIsAboutMeOpen(false)} />
    </header>
  );
};

export default Header;
