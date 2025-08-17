import React, { useEffect, useRef } from "react";
import "./JourneySection.css";

export default function JourneySection() {
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="journey-section">
      <div className="big-number">5</div>
      <div className="text">
        <div className="line"></div>
        <div className="inner-text">
          <p className="small">THE</p>
          <p className="small">BLUNDELL'S</p>
          <h2 className="journey">journey</h2>
          <p className="small">AN ALL THROUGH</p>
          <p className="small">EDUCATION</p>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
}
