import "./About.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaShieldAlt,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  const cardIcons = [
    <FaGraduationCap key="grad" />,
    <FaCode key="code" />,
    <FaShieldAlt key="shield" />,
    <FaBriefcase key="briefcase" />,
  ];

  return (
    <section className="about" id="about">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.about.badge}</span>
        </div>
        <h2 className="section-title">
          {t.about.title} <span>{t.about.titleSpan}</span>
        </h2>
        <p className="section-desc">{t.about.subtitle}</p>
      </div>

      <div className="about-container">
        {/* Left Column: Story with optimal text alignment */}
        <motion.div
          className="about-story glass-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="story-header">
            <h3>Shelema Ageri</h3>
            <span className="story-tag">{t.about.storyTitle}</span>
          </div>

          <p className="story-paragraph">{t.about.p1}</p>
          <p className="story-paragraph">{t.about.p2}</p>
          <p className="story-paragraph">{t.about.p3}</p>

          {/* Highlights Checklist */}
          <div className="about-highlights-grid">
            {t.about.highlightsList.map((item, index) => (
              <div key={index} className="highlight-pill">
                <FaCheckCircle className="check-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: 4 Strategic Capability Cards */}
        <div className="about-cards-column">
          {t.about.cards.map((card, index) => (
            <motion.div
              key={index}
              className="about-info-card glass-card"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="info-icon-box">{cardIcons[index]}</div>
              <div className="info-card-text">
                <div className="info-card-top">
                  <h4>{card.title}</h4>
                  <span className="card-badge">{card.badge}</span>
                </div>
                <div className="info-detail">{card.detail}</div>
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
