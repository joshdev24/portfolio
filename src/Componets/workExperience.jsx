import { useState } from "react";
import "../styles/Experience.css";
import naveImg from "../assets/nave.png";
import React from "react";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import astronauta from "../assets/astronauta.png";
import cartel from "../assets/cartel.png";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const [page, setPage] = useState(0);
  const { language } = useLanguage(); // obtenemos el idioma
  const t = translations[language].experience; // textos de experience
  const navigate = useNavigate();

  const totalPages = t.experiences.length;
  const exp = t.experiences[page];

  // Posición de la nave: 0% → izquierda, 80% → casi al final
  const naveLeft = totalPages > 1 ? (page / (totalPages - 1)) * 80 : 0;

  return (
    <section className="project-section">
      <Navbar language={language} /> {/* pasamos el idioma al Navbar */}
      <div className="project-container">
        <h2 className="project-title">▌ {t.title} ▐</h2>

        <div className="project-wrapper">
          {/* Flecha atrás */}
          <button
            className="arrow-btn left"
            onClick={() => setPage(prev => Math.max(prev - 1, 0))}
            disabled={page === 0}
          />

          {/* Rol flotante */}
          <h3 className="experience-role">{exp.role}</h3>

          {/* Cartel */}
          <div className="project-cartel">
            <div className="project-left">
              <p className="company">
                {exp.company} | {exp.duration}
              </p>
            </div>
            <div className="project-right">
              <p className="project-description">{exp.description}</p>
            </div>
          </div>

          {/* Flecha adelante */}
          <button
            className="arrow-btn right"
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          />

          {/* Nave que se mueve de izquierda a derecha */}
          <div className="skills-ship" style={{ left: `${naveLeft}%` }}>
            <img src={naveImg} alt="Nave" style={{ width: "100%" }} />
          </div>


 {page === totalPages - 1 && (
          <button
            className="astronauta-button"
            onClick={() => navigate("/contact") }
          >
            <div className="cartel-container">
              <img src={cartel} alt="Cartel" className="cartel-image" />
              <span className="cartel-text">{t.nextLevel}</span>
            </div>
            <img src={astronauta} alt="astronauta" />
          </button>
        )}

        </div>
      </div>
    </section>
  );
}
