import { useState, useContext } from "react";
import "../styles/Skills.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiMysql, SiExpress, SiPostman } from "react-icons/si";
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
  { name: "Postman", icon: <SiPostman color="#bc4a4aff" /> },
  { name: "Express", icon: <SiExpress color="#000000" /> },
  
];

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title"> {t.title} </h2>

        <div className="skills-wrapper">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span
                className="skill-icon"
                style={{
                  color: skill.icon.props.color,
                  filter: `drop-shadow(0 0 2px ${skill.icon.props.color})`
                }}
              >
                {skill.icon}
              </span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
