import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./i18n/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Navbar />
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Experiences />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
