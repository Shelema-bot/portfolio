import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Shelema</span>
          <span className="logo-dot">.</span>
          <span className="logo-highlight">dev</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <div className="nav-actions">
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mobile-cv-item">
              <a
                href="/Shelema_Ageri_CV.pdf"
                download="Shelema_Ageri_CV.pdf"
                className="btn btn-primary nav-cv-btn"
                onClick={() => setMenuOpen(false)}
              >
                <FaFileAlt /> Resume CV
              </a>
            </li>
          </ul>

          <a
            href="/Shelema_Ageri_CV.pdf"
            download="Shelema_Ageri_CV.pdf"
            className="btn btn-secondary desktop-cv-btn"
          >
            <FaFileAlt /> CV
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;