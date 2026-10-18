import { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck
} from "react-icons/fa";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shelemaagari@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+251974007772");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link as fallback
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
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">
          Let's Build <span>Together</span>
        </h2>
        <p className="section-desc">
          Have an exciting project, full-time opportunity, or internship position? 
          Reach out through the form or any of my direct contact channels.
        </p>
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
              <h4>Currently Available</h4>
              <p>Actively interviewing for software engineering roles and freelance development.</p>
            </div>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaEnvelope />
            </div>
            <div className="channel-text">
              <span className="channel-label">Email Me</span>
              <a href="mailto:shelemaagari@gmail.com" className="channel-value">
                shelemaagari@gmail.com
              </a>
            </div>
            <button
              className="copy-btn"
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
            >
              {copiedEmail ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaPhoneAlt />
            </div>
            <div className="channel-text">
              <span className="channel-label">Call / Phone</span>
              <a href="tel:0974007772" className="channel-value">
                +251 974 007 772 / 0974007772
              </a>
            </div>
            <button
              className="copy-btn"
              onClick={handleCopyPhone}
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <FaCheck className="copied-icon" /> : <FaCopy />}
            </button>
          </div>

          <div className="contact-channel-card glass-card">
            <div className="channel-icon-box">
              <FaGithub />
            </div>
            <div className="channel-text">
              <span className="channel-label">GitHub Repository</span>
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
              <span className="channel-label">Location</span>
              <span className="channel-value">Haramaya & Addis Ababa, Ethiopia</span>
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
            <h3>Send Me a Message</h3>
            <p>I typically respond within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="message-form">
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. Alex Johnson"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="alex@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Collaboration / Opportunity"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your idea, timeline, or position..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              <FaPaperPlane /> {submitted ? "Opening Mailer..." : "Send Message"}
            </button>

            {submitted && (
              <div className="form-success-alert">
                <FaCheck /> Thank you! Launching your default email client with your message.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;