import { useEffect, useState } from "react";
import "./SidebarNav.css";

function SidebarNav() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              aria-label={section.name}
              className={
                activeSection === section.id ? "active" : ""
              }
            >
              <span></span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarNav;