import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover color
  const [isClicked, setIsClicked] = useState(false); // State for click color toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown visibility

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: 'white' }}>
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-brand">
          <img src="images/logo.jpg" alt="RDTC Singawal" className="navbar-logo-image" />
        </NavLink>

        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <h1
            style={{
              color: isClicked ? '#1abc9c' : isHovered ? '#f39c12' : 'black',
              cursor: 'pointer',
            }}
            onClick={handleClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            RDTC Singawal Driving Center
          </h1>
        </NavLink>
      </div>

      <div className={`navbar-links ${isMobile ? 'mobile-active' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
          style={{ color: 'black' }}
        >
          Home
        </NavLink>

        <div
          className="navbar-dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            style={{ color: 'black' }}
          >
            About Us
          </NavLink>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
              >
                About Us
              </NavLink>
              <NavLink
                to="/key-activities"
                className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
              >
                Activities
              </NavLink>
              <NavLink
                to="/drivingtrackpage"
                className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
              >
                Driving Tracks
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? 'dropdown-link active' : 'dropdown-link')}
              >
                Gallery
              </NavLink>
            </div>
          )}
        </div>

        {/* Administration Link */}
        <NavLink
          to="/administration"
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
          style={{ color: 'black' }}
        >
          Administration
        </NavLink>

        <NavLink
          to="/appointment"
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
          style={{ color: 'black' }}
        >
          Appointment
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
          style={{ color: 'black' }}
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
