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
    { id: "all", label: "All Skills", icon: <FaLayerGroup /> },
    { id: "frontend", label: "Frontend", icon: <FaReact /> },
    { id: "backend", label: "Backend", icon: <FaServer /> },
    { id: "database", label: "Databases", icon: <FaDatabase /> },
    { id: "tools", label: "Tools & DevOps", icon: <FaTools /> },
  ];

  const allSkills = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact />,
      color: "#38bdf8",
      level: "Core",
      note: "Components, Hooks, State Management, Router"
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: <FaJs />,
      color: "#facc15",
      level: "Core",
      note: "Async/Await, Promises, Closures, DOM APIs"
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss />,
      color: "#38bdf8",
      level: "Proficient",
      note: "Utility-first, Responsive UI Layouts"
    },
    {
      name: "HTML5 & Semantic Web",
      category: "frontend",
      icon: <FaHtml5 />,
      color: "#f97316",
      level: "Core",
      note: "Semantic Elements, Accessibility Standards"
    },
    {
      name: "CSS3 & Modern Styling",
      category: "frontend",
      icon: <FaCss3Alt />,
      color: "#3b82f6",
      level: "Core",
      note: "Flexbox, Grid, Custom Properties, Media Queries"
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs />,
      color: "#22c55e",
      level: "Core",
      note: "Server-side JavaScript, Asynchronous Runtime"
    },
    {
      name: "Express.js",
      category: "backend",
      icon: <SiExpress />,
      color: "#e2e8f0",
      level: "Core",
      note: "RESTful Endpoints, Routing, Custom Middlewares"
    },
    {
      name: "JWT Authentication",
      category: "backend",
      icon: <FaServer />,
      color: "#a855f7",
      level: "Proficient",
      note: "Token-based Auth, Bcrypt Password Hashing, RBAC"
    },
    {
      name: "Chapa Payment Gateway",
      category: "backend",
      icon: <FaServer />,
      color: "#10b981",
      level: "Hands-on",
      note: "API Integration, Webhook Signature Verification"
    },

    // Database
    {
      name: "MongoDB",
      category: "database",
      icon: <SiMongodb />,
      color: "#10b981",
      level: "Core",
      note: "Document Modeling, Indexing, MongoDB Atlas"
    },
    {
      name: "Mongoose ODM",
      category: "database",
      icon: <FaDatabase />,
      color: "#ef4444",
      level: "Core",
      note: "Schema Design, Data Validation, Population"
    },

    // Tools & DevOps
    {
      name: "Git Version Control",
      category: "tools",
      icon: <FaGitAlt />,
      color: "#f97316",
      level: "Core",
      note: "Branching, Pull Requests, Merge Strategies"
    },
    {
      name: "GitHub & CI/CD",
      category: "tools",
      icon: <FaGithub />,
      color: "#f8fafc",
      level: "Proficient",
      note: "Repository Management, GitHub Actions, Pages"
    },
    {
      name: "Postman",
      category: "tools",
      icon: <SiPostman />,
      color: "#f97316",
      level: "Core",
      note: "REST API Endpoint Testing & Documentation"
    },
    {
      name: "Vite",
      category: "tools",
      icon: <SiVite />,
      color: "#8b5cf6",
      level: "Proficient",
      note: "Fast Dev Environment, Production Bundling"
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
          <span>Technical Stack</span>
        </div>
        <h2 className="section-title">
          Skills & <span>Technologies</span>
        </h2>
        <p className="section-desc">
          Core technologies, frameworks, and developer tools used for full-stack software development.
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
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