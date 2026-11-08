import { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaFileDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import profilePhoto from "../../assets/input_file_0.png";
import cvPdf from "../../assets/Shelema_Ageri_CV.pdf";

function Home() {
  const { lang, t } = useLanguage();

  const roles = t.hero.roles || [
    "Full-Stack MERN Developer",
    "Telegram Bot Architect",
    "FinTech & Payment Gateway Specialist",
    "Computer Science Specialist @ Haramaya",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);

  // Reset when language switches
  useEffect(() => {
    setCurrentRoleIndex(0);
    setCurrentText("");
    setIsDeleting(false);
  }, [lang]);

  // Typewriter effect cycle
  useEffect(() => {
    const fullRole = roles[currentRoleIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.slice(0, currentText.length + 1));
        setTypingSpeed(75 + Math.random() * 25);

        if (currentText.length + 1 >= fullRole.length) {
          // Pause when role is completely typed
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullRole.slice(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText.length - 1 <= 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleDownloadCV = async (e) => {
    e.preventDefault();
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

          <div className="home-role-container">
            <h2 className="home-title-role">
              <span className="typewriter-text">{currentText || roles[0]}</span>
              <span className="typewriter-cursor"></span>
            </h2>
            <span className="home-role-sub">
              {lang === "om"
                ? "Yuunivarsiitii Haramayaa (Waggaa 4ffaa) • Qabxii Barnootaa: >75% GPA"
                : lang === "am"
                ? "ሀረማያ ዩኒቨርሲቲ (4ኛ ዓመት) • የትምህርት ውጤት፡ >75% GPA"
                : "Haramaya University (4th Year) • Academic Standing: Above 75% GPA"}
            </span>
          </div>

          <p className="home-summary">{t.hero.summary}</p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewProjects} <FaArrowRight />
            </a>

            <a
              href={cvPdf}
              download="Shelema_Ageri_CV.pdf"
              onClick={handleDownloadCV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaFileDownload /> {t.hero.downloadCV}
            </a>

            <a href="#contact" className="btn btn-secondary">
              {t.hero.contactMe}
            </a>
          </div>

          {/* Direct Professional Channels & Socials */}
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
              href="https://www.linkedin.com/in/shelema-agari-72aa40444/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9CskwHofQQ%2BfhdreaeLRiw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="contact-pill"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://t.me/ijoolleeortodoksii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Channel"
              className="contact-pill"
            >
              <FaTelegramPlane /> Telegram
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

        {/* Right Column: Profile Portrait in Glowing Cyan-Blue Pulse Gradient Border with Floating Animation */}
        <motion.div
          className="home-portrait-wrapper"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
        >
          <motion.div
            className="portrait-circle-card"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="portrait-avatar-halo-pulse">
              <div className="portrait-avatar-halo">
                <img
                  src={profilePhoto}
                  alt="Shelema Ageri - Full Stack MERN Developer"
                  className="portrait-transparent-img"
                />
              </div>
            </div>
            <div className="portrait-caption">
              <span className="caption-name">{t.hero.name}</span>
              <span className="caption-role">Full Stack MERN Developer</span>
            </div>
          </motion.div>
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
