import { useState, useEffect } from "react";
import "./Work.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Services from "../Services/Services";

function Work() {
  const [activeTab, setActiveTab] = useState("projects");
  const { t } = useLanguage();

  // Listen to hash changes or initial hash navigation (#projects, #experience, #services)
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.toLowerCase().replace("#", "");
      if (hash === "projects") {
        setActiveTab("projects");
      } else if (hash === "experience") {
        setActiveTab("experience");
      } else if (hash === "services") {
        setActiveTab("services");
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    // Smoothly update URL hash without jump
    window.history.replaceState(null, "", `#${tabKey}`);
  };

  const tabs = [
    {
      id: "projects",
      label: t.workHub?.tabs?.projects || "Projects Showcase",
      icon: <FaCode />,
      count: 4,
    },
    {
      id: "experience",
      label: t.workHub?.tabs?.experience || "Experience & Education",
      icon: <FaBriefcase />,
    },
    {
      id: "services",
      label: t.workHub?.tabs?.services || "Professional Services",
      icon: <FaLaptopCode />,
      count: 4,
    },
  ];

  return (
    <section className="work-hub-section" id="work">
      {/* Invisible anchor points to preserve external deep links */}
      <span id="projects" className="work-sub-anchor" aria-hidden="true"></span>
      <span id="experience" className="work-sub-anchor" aria-hidden="true"></span>
      <span id="services" className="work-sub-anchor" aria-hidden="true"></span>

      {/* Unified Hub Section Header */}
      <div className="section-header">
        <div className="section-badge">
          <span className="dot"></span>
          <span>{t.workHub?.badge || "Portfolio & Career"}</span>
        </div>
        <h2 className="section-title">
          {t.workHub?.title || "Work &"}{" "}
          <span>{t.workHub?.titleSpan || "Experience"}</span>
        </h2>
        <p className="section-desc">
          {t.workHub?.subtitle ||
            "Explore production full-stack systems, career experience, and engineering services."}
        </p>
      </div>

      {/* Executive Segmented 3-Way Tabs Switcher */}
      <div className="work-hub-switcher-wrapper">
        <div className="work-hub-switcher">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                className={`work-switcher-btn ${isActive ? "active" : ""}`}
                onClick={() => handleTabChange(tab.id)}
                aria-selected={isActive}
                role="tab"
              >
                <span className="switcher-tab-icon">{tab.icon}</span>
                <span className="switcher-tab-label">{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="switcher-tab-count">{tab.count}</span>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeWorkTabGlow"
                    className="switcher-active-bg"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Unified Content Display with Smooth Transitions */}
      <div className="work-hub-content-container">
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="work-tab-projects"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Projects hideHeader={true} />
            </motion.div>
          )}

          {activeTab === "experience" && (
            <motion.div
              key="work-tab-experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Experience hideHeader={true} />
            </motion.div>
          )}

          {activeTab === "services" && (
            <motion.div
              key="work-tab-services"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <Services hideHeader={true} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Work;
