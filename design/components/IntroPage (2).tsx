import React from 'react';
import { GraduationCap, BookOpen, Download, Users } from 'lucide-react';

interface IntroPageProps {
  onGetStarted: () => void;
}

const IntroPage: React.FC<IntroPageProps> = ({ onGetStarted }) => {
  return (
    <div className="animate-fadeIn space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">Welcome to EduNotes</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your one-stop destination for quality education materials across CBSE and ICSE boards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-200">
          <div className="flex flex-col items-center space-y-4">
            <BookOpen className="w-12 h-12 text-indigo-600" />
            <h3 className="text-xl font-semibold text-gray-800">Comprehensive Content</h3>
            <p className="text-gray-600 text-center">Access study materials from Nursery to Class 12</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-200">
          <div className="flex flex-col items-center space-y-4">
            <Download className="w-12 h-12 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">Free Study Notes</h3>
            <p className="text-gray-600 text-center">Download quality notes at no cost</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md transform hover:-translate-y-1 transition-all duration-200">
          <div className="flex flex-col items-center space-y-4">
            <Users className="w-12 h-12 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Expert Support</h3>
            <p className="text-gray-600 text-center">Get help from experienced educators</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onGetStarted}
          className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-200"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroPage;