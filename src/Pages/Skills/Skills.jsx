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
  FaTools,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { useLanguage } from "../../context/LanguageContext";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useLanguage();

  const categories = [
    { id: "all", label: t.skills.categories.all, icon: <FaLayerGroup /> },
    { id: "frontend", label: t.skills.categories.frontend, icon: <FaReact /> },
    { id: "backend", label: t.skills.categories.backend, icon: <FaServer /> },
    { id: "database", label: t.skills.categories.database, icon: <FaDatabase /> },
    { id: "tools", label: t.skills.categories.tools, icon: <FaTools /> },
  ];

  const allSkills = [
    // Frontend
    {
      name: "React.js",
      category: "frontend",
      icon: <FaReact />,
      color: "#38bdf8",
      level: "Core",
      note: "Hooks, State Management, React Router, Component Trees",
    },
    {
      name: "JavaScript (ES6+)",
      category: "frontend",
      icon: <FaJs />,
      color: "#f59e0b",
      level: "Core",
      note: "Async/Await, Promises, Closures, DOM APIs & ES Modules",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      icon: <SiTailwindcss />,
      color: "#06b6d4",
      level: "Proficient",
      note: "Utility-first Design, Responsive Layouts, Design Systems",
    },
    {
      name: "HTML5 & Web Semantics",
      category: "frontend",
      icon: <FaHtml5 />,
      color: "#f97316",
      level: "Core",
      note: "Semantic Structures, Accessibility Standards (a11y), SEO",
    },
    {
      name: "CSS3 & Modern Layouts",
      category: "frontend",
      icon: <FaCss3Alt />,
      color: "#3b82f6",
      level: "Core",
      note: "Flexbox, CSS Grid, Custom Properties, Fluid Typography",
    },

    // Backend
    {
      name: "Node.js",
      category: "backend",
      icon: <FaNodeJs />,
      color: "#22c55e",
      level: "Core",
      note: "Event Loop, Asynchronous Runtime, Express Microservices",
    },
    {
      name: "Express.js",
      category: "backend",
      icon: <SiExpress />,
      color: "#64748b",
      level: "Core",
      note: "RESTful Endpoints, Custom Middlewares, Error Handlers",
    },
    {
      name: "JWT & Security Auth",
      category: "backend",
      icon: <FaServer />,
      color: "#a855f7",
      level: "Proficient",
      note: "Token-based Auth, Role-Based Access Control (RBAC), Bcrypt",
    },
    {
      name: "Chapa & Multi-Gateways",
      category: "backend",
      icon: <FaServer />,
      color: "#10b981",
      level: "Core",
      note: "Chapa API, Telebirr, CBE Birr, Webhook Signatures",
    },

    // Database
    {
      name: "MongoDB & Atlas",
      category: "database",
      icon: <SiMongodb />,
      color: "#10b981",
      level: "Core",
      note: "Document Modeling, Atlas Cloud Cluster, Aggregations",
    },
    {
      name: "Mongoose ODM",
      category: "database",
      icon: <FaDatabase />,
      color: "#ef4444",
      level: "Core",
      note: "Schema Validation, Population, Query Middlewares",
    },

    // Tools & DevOps
    {
      name: "Git Version Control",
      category: "tools",
      icon: <FaGitAlt />,
      color: "#f97316",
      level: "Core",
      note: "Branching Models, Conflict Resolution, Git CLI",
    },
    {
      name: "GitHub & CI/CD",
      category: "tools",
      icon: <FaGithub />,
      color: "#38bdf8",
      level: "Proficient",
      note: "Repository Governance, GitHub Actions, Pages Deployment",
    },
    {
      name: "Postman",
      category: "tools",
      icon: <SiPostman />,
      color: "#f97316",
      level: "Core",
      note: "API Endpoint Testing, Mock Servers, Test Suites",
    },
    {
      name: "Vite & Tooling",
      category: "tools",
      icon: <SiVite />,
      color: "#8b5cf6",
      level: "Proficient",
      note: "Lightning-fast HMR, Rollup Bundling, Modern Configs",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.skills.badge}</span>
        </div>
        <h2 className="section-title">
          {t.skills.title} <span>{t.skills.titleSpan}</span>
        </h2>
        <p className="section-desc">{t.skills.subtitle}</p>
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
              <div className="skill-icon-wrapper" style={{ color: skill.color }}>
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
