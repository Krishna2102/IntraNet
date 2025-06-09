import React, { useState } from "react";
import { Link } from 'react-router-dom';
import register from "./register";
import Navbar from "../pages/Navbar";
import Footer from "../pages/footer";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    setError(null);
    console.log("Form submitted with", { email, password });
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar/>
      {/* Login Section */}
      <div className="flex justify-center items-center min-h-screen ">
        <div className="bg-white p-10 mb-[100px] rounded-lg shadow-lg flex flex-col md:flex-row w-[500px] max-w-4xl">
          {/* Login Form */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-6">Log In</h2>
            <form onSubmit={handleSubmit}>
              <label className="block text-gray-700 mb-2">Email Address:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[350px] border border-gray-300 p-3 rounded-md mb-4" 
                placeholder="Enter your email" 
              />

              <label className="block text-gray-700 mb-2">Password:</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[350px] border border-gray-300 p-3 rounded-md mb-4" 
                placeholder="Enter your password" 
              />
              {error && <p className='text-red-600 text-xs pb-1'>{error}</p>}
              <button className="w-[350px] bg-violet-600 text-white py-3 rounded-md text-lg font-bold">
                Log In
              </button>

            <div className="mt-4 text-sm flex justify-between w-[350px]">
    <Link to="/forgot-password" className="text-violet-600 hover:underline">
        Forgot your password?
    </Link>
    <Link to="/register" className="text-violet-600 hover:underline">
        Register Now
    </Link>
    </div>
            </form>
          </div>   
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Login;
