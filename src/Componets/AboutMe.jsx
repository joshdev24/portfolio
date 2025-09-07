import profile from "../assets/profile.png";
import React from "react";
import { useNavigate as UseNavigate } from "react-router-dom";
import overlay1 from "../assets/overlay1.png";
import astronauta from "../assets/astronauta.png";
import cartel from "../assets/cartel.png";
import "../styles/AboutMe.css";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const AboutMe = () => {
  const navigate = UseNavigate();
  const { language } = useLanguage();
  const t = translations[language]; // 👉 selecciona los textos según idioma

  return (
    <div className="about-page">
      <Navbar />
      <h1 className="about-title">{t.about.title}</h1>

      <div className="about-content">
        <div className="about-image-container">
          <img className="about-image" src={profile} alt="Joshua Touson" />
          <div
            className="about-image-overlay"
            style={{ backgroundImage: `url(${overlay1})` }}
          ></div>
        </div>
        <p className="about-text">{t.about.description}</p>
      </div>

      <button className="astronauta-button" onClick={() => navigate("/skills")}>
        <div className="cartel-container">
          <img src={cartel} alt="Cartel" className="cartel-image" />
          <span className="cartel-text">{t.about.nextLevel}</span>
        </div>
        <img src={astronauta} alt="Astronauta" />
      </button>
    </div>
  );
};

export default AboutMe;

