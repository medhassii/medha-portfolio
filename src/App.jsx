import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />

      <section id="about">
        <h1>About</h1>
      </section>

      <section id="experience">
        <h1>Experience</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="skills">
        <h1>Skills</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </div>
  );
}

export default App;