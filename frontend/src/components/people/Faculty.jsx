import React from 'react';

const facultyMembers = [
  {
    name: 'Dr. A. Kumar',
    role: 'Professor & HOD',
    image: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  },
  {
    name: 'Dr. B. Sharma',
    role: 'Associate Professor',
    image: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  },
  {
    name: 'Dr. C. Patel',
    role: 'Assistant Professor',
    image: 'https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
  },
];

const Faculty = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {facultyMembers.map((member, index) => (
        <div key={index} className="h-full">
          <div className="bg-white p-4 rounded-xl shadow text-center h-full flex flex-col items-center justify-between">
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-violet-800">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
