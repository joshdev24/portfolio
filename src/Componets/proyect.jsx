import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/proyect.css";
import clickOverlayImg from "../assets/click-overlay.png";
import React from "react";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

const allProjects = [
  {
    title: "E-commerce App",
    description: {
      en: "Developed with React for the frontend, and Node.js with Express for the backend, using MongoDB and MySQL as databases. Includes product management (create, edit, delete, publish) and secure authentication with email confirmation, delivering a fast and personalized shopping experience.",

      es: "Desarrollada con React para el frontend, y Node.js con Express para el backend, utilizando MongoDB y MySQL como bases de datos. Incluye gestión de productos (crear, editar, eliminar, publicar) y autenticación segura con confirmación por correo electrónico, ofreciendo una experiencia de compra rápida y personalizada.",
    },
    github: "https://github.com/joshdev24/ProyectoFinalFrontEnd/tree/main/src",
  },
  {
    title: "WhatsApp Clone",
    description: {
      en: "Built with React, HTML, CSS, and JavaScript, simulating a messaging system with contact management, personalized chats, and user profiles. Focused on creating an interactive, dynamic, and responsive experience with a clean interface and smooth animations.",
      es: "Construida con React, HTML, CSS y JavaScript, simulando un sistema de mensajería con gestión de contactos, chats personalizados y perfiles de usuario, insipirada en la pelicula de Intesamente. Enfocada en brindar una experiencia interactiva, dinámica y responsiva con una interfaz limpia y animaciones fluidas.",
    github: "https://github.com/joshdev24/proyectodespFRONTEND/tree/main/src",
  },
},
  {
    title: "Click Mini Game",
    description: {
      en:  "A fast-paced clicker mini game developed with React. Includes jitter-clicking support, real-time score tracking, and fun animations to keep the player engaged while competing for the best score.",
      es: "Un mini juego rápido de clicks desarrollado con React. Incluye soporte para jitter clicking, conteo de puntaje en tiempo real y animaciones divertidas para mantener al jugador motivado mientras compite por el mejor récord.",
    },
    github: "https://github.com/joshdev24/JuegoGato/tree/main/src",
  },
];

export default function Projects() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const totalPages = allProjects.length;
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <section className="projects-section">
      <Navbar />
      <h2 className="projects-main-title">{t.title}</h2>

      <div className="projects-container">
        <div className="projects-title-wrapper">
          <button
            className="arrow-btn left"
            onClick={() => { setPage(prev => Math.max(prev - 1, 0)); setOpen(false); }}
          />
          <h2 className="projects-title">{allProjects[page].title}</h2>
          <button
            className="arrow-btn right"
            onClick={() => { setPage(prev => Math.min(prev + 1, totalPages - 1)); setOpen(false); }}
            disabled={page === totalPages - 1}
          />
        </div>

        <div className="projects-content">
  {!open ? (
    <div
      className="clicktoopen-overlay"
      style={{ backgroundImage: `url(${clickOverlayImg})` }}
      onClick={() => setOpen(true)}
    />
  ) : (
    <div className="projects-description-wrapper">
      <div className="projects-description-box">
        <p>{allProjects[page].description[language]}</p>
        <a
          href={allProjects[page].github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          {t.viewProject}
        </a>
        <button className="close-btn" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>

    </div>
  )}
</div>
</div>
</section>
  );
}