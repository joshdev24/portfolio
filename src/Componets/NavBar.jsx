import React, { useState } from "react";
import "../styles/Navbar.css";
import { useLanguage } from "../context/LanguageContext"; // 👈 importar contexto
import translations from "../translations"; // 👈 importar textos

export default function Navbar({ handleLinkClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage(); // ✅ usamos contexto directo
  const t = translations[language].navbar;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <h1>MyPortfolio</h1>
        </div>

        {/* Botón hamburguesa */}
        <div className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Lista de links */}
        <ul className={`navbar-list ${isOpen ? "active" : ""}`}>
          <li onClick={() => { handleLinkClick("about"); setIsOpen(false); }}>{t.about}</li>
          <li onClick={() => { handleLinkClick("skills"); setIsOpen(false); }}>{t.skills}</li>
          <li onClick={() => { handleLinkClick("projects"); setIsOpen(false); }}>{t.projects}</li>
          <li onClick={() => { handleLinkClick("experience"); setIsOpen(false); }}>{t.experience}</li>
          <li onClick={() => { handleLinkClick("contact"); setIsOpen(false); }}>{t.contact}</li>
        </ul>

        {/* Selector de idioma */}
        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </nav>
  );
}
