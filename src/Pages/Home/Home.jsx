import "./Home.css";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaArrowRight, 
  FaFileDownload,
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import profile from "../../assets/Profile.jpg";

function Home() {
  const stats = [
    { label: "BSc Computer Science", sub: "Haramaya University" },
    { label: "Full Stack Mastery", sub: "MERN Stack Specialist" },
    { label: "Flagship Project", sub: "Tech E-Commerce Platform" },
    { label: "Modern Engineering", sub: "REST APIs & JWT Security" },
  ];

  return (
    <section className="home" id="home">
      <div className="home-container">
        {/* Left Column: Bio & Calls to Action */}
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span>Available for New Roles & Collaborations</span>
          </div>

          <h1 className="home-title">
            Hi, I'm <span className="highlight-name">Shelema Ageri</span>
          </h1>

          <div className="home-role">
            <span className="role-prefix">Full Stack</span>
            <span className="role-main"> MERN Developer</span>
          </div>

          <p className="home-description">
            A fourth-year Computer Science student at <strong>Haramaya University</strong> dedicated 
            to engineering scalable, responsive, and performance-driven web applications. 
            I bridge elegant frontend experiences in <strong>React</strong> with secure, 
            robust backends powered by <strong>Node.js, Express.js</strong>, and <strong>MongoDB</strong>.
          </p>

          <div className="home-cta-group">
            <a href="#projects" className="btn btn-primary">
              View Featured Work <FaArrowRight />
            </a>

            <a
              href="./Shelema_Ageri_CV.pdf"
              download="Shelema_Ageri_CV.pdf"
              className="btn btn-secondary"
            >
              <FaFileDownload /> Download CV
            </a>

            <a href="#contact" className="btn btn-secondary contact-quick-btn">
              Let's Talk
            </a>
          </div>

          {/* Social Quick Bar */}
          <div className="home-socials">
            <a
              href="https://github.com/Shelema-bot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-icon-btn"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:shelemaagari@gmail.com"
              aria-label="Send Email"
              className="social-icon-btn"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:0974007772"
              aria-label="Call Shelema"
              className="social-icon-btn"
            >
              <FaPhoneAlt />
            </a>

            <span className="social-divider"></span>
            <span className="social-location">📍 Ethiopia</span>
          </div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Tech Badges */}
        <motion.div
          className="home-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="avatar-frame-glow">
            <div className="avatar-wrapper">
              <img
                src={profile}
                alt="Shelema Ageri - Full Stack Developer"
                className="avatar-image"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              className="floating-chip chip-react"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <FaReact className="chip-icon react-icon" />
              <div>
                <span className="chip-title">React</span>
                <span className="chip-sub">Modern Frontend</span>
              </div>
            </motion.div>

            <motion.div 
              className="floating-chip chip-node"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            >
              <FaNodeJs className="chip-icon node-icon" />
              <div>
                <span className="chip-title">Node & Express</span>
                <span className="chip-sub">RESTful APIs</span>
              </div>
            </motion.div>

            <motion.div 
              className="floating-chip chip-mongo"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <SiMongodb className="chip-icon mongo-icon" />
              <div>
                <span className="chip-title">MongoDB</span>
                <span className="chip-sub">NoSQL Architecture</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Highlights Strip */}
      <motion.div 
        className="home-stats-strip"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <h4>{item.label}</h4>
            <p>{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Home;