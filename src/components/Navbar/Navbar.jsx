import "./Navbar.css";

function Navbar() {
const navItems = [
  { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
];
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Medha</h2>

      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;