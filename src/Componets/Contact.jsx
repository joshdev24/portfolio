import { useState } from "react";
import "../styles/Contact.css"; 
import form from "../assets/form.png"; 
import profesorImg from "../assets/profesor.png"; 
import astronautaImg from "../assets/astronauta.png"; 
import naveImg from "../assets/nave2.png"; 
import linkedinImg from "../assets/Linkedin.png";
import React from "react";
import Navbar from "./NavBar";
import emailjs from "@emailjs/browser"; // 👈 EmailJS
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });
  const { language } = useLanguage();
  const t = translations[language].contact;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ message: t.sending, type: "" });

    emailjs.send(
      "service_iu163xa",    // reemplaza con tu Service ID
      "template_7j9ggim",   // reemplaza con tu Template ID
      formData,
      "I3tXa3kAD9lR7lAeO"   // reemplaza con tu Public Key
    ).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({ message: t.success, type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.log("FAILED...", error);
        setStatus({ message: t.error, type: "error" });
      }
    );
  };

  return (
    <section className="contact-section">
      <Navbar />
      <div className="contact-container">
        <h2 className="contact-title">▌ {t.title} ▐</h2>
        <img src={naveImg} alt="Spaceship" className="contact-nave" />

        <div className="contact-cartel" style={{ backgroundImage: `url(${form})` }}>
          <div className="contact-overlay">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                {t.name}
                <input
                  type="text"
                  name="name"
                  placeholder={t.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                {t.email}
                <input
                  type="email"
                  name="email"
                  placeholder={t.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                {t.subject}
                <input
                  type="text"
                  name="subject"
                  placeholder={t.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                {t.message}
                <textarea
                  name="message"
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                />
              </label>

              <button type="submit" className="contact-btn">{t.send}</button>

              {/* Status debajo del botón */}
              {status.message && (
                <p className={`contact-status ${status.type}`}>{status.message}</p>
              )}

              <a
                href="https://www.linkedin.com/in/joshua-touson-1a9117149/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-btn"
              >
                <img src={linkedinImg} alt="LinkedIn" />
              </a>
            </form>
          </div>

          <img src={profesorImg} alt="Dr. Contact" className="profesor-img contact" />
          <img src={astronautaImg} alt="Astronaut" className="astronauta-img contact" />
        </div>
      </div>
    </section>
  );
}
