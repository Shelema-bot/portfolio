import "./Footer.css";
import { FaGithub, FaEnvelope, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="bracket">&lt;</span>
            <span className="name">Shelema</span>
            <span className="dot">.</span>
            <span className="sub">dev</span>
            <span className="bracket"> /&gt;</span>
          </a>
          <p className="footer-bio">{t.footer.bio}</p>
          <div className="footer-status-pill">
            <span className="pulse-dot"></span>
            <span>{t.footer.status}</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li>
              <a href="#home">{t.nav.home}</a>
            </li>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
            <li>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#contact">{t.nav.contact}</a>
            </li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>{t.footer.connect}</h4>
          <ul>
            <li>
              <a href="https://github.com/Shelema-bot" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:shelemaagari@gmail.com">
                <FaEnvelope /> Email
              </a>
            </li>
            <li>
              <a href="tel:0974007772">
                <FaPhoneAlt /> 0974007772
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Shelema Ageri. {t.footer.designedBy}.
        </p>

        <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
          <span>Back to Top</span>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
