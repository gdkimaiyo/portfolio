export const PROJECTS = [
  {
    leftSided: true,
    showImage: true,
    private: false,
    header: "Mini-Netflix",
    imgs: [
      "mini-netflix-preview-image-1.png",
      "mini-netflix-preview-image-2.png",
    ],
    projectLink: "https://netflix.maiyo.dev",
    codeLink: "https://github.com/gdkimaiyo/netflix",
    desc: "Mini-Netflix is a Netflix clone application. With this app, users can view movie details such as, the movie image, title, overview, year of production, e.t.c. In addition, users can add movies or TV shows they like to their favourites list.",
    technologies: [
      "Angular",
      "JavaScript",
      "NodeJs",
      "ExpressJS",
      "HTML",
      "SCSS",
      "MongoDB",
    ],
    customStyle: {
      background: "#f0e9ee",
      border: "0.5px solid #4b135d",
      btnColor: "#d12e26",
    },
  },
  {
    leftSided: false,
    showImage: false,
    private: false,
    header: "My Portfolio",
    codeLink: "https://github.com/gdkimaiyo/portfolio",
    desc: "This website. A typical portfolio website where one can display information about themselves such as about section, the services they offer, showcase their projects, testimonials and how to get in touch to them.",
    desc2:
      "I designed this project using Vue Js. Code reusability and component reuse were the core concepts I learnt from designing this portfolio website.",
    technologies: ["Vue", "JavaScript", "HTML", "SCSS"],
    customStyle: {
      background: "#e9f0f4",
      border: "0.5px solid #1d4778",
      btnColor: "#007bff",
    },
  },
  {
    leftSided: false,
    showImage: true,
    private: false,
    header: "ShengBase",
    imgs: ["shengbase.png"],
    projectLink: "https://shengbase.maiyo.dev",
    codeLink: "https://github.com/gdkimaiyo/shengbase",
    desc: "ShengBase is a Sheng Dictionary. The dictionary is enriched with latest and old sheng words, which is is constantly updated by users.",
    desc2:
      "New users can easily create an account and earn points by adding new sheng words or updating existing words in the dictionary.",
    technologies: [
      "Vue",
      "JavaScript",
      "NodeJs",
      "ExpressJS",
      "HTML",
      "SCSS",
      "MongoDB",
    ],
    customStyle: {
      background: "#edf4e3",
      border: "0.5px solid #2e693b",
      btnColor: "#006b35",
    },
  },
  {
    leftSided: true,
    showImage: true,
    private: false,
    header: "TaskManager",
    imgs: ["task_manager.jpg"],
    codeLink: "https://github.com/gdkimaiyo/ci3_app",
    desc: "Project management app where users can create and manage a project and its related tasks. This project was designed with PHP's CodeIgniter3 Framework. Main Concepts I learnt are CRUD and MySQL.",
    technologies: ["PHP", "CodeIgniter 3", "Bootstrap", "HTML", "CSS", "MySQL"],
    customStyle: {
      background: "#eeeeee",
      border: "0.5px solid #000000",
      btnColor: "#000000",
    },
  },
];

export const SERVICES = [
  {
    title: "Tailored Web Development",
    desc: "I design beautiful responsive web applications, which are as easy to use as possible. I build with your goals in mind, whether you want a simple flexible website, a custom web app or a SaaS product.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "Maintenance and Support",
    desc: "Carry out mainntence and handle issues arising on your website. Your website is always growing. Whether you are adding new features or making improvements I am here to help. I will always be available to answer any questions you might have.",
    icon: "fas fa-headset",
  },
  {
    title: "Testing",
    desc: "I conduct extensive testing using multiple approaches to ensure consistency across broswers, responsiveness, e.t.c to guarantee functionality and everything to work as expected.",
    icon: "fas fa-vial",
  },
  // {
  //   title: "Coding Tutor",
  //   desc: "I am a Coding Tutor. I teach computer programming languages such as JavaScript, Python, C/C++ and Web Development starting from the basics to advanced concepts. My target age groups are: 7 - 12 years and teenagers",
  //   icon: "fas fa-chalkboard-user",
  // },
];

export const SKILLS = [
  {
    category: "User Interface",
    skills: [
      { language: "HTML", icon: "html5.png" },
      { language: "CSS", icon: "css.png" },
      { language: "Bootstrap", icon: "bootstrap.png" },
      { language: "Tailwind", icon: "tailwindcss.png" },
    ],
  },

  {
    category: "JavaScript",
    skills: [
      { language: "JavaScript", icon: "js.png" },
      { language: "Vue", icon: "vue.png" },
      { language: "Angular", icon: "angular.png" },
      { language: "NodeJs", icon: "nodejs.png" },
      { language: "ExpressJS", icon: "expressjs.png" },
    ],
  },

  {
    category: "Python",
    skills: [
      { language: "Python", icon: "python.png" },
      { language: "Flask", icon: "flask.png" },
      { language: "dJango", icon: "django.png" },
    ],
  },

  {
    category: "PHP",
    skills: [
      { language: "PHP", icon: "php2.png" },
      { language: "Laravel", icon: "laravel.png" },
    ],
  },

  {
    category: "Databases",
    skills: [
      { language: "MongoBB", icon: "mongodb.png" },
      { language: "MySQL", icon: "mysql.png" },
      { language: "PostGreSQL", icon: "postgresql.png" },
    ],
  },

  {
    category: "Tools & Platforms",
    skills: [
      { language: "Git", icon: "git.png" },
      { language: "GitHub", icon: "github.png" },
      { language: "AWS", icon: "aws.png" },
      { language: "Docker", icon: "docker.png" },
      { language: "Heroku", icon: "heroku.png" },
      { language: "Netlify", icon: "netlify.png" },
      // { language: "C", icon: "c.png" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ruth Njeri Mbugua",
    testimony:
      "Over the time I have been with Gideon, I have known him to be a hardworking person who is willing to go an extra mile and beyond to accomplish a task.",
    testimony2:
      "He is a good team player and takes up leadership roles when needed to. He has taken up the role of a project manager which he performed exemplary well. I happily recommend Gideon Kimaiyo to work in any creative organization that values being on top of projects, and is looking for a highly competent, determined and hardworking individual.",
    profession: "Software Engineer, Vitafluence.ai",
    initials: "RN",
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    logo: "fab fa-square-github",
    color: "rgba(38, 41, 46)",
    link: "https://github.com/gdkimaiyo",
  },
  // {
  //   name: "Medium",
  //   logo: "fab fa-medium",
  //   color: "rgba(0, 0, 0)",
  //   link: "https://medium.com",
  // },
  {
    name: "LinkedIn",
    logo: "fab fa-linkedin",
    color: "rgba(46, 100, 188)",
    link: "https://www.linkedin.com/in/gideon-kimaiyo",
  },
  {
    name: "Twitter",
    logo: "fab fa-square-twitter",
    color: "rgba(74, 153, 233)",
    link: "https://twitter.com/gideonGDK",
  },
];
