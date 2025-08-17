// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS specific to navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/menu" className="menu-container">
        <span className="menu-text">MENU</span>
        <div className="menu-circle">
          <div className="dot-grid">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;