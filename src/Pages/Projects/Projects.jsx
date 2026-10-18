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
  FaInfoCircle
} from "react-icons/fa";
import projectImage from "../../assets/project.jpg";

function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const projects = [
    {
      id: "ecommerce",
      title: "Tech & Electronics E-Commerce Platform",
      category: "fullstack",
      featured: true,
      image: projectImage,
      label: "Full-Stack MERN Project",
      tagline: "End-to-End Online Store with Chapa Payment Processing & Admin Control",
      description:
        "A full-stack commercial web application engineered for purchasing technology products and consumer electronics. Features an intuitive customer storefront, dynamic shopping cart, order tracking, and automated checkout integrated with the Chapa payment gateway. Includes a comprehensive admin control panel to manage product inventory, categories, customer orders, and revenue metrics.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Chapa API", "Bcrypt"],
      features: [
        { icon: <FaShoppingCart />, text: "Shopping cart & order lifecycle workflow" },
        { icon: <FaCreditCard />, text: "Online payments via Chapa API integration" },
        { icon: <FaUserShield />, text: "Protected Admin dashboard for inventory & order dispatch" },
        { icon: <FaKey />, text: "Role-based JWT authentication and encrypted user credentials" },
      ],
      githubUrl: "https://github.com/Shelema-bot",
      demoUrl: "https://github.com/Shelema-bot",
      demoNote: "Source code and architecture documentation available on GitHub."
    },
    {
      id: "campus-connect",
      title: "Campus Connect - University Event & Student Hub",
      category: "fullstack",
      featured: false,
      label: "Campus Web Application",
      tagline: "University Event Discovery & Student Community Portal",
      description:
        "A dedicated web portal tailored for university students to discover campus workshops, tech seminars, and social activities. Students can browse upcoming events, RSVP with one click, and receive confirmation notifications.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: [
        { icon: <FaCalendarAlt />, text: "Event scheduling & RSVP attendance management" },
        { icon: <FaUserShield />, text: "Student profiles & event organizer role permissions" },
      ],
      githubUrl: "https://github.com/Shelema-bot",
      demoUrl: "https://github.com/Shelema-bot",
      demoNote: "Campus initiative project developed with MERN stack architecture."
    },
    {
      id: "taskflow",
      title: "TaskFlow - Agile Team Collaboration Board",
      category: "frontend",
      featured: false,
      label: "Productivity Web App",
      tagline: "Interactive Kanban Board with Real-Time State Progression",
      description:
        "A task and project management application featuring interactive Kanban swimlanes, state progression, sprint milestones, priority indicators, and responsive mobile-first controls.",
      technologies: ["React", "Framer Motion", "JavaScript (ES6+)", "CSS3", "Local Storage"],
      features: [
        { icon: <FaTasks />, text: "Interactive task columns (Todo, In Progress, Review, Completed)" },
        { icon: <FaInfoCircle />, text: "State persistence, smooth drag animations & priority filtering" },
      ],
      githubUrl: "https://github.com/Shelema-bot",
      demoUrl: "https://github.com/Shelema-bot",
      demoNote: "Designed for agile student teams and developer sprint workflows."
    },
    {
      id: "payment-api",
      title: "Chapa Payment & Secure Auth Microservice",
      category: "backend",
      featured: false,
      label: "RESTful Backend Architecture",
      tagline: "Modular Payment Gateway Webhook & Token Authentication Service",
      description:
        "A secure backend service demonstrating robust RESTful API patterns, Chapa payment webhook signature verification, JWT token rotation, Bcrypt password hashing, and structured error handling middleware.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Postman", "JWT", "Chapa Webhooks"],
      features: [
        { icon: <FaCreditCard />, text: "Automated webhook listeners & payment status verification" },
        { icon: <FaKey />, text: "Standardized REST endpoints with Postman verification tests" },
      ],
      githubUrl: "https://github.com/Shelema-bot",
      demoUrl: "https://github.com/Shelema-bot",
      demoNote: "Includes complete Postman documentation and environment configuration."
    }
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>Portfolio Showcase</span>
        </div>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>
        <p className="section-desc">
          Production-grade applications engineered with modern technologies, 
          clean architecture, and attention to performance and security.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-tabs">
        {[
          { id: "all", label: "All Projects" },
          { id: "fullstack", label: "Full-Stack MERN" },
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend & APIs" },
        ].map((tab) => (
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-cover-img"
                  />
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
                    <span key={idx} className="tech-pill">{tech}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-btn-group">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-action-btn"
                  >
                    <FaGithub /> Source Code
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary project-action-btn"
                  >
                    <FaExternalLinkAlt /> Architecture & Details
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
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
                  <h4>Key Architecture Highlights</h4>
                  <ul>
                    {activeModalProject.features.map((f, i) => (
                      <li key={i}>{f.text}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech-stack">
                  <h4>Technology Stack</h4>
                  <div className="tech-badge-container">
                    {activeModalProject.technologies.map((t, i) => (
                      <span key={i} className="tech-pill">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-note-box">
                  <FaInfoCircle />
                  <span>{activeModalProject.demoNote}</span>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaGithub /> View on GitHub
                </a>
                <button
                  className="btn btn-secondary"
                  onClick={() => setActiveModalProject(null)}
                >
                  Close
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