import { useState, useRef, useEffect } from "react";
import "./AIAssistant.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaTrashAlt,
  FaExternalLinkAlt,
  FaMagic,
  FaMinus,
  FaCode,
  FaTelegramPlane,
  FaShoppingBag,
  FaBriefcase,
  FaShareAlt,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import profilePhoto from "../../assets/input_file_0.png";
import cvPdf from "../../assets/Shelema_Ageri_CV.pdf";

export default function AIAssistant() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: t.ai.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Update welcome message when language changes if it's the only message
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === "welcome") {
        return [
          {
            id: "welcome",
            sender: "ai",
            text: t.ai.welcome,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ];
      }
      return prev;
    });
  }, [lang, t]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isMinimized, isTyping]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  const getAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase();

    // Check for Services
    if (
      q.includes("service") ||
      q.includes("tajaajil") ||
      q.includes("አገልግሎት") ||
      q.includes("offer") ||
      q.includes("what can you do")
    ) {
      return t.ai.responses.services;
    }

    // Check for Skills / Tech Stack
    if (
      q.includes("skill") ||
      q.includes("dandeettii") ||
      q.includes("ክህሎት") ||
      q.includes("mern") ||
      q.includes("react") ||
      q.includes("node") ||
      q.includes("stack") ||
      q.includes("frontend") ||
      q.includes("backend") ||
      q.includes("tech") ||
      q.includes("%") ||
      q.includes("percent")
    ) {
      return t.ai.responses.skills;
    }

    // Check for OICT_TechStore / E-Commerce / Video Demo
    if (
      q.includes("store") ||
      q.includes("ecommerce") ||
      q.includes("e-commerce") ||
      q.includes("oict_techstore") ||
      q.includes("chapa") ||
      q.includes("payment") ||
      q.includes("kaffaltii") ||
      q.includes("ክፍያ") ||
      q.includes("ቴሌብር") ||
      q.includes("telebirr") ||
      q.includes("video") ||
      q.includes("viidiyoo") ||
      q.includes("ቪዲዮ") ||
      q.includes("demo")
    ) {
      return t.ai.responses.oict_store;
    }

    // Check for Telegram Bot / Shelema Smart Bot
    if (
      q.includes("bot") ||
      q.includes("telegram") ||
      q.includes("smart") ||
      q.includes("webhook") ||
      q.includes("football") ||
      q.includes("render") ||
      q.includes("ቦት") ||
      q.includes("ቴሌግራም")
    ) {
      return t.ai.responses.bot;
    }

    // Check for Education / Experience / University / GPA
    if (
      q.includes("education") ||
      q.includes("degree") ||
      q.includes("haramaya") ||
      q.includes("university") ||
      q.includes("experience") ||
      q.includes("gpa") ||
      q.includes("oict solutions") ||
      q.includes("award") ||
      q.includes("honor") ||
      q.includes("barnoota") ||
      q.includes("muuxannoo") ||
      q.includes("ትምህርት") ||
      q.includes("የስራ ልምድ") ||
      q.includes("student")
    ) {
      return t.ai.responses.education;
    }

    // Check for Social Media / Follow / Profiles
    if (
      q.includes("social") ||
      q.includes("follow") ||
      q.includes("linkedin") ||
      q.includes("tiktok") ||
      q.includes("youtube") ||
      q.includes("facebook") ||
      q.includes("channel") ||
      q.includes("hordoof") ||
      q.includes("ማህበራዊ") ||
      q.includes("መከታተል")
    ) {
      return t.ai.responses.socials;
    }

    // Check for Contact / Hire / Phone / Email
    if (
      q.includes("contact") ||
      q.includes("hire") ||
      q.includes("reach") ||
      q.includes("phone") ||
      q.includes("email") ||
      q.includes("qunnam") ||
      q.includes("bilbila") ||
      q.includes("ማግኘት") ||
      q.includes("ስልክ") ||
      q.includes("ኢሜይል") ||
      q.includes("call")
    ) {
      return t.ai.responses.contact;
    }

    return t.ai.responses.fallback;
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = getAIResponse(query);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text: t.ai.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // Helper to parse markdown links and bold formatting safely in chat text
  const formatText = (text) => {
    const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\n)/g);
    return parts.map((part, index) => {
      if (part === "\n") {
        return <br key={index} />;
      }
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const linkHref = linkMatch[2];
        const isAnchor = linkHref.startsWith("#");

        if (isAnchor) {
          return (
            <button
              key={index}
              className="ai-chat-link ai-chat-anchor-btn"
              onClick={() => {
                const el = document.querySelector(linkHref);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {linkText}
            </button>
          );
        }

        if (linkHref.toLowerCase().includes("cv") || linkHref.toLowerCase().includes("pdf")) {
          return (
            <a
              key={index}
              href={cvPdf}
              download="Shelema_Ageri_CV.pdf"
              className="ai-chat-link ai-chat-cv-btn"
            >
              {linkText}
            </a>
          );
        }

        return (
          <a
            key={index}
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ai-chat-link"
          >
            {linkText} <FaExternalLinkAlt size={10} />
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="ai-assistant-container">
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="ai-trigger-btn"
            onClick={handleOpen}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            aria-label={t.ai.drawerTitle || "Open Shelema AI Assistant"}
          >
            <span className="ai-btn-glow-ring"></span>
            <div className="ai-btn-inner">
              <FaRobot className="ai-bot-icon" />
              <FaMagic className="ai-sparkle-badge" />
            </div>
            <span className="ai-status-indicator" title="Online">
              <span className="ai-status-ping"></span>
            </span>
            <div className="ai-btn-tooltip">
              <span className="ai-tooltip-dot"></span>
              <span>{t.ai.drawerTitle || "Shelema AI"}</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Drawer / Window with backdrop-blur-md glassmorphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`ai-chat-window ${isMinimized ? "minimized" : ""}`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-info">
                <div className="ai-avatar-wrapper">
                  <img src={profilePhoto} alt="Shelema Avatar" className="ai-avatar" />
                  <span className="ai-avatar-online"></span>
                </div>
                <div className="ai-header-text">
                  <h3 className="ai-header-title">
                    <FaMagic className="sparkle-icon" /> {t.ai.drawerTitle}
                  </h3>
                  <p className="ai-header-status">{t.ai.status}</p>
                </div>
              </div>

              <div className="ai-header-actions">
                <button
                  className="ai-header-btn"
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Expand" : "Minimize"}
                  aria-label="Minimize or Expand Chat"
                >
                  <FaMinus />
                </button>
                <button
                  className="ai-header-btn"
                  onClick={handleClearChat}
                  title={t.ai.clear}
                  aria-label="Clear chat history"
                >
                  <FaTrashAlt />
                </button>
                <button
                  className="ai-header-btn close-btn"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  aria-label="Close Chat"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Body (Hidden if minimized) */}
            {!isMinimized && (
              <>
                <div className="ai-chat-body">
                  {/* Messages Feed */}
                  <div className="ai-messages-list">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`ai-message-row ${msg.sender}`}>
                        {msg.sender === "ai" && (
                          <div className="ai-msg-avatar">
                            <FaRobot />
                          </div>
                        )}
                        <div className="ai-message-bubble">
                          <div className="ai-msg-text">{formatText(msg.text)}</div>
                          <span className="ai-msg-time">{msg.timestamp}</span>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="ai-message-row ai">
                        <div className="ai-msg-avatar">
                          <FaRobot />
                        </div>
                        <div className="ai-message-bubble typing-bubble">
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Prompts Chips */}
                  <div className="ai-quick-prompts">
                    <p className="ai-prompts-label">{t.ai.quickPromptTitle}</p>
                    <div className="ai-prompts-pills">
                      <button
                        className="ai-prompt-pill"
                        onClick={() => handleSendMessage(t.ai.prompts[0])}
                      >
                        <FaBriefcase /> {t.ai.prompts[0]}
                      </button>
                      <button
                        className="ai-prompt-pill"
                        onClick={() => handleSendMessage(t.ai.prompts[1])}
                      >
                        <FaCode /> {t.ai.prompts[1]}
                      </button>
                      <button
                        className="ai-prompt-pill"
                        onClick={() => handleSendMessage(t.ai.prompts[2])}
                      >
                        <FaShoppingBag /> {t.ai.prompts[2]}
                      </button>
                      <button
                        className="ai-prompt-pill"
                        onClick={() => handleSendMessage(t.ai.prompts[3])}
                      >
                        <FaTelegramPlane /> {t.ai.prompts[3]}
                      </button>
                      <button
                        className="ai-prompt-pill"
                        onClick={() => handleSendMessage(t.ai.prompts[4])}
                      >
                        <FaShareAlt /> {t.ai.prompts[4]}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <form
                  className="ai-chat-input-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.ai.inputPlaceholder}
                    className="ai-chat-input"
                  />
                  <button
                    type="submit"
                    className="ai-chat-send-btn"
                    disabled={!input.trim()}
                    aria-label="Send message"
                  >
                    <FaPaperPlane />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
