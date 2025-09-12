

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


// Language
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import productCatalogueLogo from './assets/tech_logo/productCatalogueLogo.png';
import todoAppLogo from './assets/tech_logo/todoAppLogo.png';
import onlinepollLogo from './assets/tech_logo/onlinepollLogo.png';
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
      { name: "Next JS", logo: nextjsLogo },
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
      // { name: "RESTfull Web Services", logo: "" },
      { name: "Node JS", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
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
      { name: "Netlify", logo: netlify},
      { name: "Render", logo: renderLogo },

    ]
  }

];


export const projects = [
  {
    id: 0,
    title: "Product Catalogue",
    description:
      "Modified Project Description Product Catalogue is a full-stack application designed for managing and browsing products in an organized way.The backend, built using Spring Boot and MySQL, provides secure REST APIs to fetch and manage product data. The frontend, developed with React and TailwindCSS, offers a modern and responsive UI where users can:🔎 Search & Filter Products (by name, category, etc.) ↕ Sort Products (price, name, etc.)🛒 Add to Cart functionality (cart data stored in LocalStorage)📄 View Product Details seamlessly This project highlights strong Java backend skills with API & database integration, along with React-based frontend development for smooth user experience and state management.",

    image: productCatalogueLogo,
    tags: ["React", "TailwindCSS", "JavaScript","Spring Boot", "Spring Data JPA", "Redux"],
    github: "https://github.com/Ashutosh-gaur/ProductCatologue",
    githubBackend: "https://github.com/Ashutosh-gaur/ProductCatalogueBackend.git",
    webapp: "https://productcataloguegaur.netlify.app",
  },
  {
    id: 1,
    title: "Todo App",
    description:
      `A full-stack task management application where users can:
       Add tasks (stored in MySQL via Spring Boot + Spring Data JPA APIs), 
       Mark tasks as complete (strikethrough effect on UI),
       Delete tasks when no longer needed`,
    image: todoAppLogo,
    tags: ["ReactJS", "TailwindCSS", "Spring Boot", "Spring Data JPA", "MySQ", "JavaScript"],
    github: "https://github.com/Ashutosh-gaur/TodoApp",
    githubBackend: "https://github.com/Ashutosh-gaur/TodoBackend.git",
    webapp: "https://guartodoapp.netlify.app",
  },

  {
    id: 3,
    title: "Online Poll",
    description:
      "Developed a full-stack interactive polling application where users can create polls, cast votes, and view real-time results with a dynamic and responsive interface. Implemented React on the frontend with TailwindCSS for sleek UI design and smooth user interactions.Designed and developed RESTful APIs using Spring Boot and Spring Data JPA, ensuring secure and persistent storage of poll data in MySQL.Implemented features including poll creation, voting, result visualization, and user-friendly dashboards to provide a complete end-to-end polling experience.",
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
      "Mini Postman Clone is a developer-friendly API testing tool inspired by Postman.It allows users to test REST APIs by sending GET, POST, PUT, and DELETE requests, adding custom headers/parameters, and entering JSON bodies. The API response is displayed in a pretty-printed JSON format with syntax highlighting, making debugging easier.Built with React, Vite, and TailwindCSS, this project demonstrates strong frontend development skills and API integration handling.",
    image: PostManLogo,


    tags: ["React", "Vite", "MongoDB", "TailwindCSS",  "JavaScript"," Syntax Highlighting Library"],
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
