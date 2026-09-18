import Navbar from "./components/Navbar/Navbar";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      < SidebarNav />
      <Intro />
      <About />

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