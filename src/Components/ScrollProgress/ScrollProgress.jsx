import { useState, useEffect } from "react";
import "./ScrollProgress.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const scrollHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

          setScrollPercentage(Math.min(100, Math.max(0, progress)));
          setShowTopBtn(scrollTop > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG calculations for circular progress around button
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  return (
    <>
      {/* Top Slim Scroll Progress Bar */}
      <div className="scroll-progress-bar-container" aria-hidden="true">
        <div
          className="scroll-progress-bar-fill"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            className="back-to-top-btn"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <svg className="back-to-top-svg" viewBox="0 0 48 48">
              <circle
                className="back-to-top-circle-bg"
                cx="24"
                cy="24"
                r={radius}
              />
              <circle
                className="back-to-top-circle-progress"
                cx="24"
                cy="24"
                r={radius}
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                }}
              />
            </svg>
            <FaChevronUp className="back-to-top-icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
