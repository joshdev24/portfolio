const translations = {
  en: {
    navbar: {
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    // AboutMe
    about: {
      title2: "Hello interstellar traveler!",
      title: "it's Joshua",
      description:
        "A passionate fullstack developer with a love for creating engaging web experiences. Graduate from National University of Technology in Buenos Aires, Argentina.",
      nextLevel: "Click me to the next level",
    },
    // Skills
    skills: {
      title: "My Skills"
    },
    // Projects
    projects: {
      title: "My Projects",
      viewProject: "View on GitHub",

    },
    // Experience
    experience: {
      title: "Work Experience",
      nextLevel: "Click to the Final Level",
      experiences: [
        {
          role: "Software Programmer",
          company: "Exard",
          duration: " January 2025 - April 2025",
          description:
            "Designed and implemented a modern, responsive website for a tech retail business, integrating a supplier API to automate stock management by synchronizing inventory, pricing, and availability in real time, while optimizing inventory handling to significantly reduce errors and improve operational efficiency.",
        },
        {
          role: "Fullstack Developer",
          company: "Freelance",
          duration: "2025 - Present",
          description:
            "Landing Page for a law and business services firm built with React for the frontend and Node.js Express for the backend using MongoDB. Provides tools for managing legal and corporate procedures including secure client authentication document submission and appointment scheduling. Designed to optimize client interaction improve efficiency and deliver a professional user experience.",
        },
      ],
    },
    // Contact
    contact: {
  title: "Contact Me",
  name: "Name",
  namePlaceholder: "Your name",
  email: "Email",
  emailPlaceholder: "your email",
  subject: "Subject",
  subjectPlaceholder: "Subject",
  message: "Message",
  messagePlaceholder: "Your message...",
  send: "Send",
  sending: "Sending...",
  success: "Message sent ✅",
  error: "Failed to send message ❌"

}

  },
  es: {
    // Home
    welcome: "Bienvenido",
    pressPlay: "Presiona start para entrar al modo historia",
    start: "INICIAR",
    follow: "Sígueme en",
    navbar: {
      about: "Sobre mi",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    // AboutMe
    about: {
      title2: "Hola viajero interestelar!",
      title: "¡¡Soy Joshua!!",
      description:
        "Un desarrollador fullstack apasionado con amor por crear experiencias web atractivas. Graduado de la Universidad Tecnologica Nacional en Buenos Aires, Argentina.",
    },
    // Skills
    skills: {
      title: "Mis Habilidades",
      nextLevel: "Haz clic para el siguiente nivel"
    },
    // Projects
    projects: {
      title: "Mis Proyectos",
      viewProject: "Ver en GitHub",
    },
    // Experience
    experience: {
      title: "Experiencia Laboral",
      experiences: [
        {
          role: "Programador de Software",
          company: "Exard ",
          duration: "Enero 2025 - Abril 2025",
          description:
            "Maquete e implemente un sitio web moderno y responsivo para un negocio de venta de tecnologia integrando una API de proveedores para automatizar la gestion de stock mediante la sincronizacion de inventario precios y disponibilidad en tiempo real optimizando el manejo de inventario para reducir errores y mejorar significativamente la eficiencia operativa",
        },
        {
          role: "Desarrollador Fullstack",
          company: "Freelance",
          duration: "2025 - Presente",
          description:
                 "Landing Page para un estudio de abogados y servicios empresariales construida con React en el frontend y MongoDB en el backend. Ofrece herramientas para gestionar tramites juridicos y empresariales incluyendo autenticacion segura de clientes envio de documentos y sistema de reservas de citas. Disenada para optimizar la interaccion con el cliente mejorar la eficiencia y brindar una experiencia profesional."

        },
      ],
    },
    // Contact
    contact: {
  title: "Contactame",
  name: "Nombre",
  namePlaceholder: "Tu nombre",
  email: "Correo electronico",
  emailPlaceholder: "tu correo",
  subject: "Asunto",
  subjectPlaceholder: "Asunto",
  message: "Mensaje",
  messagePlaceholder: "Tu mensaje...",
  send: "Enviar",
  sending: "Enviando...",
  success: "Mensaje enviado ✅",
  error: "Error al enviar ❌"
}
  },
};

export default translations;
