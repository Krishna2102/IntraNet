import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/footer';
import Faculty from './Faculty';
import Staff from './Staff';

const People = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`px-6 py-2 rounded-full font-medium border ${
            activeTab === 'faculty' ? 'bg-violet-800 text-white' : 'bg-white text-violet-800 border-violet-800'
          }`}
          onClick={() => setActiveTab('faculty')}
        >
          Faculty
        </button>
        <button
          className={`px-6 py-2 rounded-full font-medium border ${
            activeTab === 'staff' ? 'bg-violet-800 text-white' : 'bg-white text-violet-800 border-violet-800'
          }`}
          onClick={() => setActiveTab('staff')}
        >
          Staff
        </button>
      </div>

      <div className="flex-grow px-6 py-8 max-w-4xl mx-auto">
        {activeTab === 'faculty' && <Faculty />}
        {activeTab === 'staff' && <Staff />}
      </div>

      <Footer />
    </div>
  );
};

export default People;
