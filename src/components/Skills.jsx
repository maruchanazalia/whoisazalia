import { 
  FaReact, 
  FaNode, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCode,
} from 'react-icons/fa';
import { 
  SiNestjs, 
  SiTypescript, 
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiDotnet,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiTailwindcss,
  SiAngular,
  SiExpress,
} from 'react-icons/si';
import SkillCard from './SkillCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  
  const skills = [
    { name: 'C#', icon: SiDotnet, level: 'advanced' },
    { name: 'React', icon: FaReact, level: 'advanced' },
    { name: 'React Native', icon: SiReact, level: 'intermediate' },
    { name: 'TypeScript', icon: SiTypescript, level: 'advanced' },
    { name: 'JavaScript', icon: SiJavascript, level: 'advanced' },
    { name: 'HTML5', icon: SiHtml5, level: 'advanced' },
    { name: 'CSS3', icon: SiCss3, level: 'advanced' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'advanced' },
    { name: 'Angular', icon: SiAngular, level: 'advanced' },
    { name: 'NestJS', icon: SiNestjs, level: 'advanced' },
    { name: 'Node.js', icon: FaNode, level: 'advanced' },
    { name: 'FastAPI', icon: SiPython, level: 'intermediate' },
    { name: 'SQL Server', icon: SiMysql, level: 'advanced' },
    { name: 'MySQL', icon: SiMysql, level: 'advanced' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 'advanced' },
    { name: 'JWT', icon: FaCode, level: 'advanced' },
    { name: 'Docker', icon: FaDocker, level: 'intermediate' },
    { name: 'Git', icon: FaGitAlt, level: 'advanced' },
    { name: 'AWS', icon: FaAws, level: 'intermediate' },
    { name: 'Kubernetes', icon: FaDocker, level: 'intermediate' }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Tecnologías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Herramientas y tecnologías que uso para construir soluciones increíbles
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.name}
              icon={skill.icon}
              level={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
