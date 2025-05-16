import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home";

const MenuItem = ({ label, items, to }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Cancel pending close
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200); // Delay to prevent flicker
  };


  const handleClick = () =>{
    if (to) navigate(to);
  }

  return (
    <div
      className="relative right-14"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer text-xl font-medium text-gray-700 hover:text-violet-600" onClick={handleClick}>
        {label}
        {items && (
          <span
            className={`ml-1 transform transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        )}
      </div>

      {open && items && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded w-32 z-50">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-violet-600 hover:text-white text-gray-800 cursor-pointer"
              onClick={() => alert(`${item} clicked!`)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
          alt="NITK Logo"
          className="h-[60px] w-[60px]"
        />
        <div>
          <h1 className="text-lg font-bold text-violet-700">
            Mathematical And Computational Sciences (MACS)
          </h1>
          <p className="text-sm text-gray-600">NITK</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex space-x-6 items-center">
        <MenuItem label="Home" to="/"/>
        <MenuItem label="About" items={["Overview", "Mission", "History"]} />
        <MenuItem label="Academics" items={["Programs", "Courses", "Timetable"]} />
        <MenuItem label="Research" items={["Projects", "Publications", "Collaborations"]} />
        <MenuItem label="People" items={["Faculty", "Staff", "Students", "Committees"]} />
<MenuItem
  label={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/600px-Sample_User_Icon.png"
      alt="Profile"
      className="h-8 w-8 rounded-full object-cover"
    />
  }
  items={["Profile", "Settings", "Logout"]}
/>      </div>
    </nav>
  );
}
