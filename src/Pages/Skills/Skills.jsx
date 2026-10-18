import { useState } from "react";
import "./Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaVideo,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaTools
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiVite
} from "react-icons/si";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: <FaLayerGroup /> },
    { id: "frontend", label: "Frontend", icon: <FaReact /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
    { id: "database", label: "Database", icon: <FaDatabase /> },
    { id: "tools", label: "Tools & DevOps", icon: <FaTools /> },
  ];

  const allSkills = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact />,
      color: "#38bdf8",
      level: "Advanced",
      note: "Hooks, Router, Component Lifecycle"
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: <FaJs />,
      color: "#facc15",
      level: "Proficient",
      note: "Async/Await, Closures, DOM"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss />,
      color: "#38bdf8",
      level: "Intermediate",
      note: "Responsive Design, Utility-First"
    },
    {
      name: "HTML5",
      category: "frontend",
      icon: <FaHtml5 />,
      color: "#f97316",
      level: "Advanced",
      note: "Semantic Structure & Accessibility"
    },
    {
      name: "CSS3",
      category: "frontend",
      icon: <FaCss3Alt />,
      color: "#3b82f6",
      level: "Advanced",
      note: "Flexbox, Grid, Animations, Variables"
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs />,
      color: "#22c55e",
      level: "Advanced",
      note: "Asynchronous runtime, Event Loop"
    },
    {
      name: "Express.js",
      category: "backend",
      icon: <SiExpress />,
      color: "#e2e8f0",
      level: "Advanced",
      note: "REST APIs, Routing, Middlewares"
    },
    {
      name: "JWT Authentication",
      category: "backend",
      icon: <FaServer />,
      color: "#a855f7",
      level: "Proficient",
      note: "Tokens, Bcrypt, Role-Based Access"
    },
    {
      name: "Chapa Payment API",
      category: "backend",
      icon: <FaServer />,
      color: "#10b981",
      level: "Hands-on",
      note: "Webhooks, E-Commerce Gateways"
    },

    // Database
    {
      name: "MongoDB",
      category: "database",
      icon: <SiMongodb />,
      color: "#10b981",
      level: "Advanced",
      note: "Document Modeling, Atlas, NoSQL"
    },
    {
      name: "Mongoose ODM",
      category: "database",
      icon: <FaDatabase />,
      color: "#ef4444",
      level: "Proficient",
      note: "Schema Validation, Population, Indexes"
    },

    // Tools & DevOps
    {
      name: "Git",
      category: "tools",
      icon: <FaGitAlt />,
      color: "#f97316",
      level: "Proficient",
      note: "Version Control, Branching, Merging"
    },
    {
      name: "GitHub",
      category: "tools",
      icon: <FaGithub />,
      color: "#f8fafc",
      level: "Proficient",
      note: "Workflows, Actions, Collaboration"
    },
    {
      name: "Postman",
      category: "tools",
      icon: <SiPostman />,
      color: "#f97316",
      level: "Advanced",
      note: "API Testing, Automated Requests"
    },
    {
      name: "Vite",
      category: "tools",
      icon: <SiVite />,
      color: "#8b5cf6",
      level: "Proficient",
      note: "Modern Build Tooling, Bundling"
    },
    {
      name: "Video Editing",
      category: "tools",
      icon: <FaVideo />,
      color: "#ec4899",
      level: "Creative",
      note: "Technical Content & Multimedia Storytelling"
    }
  ];

  const filteredSkills = activeCategory === "all"
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>Technical Expertise</span>
        </div>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <p className="section-desc">
          A collection of languages, frameworks, libraries, and tools I use 
          to build full-stack, production-grade applications.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="skills-tabs-container">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`skill-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="tab-icon">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div layout className="skills-grid">
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              className="skill-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
            >
              <div 
                className="skill-icon-wrapper"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <div className="skill-content">
                <div className="skill-top-bar">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level-badge">{skill.level}</span>
                </div>
                <p className="skill-note">{skill.note}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;