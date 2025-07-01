export const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí"
    },
    // Page titles and descriptions
    meta: {
      title: "Portfolio de Rob - Ingeniero de Software con +5 años de experiencia.",
      description: "Portfolio profesional de Roberto MacLean, ingeniero de software especializado en desarrollo web moderno."
    },
    // Sections
    sections: {
      workExperience: "Experiencia laboral",
      projects: "Proyectos",
      aboutMe: "Sobre mí"
    },
    // Hero section
    hero: {
      role: "Ingeniero de Software",
      location: "de Viña del Mar, Chile.",
      contact: "Contáctame",
      resume: "Currículum"
    },
    // Experience
    experience: {
      dates: {
        current: "Junio 2022 - Actualidad",
        bice: "Febrero 2020 - Mayo 2022",
        uv: "Febrero 2018 - Enero 2020"
      },
      positions: {
        softwareEngineer: "Ingeniero de Software"
      },
      companies: {
        witi: "WITI",
        bice: "Bice Vida",
        uv: "Universidad de Valparaíso"
      },
      descriptions: {
        witi: "Diseño e implementación de microservicios backend para optimizar los procesos de despacho a domicilio, reduciendo la latencia y mejorando la eficiencia operativa. Desarrollé aplicaciones escalables utilizando Java Spring Boot, Python (Serverless) y NestJS, desplegadas con Docker y Kubernetes sobre AWS. Administré bases de datos PostgreSQL, MySQL, Oracle y MongoDB, e integré flujos ETL automatizados mediante Apache Airflow. Además, optimicé el rendimiento en servicios críticos, logrando una significativa reducción en los tiempos de respuesta.",
        bice: "Desarrollo de micro servicios tales como envíos de correos electrónicos utilizando templates, procesos de ETL, gestión de solicitudes de servicio, validación para proceso de entrega de créditos hipotecarios, aplicaciones de backoffice y otros.",
        uv: "Desarrollo de una aplicación web para el Registro Nacional del Cáncer. Encargado de desarrollar la lógica para la carga de formularios, seguridad mediante JWT, perfiles y gestión de usuarios, mediante el uso de Java/Spring-boot. También, a cargo de desarrollar el Front-end de la aplicación mediante Angular."
      }
    },
    // Projects
    projects: {
      items: {
        robWeb: {
          title: "Rob Web",
          description: "Mi pagina personal con algunas de las cosas que me interesan."
        },
        robResume: {
          title: "Currículum de Rob",
          description: "Mi currículum con el historial de mis trabajos."
        },
        robBlog: {
          title: "Blog de Rob",
          description: "Este es mi blog personal que algún día rellenaré con información de mi interés."
        },
        gifExpert: {
          title: "Gif Expert App",
          description: "Una pagína para buscar Gifs realizada durante el curso de React de Fernando Herrera."
        }
      },
      buttons: {
        code: "Código",
        preview: "Vista previa"
      }
    },
    // About Me
    aboutMe: {
      paragraph1: "Me llamo Roberto Mac lean mis amigos me llaman Rob. Soy Ingeniero Civil Informático y estudié en la Universidad de Valparaíso. Actualmente estoy trabajando como Ingeniero de Software para una empresa de Outsourcing.",
      paragraph2: "En mis tiempos libres me gusta investigar sobre tecnología, programar, hacer ejercicio y reflexionar sobre la vida escuchando buena música. Mi Objetivo es aportar con mis conocimiento en los equipos de desarrollo para crear aplicaciones."
    },
    // Common
    common: {
      chooseTheme: "Elige el tema"
    }
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects", 
      about: "About me"
    },
    // Page titles and descriptions
    meta: {
      title: "Rob's Portfolio - Software Engineer with +5 years of experience.",
      description: "Professional portfolio of Roberto MacLean, software engineer specialized in modern web development."
    },
    // Sections
    sections: {
      workExperience: "Work Experience",
      projects: "Projects",
      aboutMe: "About me"
    },
    // Hero section
    hero: {
      role: "Software Engineer",
      location: "from Viña del Mar, Chile.",
      contact: "Contact me",
      resume: "Resume"
    },
    // Experience
    experience: {
      dates: {
        current: "June 2022 - Present",
        bice: "February 2020 - May 2022",
        uv: "February 2018 - January 2020"
      },
      positions: {
        softwareEngineer: "Software Engineer"
      },
      companies: {
        witi: "WITI",
        bice: "Bice Vida",
        uv: "Universidad de Valparaíso"
      },
      descriptions: {
        witi: "Design and implementation of backend microservices to optimize home delivery processes, reducing latency and improving operational efficiency. I developed scalable applications using Java Spring Boot, Python (Serverless), and NestJS, deployed with Docker and Kubernetes on AWS. I managed PostgreSQL, MySQL, Oracle, and MongoDB databases, and integrated automated ETL workflows using Apache Airflow. Additionally, I optimized performance in critical services, achieving a significant reduction in response times.",
        bice: "Development of microservices such as email sending using templates, ETL processes, service request management, validation for mortgage loan delivery processes, backoffice applications, and others.",
        uv: "Development of a web application for the National Cancer Registry. Responsible for developing the logic for form loading, JWT security, profiles and user management, using Java/Spring-boot. Also in charge of developing the Front-end of the application using Angular."
      }
    },
    // Projects
    projects: {
      items: {
        robWeb: {
          title: "Rob Web",
          description: "My personal page with some of the things that interest me."
        },
        robResume: {
          title: "Rob's Resume",
          description: "My resume with the history of my jobs."
        },
        robBlog: {
          title: "Rob's Blog",
          description: "This is my personal blog that someday I will fill with information of my interest."
        },
        gifExpert: {
          title: "Gif Expert App",
          description: "A page to search for Gifs made during Fernando Herrera's React course."
        }
      },
      buttons: {
        code: "Code",
        preview: "Preview"
      }
    },
    // About Me
    aboutMe: {
      paragraph1: "My name is Roberto Mac lean, my friends call me Rob. I am a Computer Engineer and I studied at the Universidad de Valparaíso. I am currently working as a Software Engineer for an Outsourcing company.",
      paragraph2: "In my free time I like to research technology, programming, exercise and reflect on life while listening to good music. My goal is to contribute with my knowledge in development teams to create applications."
    },
    // Common
    common: {
      chooseTheme: "Choose theme"
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || translations.es[key as TranslationKey] || key;
}
