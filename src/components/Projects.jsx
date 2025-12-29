import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import arxImage from '../assets/arx.png';
import codiselImage from '../assets/codisel.png';
import orderflowImage from '../assets/orderflow.png';
import apiceImage from '../assets/apice.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'CoDiSel - Financial Payment System',
      description: 'Sistema integral de administración de pagos que digitaliza procesos financieros, reemplazando Excel y papel por una app móvil/web con gestión de pagos inmediatos, evidencia digital y reportes automáticos.',
      technologies: ['React', 'React Native', 'C# .NET', 'NestJS', 'MySQL', 'Socket.io', 'Hostinger'],
      image: codiselImage,
      githubUrl: 'https://github.com/CodiselComercial/CDL_FRONT.git',
      liveUrl: 'https://app.uizard.io/p/4872e85b/preview',
    },
    {
      title: 'APICE - Habit Tracker & Goal Manager',
      description: 'Aplicación para desarrollo personal con seguimiento de hábitos diarios, rutinas personalizadas, visión board interactivo y widgets móviles para recordatorios de metas.',
      technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'Expo'],
      image: apiceImage,
      githubUrl: 'https://github.com/maruchanazalia/APICE.git',
      liveUrl: '#',
    },
    {
      title: 'ARX Software Landing Page',
      description: 'Sitio web corporativo para empresa de desarrollo de software con sistema de contacto automatizado, protección reCAPTCHA y presentación de servicios tecnológicos.',
      technologies: ['React', 'Vite', 'EmailJS', 'Google reCAPTCHA', 'CSS Modules', 'Netlify'],
      image: arxImage, 
      githubUrl: '#',
      liveUrl: 'https://arxsoftware.netlify.app/',
    },
    {
      title: 'OrderFlow - E-commerce Notifications',
      description: 'Sistema de automatización que integra Lightspeed HQ con WhatsApp API mediante webhooks para enviar actualizaciones en tiempo real del estado de pedidos a clientes.',
      technologies: ['TypeScript', 'NestJS', 'Arquitectura Hexagonal', 'Docker', 'Lightspeed API', 'WhatsApp API'],
      image: orderflowImage,
      githubUrl: 'https://github.com/maruchanazalia/OrderFlow.git',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado y de los que me siento orgulloso
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="neuromorphic overflow-hidden group hover:neuromorphic-hover transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neuromorphic-sm p-3 bg-white/90 hover:bg-white transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <FaGithub className="text-gray-800" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neuromorphic-sm p-3 bg-white/90 hover:bg-white transition-colors"
                        aria-label="Ver proyecto en vivo"
                      >
                        <FaExternalLinkAlt className="text-gray-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-pastel-blue rounded-full text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

