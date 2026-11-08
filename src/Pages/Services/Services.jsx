import "./Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCreditCard,
  FaRobot,
  FaVideo,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Services({ hideHeader = false }) {
  const { t } = useLanguage();

  const serviceIcons = {
    "web-dev": <FaLaptopCode />,
    payments: <FaCreditCard />,
    bots: <FaRobot />,
    creative: <FaVideo />,
  };

  return (
    <section className={`services ${hideHeader ? "hub-subview" : ""}`} id={hideHeader ? undefined : "services"}>
      {!hideHeader && (
        <div className="section-header">
          <div className="section-badge">
            <span className="dot"></span>
            <span>{t.services.badge}</span>
          </div>
          <h2 className="section-title">
            {t.services.title} <span>{t.services.titleSpan}</span>
          </h2>
          <p className="section-desc">{t.services.subtitle}</p>
        </div>
      )}

      <div className="services-grid">
        {t.services.cards.map((service, index) => (
          <motion.div
            key={service.id}
            className="service-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-card-top">
              <div className="service-icon-box">
                {serviceIcons[service.id]}
              </div>
              <span className="service-number">0{index + 1}</span>
            </div>

            <h3 className="service-card-title">{service.title}</h3>
            <h4 className="service-card-subtitle">{service.subtitle}</h4>
            <p className="service-card-desc">{service.desc}</p>

            <div className="service-tags">
              {service.tags.map((tag, i) => (
                <span key={i} className="service-tag">
                  <FaCheck className="tag-check" /> {tag}
                </span>
              ))}
            </div>

            <div className="service-card-footer">
              <a href="#contact" className="service-cta-link">
                <span>Inquire About Service</span>
                <FaArrowRight />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
