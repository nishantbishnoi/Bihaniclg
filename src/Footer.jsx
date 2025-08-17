import React from "react";
import "./Footer.css";
import  image from "./assets/The_Wellbeing_Hub_Badge_0001-697-optimized.png"
import image1 from "./assets/The_Good_Schools_Guide_logo_c2d8944f488e4f77a45563d55b572551-311-optimized.webp"
import image2 from "./assets/loo1_transparent.png"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="footer">

      {/* --- Let's Begin Section --- */}
      <div className="admissions-section">
        <div className="shield-icon">
          <img src={image2} alt="School Logo" />
        </div>
        <p className="section-subtitle">ADMISSIONS</p>
        <h1 className="section-titleaa">Let's Begin</h1>
        <a href="#start" className="begin-btn">
          <span className="btn-icon">▶</span> BEGIN YOUR BIHANI JOURNEY
        </a>
      </div>

      {/* --- Footer Grid --- */}
      <div className="footer-grid">

        {/* Quote Section */}
        <div className="quote-section">
          <h2>Inspiring Futures, Shaping Character.</h2>
          <p>
            Discover what makes Bihani Children Academy exceptional. Whether you have
            questions or would like to visit, we’d love to hear from you.
          </p>
          <a href="/contact" className="contact-btn">
            <i className="fas fa-envelope"><FontAwesomeIcon icon={faEnvelope} /></i> Contact Us
          </a>
        </div>

        {/* Find Us */}
        <div className="footer-col">
          <h3>Find Us</h3>
          <p><b>Bihani Children Academy</b></p>
          <p>Sri Ganganagar</p>
          <p><b>T</b> 6367512934</p>
          <p><b>E</b> saraswat@gmail.com</p>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Policies</a></li>
            <li><a href="#">Privacy & Cookies</a></li>
            <li><a href="#">Term Dates</a></li>
            <li><a href="#">Safeguarding</a></li>
            <li><a href="#">School Shop</a></li>
          </ul>
        </div>

        {/* Connect & Support */}
        <div className="footer-col">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /> </i></a>
            <a href="#"><i className="fab fa-linkedin"><FontAwesomeIcon icon={faFacebook} /></i></a>
            <a href="#"><i className="fab fa-facebook"><FontAwesomeIcon icon={faYoutube} /></i></a>
          </div>
          <h3>Support Us</h3>
          <div className="support-logos">
            <img src={image}alt="Good Schools Guide" />
            <img src={image1} alt="Wellbeing Hub" />
          </div>
        </div>

      </div>

      {/* Bottom Copy */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bihani Children Academy. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;