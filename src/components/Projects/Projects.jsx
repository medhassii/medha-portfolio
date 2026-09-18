import "./Projects.css";

function Projects() {
 const projects = [
  {
    title: "Face Recognition App",
    image: "/src/assets/hero.png",
    description:
      "A React application that detects and highlights faces in uploaded images using a face-recognition API.",
    technologies: ["React", "JavaScript", "API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Podcast Player",
    image: "/src/assets/hero.png",
    description:
      "A web application for playing and managing podcast content with a JavaScript and Node.js backend.",
    technologies: ["JavaScript", "Node.js", "Express"],
    github: "#",
    demo: "#",
  },
  {
    title: "Proxy Pantry API",
    image: "/src/assets/hero.png",
    description:
      "A backend application demonstrating REST API development, server-side logic, and database integration.",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Flask OpenAI Project",
    image: "/src/assets/hero.png",
    description:
      "A Flask application connected to MongoDB and an external AI API, demonstrating backend API integration.",
    technologies: ["Python", "Flask", "MongoDB", "API"],
    github: "#",
    demo: "#",
  },
];

  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
             {project.image && (
             <div className="project-image">
                <img src={project.image} alt={project.title} />
             </div>
        )}
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.demo}>Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;