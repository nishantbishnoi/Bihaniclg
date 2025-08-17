import React, { useState, useEffect, useRef } from "react";
import "./HeroSlider.css";
import pic1 from './assets/img1.jpeg'
import pic2 from './assets/img2.jpeg'
import pic3 from './assets/img3.jpeg'
import pic4 from './assets/img4.jpeg'
import pic5 from './assets/img5.jpeg'
import pic6 from './assets/img6.jpeg'

const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const slideTimer = useRef(null);

  // Start slideshow automatically
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsOpen(true);
          } else {
            setIsOpen(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide when open
  useEffect(() => {
    if (isOpen) {
      slideTimer.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 2000);
    } else {
      clearInterval(slideTimer.current);
    }
    return () => clearInterval(slideTimer.current);
  }, [isOpen]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      {/* Grid View */}
      <div className="grid-container" ref={galleryRef}>
        {images.map((src, index) => (
          <img key={index} src={src} alt="" className="grid-image" />
        ))}
      </div>

      {/* Slideshow Overlay */}
      {isOpen && (
        <div className="slideshow">
          <button className="prev-btn" onClick={prevSlide}>←</button>
          <img src={images[currentIndex]} alt="" className="slide-image" />
          <button className="next-btn" onClick={nextSlide}>→</button>
        </div>
      )}
    </>
  );
}
