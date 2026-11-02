import { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaUserShield,
  FaCreditCard,
  FaCalendarAlt,
  FaTasks,
  FaKey,
  FaTimes,
  FaInfoCircle,
  FaTelegramPlane,
  FaFutbol,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import projectImage from "../../assets/project.jpg";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const { t } = useLanguage();

  const projects = [
    {
      id: "oict-store",
      title: t.projects.project1.title,
      category: "fullstack",
      featured: true,
      image: projectImage,
      label: t.projects.project1.badge,
      tagline: t.projects.project1.tagline,
      description: t.projects.project1.description,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Chapa API",
        "Telebirr",
        "CBE Birr",
        "Multer",
      ],
      features: [
        { icon: <FaCreditCard />, text: t.projects.project1.features[0] },
        { icon: <FaCheckCircle />, text: t.projects.project1.features[1] },
        { icon: <FaUserShield />, text: t.projects.project1.features[2] },
        { icon: <FaShoppingCart />, text: t.projects.project1.features[3] },
        { icon: <FaKey />, text: t.projects.project1.features[4] },
      ],
      githubUrl: t.projects.project1.githubUrl,
      liveUrl: t.projects.project1.liveUrl,
      liveBtnLabel: t.projects.viewLive,
      isTelegram: false,
    },
    {
      id: "shelema-bot",
      title: t.projects.project2.title,
      category: "backend",
      featured: true,
      label: t.projects.project2.badge,
      tagline: t.projects.project2.tagline,
      description: t.projects.project2.description,
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Telegram Bot API",
        "Render Webhooks",
        "REST API",
      ],
      features: [
        { icon: <FaTelegramPlane />, text: t.projects.project2.features[0] },
        { icon: <FaCalendarAlt />, text: t.projects.project2.features[1] },
        { icon: <FaUserShield />, text: t.projects.project2.features[2] },
        { icon: <FaFutbol />, text: t.projects.project2.features[3] },
        { icon: <FaKey />, text: t.projects.project2.features[4] },
      ],
      githubUrl: t.projects.project2.githubUrl,
      liveUrl: t.projects.project2.liveUrl,
      liveBtnLabel: t.projects.viewBot,
      isTelegram: true,
    },
    {
      id: "taskflow",
      title: t.projects.project3.title,
      category: "frontend",
      featured: false,
      label: t.projects.project3.badge,
      tagline: t.projects.project3.tagline,
      description: t.projects.project3.description,
      technologies: ["React", "Framer Motion", "JavaScript (ES6+)", "CSS3", "Local Storage"],
      features: [
        { icon: <FaTasks />, text: t.projects.project3.features[0] },
        { icon: <FaInfoCircle />, text: t.projects.project3.features[1] },
        { icon: <FaCheckCircle />, text: t.projects.project3.features[2] },
      ],
      githubUrl: t.projects.project3.githubUrl,
      liveUrl: t.projects.project3.liveUrl,
      liveBtnLabel: t.projects.viewCode,
      isTelegram: false,
    },
    {
      id: "payment-api",
      title: t.projects.project4.title,
      category: "backend",
      featured: false,
      label: t.projects.project4.badge,
      tagline: t.projects.project4.tagline,
      description: t.projects.project4.description,
      technologies: ["Node.js", "Express.js", "MongoDB", "Postman", "JWT", "Chapa Webhooks"],
      features: [
        { icon: <FaCreditCard />, text: t.projects.project4.features[0] },
        { icon: <FaKey />, text: t.projects.project4.features[1] },
        { icon: <FaCheckCircle />, text: t.projects.project4.features[2] },
      ],
      githubUrl: t.projects.project4.githubUrl,
      liveUrl: t.projects.project4.liveUrl,
      liveBtnLabel: t.projects.viewCode,
      isTelegram: false,
    },
  ];

  const filterTabs = [
    { id: "all", label: t.projects.filterAll },
    { id: "fullstack", label: t.projects.filterFullstack },
    { id: "backend", label: t.projects.filterBackend },
    { id: "frontend", label: t.projects.filterFrontend },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.projects.badge}</span>
        </div>
        <h2 className="section-title">
          {t.projects.title} <span>{t.projects.titleSpan}</span>
        </h2>
        <p className="section-desc">{t.projects.subtitle}</p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${filter === tab.id ? "active" : ""}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-container">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              className={`project-showcase-card glass-card ${project.featured ? "featured" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {project.image && (
                <div className="project-media">
                  <img src={project.image} alt={project.title} className="project-cover-img" />
                  <span className="media-badge">{project.label}</span>
                </div>
              )}

              <div className="project-details">
                <div className="project-header-bar">
                  <span className="project-type-tag">{project.label}</span>
                  <span className="project-cat-badge">{project.category}</span>
                </div>

                <h3 className="project-heading">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-summary">{project.description}</p>

                {/* Key Features */}
                <div className="project-feature-list">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">{feat.icon}</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="tech-badge-container">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-btn-group">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                  >
                    {project.isTelegram ? <FaTelegramPlane /> : <FaExternalLinkAlt />}
                    {project.liveBtnLabel}
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-action-btn"
                  >
                    <FaGithub /> {t.projects.viewCode}
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary project-action-btn details-btn"
                  >
                    <FaInfoCircle /> {t.projects.detailsBtn}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <motion.div
              className="project-modal glass-card"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="modal-badge">{activeModalProject.label}</span>
                <h3>{activeModalProject.title}</h3>
              </div>

              <div className="modal-body">
                <p className="modal-description">{activeModalProject.description}</p>

                <div className="modal-info-block">
                  <h4>{t.projects.keyFeatures}</h4>
                  <ul className="modal-feature-list">
                    {activeModalProject.features.map((f, i) => (
                      <li key={i}>
                        <span className="modal-bullet-icon">{f.icon}</span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech-stack">
                  <h4>{t.projects.architecture}</h4>
                  <div className="tech-badge-container">
                    {activeModalProject.technologies.map((t, i) => (
                      <span key={i} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {activeModalProject.isTelegram ? <FaTelegramPlane /> : <FaExternalLinkAlt />}
                  {activeModalProject.liveBtnLabel}
                </a>

                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <FaGithub /> {t.projects.viewCode}
                </a>

                <button
                  className="btn btn-secondary"
                  onClick={() => setActiveModalProject(null)}
                >
                  {t.projects.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
