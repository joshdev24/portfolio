import React, { useState } from "react";
import "../styles/Experience.css";
import Navbar from "./NavBar";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import clickOverlayImg from "../assets/click-overlay.png";

export default function Experience() {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].experience;

  const totalPages = t.experiences.length;
  const exp = t.experiences[page];

  return (
    <section className="experience-section">
      <h2 className="experience-main-title">{t.title}</h2>

      <div className="experience-container">
        <div className="experience-title-wrapper">
          <button
            className="arrow-btn left"
            onClick={() => {
              setPage(prev => Math.max(prev - 1, 0));
              setOpen(false);
            }}
            disabled={page === 0}
          />
          <h2 className="experience-title">{exp.role}</h2>
          <button
            className="arrow-btn right"
            onClick={() => {
              setPage(prev => Math.min(prev + 1, totalPages - 1));
              setOpen(false);
            }}
            disabled={page === totalPages - 1}
          />
        </div>

        <div className="experience-content">
          {!open ? (
            <div
              className="clicktoopen-overlay"
              style={{ backgroundImage: `url(${clickOverlayImg})` }}
              onClick={() => setOpen(true)}
            />
          ) : (
            <div className="experience-description-box">
              <p className="experience-company">
                {exp.company} | {exp.duration}
              </p>
              <p className="experience-description">{exp.description}</p>


              <button
                className="close-btn"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

