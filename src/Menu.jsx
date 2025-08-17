import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import logo from "./assets/loo1_transparent.png";
import bgImage from "./assets/ppc3.jpeg"; // Replace with your background image

export default function MenuPage() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [fadeKey, setFadeKey] = useState(0); // For triggering animation on submenu change

  const menuData = {
    About: [
      "Location",
      "Campus",
      "Travelling to Blundell's",
      "Minibus Service",
      "History of the School",
      "Contact Us",
      "News",
      "Vision & Aims",
      "Sustainability",
      "Term Dates",
      "Intelligent Education At Blundell's",
      "Joining Blundell's"
    ],
    Prep: ["Prep Overview", "Prep Curriculum", "Prep Activities"],
    Senior: ["Senior Overview", "Academic Life", "Sports & Arts"],
    Boarding: ["Boarding Life", "Houses", "Boarding Admissions"],
    "Prep School Admissions": ["How to Apply", "Fees", "Scholarships"],
    "Senior School Admissions": ["How to Apply", "Fees", "Scholarships"]
  };

  const handleMenuClick = (item) => {
    if (item !== activeMenu) {
      setActiveMenu(item);
      setFadeKey((prev) => prev + 1); // trigger re-animation
    }
  };

  return (
    <div
      className="menu-page"
      style={{
        "--bg-image": `url(${bgImage})`
      }}
    >
      {/* Background overlay */}
      <div className="menu-overlay"></div>

      {/* Header */}
      <div className="menu-header animate-fadeInDown">
        <img src={logo} alt="Logo" className="menu-logo" />
      </div>

      {/* Main content */}
      <div className="menu-content">
        {/* Left column */}
        <div className="menu-left animate-slideInLeft">
          {Object.keys(menuData).map((item) => (
            <a
              href="#"
              key={item}
              className={activeMenu === item ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick(item);
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="menu-divider"></div>

        {/* Right column */}
        <div className="menu-right">
          {activeMenu && (
            <ul key={fadeKey} className="submenu-fade-slide">
              {menuData[activeMenu].map((subItem, idx) => (
                <li key={idx}>
                  <a href="#">{subItem}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer links */}
      <div className="menu-footer animate-fadeInUp">
        <a href="#">Parents</a>
        <a href="#">Community</a>
        <a href="#">Agents</a>
        <a href="#">Working At Blundell's</a>
        <a href="#">Support Us</a>
      </div>

      {/* Close button */}
      <Link to="/" className="menu-close-btn animate-fadeIn">
        ✖
      </Link>
    </div>
  );
}