import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/footer';
import Btech from './Btech';
import Mtech from './Mtech';
import MCA from './MCA';

const Course = () => {
  const [selectedCourse, setSelectedCourse] = useState('btech');

  const renderCourseComponent = () => {
    switch (selectedCourse) {
      case 'btech':
        return <Btech />;
      case 'mtech':
        return <Mtech />;
      case 'mca':
        return <MCA />;
      default:
        return <Btech />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-4 my-4 px-4 sm:px-8 md:px-12">
        <button
          onClick={() => setSelectedCourse('btech')}
          className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-800 w-full sm:w-auto"
        >
          B.Tech
        </button>
        <button
          onClick={() => setSelectedCourse('mtech')}
          className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-800 w-full sm:w-auto"
        >
          M.Tech
        </button>
        <button
          onClick={() => setSelectedCourse('mca')}
          className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-800 w-full sm:w-auto"
        >
          MCA
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="flex-grow px-4 sm:px-8 md:px-12">
        {renderCourseComponent()}
      </div>

      <Footer />
    </div>
  );
};

export default Course;
