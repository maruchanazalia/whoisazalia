import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './ExperienceTimeline.css';

const ExperienceTimeline = ({ experiences = [] }) => {
  const defaultExperiences = [
    {
      title: 'Full Stack Developer',
      company: 'Company Name',
      period: '2023 - Present',
      location: 'Remoto',
      description: 'Desarrollo de aplicaciones web con React, Node.js y bases de datos.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Backend Developer',
      company: 'Previous Company',
      period: '2021 - 2023',
      location: 'Presencial',
      description: 'Desarrollo de APIs RESTful y microservicios.',
      technologies: ['NestJS', 'Go', 'MongoDB'],
    },
  ];

  const items = experiences.length > 0 ? experiences : defaultExperiences;

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pastel-blue via-pastel-green to-pastel-purple"></div>
      <div className="space-y-8">
        {items.map((exp, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 bg-pastel-blue rounded-full border-4 border-soft-gray neuromorphic-sm"></div>
            <div className="neuromorphic p-6 hover:neuromorphic-hover transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <FaBriefcase className="text-sm" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <FaMapMarkerAlt className="text-xs" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaCalendarAlt />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies?.map((tech, techIndex) => (
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
  );
};

export default ExperienceTimeline;

