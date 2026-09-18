import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Company Name",
      role: "Full Stack Developer",
      date: "2024 - 2026",
      description:
        "Worked on web applications and contributed to frontend and backend development.",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h2>Experience</h2>

        {experiences.map((experience) => (
          <div className="experience-item" key={experience.company}>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p className="experience-date">{experience.date}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;