import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AIAssistant from "./Components/AIAssistant/AIAssistant";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="portfolio-app">
          <Navbar />
          <main>
            <Home />
            <About />
            <Services />
            <Skills />
            <Projects />
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
