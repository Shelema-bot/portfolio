import { useState, useEffect } from "react";
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
  FaChevronLeft,
  FaChevronRight,
  FaExpandAlt,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import techstorePreview from "../../assets/techstore_preview.jpg";
import telegramBotPreview from "../../assets/telegram_bot_preview.png";

function Projects({ hideHeader = false }) {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [activeVideoProject, setActiveVideoProject] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [timerProgress, setTimerProgress] = useState(0);
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

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return projects.length;
    return projects.filter((p) => p.category === categoryId).length;
  };

  const projectsPerPage = 1;
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const currentProject = filteredProjects[safePage - 1];

  // Auto-play timer with smooth visual countdown progress
  useEffect(() => {
    if (!isAutoPlay || isHovered || activeModalProject || activeVideoProject || zoomImage) return;

    const tickMs = 50;
    const durationMs = 6000;
    const increment = (tickMs / durationMs) * 100;

    const timer = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrentPage((curr) => (curr >= totalPages ? 1 : curr + 1));
          return 0;
        }
        return prev + increment;
      });
    }, tickMs);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, totalPages, activeModalProject, activeVideoProject, zoomImage]);

  const handleFilterChange = (tabId) => {
    setFilter(tabId);
    setCurrentPage(1);
    setDirection(0);
    setTimerProgress(0);
  };

  const handlePrevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev <= 1 ? totalPages : prev - 1));
    setTimerProgress(0);
  };

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
    setTimerProgress(0);
  };

  const handlePageSelect = (pageNumber) => {
    if (pageNumber !== safePage) {
      setDirection(pageNumber > safePage ? 1 : -1);
      setCurrentPage(pageNumber);
      setTimerProgress(0);
    }
  };

  // Keyboard navigation support: Left / Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalProject || activeVideoProject || zoomImage) return;
      if (e.key === "ArrowLeft") {
        handlePrevPage();
      } else if (e.key === "ArrowRight") {
        handleNextPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalPages, activeModalProject, activeVideoProject, zoomImage]);

  const openVideoModal = (project) => {
    setActiveVideoProject(project);
    setCurrentStepIndex(0);
    setIsPlaying(true);
  };

  return (
    <section className={`projects ${hideHeader ? "hub-subview" : ""}`} id={hideHeader ? undefined : "projects"}>
      {!hideHeader && (
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
      )}

      {/* Filter Tabs with Dynamic Project Count Chips */}
      <div className="project-filter-tabs">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            className={`filter-btn ${filter === tab.id ? "active" : ""}`}
            onClick={() => handleFilterChange(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="filter-count-chip">{getCategoryCount(tab.id)}</span>
          </button>
        ))}
      </div>

      {/* Projects Slideshow Showcase with Interactive Side Controls */}
      <div className="projects-container">
        <div
          className="slideshow-stage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Side Arrow: Previous */}
          {totalPages > 1 && (
            <button
              className="slideshow-side-arrow prev-arrow"
              onClick={handlePrevPage}
              aria-label="Previous Project Slide"
              title="Previous (Left Arrow)"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="slideshow-track">
            <AnimatePresence mode="wait" custom={direction}>
              {currentProject && (
                <motion.div
                  key={currentProject.id}
                  custom={direction}
                  variants={{
                    enter: (dir) => ({
                      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
                      opacity: 0,
                      scale: 0.98,
                    }),
                    center: {
                      x: 0,
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.35, ease: "easeOut" },
                    },
                    exit: (dir) => ({
                      x: dir > 0 ? -80 : dir < 0 ? 80 : 0,
                      opacity: 0,
                      scale: 0.98,
                      transition: { duration: 0.25, ease: "easeIn" },
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    if (offset.x > 50 || velocity.x > 300) {
                      handlePrevPage();
                    } else if (offset.x < -50 || velocity.x < -300) {
                      handleNextPage();
                    }
                  }}
                  className="project-showcase-card glass-card featured"
                >
                  {/* Countdown Progress Bar */}
                  {isAutoPlay && (
                    <div className="slideshow-timer-bar-track">
                      <div
                        className={`slideshow-timer-bar-fill ${isHovered ? "paused" : ""}`}
                        style={{ width: `${timerProgress}%` }}
                      />
                    </div>
                  )}

                  {currentProject.image ? (
                <div className={`project-media ${currentProject.isTelegram ? "telegram-media-box" : ""}`}>
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="project-cover-img"
                    onClick={() =>
                      setZoomImage({
                        src: currentProject.image,
                        title: currentProject.title,
                        label: currentProject.label,
                      })
                    }
                    title="Click to zoom screenshot"
                  />
                  <span className="media-badge">{currentProject.label}</span>

                  {/* Quick Zoom Overlay Button */}
                  <button
                    className="media-zoom-overlay-btn"
                    onClick={() =>
                      setZoomImage({
                        src: currentProject.image,
                        title: currentProject.title,
                        label: currentProject.label,
                      })
                    }
                    title="Zoom Screenshot"
                    aria-label="Zoom Screenshot"
                  >
                    <FaExpandAlt />
                  </button>

                  {currentProject.hasVideo && (
                    <button
                      className="media-play-overlay-btn"
                      onClick={() => openVideoModal(currentProject)}
                      title={t.projects.watchVideo}
                    >
                      <FaPlay className="play-icon" />
                      <span className="play-label">{t.projects.videoHighlight}</span>
                    </button>
                  )}
                </div>
              ) : (
                <div className="project-media project-code-media">
                  <div className="code-media-header">
                    <div className="code-dots">
                      <span className="code-dot red"></span>
                      <span className="code-dot yellow"></span>
                      <span className="code-dot green"></span>
                    </div>
                    <span className="code-filename">
                      {currentProject.id === "payment-api"
                        ? "payment_gateway.controller.js"
                        : "TaskWorkflowBoard.jsx"}
                    </span>
                  </div>
                  <div className="code-media-body">
                    {currentProject.id === "payment-api" ? (
                      <pre className="code-snippet-text">
                        <code>{`// RESTful Multi-Payment Gateway Architecture
router.post('/api/v1/checkout/charge',
  authenticateJWT,
  validateTransactionPayload,
  async (req, res) => {
    const { amount, currency, method } = req.body;
    
    // Gateway Dispatch (Chapa, Telebirr, CBE)
    const tx = await PaymentGateway.process({
      userId: req.user.id,
      amount,
      currency: "ETB",
      provider: method // Chapa | Telebirr | CBE
    });

    res.status(200).json({ status: "SUCCESS", tx });
});`}</code>
                      </pre>
                    ) : (
                      <pre className="code-snippet-text">
                        <code>{`// TaskFlow Interactive Workflow State
export function TaskBoard({ boardId }) {
  const [tasks, setTasks] = useState([]);
  const [columns] = useState([
    "Backlog", "In-Progress", "Code Review", "Done"
  ]);

  const handleTaskTransition = (taskId, targetCol) => {
    updateTaskColumn(taskId, targetCol);
    syncLocalStorage(tasks);
  };

  return <KanbanBoard columns={columns} onDrop={handleTaskTransition} />;
}`}</code>
                      </pre>
                    )}
                  </div>
                  <span className="media-badge">{currentProject.label}</span>
                </div>
              )}

              <div className="project-details">
                <div className="project-header-bar">
                  <span className="project-type-tag">{currentProject.label}</span>
                  <span className="project-cat-badge">{currentProject.category}</span>
                </div>

                <h3 className="project-heading">{currentProject.title}</h3>
                <p className="project-tagline">{currentProject.tagline}</p>
                <p className="project-summary">{currentProject.description}</p>

                {/* Key Features */}
                <div className="project-feature-list">
                  {currentProject.features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">{feat.icon}</span>
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="tech-badge-container">
                  {currentProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-btn-group">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                  >
                    {currentProject.isTelegram ? <FaTelegramPlane /> : <FaExternalLinkAlt />}
                    {currentProject.liveBtnLabel}
                  </a>

                  {currentProject.hasVideo && (
                    <button
                      onClick={() => openVideoModal(currentProject)}
                      className="btn btn-secondary project-action-btn video-action-btn"
                    >
                      <FaPlay /> {t.projects.watchVideo}
                    </button>
                  )}

                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-action-btn"
                  >
                    <FaGithub /> {t.projects.viewCode}
                  </a>

                  <button
                    onClick={() => setActiveModalProject(currentProject)}
                    className="btn btn-secondary project-action-btn details-btn"
                  >
                    <FaInfoCircle /> {t.projects.detailsBtn}
                  </button>
                </div>
              </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating Side Arrow: Next */}
          {totalPages > 1 && (
            <button
              className="slideshow-side-arrow next-arrow"
              onClick={handleNextPage}
              aria-label="Next Project Slide"
              title="Next (Right Arrow)"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Slideshow Controls Panel */}
      {totalPages > 1 && (
        <div className="slideshow-controls-panel">
          <div className="slideshow-meta-bar">
            <span className="slideshow-counter-badge">
              {t.projects.paginationOf || "Slide"} <strong>0{safePage}</strong> / 0{totalPages}
            </span>

            <span className="slideshow-category-pill">{currentProject.label}</span>

            {/* Auto-Play Showcase Toggle Button */}
            <button
              className={`slideshow-autoplay-btn ${isAutoPlay ? "active" : ""}`}
              onClick={() => {
                setIsAutoPlay(!isAutoPlay);
                setTimerProgress(0);
              }}
              title={isAutoPlay ? "Pause Auto-Play" : "Start Slideshow Auto-Play"}
              aria-label="Toggle Auto-Play"
            >
              {isAutoPlay ? <FaPause className="autoplay-icon" /> : <FaPlay className="autoplay-icon" />}
              <span>{isAutoPlay ? (isHovered ? "Paused (Hover)" : "Auto-Play On (6s)") : "Start Slideshow"}</span>
              {isAutoPlay && !isHovered && <span className="slideshow-pulse-ring"></span>}
            </button>
          </div>

          <div className="slideshow-nav-row">
            <button
              className="slideshow-nav-btn prev-btn"
              onClick={handlePrevPage}
              aria-label={t.projects.paginationPrev || "Previous Project"}
              title="Previous Slide (Left Arrow)"
            >
              <FaChevronLeft /> <span>{t.projects.paginationPrev || "Previous"}</span>
            </button>

            <div className="slideshow-indicators-list">
              {filteredProjects.map((proj, idx) => {
                const pageNum = idx + 1;
                const isActive = pageNum === safePage;
                return (
                  <button
                    key={proj.id}
                    className={`slideshow-dot-btn ${isActive ? "active" : ""}`}
                    onClick={() => handlePageSelect(pageNum)}
                    aria-label={`Go to slide ${pageNum}: ${proj.title}`}
                    title={proj.title}
                  >
                    <span className="dot-number">0{pageNum}</span>
                    <span className="dot-title-short">{proj.title.split(" ")[0]}</span>
                    {isActive && (
                      <motion.span
                        layoutId="slideshowActiveDot"
                        className="slideshow-dot-glow"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              className="slideshow-nav-btn next-btn"
              onClick={handleNextPage}
              aria-label={t.projects.paginationNext || "Next Project"}
              title="Next Slide (Right Arrow)"
            >
              <span>{t.projects.paginationNext || "Next"}</span> <FaChevronRight />
            </button>
          </div>
        </div>
      )}

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

      {/* Image Lightbox Zoom Modal */}
      <AnimatePresence>
        {zoomImage && (
          <div className="project-modal-backdrop" onClick={() => setZoomImage(null)}>
            <motion.div
              className="zoom-lightbox-modal"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="zoom-modal-header">
                <div className="zoom-modal-title">
                  <h4>{zoomImage.title}</h4>
                  <span className="zoom-modal-badge">{zoomImage.label}</span>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setZoomImage(null)}
                  aria-label="Close Preview"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="zoom-modal-body">
                <img src={zoomImage.src} alt={zoomImage.title} className="zoom-full-img" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
