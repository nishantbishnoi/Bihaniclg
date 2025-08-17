import "./JourneyCards.css";

// Local images import
import img1 from "./assets/AGSP-WEBSITE-PROOF-16 (1)-2285.jpg";
import img2 from "./assets/Untitled_design__4_-608-optimized.webp";
import img3 from "./assets/Blundells1__1_-968-optimized.webp";
import img4 from "./assets/Blundells2523__1_455__1_-989.jpg"
import img5 from "./assets/Blundells196__1_-948-optimized.webp";

const cards = [
  { num: "one", title: "Nursery", img: img1 },
  { num: "two", title: "Pre-Prep", img: img2 },
  { num: "three", title: "Prep", img: img3 },
  { num: "four", title: "Senior", img: img4 },
  { num: "five", title: "Sixth Form", img: img5 },
];

export default function JourneyCards() {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className={`card card-${index + 1}`} key={index}>
          <div className="image-wrapper">
            <img src={card.img} alt={card.title} />
            <span className="card-num">{card.num}</span>
          </div>
          <h3 className="card-title">{card.title}</h3>
        </div>
      ))}
    </div>
  );
}
