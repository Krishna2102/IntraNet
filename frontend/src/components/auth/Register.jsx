import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/footer';
const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    rollNo: '',
    dob: '',
    phone: '',
    password: '',
    course: '',
    branch: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Registered Successfully!');
  };

  return (
   <div>
     <Navbar/>
    <div className="flex items-center justify-center min-h-screen ">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Registration</h2>
      
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Roll Number</label>
          <input
            type="text"
            name="rollNo"
            required
            value={formData.rollNo}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter your roll number"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Date of Birth</label>
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter your phone number"
          />
        </div>

        

        <div className="mb-4">
          <label className="block mb-1">Course</label>
          <input
            type="text"
            name="course"
            required
            value={formData.course}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="e.g. B.Tech"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Branch</label>
          <input
            type="text"
            name="branch"
            required
            value={formData.branch}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="e.g. CSE"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-950 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
    <Footer/>
   </div>
  );
};

export default Register;
