import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
const Profile = () => {
  return (
    <div>
        <Navbar/>
    <div className="min-h-screen  text-white p-8 flex flex-col md:flex-row gap-8">
      {/* Left Profile Card */}
      <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md w-full md:w-1/4 text-center">
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2">Krishna Kumar Jena</h2>
        <p className="text-sm text-black mb-4">🎓 M C A Student @ NITK, Surathkal</p>
        <button className="bg-green-600 px-4 py-2 text-white rounded hover:bg-green-700 text-sm">
          ✎ Edit Profile
        </button>
      </div>

      {/* Right Form Area */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-3/4">
        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-700">
          <button className="text-violet-500 border-b-2 border-violet-700 px-4 py-2">Profile</button>
        </div>

        {/* Personal Details */}
        <Section title="Personal Details" fields={[
          "Father's Name", "Date of Birth", "Email address", "Nationality",
          "Phone", "Name in Hindi", "Gender", "Blood Group Type", "Mother Tongue",
          "Aadhaar Number", "Parents Phone Number"
        ]} />

        {/* Address Details */}
        <Section title="Address Details" fields={[
          "Permanent Address", "Pincode", "Country"
        ]} />

        {/* Academic Details */}
        <Section title="Academic Details" fields={[
          "Roll Number", "Registration Number", "Branch", "Degree",
          "Category", "Date of Admission"
        ]} />

        {/* Hostel Details */}
        <Section title="Hostel Details" fields={[
          "Hostel Room"
        ]} />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const Section = ({ title, fields }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-violet-800 mb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map((field, index) => (
        <div key={index}>
          <label className="block text-sm text-black mb-1">{field}</label>
          <input
            type="text"
            placeholder=""
            className="w-full p-2 bg-gray-300 border border-violet-700 rounded text-black text-sm focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>
      ))}
    </div>
  </div>
);

export default Profile;
