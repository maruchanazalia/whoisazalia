import ExperienceTimeline from './ExperienceTimeline';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Desarrolladora Full Stack - Especialista en Aplicaciones Contables',
      company: 'ARXSOFTWARE',
      period: 'Jul 2024 - Presente',
      location: 'Híbrido',
      description: 'Desarrollo aplicaciones contables especializadas utilizando C# .NET para backend y React para frontend. Implemento sistemas completos de gestión financiera con autenticación JWT y seguridad robusta. Diseño y desarrollo interfaces de usuario para aplicaciones móviles y web de sistemas contables. Realizo despliegue y mantenimiento de aplicaciones en Hostinger con arquitecturas escalables. Creo prototipos y mockups funcionales para aplicaciones financieras.',
      technologies: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'React', 'JWT', 'Hostinger', 'Blazor'],
    },
    {
      title: 'Desarrolladora Backend',
      company: 'ENNOVASOFT',
      period: 'Dic 2023 - Jun 2024',
      location: 'Presencial',
      description: 'Desarrollé backend con FastAPI para aplicación de terapia implementando microservicios en Kubernetes. Arquitecturé sistema con Docker, MySQL, Firebase y AWS para infraestructura escalable. Implementé sistemas de autenticación y flujos de comunicación para plataforma terapéutica.',
      technologies: ['FastAPI', 'Python', 'Docker', 'Kubernetes', 'MySQL', 'Firebase', 'AWS'],
    },
    {
      title: 'Desarrolladora Full Stack',
      company: 'Corre la Voz',
      period: 'Abr 2024 - Jul 2024',
      location: 'Remoto',
      description: 'Desarrollé landing page completa para Casa de Agua con sistema de reservas y Node.js. Diseñé interfaz de usuario responsiva y sistema automatizado de confirmaciones por correo.',
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Desarrolladora Backend',
      company: 'Bitquarksystems',
      period: 'Oct 2022 - Jun 2023',
      location: 'Híbrido',
      description: 'Implementé API basada en roles con NestJS y MySQL para sistema de gestión de restaurantes. Diseñé sistema de control de acceso escalable con migraciones de base de datos.',
      technologies: ['NestJS', 'MySQL', 'TypeScript', 'Node.js'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mi recorrido profesional y los proyectos en los que he contribuido
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
