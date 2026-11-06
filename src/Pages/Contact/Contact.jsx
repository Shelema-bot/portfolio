import { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shelemaagari@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("0974007772");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:shelemaagari@gmail.com?subject=${subjectLine}&body=${bodyContent}`;

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.contact.badge}</span>
        </div>
        <h2 className="section-title">
          {t.contact.title} <span>{t.contact.titleSpan}</span>
        </h2>
        <p className="section-desc">{t.contact.subtitle}</p>
      </div>

      <div className="contact-layout">
        {/* Left Column: Direct Info Cards */}
        <motion.div
          className="contact-info-panel"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-status-card glass-card">
            <span className="live-indicator"></span>
            <div>
              <h4>{t.hero.status}</h4>
              <p>Addis Ababa & Haramaya, Ethiopia</p>
            </div>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaEnvelope />
            </div>
            <div className="channel-text">
              <span className="channel-label">{t.contact.emailLabel}</span>
              <a href="mailto:shelemaagari@gmail.com" className="channel-value">
                shelemaagari@gmail.com
              </a>
            </div>
            <button
              className="copy-btn"
              onClick={handleCopyEmail}
              title={copiedEmail ? t.contact.copied : t.contact.copyEmail}
              aria-label="Copy Email"
            >
              {copiedEmail ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaPhoneAlt />
            </div>
            <div className="channel-text">
              <span className="channel-label">{t.contact.phoneLabel}</span>
              <a href="tel:0974007772" className="channel-value">
                +251 974 007 772 / 0974007772
              </a>
            </div>
            <button
              className="copy-btn"
              onClick={handleCopyPhone}
              title={copiedPhone ? t.contact.copied : t.contact.copyPhone}
              aria-label="Copy Phone"
            >
              {copiedPhone ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaGithub />
            </div>
            <div className="channel-text">
              <span className="channel-label">{t.contact.githubLabel}</span>
              <a
                href="https://github.com/Shelema-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value"
              >
                github.com/Shelema-bot
              </a>
            </div>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="channel-text">
              <span className="channel-label">{t.contact.locationLabel}</span>
              <span className="channel-value">{t.contact.locationVal}</span>
            </div>
          </div>

          {/* Social Channels / Follow Us Card */}
          <div className="contact-socials-card glass-card">
            <div className="socials-card-header">
              <span className="socials-badge-dot"></span>
              <h4>{t.contact.followUs || "Follow Us & Social Channels"}</h4>
            </div>
            <p className="socials-card-desc">
              {t.contact.followSubtitle || "Connect with me across all my official professional & social profiles:"}
            </p>

            <div className="social-chips-grid">
              <a
                href="https://www.linkedin.com/in/shelema-agari-72aa40444/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9CskwHofQQ%2BfhdreaeLRiw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip linkedin"
              >
                <FaLinkedin className="social-chip-icon" />
                <span className="social-chip-title">LinkedIn</span>
              </a>

              <a
                href="https://t.me/ijoolleeortodoksii"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip telegram"
              >
                <FaTelegramPlane className="social-chip-icon" />
                <span className="social-chip-title">Telegram Channel</span>
              </a>

              <a
                href="https://t.me/ShelemaSmartBot"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip telegram-bot"
              >
                <FaTelegram className="social-chip-icon" />
                <span className="social-chip-title">Smart Bot</span>
              </a>

              <a
                href="http://www.youtube.com/@shelemalyrics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip youtube"
              >
                <FaYoutube className="social-chip-icon" />
                <span className="social-chip-title">YouTube</span>
              </a>

              <a
                href="https://tiktok.com/@shelema.lyrics"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip tiktok"
              >
                <FaTiktok className="social-chip-icon" />
                <span className="social-chip-title">TikTok</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100092282975303"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip facebook"
              >
                <FaFacebook className="social-chip-icon" />
                <span className="social-chip-title">Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="contact-form-panel glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-heading">
            <h3>{t.contact.formTitle}</h3>
            <p>I typically respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">{t.contact.namePlaceholder}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.emailPlaceholder}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">{t.contact.subjectPlaceholder}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t.contact.subjectPlaceholder}
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.contact.messagePlaceholder}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder={t.contact.messagePlaceholder}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FaPaperPlane /> {submitted ? t.contact.sending : t.contact.sendBtn}
            </button>

            {submitted && (
              <div className="form-success-alert">
                <FaCheck /> {t.contact.successMsg}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
