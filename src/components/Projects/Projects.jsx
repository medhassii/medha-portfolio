import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
                className={`project-card ${
                    project === projects[0] ? "featured-project" : ""
            }`}
            key={project.title}
            >
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
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>
  )}
</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;