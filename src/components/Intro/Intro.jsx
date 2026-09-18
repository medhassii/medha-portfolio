import "./Intro.css";

function Intro() {
  return (
    <section id="home" className="intro">
      <div className="intro-content">
        <p className="intro-greeting">Hi, I'm</p>

        <h1>Medha</h1>

       <p className="intro-role">
  Full Stack Developer
</p>

        <p className="intro-description">
          I build web applications using modern technologies.
        </p>
      </div>
    </section>
  );
}

export default Intro;