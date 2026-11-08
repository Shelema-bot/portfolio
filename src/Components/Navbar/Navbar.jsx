import { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaFileAlt, FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import profilePhoto from "../../assets/input_file_0.png";
import cvPdf from "../../assets/Shelema_Ageri_CV.pdf";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const { toggleTheme, isDark } = useTheme();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 220;

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

  // Close dropdowns on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".lang-switcher")) {
        setLangDropdownOpen(false);
      }
      if (
        !e.target.closest(".nav-links") &&
        !e.target.closest(".menu-toggle")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "#home", id: "home" },
    { name: t.nav.about, href: "#about", id: "about" },
    { name: t.nav.services, href: "#services", id: "services" },
    { name: t.nav.skills, href: "#skills", id: "skills" },
    { name: t.nav.projects, href: "#projects", id: "projects" },
    { name: t.nav.experience, href: "#experience", id: "experience" },
    { name: t.nav.contact, href: "#contact", id: "contact" },
  ];

  const languages = [
    { code: "en", label: "English", short: "EN" },
    { code: "om", label: "Afaan Oromoo", short: "OM" },
    { code: "am", label: "አማርኛ", short: "AM" },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const handleDownloadCV = async (e) => {
    e.preventDefault();
    setMenuOpen(false);
    try {
      const response = await fetch(cvPdf);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Shelema_Ageri_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(cvPdf, "_blank");
    }
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          {/* Brand Logo with Rounded Photo Avatar */}
          <a href="#home" className="logo" onClick={() => { setMenuOpen(false); setLangDropdownOpen(false); }}>
            <div className="logo-avatar-frame">
              <img src={profilePhoto} alt="Shelema Ageri" className="logo-avatar" />
            </div>
            <span className="logo-text">Shelema</span>
            <span className="logo-dot">.</span>
            <span className="logo-highlight">dev</span>
          </a>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Main Navigation Links */}
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
                  href={cvPdf}
                  download="Shelema_Ageri_CV.pdf"
                  onClick={handleDownloadCV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary nav-cv-btn"
                >
                  <FaFileAlt /> {t.nav.resumeBtn}
                </a>
              </li>

              {/* Mobile Dedicated Language Selector inside Menu */}
              <li className="mobile-lang-item">
                <div className="mobile-lang-header">
                  <FaGlobe className="mobile-lang-icon" />
                  <span>{t.nav.langSelect || "Language"}</span>
                </div>
                <div className="mobile-lang-grid">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`mobile-lang-chip ${lang === l.code ? "active" : ""}`}
                      onClick={() => {
                        setLang(l.code);
                        setMenuOpen(false);
                      }}
                    >
                      <span className="chip-code">{l.short}</span>
                      <span className="chip-name">{l.label}</span>
                    </button>
                  ))}
                </div>
              </li>
            </ul>

            {/* Language Switcher Selector (Top Bar) */}
            <div className="lang-switcher">
              <button
                className="lang-btn"
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setMenuOpen(false);
                }}
                aria-label="Select Language"
                title="Select Language"
              >
                <FaGlobe className="lang-icon" />
                <span className="lang-current">{currentLang.short}</span>
              </button>

              {langDropdownOpen && (
                <div className="lang-dropdown">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      className={`lang-option ${lang === l.code ? "active" : ""}`}
                      onClick={() => {
                        setLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                    >
                      <span className="lang-code-tag">{l.short}</span>
                      <span className="lang-name-tag">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle Button (Light & Dark Mode) */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "Light" : "Dark"} Mode`}
              title={isDark ? t.nav.themeLight : t.nav.themeDark}
            >
              {isDark ? (
                <FaSun className="theme-icon sun" />
              ) : (
                <FaMoon className="theme-icon moon" />
              )}
            </button>

            {/* Desktop CV Download */}
            <a
              href={cvPdf}
              download="Shelema_Ageri_CV.pdf"
              onClick={handleDownloadCV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary desktop-cv-btn"
            >
              <FaFileAlt /> {t.nav.resumeBtn}
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="menu-toggle"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setLangDropdownOpen(false);
              }}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Backdrop for Mobile Navigation */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;
