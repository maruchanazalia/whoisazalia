import { FaStar } from 'react-icons/fa';
import QuoteBubble from './QuoteBubble';
import './MoodCollage.css';

// Importar imágenes
import meImage from '../assets/me.jpeg';
import camaraImage from '../assets/camara.png';
import gatitoImage from '../assets/gatito.png';
import fresasImage from '../assets/fresas.png';
import solecitoImage from '../assets/solecito.png';
import corazonImage from '../assets/corazon.png';
import gatoImage from '../assets/gato.png';
import caracolImage from '../assets/caracol.png';
import cocaImage from '../assets/coca.png';
import errorImage from '../assets/error.png';
import gatitonegroImage from '../assets/gatitonegro.png';
import pezImage from '../assets/pez.png';

const MoodCollage = ({ profileImage, quotes = [] }) => {
  const defaultQuotes = [
    { quote: 'Finding new paths to travel is better than being stuck', author: null },
    { quote: 'Hacer lo que te gusta con honestidad, servicio y amor es lo mejor que puedes hacer', author: null },
  ];

  const displayQuotes = quotes.length > 0 ? quotes : defaultQuotes;
  const finalProfileImage = profileImage || meImage;

  return (
    <div className="mood-collage relative w-full overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink via-pastel-blue to-pastel-green opacity-30"></div>
      
      {/* Decorative star elements */}
      <div className="absolute top-5 left-5 text-yellow-400 animate-pulse z-10">
        <FaStar className="text-3xl rotate-12" />
      </div>
      <div className="absolute top-1/2 right-5 text-pastel-green animate-bounce z-10" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <FaStar className="text-xl rotate-45" />
      </div>

      {/* Stickers - Cámara (top right, más separado) */}
      <div className="absolute top-4 right-[8%] md:top-100 md:right-[0%] z-10 sticker-animation" style={{ animationDelay: '0.2s', margin: '7px' }}>
        <img
          src={camaraImage}
          alt="Cámara"
          className="w-20 h-20 md:w-36 md:h-36 object-contain drop-shadow-lg rotate-[-10deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Gatito (top left, más separado) */}
      <div className="absolute top-2 left-[5%] md:top-6 md:left-[60%] z-10 sticker-animation" style={{ animationDelay: '0.4s', margin: '7px' }}>
        <img
          src={gatitoImage}
          alt="Gatito"
          className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-lg rotate-12 hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Fresas (bottom right, más separado) */}
      <div className="absolute bottom-8 right-[8%] md:bottom-60 md:right-[60%] z-10 sticker-animation" style={{ animationDelay: '0.6s', margin: '7px' }}>
        <img
          src={fresasImage}
          alt="Fresas"
          className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-lg rotate-[15deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Solecito (top center-left, más separado) */}
      <div className="absolute top-4 left-[10%] md:top-100 md:left-[10%] z-10 sticker-animation" style={{ animationDelay: '0.8s', margin: '7px' }}>
        <img
          src={solecitoImage}
          alt="Solecito"
          className="w-16 h-16 md:w-36 md:h-36 object-contain drop-shadow-lg rotate-[-8deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Corazón (top center-right, más separado) */}
      <div className="absolute top-4 right-[10%] md:top-40 md:right-[0%] z-10 sticker-animation" style={{ animationDelay: '1.2s', margin: '7px' }}>
        <img
          src={corazonImage}
          alt="Corazón"
          className="w-16 h-16 md:w-32 md:h-32 object-contain drop-shadow-lg rotate-[20deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Gato (bottom center-right, más separado) */}
      <div className="absolute bottom-8 right-[18%] md:bottom-0 md:right-[0%] z-10 sticker-animation" style={{ animationDelay: '1.4s', margin: '7px' }}>
        <img
          src={gatoImage}
          alt="Gato"
          className="w-24 h-24 md:w-40 md:h-40 object-contain drop-shadow-lg rotate-[-15deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Caracol (center-left, más separado) */}
      <div className="absolute top-1/2 left-[5%] md:top-1/2 md:left-[15%] transform -translate-y-1/2 z-10 sticker-animation" style={{ animationDelay: '1.6s', margin: '7px' }}>
        <img
          src={caracolImage}
          alt="Caracol"
          className="w-16 h-16 md:w-28 md:h-28 object-contain drop-shadow-lg rotate-[25deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Coca (abajo del corazón, más abajo) */}
      <div className="absolute top-16 right-[10%] md:top-80 md:right-[0%] z-10 sticker-animation" style={{ animationDelay: '1.8s', margin: '7px' }}>
        <img
          src={cocaImage}
          alt="Coca"
          className="w-16 h-16 md:w-32 md:h-32 object-contain drop-shadow-lg rotate-[12deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Error (al lado de la foto de perfil) */}
      <div className="absolute top-1/2 left-[75%] md:top-1/2 md:left-[62%] transform -translate-y-1/2 z-10 sticker-animation" style={{ animationDelay: '2s', margin: '7px' }}>
        <img
          src={errorImage}
          alt="Error"
          className="w-14 h-14 md:w-28 md:h-28 object-contain drop-shadow-lg rotate-[-18deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Gatito Negro (bottom left, más separado) */}
      <div className="absolute bottom-6 left-[5%] md:bottom-10 md:left-[0%] z-10 sticker-animation" style={{ animationDelay: '2.2s', margin: '7px' }}>
        <img
          src={gatitonegroImage}
          alt="Gatito Negro"
          className="w-16 h-16 md:w-36 md:h-36 object-contain drop-shadow-lg rotate-[18deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Stickers - Pez (bottom right-center, más separado) */}
      <div className="absolute bottom-6 right-[10%] md:bottom-15 right-[65%] z-10 sticker-animation" style={{ animationDelay: '2.4s', margin: '7px' }}>
        <img
          src={pezImage}
          alt="Pez"
          className="w-16 h-16 md:w-32 md:h-32 object-contain drop-shadow-lg rotate-[-22deg] hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Central profile image - me.jpeg */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="neuromorphic p-3 md:p-4 rounded-full">
          <img
            src={meImage}
            alt="Iram Azalia"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Quote bubbles positioned around - Ocultas en móvil */}
      <div className="hidden md:block absolute top-20 left-1/4 z-20">
        <QuoteBubble quote={displayQuotes[0]?.quote || defaultQuotes[0].quote} rotation={-5} delay={0} />
      </div>
      <div className="hidden md:block absolute bottom-20 right-1/4 z-20">
        <QuoteBubble quote={displayQuotes[1]?.quote || defaultQuotes[1].quote} rotation={8} delay={300} />
      </div>

      {/* Greeting text */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20">
        <div className="neuromorphic-sm p-3 px-4">
          <p className="text-sm md:text-base font-medium text-gray-800">
            Hola a todos...:D
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoodCollage;

