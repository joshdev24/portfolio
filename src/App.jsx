import React from "react";
import { useState } from "react";
import AboutMe from "./Componets/AboutMe";
import Skills from "./Componets/Skills";
import Projects from "./Componets/proyect";
import Experience from "./Componets/workExperience";
import ContactForm from "./Componets/Contact";
import Navbar from "./Componets/NavBar";
import "./styles/App.css";
import { LanguageProvider } from "./context/LanguageContext";


function App() {
  const [language, setLanguage] = useState("en");

  // Scroll suave hacia sección por id
  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <LanguageProvider value={{ language, setLanguage }}>
      <div className="App">
        <Navbar
          language={language}
          setLanguage={setLanguage}
          handleLinkClick={handleLinkClick}
        />

        {/* Secciones del landing */}
        <section id="about">
          <AboutMe />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </div>
    </LanguageProvider>
  );
}

export default App;