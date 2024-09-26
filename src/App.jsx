import { useRef } from "react";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (section) => {
    const headerOffset = 76; // Ajustează după înălțimea header-ului tău

    const getOffsetTop = (ref) => {
      if (ref.current) {
        const elementPosition = ref.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        return offsetPosition;
      }
      return 0;
    };
    if (section === "home") {
      window.scrollTo({
        behavior: "smooth",
        top: getOffsetTop(homeRef),
      });
    } else if (section === "about") {
      window.scrollTo({
        behavior: "smooth",
        top: getOffsetTop(aboutRef),
      });
    } else if (section === "projects") {
      window.scrollTo({
        behavior: "smooth",
        top: getOffsetTop(projectsRef),
      });
    } else if (section === "contact") {
      window.scrollTo({
        behavior: "smooth",
        top: getOffsetTop(contactRef),
      });
    }
  };
  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Banner ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
