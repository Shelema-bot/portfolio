import "./Home.css";
import { motion } from "framer-motion";
import profile from "../../assets/Profile.jpg";

function Home() {
  return (
    <section className="home" id="home">

      {/* Home Content */}
      <motion.div
        className="home-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h1>
          Hi, I'm{" "}
          <span>
           <b> <i> Shelema Ageri</i></b>
          </span>
        </h1>

        <h2>
          Full Stack MERN Developer
        </h2>

        <p>
          I am a fourth-year Computer Science student at Haramaya
          University passionate about building modern web applications
          using React, Node.js, Express.js and MongoDB.
          I develop full-stack applications with clean design,
          responsive interfaces and real-world functionality.
        </p>

        <div className="home-buttons">

          {/* View Projects */}
          <a
            href="#projects"
            className="home-btn"
          >
            View Projects
          </a>

          {/* Download CV */}
          <a
            href="/Shelema_Ageri_CV.pdf"
            download="Shelema_Ageri_CV.pdf"
            className="home-btn cv-btn"
          >
            Download CV
          </a>

        </div>

      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="profile-box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >

        <div className="profile-circle">

          <img
            src={profile}
            alt="Shelema Ageri"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Home;