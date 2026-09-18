import Navbar from "./components/Navbar/Navbar";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      < SidebarNav />
      <Intro />
      <About />
      <Experience />
      <Projects />

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