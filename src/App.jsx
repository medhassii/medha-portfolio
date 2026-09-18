import Navbar from "./components/Navbar/Navbar";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import GameButton from "./components/GameButton/GameButton";

function App() {
  return (
    <div>
      <Navbar />
      < SidebarNav />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <GameButton />
    </div>
  );
}

export default App;