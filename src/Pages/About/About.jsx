import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaShieldAlt,
  FaLaptopCode,
  FaCheckCircle
} from "react-icons/fa";

function About() {
  const highlights = [
    "BSc Computer Science (Senior Undergraduate)",
    "Full-Stack MERN Stack Architecture",
    "Chapa Payment API & Webhook Processing",
    "Secure JWT Authentication & Password Hashing",
    "RESTful API Design & MongoDB Schema Modeling",
    "Git Collaboration & Postman API Verification"
  ];

  const infoCards = [
    {
      icon: <FaGraduationCap />,
      title: "Academic Background",
      detail: "BSc in Computer Science",
      sub: "Haramaya University (4th Year Senior, Expected 2025/2026)",
      badge: "Degree Candidate"
    },
    {
      icon: <FaCode />,
      title: "Core Specialization",
      detail: "Full-Stack Web Engineering",
      sub: "React.js, Node.js, Express.js, MongoDB",
      badge: "MERN Stack"
    },
    {
      icon: <FaShieldAlt />,
      title: "Backend & Systems",
      detail: "RESTful APIs & Security",
      sub: "JWT Authentication, Middleware, Chapa Gateway",
      badge: "Production Ready"
    },
    {
      icon: <FaLaptopCode />,
      title: "Engineering Workflow",
      detail: "Modern Tooling & Standards",
      sub: "Git, GitHub, Postman, Clean Code & Responsive Design",
      badge: "Industry Standards"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>Background</span>
        </div>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <p className="section-desc">
          Education, technical foundations, and full-stack software development experience.
        </p>
      </div>

      <div className="about-container">
        {/* Left Column: Story */}
        <motion.div
          className="about-story glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="story-header">
            <h3>Shelema Ageri</h3>
            <span className="story-tag">Software Engineer</span>
          </div>

          <p className="story-paragraph">
            I am a fourth-year <strong>Computer Science student at Haramaya University</strong> with 
            a disciplined foundation in software engineering, algorithms, database systems, and web architecture. 
            My primary technical focus is full-stack web engineering using the 
            <strong> MERN stack (MongoDB, Express.js, React, Node.js)</strong>.
          </p>

          <p className="story-paragraph">
            Throughout my academic career, I have applied engineering theory to real-world software projects. 
            Notably, I designed and built a comprehensive <strong>Tech & Electronics E-Commerce Platform</strong>, 
            incorporating user authentication, inventory management, shopping carts, order workflows, and online payment 
            processing integrated with the <strong>Chapa Payment Gateway</strong>.
          </p>

          <p className="story-paragraph">
            I prioritize writing readable, maintainable code, developing secure RESTful APIs, and building 
            responsive user interfaces that offer consistent performance across devices.
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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