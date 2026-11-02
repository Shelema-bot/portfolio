import "./Home.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaFileDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import profilePhoto from "../../assets/extracted_img_0.png";

function Home() {
  const { t } = useLanguage();

  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Column: Formal Bio & CTAs */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-indicator"></span>
            <span>{t.hero.status}</span>
          </div>

          <h1 className="home-name">{t.hero.name}</h1>

          <h2 className="home-title-role">{t.hero.role}</h2>

          <p className="home-summary">{t.hero.summary}</p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewProjects} <FaArrowRight />
            </a>

            <a
              href="./Shelema_Ageri_CV.pdf"
              download="Shelema_Ageri_CV.pdf"
              className="btn btn-secondary"
            >
              <FaFileDownload /> {t.hero.downloadCV}
            </a>

            <a href="#contact" className="btn btn-secondary">
              {t.hero.contactMe}
            </a>
          </div>

          {/* Direct Professional Channels */}
          <div className="home-contact-strip">
            <a
              href="https://github.com/Shelema-bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="contact-pill"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="mailto:shelemaagari@gmail.com"
              aria-label="Send Email"
              className="contact-pill"
            >
              <FaEnvelope /> shelemaagari@gmail.com
            </a>

            <a
              href="tel:0974007772"
              aria-label="Call Shelema"
              className="contact-pill"
            >
              <FaPhoneAlt /> 0974007772
            </a>

            <span className="contact-pill location-pill">
              <FaMapMarkerAlt /> {t.hero.location}
            </span>
          </div>
        </motion.div>

        {/* Right Column: Profile Portrait in Rounded Glowing Border */}
        <motion.div
          className="home-portrait-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <div className="portrait-circle-card">
            <div className="portrait-avatar-halo">
              <img
                src={profilePhoto}
                alt="Shelema Ageri - Full Stack MERN Developer"
                className="portrait-transparent-img"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-name">{t.hero.name}</span>
              <span className="caption-role">Full Stack MERN Developer</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights Row */}
      <motion.div
        className="home-highlights-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        {t.hero.highlights.map((item, index) => (
          <div key={index} className="highlight-cell">
            <span className="highlight-label">{item.label}</span>
            <span className="highlight-value">{item.sub}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Home;
