import React, { useState } from "react";
import { Link } from 'react-router-dom';
import register from "./register";
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
      <nav className="flex justify-between items-center bg-white shadow-md">
{/* Replace logo with a placeholder image */}
<img src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png" alt="Logo" className="h-16 w-auto" />
        <div className="flex space-x-7 ">
          <Link to="/" className="text-gray-600">Home</Link>
          <Link to="/shop" className="text-gray-600">Shop</Link>
          <Link to="/about" className="text-gray-600">About</Link>
        </div>
      </nav>

      {/* Login Section */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
      <footer className="bg-gray-900 text-white p-8 text-center">
        <p className="text-xl">Stay updated with new collections and promotions</p>
        <input type="email" placeholder="Email address" className="mt-4 p-2 rounded bg-gray-800 text-white" />
        <button className="ml-2 px-4 py-2 bg-pink-600 rounded">Subscribe</button>
        <p className="mt-4 text-gray-400">Copyright © 2025 ARTISANS CONNECT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
