import React from "react";
import "../styles/Home.css";
import linkedinIcon from "../assets/Linkedin.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export const Home = ({ playerName = "player1" }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const t = translations[language]; // textos según idioma actual

  return (
    <div className="macbook-pro">
      <div className="container">
        <div className="welcome-box">
          <h1 className="welcome-text">
            {t.welcome} <br /> {playerName}
          </h1>
        </div>

        <div className="story-mode">
          <p className="press-play">{t.pressPlay}</p>
        </div>

        <div className="start-container">
          <button className="start-btn" onClick={() => navigate("/about")}>
            {t.start}
          </button>
        </div>

        <div className="follow-section">
          <p className="follow-text">{t.follow}</p>
          <div className="socials-placeholder">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="linkedin-button"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/joshua-touson-1a9117149/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
