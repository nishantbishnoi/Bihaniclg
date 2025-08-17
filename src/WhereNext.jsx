import React from "react";
import "./WhereNext.css";
import logoo from "./assets/loo1_transparent.png";
import img from "./assets/history.jpg"
import img1 from "./assets/aims img.jpg"
import img2 from "./assets/location img.jpg"

const whereNextItems = [
  {
    title: "Vision and Aims",
    link: "#",
    image: img, // replace with real
  },
  {
    title: "Location",
    link: "#",
    image: img1,
  },
  {
    title: "History",
    link: "#",
    image: img2,
  },
];

export default function WhereNext() {
  return (
    <section className="where-next">
      <div className="where-header">
        <img
          src={logoo}
          alt="Shield"
          className="shield-icon"
        />
        <p className="section-subtitle">EXPLORE MORE</p>
        <h2 className="section-title">
          Where <span>Next?</span>
        </h2>
      </div>

      <div className="where-grid">
        {whereNextItems.map((item, index) => (
          <a href={item.link} className="where-card" key={index}>
            <div className="card-top">
              <img
                src={logoo}
                alt="Shield"
                className="mini-shield"
              />
              <p className="card-subtitle">WHERE NEXT</p>
              <h3>{item.title}</h3>
            </div>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
          </a>
        ))}
      </div>
    </section>
  );
}