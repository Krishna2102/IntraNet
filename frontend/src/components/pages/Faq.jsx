import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
const faqData = [
  {
    question: 'What programs does the MACS department offer?',
    answer: 'The department offers B.Tech in MACS, M.Tech, MCA, and Ph.D. programs in various computational fields.',
  },
  {
    question: 'How can I apply for M.Tech at MACS?',
    answer: 'Admissions to the M.Tech program are conducted through GATE and the centralized CCMT process.',
  },
  {
    question: 'Are there placement opportunities for students?',
    answer: 'Yes, students get excellent placement support and have access to top recruiters across industries.',
  },
];

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-md p-4 mb-3 shadow-sm bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="font-medium text-lg text-violet-700">{question}</span>
        <span className="text-xl">{open ? '▲' : '▼'}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-violet-800 mb-6">Frequently Asked Questions</h1>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;
