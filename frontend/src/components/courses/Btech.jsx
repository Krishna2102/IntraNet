import React from "react";
import Navbar from '../pages/Navbar'
import Footer from '../pages/footer'

const subjects = [
  "Mathematics I",
  "Discrete Structures",
  "Data Structures",
  "Algorithms",
  "Operating Systems",
  "Computer Networks",
  "Database Systems",
];

const teachers = [
  {
    name: "Dr. A. Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Prof. B. Rao",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ms. C. Singh",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mr. D. Verma",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Btech = () => {
  return (
    <div className="flex p-6">
      {/* Left - Subjects */}
      <div className="w-1/3 border-r pr-6">
      <h1 className="text-2xl font-semibold my-2 mt-[-15px] text-violet-700">BTECH</h1>
        <h2 className="text-2xl font-semibold mb-4 text-violet-700">Subjects</h2>
        <ul className="space-y-2 text-gray-700">
          {subjects.map((subject, index) => (
            <li key={index} className="hover:text-violet-600 cursor-pointer">
              • {subject}
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Teachers */}
      <div className="w-2/3 pl-6">
        <h2 className="text-2xl font-semibold mb-4 text-violet-700">Faculty</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="text-center">
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="h-32 w-32 object-cover rounded-full mx-auto shadow-md"
              />
              <p className="mt-2 text-gray-800 font-medium">{teacher.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Btech;
