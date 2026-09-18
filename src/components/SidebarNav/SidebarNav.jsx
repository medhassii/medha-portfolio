import "./SidebarNav.css";

function SidebarNav() {
  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} aria-label={section.name}>
              <span></span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SidebarNav;