import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <h1>Home</h1>
        <p>Welcome to my portfolio.</p>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>This is the about section.</p>
      </section>

      <section id="experience">
        <h1>Experience</h1>
        <p>This is the experience section.</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>This is the projects section.</p>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <p>This is the skills section.</p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default App;