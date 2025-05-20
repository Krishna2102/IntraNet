import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './footer';

const newsItems = [
  {
    title: 'Call for MeitY-Visvesvaraya Ph.D Scheme',
    date: '30-04-2025',
  },
  {
    title: 'Indian patent was granted to Dr Arun M Isloor & Ms Nethravathi Prabhakar',
    date: '08-04-2025',
  },
  {
    title: 'Dr. Sourav Kanti Addya was nominated as an Editorial Board member',
    date: '20-03-2025',
  },
  {
    title: 'Dr. Ranjeet K Sahu & Devendra L Kamble published Book in AICTE e-Kumbh',
    date: '14-03-2025',
  },
  {
    title: "Ramachandra Bhat, Shreeganesh Hegde's article was most cited publication",
    date: '11-03-2025',
  },
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Navbar />

      <section className="max-w-5xl mx-auto px-4 py-12 flex-1">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">NEWS</h1>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search by keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-5 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm text-lg"
          />
          <Search className="absolute right-4 top-3.5 text-gray-400" />
        </div>

        {/* News List as Buttons */}
        <div className="space-y-4">
          {filteredNews.map((news, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border hover:shadow-md hover:bg-blue-50 transition text-left"
              onClick={() => alert(`You clicked: ${news.title}`)} // replace with navigation or modal if needed
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
               <div className="bg-green-100 p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V7a2 2 0 012-2h3l2-2h4l2 2h3a2 2 0 012 2v11a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-blue-900">
                  {news.title}
                </span>
              </div>
              <span className="text-gray-400 text-sm whitespace-nowrap">{news.date}</span>
            </button>
          ))}

          {filteredNews.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No news found.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
