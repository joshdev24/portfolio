import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/Skills.css";
import "../styles/proyect.css";
import profesorImg from "../assets/profesor.png"; 
import cartel3 from "../assets/cartel1.png"; 
import icon from "../assets/ecommerce.png"; 
import icon2 from "../assets/whatsapp.png"; 
import fondoIcon from "../assets/fondo-icon.png"; 
import naveImg from "../assets/nave.png"; 
import cartel from "../assets/cartel.png";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const allProjects = [
  {
    title: "E-commerce App",
    description: {
      en: "Full stack ecommerce application built with React for the frontend and Node.js and Express for the backend using MongoDB and MySQL. Users can create edit delete and publish products with secure user authentication and registration confirmation. The platform delivers a fast interactive and personalized shopping experience.",
      es: "Aplicacion de ecommerce full stack construida con React en el frontend y Node.js Express en el backend usando MongoDB y MySQL. Los usuarios pueden crear editar eliminar y publicar productos con autenticacion segura y confirmacion de registro. La plataforma ofrece una experiencia de compra rapida interactiva y personalizada."
    },
    image: icon,
    github: "https://github.com/tuusuario/ecommerce",
  },
  {
    title: "WhatsApp Clone",
    description: {
      en: "Built with React HTML CSS and JavaScript simulating a complete messaging system. Includes contact management personalized chats and user profiles. Designed to provide an interactive dynamic and responsive experience with a clean interface and smooth animations.",
      es: "Construido con React y JavaScript simulando un sistema completo de mensajeria. Incluye gestion de contactos chats personalizados y perfiles de usuario. Disenado para ofrecer una experiencia interactiva dinamica y responsiva con interfaz limpia y animaciones suaves."
    },
    image: icon2,
    github: "https://github.com/tuusuario/whatsapp-clone",
  },
  {
    title: "Click Mini Game",
    description: {
      en: "A fast paced web minigame built with React and Vite. The goal is to click as quickly as possible within a limited time with real time score tracking and visual effects. Optimized to support jitter clicking for smooth and responsive gameplay.",
      es: "Un minijuego web de ritmo rapido construido con React y Vite. El objetivo es hacer clics lo mas rapido posible dentro de un tiempo limitado con seguimiento de puntuacion en tiempo real y efectos visuales. Optimizado para soportar jitter clicking para una jugabilidad fluida y responsiva."
    },
    image: "/projects/click-game.png",
    github: "https://github.com/tuusuario/click-mini-game",
  },
]


export default function Projects() {
  const [page, setPage] = useState(0);
  const totalPages = allProjects.length + 1; 
  const navigate = useNavigate();

 const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section className="skills-section">
      <Navbar />
      <div className="skills-container">
        <h2 className="skills-title">▌{t.title}▐</h2>

        <div className="skills-wrapper">
          <button
            className="arrow-btn left"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          />

          {page === 0 ? (
            <div
              className="skills-cartel intro-cartel"
              style={{ backgroundImage: `url(${cartel3})` }}
            >
              <div className="cartel-overlay">
                <div className="skills-right1">
                  <p className="skills-description1">{t.introTitle}</p>
                  <p>{t.introText}</p>
                  <p className="colon1">{t.introTip}</p>
                </div>
              </div>
              <img src={profesorImg} alt="Dr. ProjectGuy" className="profesor-img intro"/>
            </div>
          ) : (
            <div className="skills-cartel">
              <div className="cartel-overlay">
                <div className="skills-left">
                  <div
                    className="project-bg"
                    style={{
                      backgroundImage: `url(${fondoIcon})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={allProjects[page - 1].image}
                      alt={allProjects[page - 1].title}
                      className="project-img"
                    />
                  </div>
                  <a
                    href={allProjects[page - 1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    {t.viewProject}
                  </a>
                </div>

                <div className="skills-separator"></div>

                <div className="skills-right">
                  <h3>{allProjects[page - 1].title}</h3>
                  <p>{allProjects[page - 1].description[language]}</p>
                </div>
              </div>
              <img src={profesorImg} alt="Dr. ProjectGuy" className="profesor-img project"/>
            </div>
          )}

          <button
            className="arrow-btn right"
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
          />

          {page === totalPages - 1 && (
            <div className="nave-container">
              <div className="ship-flotante" style={{ backgroundImage: `url(${cartel})` }}>
                <div className="ship-overlay">
                  <p className="ship-text">{t.nextLevel}</p>
                </div>
              </div>
              <button className="nave-btn" onClick={() => navigate("/experience")}>
                <img src={naveImg} alt="Go to Experience" className="nave-img" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
