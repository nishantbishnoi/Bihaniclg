// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import MenuPage from "./Menu";
import Contact from "./Contact";
import Navbar from "./Navbar";
// index.js or App.jsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar on all pages except "/menu" */}
      {location.pathname !== "/menu" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}