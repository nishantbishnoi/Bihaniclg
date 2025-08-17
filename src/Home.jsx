import { Link } from "react-router-dom";
import "./App.css";
import logo from "./assets/loo1_transparent.png";
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeroSlider from "./HeroSlider";
import JourneySection from "./JourneySection";
import JourneyCards from "./JourneyCards";
import Footer from "./Footer";
import img from './assets/history.jpg'
import image from './assets/ChatGPT Image Aug 15, 2025, 08_25_51 PM.png'
import { useState , useEffect } from "react";


export default function Home() {

    const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      const targets = document.querySelectorAll(
        ".section-header, .column, .hero-content, .quote"
      );
      targets.forEach((el) => observer.observe(el));

      return () => {
        targets.forEach((el) => observer.unobserve(el));
      };
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <div className="splash-screen">
        <img src={logo} alt="School Logo" className="splash-logo" />
        <h1 className="splash-title">Bihani Children Academy</h1>
      </div>
    );
  }

  return (
    <>
    <section className="hero">
        <img src={img} className="bg-video" alt="Background" />
        <div className="overlay hero-content">
          <img src={logo} alt="Bihani Logo" className="logo" />
          <h1 className="hero-title">Bihani Children Academy</h1>
          <p className="hero-sub">FOUNDED 1604</p>
        </div>
        <p id="p1" className="hero-tagline">
          DAY SCHOOL FROM AGE 3-18 • BOARDING FROM 11-18
        </p>

        {/* Menu Button */}
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

        <p id="p1">DAY SCHOOL FROM AGE 3-18 • Boarding from 11-18</p>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="section-header">
          <h2>
             Bihani<span className="highlight"> Childrens</span> Academy School
          </h2>
        </div>

        <div className="section-content">
          <div className="column">
            <p>
             The mission of Bihani Childrens Academy is to prepare children for the future by providing knowledge 
             and skills to achieve academic excellence, confidence, personal growth and success in a safe, positive
              and diverse environment and to be responsible and productive citizens. Our mission is to provide a vibrant
               forum for quality education, with a scientific temper, adaptive to the changing needs of time, to ensure
                all round development of the child and to give an exposure to a wide spectrum of co cultural learning
                 which is essential to make the child confident.
            </p>
            <p>
              We help pupils to find meaning and purpose in their learning, preparing them for life beyond school.
            </p>
          </div>
          <div className="column">
            <p>
              “Education awakens the power beauty that lie within us.”
               Education does not only man academic excellence. It rather is a 
               harmonious and synchronized combination of hand (skills like various arts),
                head (Intellectual Power) and hear (Value System).
                
            </p>
            <p>
              Happiness, we believe, is a consequence of doing these things well, rather than an end unto itself.
               <br />
               <br />
            <h3><span className="highlight"> Mrs. Nalini Dhingra</span></h3>
            </p>
          </div>
          <div className="column quote">
           <div id="comma"><FontAwesomeIcon icon={faQuoteLeft} /></div>
            <p>
              At Bihani we see education as being <br /> so much more
               than exam results. <br />We see education as being 
               about <br />developing
              young women and men <br />who are ready 
              to make a difference <br />in the world.
            </p>
          </div>
        </div>
      </section>
            <HeroSlider />

           <img src={image} alt="" id="img"/>
            <h5 id="h2">
            <span className="highlight">  Intelligent </span><br /> Education
            </h5>
            <p id="p2">At Blundell’s we think deeply about why we do things. We are committed to <br />
                creating processes that are coherent and flexible, responsive to changing <br />
                needs and circumstances, but at the same time, true to what we believe <br />
                makes for a good education. We believe that a good education is one which <br />
                helps pupils become excellent learners, with an ability to apply their <br />
                knowledge and skills in any environment and in any context. That is what we <br />
                mean by ‘intelligent education'.</p>

               <JourneySection/>
               <JourneyCards/>
               <Footer/>
    </>
  );
}
