import React, { useState } from 'react';
import { Upload, Trash2, Edit2 } from 'lucide-react';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'sneha2025' && password === 'sbeha2025@#thankur') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Upload New Content</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Select Class</option>
              {Array.from({ length: 14 }, (_, i) => 
                <option key={i} value={i === 0 ? 'Nursery' : i === 1 ? 'KG' : i - 1}>
                  {i === 0 ? 'Nursery' : i === 1 ? 'KG' : `Class ${i - 1}`}
                </option>
              )}
            </select>
            
            <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Select Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
            </select>
            
            <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="">Content Type</option>
              <option value="notes">Notes</option>
              <option value="practice">Practice Paper</option>
            </select>
            
            <input
              type="file"
              className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload Content
          </button>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Manage Content</h3>
        <div className="space-y-4">
          {/* Example content items */}
          <div className="flex items-center justify-between p-4 border rounded-md">
            <div>
              <h4 className="font-semibold">Class 10 CBSE Mathematics Notes</h4>
              <p className="text-sm text-gray-600">Type: Notes • Free</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                <Edit2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-50 rounded-md">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;