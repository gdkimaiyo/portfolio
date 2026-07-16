export const PROJECTS = [
  {
    leftSided: true,
    showImage: true,
    private: true,
    header: "Logistics App",
    imgs: ["logistics-eq-1.png"],
    projectLink: "https://logistics-ea.netlify.app",
    codeLink: "https://github.com/gdkimaiyo/logistics",
    desc: "Your ideal partner and number one solution for delivering your goods to your clients/customers. This app helps merchants to connect with their customers right on the app.",
    desc2: "I designed this project using Vue3 and Quasar Framework.",
    technologies: [
      "Vue",
      "Quasar Framework",
      "JavaScript",
      "Netlify",
      "HTML",
      "CSS",
    ],
    customStyle: {
      background: "#e9f0f4",
      border: "0.5px solid #1d4778",
      btnColor: "#44AA3C",
    },
  },
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
      "MongoDB",
      "Netlify",
      "Heroku",
      "Docker",
      "API Integration",
      "TMDB API",
      "HTML",
      "CSS",
    ],
    customStyle: {
      background: "#f0e9ee",
      border: "0.5px solid #4b135d",
      btnColor: "#d12e26",
    },
  },
  {
    leftSided: true,
    showImage: true,
    private: true,
    header: "Delivra",
    imgs: ["delivra-1.png", "delivra-2.png", "delivra-3.png", "delivra-4.png"],
    codeLink: "https://github.com/gdkimaiyo/delivra",
    desc: "Delivra is a modern delivery platform that connects customers, local merchants and independent riders. Order food and groceries from your favorite businesses and get them delivered fast, while merchants grow their reach and deliverers earn on their own schedule.",
    desc2: "I designed this project using Vue3 and Quasar Framework.",
    technologies: [
      "Vue3",
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ExpressJS",
      "MongoDB",
      "API Integration",
    ],
    customStyle: {
      background: "rgba(255, 255, 255)",
      border: "0.5px solid #26a69a",
      btnColor: "#007bff",
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
    leftSided: true,
    showImage: true,
    private: false,
    header: "Health Facility Locator",
    imgs: ["hfl.png"],
    codeLink: "https://github.com/gdkimaiyo/hfl",
    desc: "Health Facility Locator. Number one healthcare facility locator in Kenya. Find healthcare facilities near you, their main services, capacity and ownership.",
    desc2:
      "I designed this project with Quasar Framework. Main Concepts I learnt are Component reusability, API integration, MapBox and GeoLocation.",
    technologies: [
      "Vue3",
      "JavaScript",
      "TypeScript",
      "NodeJs",
      "ExpressJS",
      "MongoDB",
      "MapBox",
      "API Integration",
      "HTML",
      "CSS",
      "MySQL",
    ],
    customStyle: {
      background: "#eeeeee",
      border: "0.5px solid #000000",
      btnColor: "#000000",
    },
  },
  {
    leftSided: true,
    showImage: true,
    private: false,
    header: "TaskManager",
    imgs: ["task_manager.jpg"],
    codeLink: "https://github.com/gdkimaiyo/ci3_app",
    desc: "Project management app where users can create and manage a project and its related tasks.",
    desc2:
      "I designed this project with PHP's CodeIgniter3 Framework. Main Concepts I learnt are CRUD and MySQL.",
    technologies: ["PHP", "CodeIgniter 3", "Bootstrap", "HTML", "CSS", "MySQL"],
    customStyle: {
      background: "#eeeeee",
      border: "0.5px solid #000000",
      btnColor: "#000000",
    },
  },
  // {
  //   leftSided: false,
  //   showImage: true,
  //   private: false,
  //   header: "ShengBase",
  //   imgs: ["shengbase.png"],
  //   projectLink: "https://shengbase.maiyo.dev",
  //   codeLink: "https://github.com/gdkimaiyo/shengbase",
  //   desc: "ShengBase is a Sheng Dictionary. The dictionary is enriched with latest and old sheng words, which is is constantly updated by users.",
  //   desc2:
  //     "New users can easily create an account and earn points by adding new sheng words or updating existing words in the dictionary.",
  //   technologies: [
  //     "Vue",
  //     "JavaScript",
  //     "NodeJs",
  //     "ExpressJS",
  //     "HTML",
  //     "SCSS",
  //     "MongoDB",
  //   ],
  //   customStyle: {
  //     background: "#edf4e3",
  //     border: "0.5px solid #2e693b",
  //     btnColor: "#006b35",
  //   },
  // },
];

export const SERVICES = [
  {
    title: "Full-Stack Web Development",
    desc: "Building responsive, highly scalable web applications from scratch. I develop interactive frontends using React, Vue or Angular, backed by secure, robust backend architectures using Python (Django) or Laravel.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "API Design & Integration",
    desc: "Designing secure, high-throughput REST APIs, as well as integrating complex third-party services, payment gateways and identity management systems (AWS Cognito, Firebase Auth, JWTs) to keep your data flowing safely.",
    icon: "fas fa-plug",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "Provisioning and managing cloud environments across AWS, GCP and Azure. I containerize applications with Docker, build automated CI/CD pipelines (GitHub Actions) and configure NGINX/Apache servers for stable, zero-downtime releases.",
    icon: "fas fa-cloud",
  },
  {
    title: "Performance & Database Tuning",
    desc: "Optimizing database schemas (MongoDB, MySQL, PostgreSQL) and implementing caching mechanisms to resolve API latency. I also set up permanent server recovery, automated log-rotation, and auto-scaling to handle sudden traffic spikes gracefully.",
    icon: "fas fa-database",
  },
  {
    title: "Support & Maintenance",
    desc: "Keeping complex web ecosystems up, secure, and running smoothly. I specialize in debugging production outages, upgrading legacy systems and managing custom integrations.",
    icon: "fas fa-tools",
  },
  // {
  //   title: "Coding Tutor",
  //   desc: "I am a Coding Tutor. I teach computer programming languages such as JavaScript, Python, C/C++ and Web Development starting from the basics to advanced concepts. My target age groups are: 7 - 12 years and teenagers",
  //   icon: "fas fa-chalkboard-user",
  // },
];

// export const SERVICES = [
//   {
//     title: "Tailored Web Development",
//     desc: "I design beautiful responsive web applications, which are as easy to use as possible. I build with your goals in mind, whether you want a simple flexible website, a custom web app or a SaaS product.",
//     icon: "fas fa-laptop-code",
//   },
//   {
//     title: "Maintenance and Support",
//     desc: "Carry out mainntence and handle issues arising on your app. Your app is always growing. Whether you are adding new features or making improvements I am here to help. I will always be available to answer any questions you might have.",
//     icon: "fas fa-headset",
//   },
//   {
//     title: "Testing",
//     desc: "I conduct extensive testing using multiple approaches to ensure consistency across broswers, responsiveness, e.t.c to guarantee functionality and everything to work as expected.",
//     icon: "fas fa-vial",
//   },
//   {
//     title: "API Integration",
//     desc: "I offer API integration solutions",
//     icon: "fas fa-gear",
//   },
//   {
//     title: "Cloud and DevOps",
//     desc: "I deploy and manage applications across AWS, Google Cloud, and Azure, including troubleshooting production incidents and setting up CI/CD pipelines and authentication flows (Firebase Auth, AWS Cognito) that keep releases fast, stable, and repeatable.",
//     icon: "fas fa-cloud",
//   },
//   // {
//   //   title: "Coding Tutor",
//   //   desc: "I am a Coding Tutor. I teach computer programming languages such as JavaScript, Python, C/C++ and Web Development starting from the basics to advanced concepts. My target age groups are: 7 - 12 years and teenagers",
//   //   icon: "fas fa-chalkboard-user",
//   // },
// ];

export const SKILLS = [
  {
    category: "Languages",
    skills: [
      { language: "Python", icon: "fas fas-gear" },
      { language: "JavaScript", icon: "fas fas-gear" },
      { language: "TypeScript", icon: "fas fas-gear" },
      { language: "PHP", icon: "fas fas-gear" },
      { language: "SQL", icon: "fas fas-gear" },
      { language: "C/C++", icon: "fas fas-gear" },
    ],
  },

  {
    category: "Frontend Frameworks & UI",
    skills: [
      { language: "React", icon: "fas fas-gear" },
      { language: "Vue.js (Vue 3)", icon: "fas fas-gear" },
      { language: "Angular", icon: "fas fas-gear" },
      { language: "Ant Design", icon: "fas fas-gear" },
      { language: "Chakra UI", icon: "fas fas-gear" },
      { language: "Quasar", icon: "fas fas-gear" },
    ],
  },

  {
    category: "Backend",
    // category: "Backend & CMS",
    skills: [
      { language: "Django", icon: "fas fas-gear" },
      { language: "Laravel", icon: "fas fas-gear" },
      { language: "FastAPI / Flask", icon: "fas fas-gear" },
      { language: "Node.js / Express", icon: "fas fas-gear" },
      // { language: "WordPress", icon: "fas fas-gear" },
      // { language: "Drupal", icon: "fas fas-gear" },
    ],
  },

  {
    category: "Cloud, DevOps & Servers",
    skills: [
      { language: "AWS", icon: "fas fas-gear" },
      { language: "Azure", icon: "fas fas-gear" },
      { language: "Google Cloud", icon: "fas fas-gear" },
      { language: "Docker", icon: "fas fas-gear" },
      { language: "Linux", icon: "fas fas-gear" },
      { language: "CI/CD & GitHub Actions", icon: "fas fas-gear" },
      { language: "NGINX & Apache", icon: "fas fas-gear" },
      { language: "Heroku", icon: "fas fas-gear" },
      { language: "Netlify", icon: "fas fas-gear" },
    ],
  },

  {
    category: "Databases & Caching",
    skills: [
      { language: "PostgreSQL", icon: "fas fas-gear" },
      { language: "MySQL", icon: "fas fas-gear" },
      { language: "MongoDB", icon: "fas fas-gear" },
      { language: "Redis & Celery", icon: "fas fas-gear" },
    ],
  },

  {
    category: "AI & Machine Learning",
    skills: [
      { language: "Generative AI & LLMs", icon: "fas fas-gear" },
      { language: "Model Fine-Tuning (SFT)", icon: "fas fas-gear" },
      { language: "Machine Learning", icon: "fas fas-gear" },
      { language: "Scikit-Learn", icon: "fas fas-gear" },
      { language: "Claude", icon: "fas fas-gear" },
    ],
  },

  {
    category: "Tools & Architectures",
    skills: [
      { language: "Git & GitHub", icon: "fas fas-gear" },
      { language: "REST APIs", icon: "fas fas-gear" },
      { language: "Postman", icon: "fas fas-gear" },
      { language: "Figma", icon: "fas fas-gear" },
    ],
  },
];

// export const SKILLS = [
//   {
//     category: "User Interface",
//     skills: [
//       { language: "HTML", icon: "html5.png" },
//       { language: "CSS", icon: "css.png" },
//       { language: "Bootstrap", icon: "bootstrap.png" },
//       { language: "Tailwind", icon: "tailwindcss.png" },
//     ],
//   },

//   {
//     category: "JavaScript",
//     skills: [
//       { language: "JavaScript", icon: "js.png" },
//       { language: "Vue", icon: "vue.png" },
//       { language: "Angular", icon: "angular.png" },
//       { language: "NodeJs", icon: "nodejs.png" },
//       { language: "ExpressJS", icon: "expressjs.png" },
//     ],
//   },

//   {
//     category: "Python",
//     skills: [
//       { language: "Python", icon: "python.png" },
//       { language: "Flask", icon: "flask.png" },
//       { language: "dJango", icon: "django.png" },
//     ],
//   },

//   {
//     category: "PHP",
//     skills: [
//       { language: "PHP", icon: "php2.png" },
//       { language: "Laravel", icon: "laravel.png" },
//     ],
//   },

//   {
//     category: "Databases",
//     skills: [
//       { language: "MongoBB", icon: "mongodb.png" },
//       { language: "MySQL", icon: "mysql.png" },
//       { language: "PostGreSQL", icon: "postgresql.png" },
//     ],
//   },

//   {
//     category: "Tools & Platforms",
//     skills: [
//       { language: "Git", icon: "git.png" },
//       { language: "GitHub", icon: "github.png" },
//       { language: "AWS", icon: "aws.png" },
//       { language: "Docker", icon: "docker.png" },
//       { language: "Heroku", icon: "heroku.png" },
//       { language: "Netlify", icon: "netlify.png" },
//       // { language: "C", icon: "c.png" },
//     ],
//   },
// ];

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
