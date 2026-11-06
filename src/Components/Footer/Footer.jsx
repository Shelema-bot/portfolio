import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="bracket">&lt;</span>
            <span className="name">Shelema</span>
            <span className="dot">.</span>
            <span className="sub">dev</span>
            <span className="bracket"> /&gt;</span>
          </a>
          <p className="footer-bio">{t.footer.bio}</p>
          <div className="footer-status-pill">
            <span className="pulse-dot"></span>
            <span>{t.footer.status}</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li>
              <a href="#home">{t.nav.home}</a>
            </li>
            <li>
              <a href="#about">{t.nav.about}</a>
            </li>
            <li>
              <a href="#services">{t.nav.services}</a>
            </li>
            <li>
              <a href="#skills">{t.nav.skills}</a>
            </li>
            <li>
              <a href="#projects">{t.nav.projects}</a>
            </li>
            <li>
              <a href="#experience">{t.nav.experience}</a>
            </li>
            <li>
              <a href="#contact">{t.nav.contact}</a>
            </li>
          </ul>
        </div>

        {/* Follow Us / Social Media */}
        <div className="footer-links-group">
          <h4>{t.footer.followUs || "Follow Us"}</h4>
          <ul className="footer-social-list">
            <li>
              <a
                href="https://www.linkedin.com/in/shelema-agari-72aa40444/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9CskwHofQQ%2BfhdreaeLRiw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon-linkedin" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ijoolleeortodoksii"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane className="icon-telegram" /> Telegram Channel
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ShelemaSmartBot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="icon-telegram" /> Telegram Smart Bot
              </a>
            </li>
            <li>
              <a
                href="http://www.youtube.com/@shelemalyrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon-youtube" /> YouTube
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@shelema.lyrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="icon-tiktok" /> TikTok
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100092282975303"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon-facebook" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Direct Contact Channels */}
        <div className="footer-links-group">
          <h4>{t.footer.connect}</h4>
          <ul>
            <li>
              <a
                href="https://github.com/Shelema-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:shelemaagari@gmail.com">
                <FaEnvelope /> shelemaagari@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:0974007772">
                <FaPhoneAlt /> 0974007772
              </a>
            </li>
            <li>
              <a
                href="https://shelema-bot.github.io/portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 shelema-bot.github.io
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text">
          © {new Date().getFullYear()} Shelema Ageri. {t.footer.designedBy}.
        </p>

        <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
          <span>Back to Top</span>
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
