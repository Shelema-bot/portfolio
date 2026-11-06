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
  FaPlay,
  FaPause,
  FaStepForward,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import techstorePreview from "../../assets/techstore_preview.jpg";
import telegramBotPreview from "../../assets/telegram_bot_preview.png";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeVideoProject, setActiveVideoProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const { t } = useLanguage();

  const projects = [
    {
      id: "oict-store",
      title: t.projects.project1.title,
      category: "fullstack",
      featured: true,
      image: techstorePreview,
      label: t.projects.project1.badge,
      tagline: t.projects.project1.tagline,
      description: t.projects.project1.description,
      hasVideo: true,
      videoDuration: t.projects.project1.videoDuration,
      videoHighlights: t.projects.project1.videoHighlights,
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Auth",
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
      image: telegramBotPreview,
      label: t.projects.project2.badge,
      tagline: t.projects.project2.tagline,
      description: t.projects.project2.description,
      hasVideo: true,
      videoDuration: t.projects.project2.videoDuration,
      videoHighlights: t.projects.project2.videoHighlights,
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
        "Telegram Bot API",
        "Render Webhooks",
        "RESTful APIs",
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
      hasVideo: false,
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
      hasVideo: false,
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

  const openVideoModal = (project) => {
    setActiveVideoProject(project);
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

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
                <div className={`project-media ${project.isTelegram ? "telegram-media-box" : ""}`}>
                  <img src={project.image} alt={project.title} className="project-cover-img" />
                  <span className="media-badge">{project.label}</span>
                  {project.hasVideo && (
                    <button
                      className="media-play-overlay-btn"
                      onClick={() => openVideoModal(project)}
                      title={t.projects.watchVideo}
                    >
                      <FaPlay className="play-icon" />
                      <span className="play-label">{t.projects.videoHighlight}</span>
                    </button>
                  )}
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

                  {project.hasVideo && (
                    <button
                      onClick={() => openVideoModal(project)}
                      className="btn btn-secondary project-action-btn video-action-btn"
                    >
                      <FaPlay /> {t.projects.watchVideo}
                    </button>
                  )}

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

      {/* Interactive Video Highlight Embed Modal */}
      <AnimatePresence>
        {activeVideoProject && (
          <div className="project-modal-backdrop" onClick={() => setActiveVideoProject(null)}>
            <motion.div
              className="project-modal glass-card video-player-modal"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setActiveVideoProject(null)}
                aria-label="Close video player"
              >
                <FaTimes />
              </button>

              <div className="modal-header">
                <span className="modal-badge">{activeVideoProject.videoDuration}</span>
                <h3>{activeVideoProject.title} — Video Walkthrough</h3>
              </div>

              {/* Simulated Interactive Video Player Screen */}
              <div className="interactive-video-player">
                <div className="video-viewport">
                  <div className="video-screen-banner">
                    <span className="video-rec-dot"></span>
                    <span className="video-rec-text">HD 1080p Walkthrough Demo</span>
                    <span className="video-step-counter">
                      Chapter {currentStepIndex + 1} of {activeVideoProject.videoHighlights.length}
                    </span>
                  </div>

                  <div className="video-screen-content">
                    <div className="video-chapter-headline">
                      <h4>{activeVideoProject.videoHighlights[currentStepIndex]}</h4>
                      <p>
                        Live production verification: authentic input routing, role-based workflows,
                        real-time database mutations, and instantaneous user feedback.
                      </p>
                    </div>

                    <div className="video-mock-graphic">
                      {activeVideoProject.image && (
                        <div className="video-screen-preview-box">
                          <img
                            src={activeVideoProject.image}
                            alt="Walkthrough screen"
                            className="video-screen-img"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Control Bar */}
                  <div className="video-controls-bar">
                    <button
                      className="video-play-btn"
                      onClick={() => setIsPlaying(!isPlaying)}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>

                    <div className="video-timeline-scrubber">
                      <div
                        className="video-timeline-fill"
                        style={{
                          width: `${((currentStepIndex + 1) / activeVideoProject.videoHighlights.length) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <button
                      className="video-next-btn"
                      onClick={() =>
                        setCurrentStepIndex(
                          (prev) => (prev + 1) % activeVideoProject.videoHighlights.length
                        )
                      }
                      title="Next Chapter"
                    >
                      <FaStepForward /> Next Chapter
                    </button>
                  </div>
                </div>

                {/* Chapter List */}
                <div className="video-chapters-panel">
                  <h5>{t.projects.videoSectionTitle}</h5>
                  <div className="video-chapters-list">
                    {activeVideoProject.videoHighlights.map((hl, i) => (
                      <button
                        key={i}
                        className={`video-chapter-item ${currentStepIndex === i ? "active" : ""}`}
                        onClick={() => setCurrentStepIndex(i)}
                      >
                        <span className="chapter-index">0{i + 1}</span>
                        <span className="chapter-text">{hl}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={activeVideoProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  {activeVideoProject.isTelegram ? <FaTelegramPlane /> : <FaExternalLinkAlt />}
                  {activeVideoProject.liveBtnLabel}
                </a>
                <button className="btn btn-secondary" onClick={() => setActiveVideoProject(null)}>
                  {t.projects.modalClose}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                {activeModalProject.image && (
                  <div className="modal-preview-image-box">
                    <img
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      className="modal-preview-img"
                    />
                  </div>
                )}

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
                    {activeModalProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
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

                {activeModalProject.hasVideo && (
                  <button
                    onClick={() => {
                      const p = activeModalProject;
                      setActiveModalProject(null);
                      openVideoModal(p);
                    }}
                    className="btn btn-secondary video-action-btn"
                  >
                    <FaPlay /> {t.projects.watchVideo}
                  </button>
                )}

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
