import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
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
            <Skills />
            <Projects />
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
