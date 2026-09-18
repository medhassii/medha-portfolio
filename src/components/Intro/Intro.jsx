import "./Intro.css";
import heroImage from "../../assets/hero.png";

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <p className="intro-greeting">Hi, I'm</p>

          <h1>Medha</h1>

          <p className="intro-role">
            Full Stack Developer
          </p>

          <p className="intro-description">
            I build web applications using modern technologies.
          </p>
        </div>

        <div className="intro-image">
          <img src={heroImage} alt="Medha" />
        </div>

        <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
        </div>
      </div>
    </section>
    
  );
}

export default Intro;