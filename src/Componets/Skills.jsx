import { useState, useContext } from "react";
import "../styles/Skills.css";
import { useNavigate as UseNavigate } from "react-router-dom";
import cartel from "../assets/cartel.png";
import profesor from "../assets/profesor.png";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiRedux, SiExpress } from "react-icons/si";
import React from "react";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const allSkills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#264de4" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
  { name: "Databases", icon: <FaDatabase color="#f29111" /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
];

export default function Skills() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const navigate = UseNavigate();
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const skills = allSkills.slice(startIndex, endIndex);
  const totalPages = Math.ceil(allSkills.length / itemsPerPage);

const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section className="skills-section">
      <Navbar />
      <div className="skills-container">
        <h2 className="skills-title">▌ {t.title} ▐</h2>

        <div className="skills-wrapper">
          {/* Botón atrás */}
          <button
            className="arrow-btn left"
            onClick={() => setPage(prev => Math.max(prev - 1, 0))}
            disabled={page === 0}
          />

          {/* Cartel con lista */}
          <div className="skills-cartel">
            <div className="cartel-overlay">
              <div className="skills-left">
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                      <span
                        className="skill-icon"
                        style={{
                          color: skill.icon.props.color,
                          filter: `drop-shadow(0 0 1px ${skill.icon.props.color})`
                        }}
                      >
                        {skill.icon}
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skills-separator"></div>

              <div className="skills-right">
                <p className="skills-description">{t.description1}</p>
                <p>{t.description2}</p>
                <p className="colon">{t.tip}</p>
              </div>
            </div>
          </div>

          {/* Botón adelante */}
          <button
            className="arrow-btn right"
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          />

          {/* Botón siguiente nivel */}
          <button
            className="astronauta-button"
            onClick={() => navigate("/proyects")}
          >
            <div className="cartel-container">
              <img src={cartel} alt="Cartel" className="cartel-image" />
              <span className="cartel-text">{t.nextLevel}</span>
            </div>
            <img src={profesor} alt="Profesor" />
          </button>
        </div>
      </div>
    </section>
  );
}
