import "./Home.css";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaFileDownload
} from "react-icons/fa";
import profile from "../../assets/Profile.png";

function Home() {
  const highlights = [
    { label: "BSc in Computer Science", sub: "Haramaya University (Senior)" },
    { label: "Core Stack", sub: "MongoDB, Express.js, React, Node.js" },
    { label: "Architecture", sub: "RESTful APIs & Secure JWT Auth" },
    { label: "Location", sub: "Addis Ababa & Haramaya, Ethiopia" },
  ];

  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Column: Formal Bio & CTAs with Left Alignment */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-indicator"></span>
            <span>Available for Full Stack Developer Roles</span>
          </div>

          <h1 className="home-name">
            Shelema Ageri
          </h1>

          <h2 className="home-title-role">
            Full Stack Software Developer
          </h2>

          <p className="home-summary">
            Computer Science senior at <strong>Haramaya University</strong> specializing in 
            full-stack web development with the <strong>MERN stack</strong> (MongoDB, Express.js, 
            React, Node.js). Experienced in designing RESTful APIs, scalable database architectures, 
            and delivering high-performance, responsive web applications with clean code standards.
          </p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <FaArrowRight />
            </a>

            <a
              href="./Shelema_Ageri_CV.pdf"
              download="Shelema_Ageri_CV.pdf"
              className="btn btn-secondary"
            >
              <FaFileDownload /> Download Resume
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
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
              <FaPhoneAlt /> +251 974 007 772
            </a>
          </div>
        </motion.div>

        {/* Right Column: Transparent Profile Cutout with Subtle Illuminated Framing */}
        <motion.div
          className="home-portrait-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <div className="portrait-circle-card">
            <div className="portrait-avatar-halo">
              <img
                src={profile}
                alt="Shelema Ageri - Full Stack Software Developer"
                className="portrait-transparent-img"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-name">Shelema Ageri</span>
              <span className="caption-role">Computer Science Senior & Full Stack Developer</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Highlights Strip */}
      <div className="home-highlights-row">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-cell">
            <span className="highlight-label">{item.label}</span>
            <span className="highlight-value">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;