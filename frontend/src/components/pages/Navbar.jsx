import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ label, items, to, closeMobileMenu }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 700);
  };

  const handleClick = () => {
    if (to) {
      navigate(to);
      closeMobileMenu?.();
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center cursor-pointer text-lg font-medium text-gray-700 hover:text-violet-600"
        onClick={handleClick}
      >
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
        <div className="absolute left-0 mt-2 bg-white border rounded w-40 z-50">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-violet-600 hover:text-white text-gray-800 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (item.to) navigate(item.to);
                closeMobileMenu?.();
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/cc/NITK_Emblem.png"
          alt="NITK Logo"
          className="h-[50px] w-[50px]"
        />
        <div>
          <h1 className="text-sm sm:text-lg font-bold text-violet-700">
            Mathematical And Computational Sciences (MACS)
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">NITK</p>
        </div>
      </div>

      {/* Hamburger for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-[100%] right-0 w-full flex-col bg-white border-t px-6 py-4 space-y-4 md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:items-center md:ml-auto md:w-auto`}
      >
        <MenuItem label="Home" to="/" closeMobileMenu={closeMobileMenu} />
        <MenuItem
          label="About"
          items={[
            { label: "Aboutus", to: "/aboutus" },
            { label: "History", to: "/history" },
            { label: "Connect Us", to: "/contact" },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <MenuItem
          label="Academics"
          items={[
            { label: "Programmes", to: "/programmes" },
            { label: "Courses", to: "/courses" },
            { label: "Time Table", to: "/time-table" },
            { label: "Research", to: "/research" },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <MenuItem
          label="People"
          items={[
            { label: "Faculty", to: "/faculty" },
            { label: "Staff", to: "/staff" },
            { label: "Students", to: "/students" },
            { label: "Committees", to: "/committees" },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <MenuItem
          label="Updates"
          items={[
            { label: "News", to: "/news" },
            { label: "Announcement", to: "/announcement" },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
        <MenuItem
          label={
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/600px-Sample_User_Icon.png"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover"
            />
          }
          items={[
            { label: "Profile", to: "/profile" },
            { label: "Log Out", to: "/logout" },
          ]}
          closeMobileMenu={closeMobileMenu}
        />
      </div>
    </nav>
  );
}
