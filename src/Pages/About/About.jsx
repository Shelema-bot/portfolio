import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaShieldAlt,
  FaVideo,
  FaCheckCircle
} from "react-icons/fa";

function About() {
  const highlights = [
    "Full-Stack MERN Architecture",
    "BSc Computer Science (4th Year)",
    "Chapa Payment & Webhook Integration",
    "Secure JWT Authentication & Authorization",
    "RESTful API Design & MongoDB Modeling",
    "Content Creation & Video Editing"
  ];

  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Background",
      detail: "BSc in Computer Science",
      sub: "Haramaya University (4th Year Senior)",
      badge: "Top >75% Academic Standing"
    },
    {
      icon: <FaCode />,
      title: "MERN Stack Specialist",
      detail: "Full-Stack Web Engineering",
      sub: "React 19, Node.js, Express, MongoDB",
      badge: "Production Ready"
    },
    {
      icon: <FaShieldAlt />,
      title: "Backend & Security",
      detail: "REST APIs & Cloud Architecture",
      sub: "JWT Auth, Bcrypt, Middleware, Chapa Gateway",
      badge: "Secure Architecture"
    },
    {
      icon: <FaVideo />,
      title: "Creative & Media",
      detail: "Video Editing & Content",
      sub: "Technical visual storytelling & UI design",
      badge: "Creative Mindset"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>Discover My Journey</span>
        </div>
        <h2 className="section-title">
          Who I Am & <span>What I Build</span>
        </h2>
        <p className="section-desc">
          Get to know my educational background, engineering philosophy, 
          and passion for crafting complete web solutions.
        </p>
      </div>

      <div className="about-container">
        {/* Left Column: Story */}
        <motion.div
          className="about-story glass-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="story-header">
            <h3>Shelema Ageri</h3>
            <span className="story-tag">Full-Stack MERN Developer</span>
          </div>

          <p className="story-paragraph">
            I am a fourth-year <strong>Computer Science student at Haramaya University</strong> with 
            an ardent passion for full-stack software development and scalable web engineering. 
            Throughout my academic journey, I have cultivated a deep foundation in data structures, 
            algorithms, database systems, and modern software design.
          </p>

          <p className="story-paragraph">
            My primary expertise lies in the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong>. 
            I love transforming complex concepts into high-impact, user-friendly digital products. 
            I architected and engineered a comprehensive <strong>Tech & Electronics E-Commerce Platform</strong> featuring 
            secure JWT authentication, interactive shopping carts, inventory management, Chapa online payment integration, 
            and a complete administrative control panel.
          </p>

          <p className="story-paragraph">
            Beyond coding, I have a creative edge in video editing and multimedia production, 
            allowing me to approach software development with both rigorous logical precision 
            and keen aesthetic sensibility.
          </p>

          {/* Highlights Checklist */}
          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-pill">
                <FaCheckCircle className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Key Pillars */}
        <div className="about-cards-column">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              className="about-info-card glass-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="info-icon-box">
                {card.icon}
              </div>
              <div className="info-card-text">
                <div className="info-card-top">
                  <h4>{card.title}</h4>
                  <span className="card-badge">{card.badge}</span>
                </div>
                <p className="info-detail">{card.detail}</p>
                <span className="info-sub">{card.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;