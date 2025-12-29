import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} Mi Portafolio. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Hecho con <FaHeart className="text-red-500" /> y mucho café
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

