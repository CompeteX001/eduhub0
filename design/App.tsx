import React, { useState } from 'react';
import { Book, GraduationCap, Home, MessageCircle, Shield, ChevronDown, Download, FileText } from 'lucide-react';
import AdminPanel from './components/AdminPanel';
import ClassSelector from './components/ClassSelector';
import SubjectSelector from './components/SubjectSelector';
import ResourceType from './components/ResourceType';
import IntroPage from './components/IntroPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showResourceType, setShowResourceType] = useState(false);

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject);
    setShowResourceType(true);
  };

  const resetSelections = () => {
    setSelectedClass('');
    setSelectedBoard('');
    setSelectedSubject('');
    setShowResourceType(false);
    setShowIntro(true);
  };

  const handleGetStarted = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2" onClick={resetSelections}>
                <GraduationCap className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-800">EduNotes</span>
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Home className="h-5 w-5 mr-1" />
                  Home
                </a>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Book className="h-5 w-5 mr-1" />
                  Subjects
                </a>
                <a href="https://api.whatsapp.com/send?phone=917449435679&text=hi%20mam" 
                   target="_blank" 
                   className="flex items-center text-gray-600 hover:text-indigo-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  Contact Us
                </a>
              </div>
            </div>
            <button 
              onClick={() => setIsAdmin(!isAdmin)}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Shield className="h-5 w-5 mr-1" />
              Admin
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {isAdmin ? (
          <AdminPanel />
        ) : showIntro ? (
          <IntroPage onGetStarted={handleGetStarted} />
        ) : (
          <div className="space-y-8">
            {!selectedClass && (
              <ClassSelector onSelect={setSelectedClass} />
            )}

            {selectedClass && !selectedBoard && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Board</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['CBSE', 'ICSE'].map((board) => (
                    <button
                      key={board}
                      onClick={() => setSelectedBoard(board)}
                      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                    >
                      <h3 className="text-xl font-semibold text-gray-800">{board}</h3>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedBoard && !selectedSubject && (
              <SubjectSelector
                board={selectedBoard}
                classLevel={selectedClass}
                onSelect={handleSubjectSelect}
              />
            )}

            {showResourceType && (
              <ResourceType subject={selectedSubject} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;