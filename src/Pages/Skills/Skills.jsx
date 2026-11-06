import { useState } from "react";
import "./Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLayerGroup,
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
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

  const filteredSkills =
    activeCategory === "all"
      ? t.skills.skillsList
      : t.skills.skillsList.filter((s) => s.category === activeCategory);

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

      {/* Skills Grid with Animated Percentage Progress Bars */}
      <motion.div layout className="skills-progress-grid">
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              className="skill-progress-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="skill-card-head">
                <div className="skill-title-group">
                  <h3 className="skill-title">{skill.name}</h3>
                  <span className="skill-note-text">{skill.note}</span>
                </div>
                <div className="skill-percentage-pill">{skill.percentage}%</div>
              </div>

              {/* Animated Progress Bar */}
              <div className="skill-progress-track">
                <motion.div
                  className="skill-progress-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                >
                  <span className="progress-glow"></span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;
