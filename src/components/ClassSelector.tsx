import React from 'react';
import { GraduationCap } from 'lucide-react';

interface ClassSelectorProps {
  onSelect: (classLevel: string) => void;
}

const ClassSelector: React.FC<ClassSelectorProps> = ({ onSelect }) => {
  const classes = [
    'Nursery',
    'KG',
    ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`)
  ];

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Your Class</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((classLevel) => (
          <button
            key={classLevel}
            onClick={() => onSelect(classLevel)}
            className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex flex-col items-center space-y-4">
              <GraduationCap className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />
              <h3 className="text-xl font-semibold text-gray-800">{classLevel}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassSelector;