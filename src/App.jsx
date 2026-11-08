import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AIAssistant from "./Components/AIAssistant/AIAssistant";
import ScrollProgress from "./Components/ScrollProgress/ScrollProgress";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="portfolio-app">
          <ScrollProgress />
          <Navbar />
          <main>
            <Home />
            <About />
            <Skills />
            <div id="work" className="work-anchor" />
            <Projects />
            <Services />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
