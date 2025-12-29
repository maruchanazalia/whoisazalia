import { useState } from 'react';
import './SkillCard.css';

const SkillCard = ({ skill, icon: Icon, level = 'intermediate' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const levelColors = {
    beginner: 'bg-pastel-yellow',
    intermediate: 'bg-pastel-blue',
    advanced: 'bg-pastel-green',
    expert: 'bg-pastel-purple',
  };

  return (
    <div
      className="neuromorphic neuromorphic-hover p-6 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center gap-4">
        {Icon && (
          <div className={`p-4 rounded-xl ${levelColors[level]} transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
            <Icon className="text-4xl text-gray-700" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-800">{skill}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full ${levelColors[level]} transition-all duration-500`}
            style={{ width: isHovered ? '100%' : `${(level === 'expert' ? 90 : level === 'advanced' ? 75 : level === 'intermediate' ? 60 : 40)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

