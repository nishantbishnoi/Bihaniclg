// src/Contact.jsx (or App.jsx)
import React from "react";
import "./Contact.css";
import logo from "./assets/loo1_transparent.png";
import videoBg from "./assets/history.jpg"; // Used as background image
import Footer from "./Footer";
import WhereNext from "./WhereNext";

function Contact() {
  return (
    <>
      {/* Hero Section with background image */}
      <section className="hero" id="con1" style={{ backgroundImage: `url(${videoBg})` }}>
        <div className="ov1">
          <img src={logo} alt="Bihani Logo" className="logo" />
          <h1>Bihani Children Academy</h1>
          <p>FOUNDED 1604</p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <a href="/about">About</a> &gt; <span>Contact Us</span>
        </div>

        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-main">
            <h1>Contact Us</h1>

            <div className="school-block">
              <h2>Bihani's Preparatory School (Ages 3–11)</h2>
              <p>Jodhpur, Rajasthan, 342001</p>
              <p>Tel: 0291-1234567</p>
              <p>
                Email: <a href="mailto:prep@bihanischool.org">prep@bihanischool.org</a>
              </p>
            </div>

            <div className="school-block">
              <h2>Bihani's Senior School (Ages 11–18)</h2>
              <p>Jodhpur, Rajasthan, 342002</p>
              <p>Tel: 0291-7654321</p>
              <p>
                Email: <a href="mailto:senior@bihanischool.org">senior@bihanischool.org</a>
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="section-links">
            <h3>In This Section</h3>
            <ul>
              <li><a href="#">Location</a></li>
              <li><a href="#">Campus</a></li>
              <li><a href="#">Travelling to Bihani</a></li>
              <li><a href="#">Minibus Service</a></li>
              <li><a href="#">History of the School</a></li>
              <li><a href="#" className="active">Contact Us</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Vision & Aims</a></li>
            </ul>
          </div>
        </div>
      </div>

      
      <WhereNext />
      <Footer />
    </>
  );
}

export default Contact;