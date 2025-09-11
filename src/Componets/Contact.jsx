import { useState } from "react";
import "../styles/Contact.css"; 
import Navbar from "./NavBar";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import React from "react";
import linkedinIcon from "../assets/Linkedin.png";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ message: t.sending, type: "" });

    emailjs.send(
      "service_iu163xa",
      "template_7j9ggim",
      formData,
      "I3tXa3kAD9lR7lAeO"
    ).then(
      () => {
        setStatus({ message: t.success, type: "success" });
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      () => setStatus({ message: t.error, type: "error" })
    );
  };

  return (
    <section className="contact-section">
      <h1 className="contact-main-title"> {t.title} </h1>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-row">
            <label>{t.name}</label>
            <input
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-row">
            <label>{t.email}</label>
            <input
              type="email"
              name="email"
              placeholder={t.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-row">
            <label>{t.subject}</label>
            <input
              type="text"
              name="subject"
              placeholder={t.subjectPlaceholder}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-row">
            <label>{t.message}</label>
            <textarea
              name="message"
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className="contact-btn">{t.send}</button>

          {status.message && (
            <p className={`contact-status ${status.type}`}>{status.message}</p>
          )}


          
        </form>

            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="linkedin-btn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/joshua-touson-1a9117149/",
                  "_blank"
                )
              }
            />
      </div>
    </section>
  );
}
