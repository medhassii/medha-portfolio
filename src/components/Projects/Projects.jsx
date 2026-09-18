import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Project One",
      description:
        "A web application built to solve a real-world problem.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Two",
      description:
        "A full-stack application with a frontend and backend.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Project Three",
      description:
        "An application demonstrating API integration and asynchronous data handling.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
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