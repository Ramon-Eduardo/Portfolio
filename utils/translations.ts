export type Locale = "en" | "pt";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },
    
    about: {
      name: "Ramon Santos",
      title: "Front-End Developer",
      description: "Hello, I'm Ramon, a Brazilian frontend developer currently transitioning into the tech field, focusing on web development. I specialize in creating responsive and engaging user interfaces using HTML, CSS, SCSS style modules, JavaScript, React.js and Next.js. I'm passionate about building clean, accessible, and user-friendly digital experiences. As I grow in this field, I'm excited to collaborate, learn, and bring ideas to life through code.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    
    skills: {
      title: "Tech Stack",
      description: "Tools and technologies I use to bring ideas to life.",
      levels: {
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
      },
    },

    projects: {
      title: "Featured Projects",
      description: "A selection of projects that showcase my skills and passion for building.",
      links: {
        code: "Code",
        demo: "Live Demo",
      },
      list: [
        {
          title: "Portfolio",
          description: "New portfolio created in Next.js and Tailwind CSS, with the goal of practicing Tailwind CSS and creating a more modern and lightweight portfolio. Project created with a focus on learning.",
        },
        {
          title: "First Portfolio",
          description: "Portfolio created in 2025 100% responsive in Next.js and .scss style modules, Internationalization with translations for PT-BR and EN, made with Next-Intl and I18n.",
        },
        {
          title: "Delícias a Mesa",
          description: "Project created during the Frontend Web Development bootcamp by Campinho Digital. Project made in HTML5, CSS3 without responsiveness.",
        },
        {
          title: "Reencontrow",
          description: "Project made in React.js, CSS, without Responsiveness. Project created to practice React.js usage.",
        },
        {
          title: "Service Order",
          description: "Freelance project, created in Next.js and SCSS style modules, using the react-signature-canvas library for handwritten signatures as requested. Service order created for the company where my mentor works.",
        },
        {
          title: "CodeLeap Test",
          description: "Technical test created for a Junior Frontend Web Developer selection process at Codeleap.uk company. Project developed in React.js and styled with 100% responsive SCSS style modules.",
        },
      ],
    },
    
    contact: {
      title: "Let's Work Together",
      description: "I'm currently available for freelance projects and full-time roles. If you have a project that needs some creative touch, feel free to reach out.",
      email: "E-mail",
      phone: "Phone",
      location: "Location",
      name: "Name",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      loading: "Loading...",
      success: "Email sent successfully!",
      error: "Error sending email",
      failed: "Failed to send email",
    },
    
    footer: {
      copyright: "All rights reserved.",
    },
  },
  
  pt: {

    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      language: "Idioma",
    },
    
    about: {
      name: "Ramon Santos",
      title: "Desenvolvedor Front-End",
      description: "Olá, sou Ramon, um desenvolvedor front-end brasileiro atualmente em transição para a área de tecnologia, focando em desenvolvimento web. Tenho especialidade em criar interfaces de usuário responsivas e atraentes usando HTML, CSS, módulos de style SCSS, JavaScript, React.js e Next.js. Sou apaixonado por construir experiências digitais limpas, acessíveis e amigáveis ao usuário. Conforme cresço neste campo, estou entusiasmado em colaborar, aprender e dar vida a ideias através do código.",
      viewProjects: "Ver Projetos",
      contactMe: "Entrar em Contato",
    },
    
    skills: {
      title: "Stack de Tecnologias",
      description: "Ferramentas e tecnologias que uso para dar vida às ideias.",
      levels: {
        beginner: "Iniciante",
        intermediate: "Intermediário",
        advanced: "Avançado",
      },
    },

    projects: {
      title: "Projetos em Destaque",
      description: "Uma seleção de projetos que demonstram minhas habilidades e paixão por construir.",
      links: {
        code: "Código",
        demo: "Demo Ao Vivo",
      },
      list: [
        {
          title: "Portfólio",
          description: "Novo portfólio criado em Next.js e Tailwind CSS, com o objetivo de praticar o uso do Tailwind CSS e criar um portfólio mais moderno e leve. Projeto criado com foco em aprendizagem.",
        },
        {
          title: "Primeiro Portfólio",
          description: "Portfólio criado em 2025 100% responsivo em Next.js e módulos de style .scss, Internacionalização com traduções para PT-BR e EN, feito pelo Next-Intl e I18n.",
        },
        {
          title: "Delícias a Mesa",
          description: "Projeto criado durante o bootcamp de Desenvolvimento Web Frontend pela Campinho Digital. Projeto feito em HTML5, CSS3 sem responsividade.",
        },
        {
          title: "Reencontrow",
          description: "Projeto feito em React.js, CSS, sem Responsividade. Projeto criado para praticar o uso de React.js.",
        },
        {
          title: "Ordem de Serviço",
          description: "Projeto freelancer, criado em Next.js e módulo de style .scss, com o uso da biblioteca react-signature-canvas para assinatura a punho como haviam solicitado. Ordem de serviço criada para a empresa onde meu mentor trabalha.",
        },
        {
          title: "Teste CodeLeap",
          description: "Prova técnica criada para um processo seletivo de Desenvolvedor Web Front-End Junior na empresa Codeleap.uk. Projeto desenvolvido em React.js e estilizado com módulo de style .scss 100% responsivo.",
        },
      ],
    },

    contact: {
      title: "Vamos Trabalhar Juntos",
      description: "Estou disponível para projetos freelancer e posições em tempo integral. Se você tem um projeto que precisa de um toque criativo, sinta-se à vontade para entrar em contato.",
      email: "E-mail",
      phone: "Telefone",
      location: "Localização",
      name: "Nome",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar Mensagem",
      loading: "Carregando...",
      success: "E-mail enviado com sucesso!",
      error: "Erro ao enviar e-mail",
      failed: "Falha ao enviar e-mail",
    },
    
    footer: {
      copyright: "Todos os direitos reservados.",
    },
  },
};

export const useTranslation = (language: "en" | "pt") => {
  return translations[language];
};
