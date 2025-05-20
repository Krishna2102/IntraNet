import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
const Contact = () => {
  return (
    <div>
        <Navbar/>
        <div className="max-w-3xl mx-auto p-6 mt-12">
        
      <h2 className="text-2xl font-bold mb-6 text-center text-violet-800">Contact Us</h2>

      <div className="bg-white shadow-md rounded p-6 mb-8">
        <p className="text-lg font-semibold">Department of Mathematical and Computational Sciences (MACS)</p>
        <p>National Institute of Technology Karnataka (NITK)</p>
        <p>Surathkal, Mangalore 575025, Karnataka, India</p>
        <p className="mt-2">Phone: +91-824-2474000</p>
        <p>Email: macs@nitk.edu.in</p>
      </div>

      {/* Optional contact form */}
      <form className="bg-white shadow-md rounded p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input type="text" className="w-full border px-3 py-2 rounded" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full border px-3 py-2 rounded" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="bg-violet-800 text-white px-6 py-2 rounded hover:bg-violet-900">
          Send Message
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
