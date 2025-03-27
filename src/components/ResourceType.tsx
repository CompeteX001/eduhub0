import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import AdComponent from './AdComponent';

interface ResourceTypeProps {
  subject: string;
}

const ResourceType: React.FC<ResourceTypeProps> = ({ subject }) => {
  const [showNotes, setShowNotes] = useState(false);
  
  const handlePracticePaperClick = () => {
    window.open('https://api.whatsapp.com/send?phone=917449435679&text=hi%20mam%20i%20want%20to%20buy%20%20notes%20of%20' + subject, '_blank');
  };

  const handleNotesClick = () => {
    setShowNotes(true);
  };

  const mockNotes = [
    { title: `${subject} Chapter 1 Notes`, url: '#' },
    { title: `${subject} Chapter 2 Notes`, url: '#' },
    { title: `${subject} Chapter 3 Notes`, url: '#' },
    { title: `${subject} Summary Notes`, url: '#' },
  ];

  return (
    <div className="animate-fadeIn space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Resource Type for {subject}</h2>
      
      {!showNotes ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col items-center space-y-4">
              <FileText className="w-12 h-12 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-800">Notes</h3>
              <p className="text-gray-600 text-center">Access free study notes</p>
              <button 
                onClick={handleNotesClick}
                className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span>View Free Notes</span>
              </button>
            </div>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
            <div className="flex flex-col items-center space-y-4">
              <FileText className="w-12 h-12 text-indigo-600" />
              <h3 className="text-xl font-semibold text-gray-800">Practice Papers</h3>
              <p className="text-gray-600 text-center">Premium practice papers</p>
              <div className="text-2xl font-bold text-indigo-600">₹49</div>
              <button 
                onClick={handlePracticePaperClick}
                className="flex items-center space-x-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <AdComponent adSlot="1234567890" adFormat="horizontal" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockNotes.map((note, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                  <button 
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <AdComponent adSlot="0987654321" adFormat="rectangle" />
        </div>
      )}
    </div>
  );
};

export default ResourceType;