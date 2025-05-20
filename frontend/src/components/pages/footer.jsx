import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-violet-800 text-white py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-green-500 pb-8">

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center">
            📎 <span className="ml-2">Quick Links</span>
          </h3>
          <div className="border-b-2 border-green-500 w-16 mb-4" />
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">NITK Website</a></li>
            <li><a href="#" className="hover:underline">IRIS Portal</a></li>
            <li><a href="#" className="hover:underline">Telephone Directory</a></li>
            <li><a href="#" className="hover:underline">Alumni Website</a></li>
            <li><a href="#" className="hover:underline">Career Development Center (CDC)</a></li>
          </ul>
        </div>

        {/* NITK Surathkal */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center">
            🛡️ <span className="ml-2">NITK Surathkal</span>
          </h3>
          <div className="border-b-2 border-green-500 w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            NH-66, Srinivasnagar, Surathkal<br />
            Mangaluru, Karnataka - 575025<br />
            +91-824-2474000<br />
            <a href="mailto:info@nitk.edu.in" className="hover:underline">info@nitk.edu.in</a>
          </p>
        </div>

        {/* CCC NITK */}
        <div>
          <h3 className="text-lg font-bold mb-2 flex items-center">
            🛡️ <span className="ml-2">CCC NITK</span>
          </h3>
          <div className="border-b-2 border-green-500 w-24 mb-4" />
          <p className="text-sm leading-relaxed">
            Dr. Mohit P Tahiliani<br />
            Professor In-charge, CCC<br />
            +91-824-2473083<br />
            <a href="mailto:pic.ccc@nitk.edu.in" className="hover:underline">pic.ccc@nitk.edu.in</a>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex justify-center gap-6 text-xl text-white">
        <FaFacebook className="cursor-pointer hover:text-gray-400" />
        <FaInstagram className="cursor-pointer hover:text-gray-400" />
        <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        <FaTimes className="cursor-pointer hover:text-gray-400" />
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} NIT Karnataka - MACS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
