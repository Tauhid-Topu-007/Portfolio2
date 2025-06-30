
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import user from "../assets/company/user.png";
import airbnb from "../assets/airbnb.png";
import dictionary from "../assets/dictionary.png";
import mealFinder from "../assets/mealFinder.png";
import dog from "../assets/explorerImg.png";
import restaurant from "../assets/restaurant.png";
import tolet from "../assets/tolet.png";

export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "No Experience Yet",
    company_name: "",
    icon: user,
    iconBg: "#000000",
    date: "",
    points: ["Currently exploring opportunities to gain experience."],
  },
];

const testimonials = [
  {
    testimonial: "No testimonials available at the moment.",
    name: "",
    designation: "",
    company: "",
    image: user,
  },
];


const projects = [
{
  name: "Airbnb Clone",
  description:
    "Airbnb Clone is a full-stack web application that replicates the core functionalities of Airbnb, enabling users to browse, book, and host rental properties with a user-friendly interface and dynamic listings.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "bootstrap",
      color: "white-text-gradient",
    },
    {
      name: "node",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "blue-text-gradient",
    },
  ],
  image: airbnb,
  source_code_link: "https://github.com/",
},

 {
  name: "LexiSearch",
  description:
    "LexiSearch is an interactive dictionary web app that allows users to search for word definitions, parts of speech, pronunciation, and hear audio pronunciations in real time.",
  tags: [
    {
      name: "HTML",
      color: "blue-text-gradient",
    },
    {
      name: "tailwind",
      color: "white-text-gradient",
    },
    {
      name: "dictionaryAPI",
      color: "green-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
      name: "javascript",
      color: "green-text-gradient",
    },
  ],
  image: dictionary,
  source_code_link: "https://github.com/",
},

  {
  name: "Meal Finder",
  description:
    "Meal Finder is a recipe search application that helps users discover delicious meals based on the ingredients they have. Simply enter an ingredient, and explore a variety of matching meals instantly.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "mealdb API",
      color: "green-text-gradient",
    },
    {
      name: "responsive UI",
      color: "orange-text-gradient",
    },
  ],
  image: mealFinder,
  source_code_link: "https://github.com/", // Replace with actual repo link
},
{
  name: "PixExplorer",
  description:
    "PixExplorer is an image search application that lets users explore beautiful, high-resolution images by simply typing a keyword. Powered by image APIs, it delivers stunning visuals for any topic you search.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "unsplash API",
      color: "green-text-gradient",
    },
    {
      name: "axios",
      color: "pink-text-gradient",
    },
    {
      name: "responsive",
      color: "orange-text-gradient",
    },
  ],
  image: dog, 
  source_code_link: "https://github.com/", 
},
{
  name: "Spicy king Restaurant",
  description:
    "SpiceHub is a modern restaurant web application that showcases a rich collection of dishes, chef specials, and customer favorites.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "restaurant UI",
      color: "orange-text-gradient",
    },
    {
      name: "responsive design",
      color: "green-text-gradient",
    },
    {
      name: "menu filtering",
      color: "pink-text-gradient",
    },
  ],
  image: restaurant, 
  source_code_link: "https://github.com/", 
},
{
  name: "To-Let",
  description:
    "UniRoom is a to-let platform designed for university students to easily find and book nearby rooms, hostels, or sublets. With location filters and verified listings, it simplifies the hassle of student housing.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "firebase",
      color: "green-text-gradient",
    },
    {
      name: "map integration",
      color: "orange-text-gradient",
    },
    {
      name: "express",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "pink-text-gradient",
    },
  ],
  image: tolet,
  source_code_link: "https://github.com/",
},



];

export { services, technologies, experiences, testimonials, projects };
