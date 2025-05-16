import React , {useState} from 'react';
import Calendar from "react-calendar";
import Simplecalender from './Calender';
import Navbar from './Navbar';
const Home = () => {
    const [value, setValue] = useState(new Date());
  return (
    <div className="font-sans">
    
    <Navbar/>
    

      {/* Hero Section */}
     <section
  className="relative text-white py-20 h-[500px] px-8 bg-blend-overlay bg-cover bg-center bg-fixed"
  style={{ backgroundImage: "url('https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg')" }}
>
  <div className="relative z-10 mt-[100px]">
    <h1 className="text-4xl font-bold">Your MACS family.</h1>
    <p className="mt-4 font-semibold">
      An Atmosphere Of Cooperation And Helpfulness With A Patient Listening Ear To Our Students.
    </p>
    <button className="mt-6 px-6 py-2 bg-violet-600 font-bold rounded hover:bg-gray-100 hover:text-violet-600">
      Know More
    </button>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
     </section>


      {/* News + Events + Spotlight */}
      <section className="grid grid-cols-3 gap-6 p-8">
        <div>
          <h2 className="text-xl font-bold mb-4">News</h2>
          <ul className="space-y-4 ">
            <li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li>
            <li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li><li className='border-black  bg-slate-100 shadow-lg h-[140px] w-[450px] flex'>
                <img src="https://macs.nitk.ac.in/sites/default/files/field/image/macsdep.jpg" alt="" className='h-[137px] w-[140px]' />
              <p className="text-sm text-gray-500">04 April, 2025</p>
              <p className="font-semibold">Details Regarding M.Tech Admissions</p>
            </li>
            {/* Add more items... */}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Events</h2>
          <p>No Future Events</p>
        </div>
      {/* calender */}
        <div>
            <Simplecalender/>
        </div>
        
      </section>

      {/* Gallery Section */}
      <section className="bg-violet-600 text-white py-10 text-center">
        <div className="grid grid-cols-4 gap-6 px-8">
          <div>
            <h3 className="text-3xl font-bold">62+</h3>
            <p>Years of Service</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">67+</h3>
            <p>Faculty Members</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1300+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">159+</h3>
            <p>Courses</p>
          </div>
        </div>
      </section>
      {/* gallery */}
      <section className="px-8 py-12 bg-gray-50">
  <h2 className="text-2xl font-bold text-iris mb-6 text-center">Photo Gallery</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      '/gallery1.jpg',
      '/gallery2.jpg',
      '/gallery3.jpg',
      '/gallery4.jpg',
      '/gallery5.jpg',
      '/gallery6.jpg',
    ].map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Gallery ${index + 1}`}
        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
      />
    ))}
  </div>
</section>

    {/* footer */}
    <footer className="bg-violet-800 text-white py-8 px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-bold">Department of Mathematical And Computational Sciences (MACS)</h3>
          <p className="text-sm mt-2">
            National Institute of Technology Karnataka <br />
            Powai, Mumbai 400076, Maharashtra, India
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
        &copy; {new Date().getFullYear()} IIT Bombay - Electrical Engineering. All Rights Reserved.
      </div>
    </footer>
    </div>
  );
};

export default Home;
