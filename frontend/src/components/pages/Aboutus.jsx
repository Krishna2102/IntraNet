import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
const Aboutus = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-violet-800 mb-6">About Us</h1>

        <p className="text-gray-700 text-lg mb-4">
          The Department of Mathematical and Computational Sciences (MACS) at NITK is a vibrant academic community focused on excellence in teaching, research, and innovation. We offer programs that blend strong theoretical foundations with hands-on experience in mathematical modeling, computer science, and data analytics.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          Our faculty are engaged in cutting-edge research and are dedicated to mentoring students in various areas including artificial intelligence, numerical methods, cryptography, and optimization. With a legacy of academic distinction, we aim to equip students to tackle global challenges in science and technology.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          We emphasize a culture of curiosity, collaboration, and continuous learning. Through partnerships with industry and academia, we strive to create a learning environment that nurtures innovation, critical thinking, and leadership.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-violet-700 mb-2">Vision</h2>
          <p className="text-gray-600">
            To be a globally recognized center for excellence in mathematical and computational sciences.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-violet-700 mb-2">Mission</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Deliver quality education in mathematics and computing disciplines.</li>
            <li>Foster research and innovation across interdisciplinary domains.</li>
            <li>Develop professionals with ethical values and problem-solving skills.</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Aboutus;
