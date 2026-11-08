import { useState } from "react";
import "./Experience.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Experience() {
  const [activeTab, setActiveTab] = useState("all");
  const { t } = useLanguage();

  return (
    <section className="experience" id="experience">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.experience.badge}</span>
        </div>
        <h2 className="section-title">
          {t.experience.title} <span>{t.experience.titleSpan}</span>
        </h2>
        <p className="section-desc">{t.experience.subtitle}</p>
      </div>

      {/* Filter Tabs */}
      <div className="experience-tabs">
        <button
          className={`exp-tab-btn ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          <span>All Milestones</span>
        </button>
        <button
          className={`exp-tab-btn ${activeTab === "work" ? "active" : ""}`}
          onClick={() => setActiveTab("work")}
        >
          <FaBriefcase /> <span>{t.experience.workTab}</span>
        </button>
        <button
          className={`exp-tab-btn ${activeTab === "edu" ? "active" : ""}`}
          onClick={() => setActiveTab("edu")}
        >
          <FaGraduationCap /> <span>{t.experience.eduTab}</span>
        </button>
        <button
          className={`exp-tab-btn ${activeTab === "awards" ? "active" : ""}`}
          onClick={() => setActiveTab("awards")}
        >
          <FaAward /> <span>{t.experience.awardsTab}</span>
        </button>
      </div>

      <div className="experience-content-grid">
        <AnimatePresence mode="wait">
          {/* Work Experience */}
          {(activeTab === "all" || activeTab === "work") && (
            <motion.div
              key="work-section"
              className="timeline-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="group-heading">
                <div className="group-icon-circle work">
                  <FaBriefcase />
                </div>
                <h3>{t.experience.workTab}</h3>
              </div>

              <div className="timeline-items">
                {t.experience.workItems.map((item, index) => (
                  <div key={index} className="timeline-card glass-card">
                    <div className="timeline-card-header">
                      <div>
                        <span className="company-badge">{item.type}</span>
                        <h4 className="role-title">{item.role}</h4>
                        <h5 className="company-name">{item.company}</h5>
                      </div>
                      <div className="timeline-meta-box">
                        <span className="meta-pill">
                          <FaCalendarAlt /> {item.period}
                        </span>
                        <span className="meta-pill">
                          <FaMapMarkerAlt /> {item.location}
                        </span>
                      </div>
                    </div>

                    <ul className="timeline-responsibilities">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <FaCheckCircle className="timeline-bullet" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="timeline-tech-tags">
                      {item.technologies.map((tech, i) => (
                        <span key={i} className="timeline-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Education */}
          {(activeTab === "all" || activeTab === "edu") && (
            <motion.div
              key="edu-section"
              className="timeline-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="group-heading">
                <div className="group-icon-circle edu">
                  <FaGraduationCap />
                </div>
                <h3>{t.experience.eduTab}</h3>
              </div>

              <div className="timeline-items">
                {t.experience.educationItems.map((edu, index) => (
                  <div key={index} className="timeline-card glass-card">
                    <div className="timeline-card-header">
                      <div>
                        <span className="standing-badge">{edu.standing}</span>
                        <h4 className="role-title">{edu.degree}</h4>
                        <h5 className="company-name">{edu.institution}</h5>
                      </div>
                      <div className="timeline-meta-box">
                        <span className="meta-pill">
                          <FaCalendarAlt /> {edu.period}
                        </span>
                        <span className="meta-pill">
                          <FaMapMarkerAlt /> {edu.location}
                        </span>
                      </div>
                    </div>

                    <p className="edu-description">{edu.description}</p>

                    <div className="coursework-box">
                      <span className="coursework-title">Key Core Coursework:</span>
                      <div className="coursework-pills">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="course-pill">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Awards & Honors */}
          {(activeTab === "all" || activeTab === "awards") && (
            <motion.div
              key="awards-section"
              className="timeline-group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              <div className="group-heading">
                <div className="group-icon-circle awards">
                  <FaAward />
                </div>
                <h3>{t.experience.awardsTab}</h3>
              </div>

              <div className="timeline-items">
                {t.experience.awardsItems.map((award, index) => (
                  <div key={index} className="timeline-card glass-card award-card">
                    <div className="timeline-card-header">
                      <div>
                        <span className="award-badge">Honors & Recognition</span>
                        <h4 className="role-title">{award.title}</h4>
                        <h5 className="company-name">{award.issuer}</h5>
                      </div>
                      <div className="timeline-meta-box">
                        <span className="meta-pill">
                          <FaCalendarAlt /> {award.period}
                        </span>
                      </div>
                    </div>

                    <p className="award-description">{award.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Experience;
