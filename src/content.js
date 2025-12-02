

// Frontend
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

// Backend
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import jspLogo from './assets/tech_logo/jsp.png';
import apacheLogo from './assets/tech_logo/apache.png';
import springFrameworkLogo from './assets/tech_logo/springFrameWork.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import hibernatelogo from './assets/tech_logo/Hibernate.png';
import sqllogo from './assets/tech_logo/sql.png';


// Language
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import productCatalogueLogo from './assets/tech_logo/productCatalogueLogo.png';
import todoAppLogo from './assets/tech_logo/todoAppLogo.png';
import onlinepollLogo from './assets/tech_logo/onlinePollLogo.png';
import PostManLogo from './assets/tech_logo/PostManLogo.png'


// Tools
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlify from "./assets/tech_logo/netlify.png"
import renderLogo from "./assets/tech_logo/renderLogo.png"






// Education
import muLogo from './assets/education_logo/mu_logo.jpg';
import jsLogo from './assets/education_logo/js_logo.jpg';
import niosLogo from './assets/education_logo/nios_logo.jpeg';
import svmLogo from './assets/education_logo/svm_logo.jpg';




export const skillsData = [

  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ]
  },


  {
    title: "Backend",
    skills: [

      { name: "Spring Boot", logo: springbootLogo },
      { name: "Hibernate", logo: hibernatelogo },
      { name: "JSP", logo: jspLogo },
      { name: "Servlet", logo: apacheLogo },
      { name: "Spring Framework", logo: springFrameworkLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "SQL", logo: sqllogo },
    ]

  },

  {

    title: "Language",
    skills: [

      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Cpp", logo: cppLogo },

    ],
  },

  {

    title: "Tools",
    skills: [

      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlify },
      { name: "Render", logo: renderLogo },

    ]
  }

];


export const projects = [
  {
    id: 0,
    title: "Product Catalogue",
    description:
      "Product Catalogue is a full-stack application built with Spring Boot, MySQL, React, and TailwindCSS. It provides secure REST APIs for managing product data and a modern, responsive UI for users to search, filter, and sort products, view product details, and add items to the cart (stored in LocalStorage). The project highlights strong Java backend integration with APIs & database along with smooth frontend development and state management using React.",

    image: productCatalogueLogo,
    tags: ["React", "TailwindCSS", "JavaScript", "Spring Boot", "Spring Data JPA", "Redux"],
    github: "https://github.com/Ashutosh-gaur/ProductCatologue",
    githubBackend: "https://github.com/Ashutosh-gaur/ProductCatalogueBackend.git",
    webapp: "https://productcataloguegaur.netlify.app",
  },
  {
    id: 1,
    title: "Todo App",
    description:
      `Developed a dynamic ToDo application supporting full CRUD operations (Add, Update, Delete) for efficient task management, with task categorization implemented using a separate Category entity in JPA to enable filtering by category. The app features task completion tracking via checkboxes, which updates a real-time progress chart using Recharts, and a responsive, modern UI built with TailwindCSS for seamless user experience. Integrated React-Toastify provides instant success and error notifications to enhance interactivity, while Spring Boot and JPA power the backend REST API and ensure efficient database operations. This project demonstrates expertise in frontend-backend integration, component-based architecture, and data-driven UI design.`,
    image: todoAppLogo,
    tags: ["ReactJS", "TailwindCSS", "Spring Boot", "Spring Data JPA", "MySQ", "JavaScript"],
    github: "https://github.com/Ashutosh-gaur/TodoApp",
    githubBackend: "https://github.com/Ashutosh-gaur/TodoBackend.git",
    webapp: "https://taskweaver.netlify.app/",
  },

  {
    id: 3,
    title: "Online Poll",
    description:
      "Developed a full-stack interactive polling application that allows users to create custom polls, cast votes, and instantly view real-time results with a responsive and user-friendly interface. The application ensures secure and persistent data storage using Spring Data JPA with MySQL, while delivering smooth performance and a mobile-friendly design for an engaging polling experience",
    image: onlinepollLogo,
    tags: ["ReactJS", "TailwindCSS", "Spring Boot", "Spring Data JPA", "MySQ", "JavaScript"],
    github: "https://github.com/Ashutosh-gaur/TodoAppFrontend.git",
    githubBackend: "https://github.com/Ashutosh-gaur/OnlinePollBackend.git",
    webapp: "https://onlinepoll.netlify.app",
  },
  {
    id: 4,
    title: "MiniPostMan",
    description:
      "Built a Mini Postman Clone using React, Vite, and TailwindCSS, enabling developers to test REST APIs with GET, POST, PUT, and DELETE requests, custom headers, and JSON bodies. Displays responses in a formatted, syntax-highlighted view for easier debugging",
    image: PostManLogo,


    tags: ["React", "Vite", "MongoDB", "TailwindCSS", "JavaScript", " Syntax Highlighting Library"],
    github: "https://github.com/Ashutosh-gaur/PostManClone.git",
    githubBackend: "",
    webapp: "https://minipostman.netlify.app",
  }


]



export const education = [
  {
    id: 0,
    img: muLogo,
    school: "Mangalayatan University,Aligarh",
    date: "2024 - 2026 (Pursuing)",
    desc: "Currently in the final year of Master of Computer Applications (MCA) at Mangalayatan University, Aligarh. Gained in-depth knowledge in Java programming, object-oriented design, and modern web technologies through coursework and hands-on projects, showcasing practical skills in full-stack development and problem-solving.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: jsLogo,
    school: "Js University , Shikohabad",
    date: "2021 -  2024",
    desc: "I completed my Bachelor of Computer Applications (BCA) from JS University, Shikohabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at JS University allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {
    id: 2,
    img: niosLogo,
    school: "National Institute of Open Schooling",
    date: "Apr 2020 - March 2021",
    desc: "I completed my class 12 education from National Institute of Open Schooling, under the NIOS board, where I studied Physics, Chemistry, and Mathematics.",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: svmLogo,
    school: "Saraswati Vidya Mandir, Aligarh",
    date: "Apr 2015 - March 2016",
    desc: "I completed my class 10 education from Saraswati Vidya Mandir, Aligarh, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];


export const experiences = [
  {
    id: 1,
    title: "Java Full Stack Intern",
    company_name: "CETPA Infotech Pvt. Ltd.",
    location: "Noida, India",
    duration: "Jan 2024 – May 2024",
    description: [
      "Worked on full-stack web application development using Java, Spring Boot, ReactJS, and MySQL.",
      "Implemented CRUD operations and integrated RESTful APIs for backend functionality.",
      "Collaborated on debugging, optimizing database queries, and enhancing frontend-backend connectivity.",
      "Gained hands-on experience in full-stack workflow and deployment practices."
    ],
    technologies: ["Java", "Spring Boot", "ReactJS", "MySQL", "REST API"]
  }
];

