
import React, { useState } from "react";
import "../styles/AboutMe.css";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";


const AboutMe = () => {

  const { language } = useLanguage();
  const t = translations[language];
  const [open, setOpen] = useState(false);

  return (
    <div className="about-page ">
      <h1 className="about-title2 ">{t.about.title2}</h1>


      <h1 className="about-title">{t.about.title}</h1>

      <div className="about-content">
        {!open ? (
          <div className="clicktoopen-overlay" onClick={() => setOpen(true)}>
          </div>
        ) : (
          <div className="about-text">
            <p>{t.about.description}</p>
            <button className="close-btn" onClick={() => setOpen(false)}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;


