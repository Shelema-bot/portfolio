import "./Footer.css";
import { FaGithub, FaEnvelope, FaPhoneAlt, FaArrowUp, FaHeart } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
          <p className="footer-bio">
            Full-Stack MERN Developer & Computer Science Student at Haramaya University. 
            Crafting scalable web systems, clean APIs, and modern responsive interfaces.
          </p>
          <div className="footer-status-pill">
            <span className="pulse-dot"></span>
            <span>Open for opportunities</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
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
                <FaPhoneAlt /> Phone
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Shelema Ageri. Built with <FaHeart className="heart-icon" /> using React 19 & Framer Motion.
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