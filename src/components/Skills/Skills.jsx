import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "SQL"],
    },
    {
      category: "Programming",
      skills: ["Java", "C++", "C"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.category}>
              <h3>{category.category}</h3>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;