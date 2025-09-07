import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Navbar() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li onClick={() => navigate("/about")}>{t.about}</li>
        <li onClick={() => navigate("/skills")}>{t.skills}</li>
        <li onClick={() => navigate("/proyects")}>{t.projects}</li>
        <li onClick={() => navigate("/experience")}>{t.experience}</li>
        <li onClick={() => navigate("/contact")}>{t.contact}</li>
      </ul>
      {/* Selector de idioma */}
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginLeft: "2rem", fontWeight: "bold" }}
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </nav>
  );
}

