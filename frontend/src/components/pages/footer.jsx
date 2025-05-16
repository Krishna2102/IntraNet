import React from 'react'

const footer = () => {
  return (
    <div>
      <footer className="bg-violet-800 text-white py-12 px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Department of Mathematical And Computational Sciences (MACS)</h3>
          <p className="text-sm mt-2">
            National Institute of Technology Karnataka <br />
            Surathkal, Mangalore 575025 , Karnataka, India
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} NIT Karnataka - MACS. All Rights Reserved.
      </div>
    </footer>
    </div>
  )
}

export default footer
