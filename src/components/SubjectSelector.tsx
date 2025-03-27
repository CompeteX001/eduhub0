import React, { useState } from 'react';
import { BookOpen, Beaker, Brain, Atom } from 'lucide-react';

interface SubjectSelectorProps {
  board: string;
  classLevel: string;
  onSelect: (subject: string) => void;
}

const SubjectSelector: React.FC<SubjectSelectorProps> = ({ board, classLevel, onSelect }) => {
  const [selectedMainSubject, setSelectedMainSubject] = useState<string | null>(null);

  const getSubjects = () => {
    const classNumber = classLevel === 'Nursery' ? 0 : 
                       classLevel === 'KG' ? 1 : 
                       parseInt(classLevel.replace('Class ', ''));

    let subjects = [
      'Mathematics',
      'English',
      'Hindi',
      board === 'ICSE' ? 'Computer Science' : 'Information Technology',
    ];

    if (classNumber >= 6) {
      subjects.push('Social Science');
      subjects.push('Science');
    } else {
      subjects.push('Environmental Science');
    }

    return subjects;
  };

  const getScienceSubjects = () => [
    'Physics',
    'Chemistry',
    'Biology'
  ];

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case 'Physics':
        return <Atom className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />;
      case 'Chemistry':
        return <Beaker className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />;
      case 'Biology':
        return <Brain className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />;
      default:
        return <BookOpen className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />;
    }
  };

  const handleSubjectClick = (subject: string) => {
    const classNumber = classLevel === 'Nursery' ? 0 : 
                       classLevel === 'KG' ? 1 : 
                       parseInt(classLevel.replace('Class ', ''));

    if (subject === 'Science' && classNumber >= 6) {
      setSelectedMainSubject('Science');
    } else {
      onSelect(subject);
    }
  };

  if (selectedMainSubject === 'Science') {
    return (
      <div className="animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Science Subject</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {getScienceSubjects().map((subject) => (
            <button
              key={subject}
              onClick={() => onSelect(subject)}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex flex-col items-center space-y-4">
                {getSubjectIcon(subject)}
                <h3 className="text-xl font-semibold text-gray-800 text-center">{subject}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Subject</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getSubjects().map((subject) => (
          <button
            key={subject}
            onClick={() => handleSubjectClick(subject)}
            className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex flex-col items-center space-y-4">
              {getSubjectIcon(subject)}
              <h3 className="text-xl font-semibold text-gray-800 text-center">{subject}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelector;