import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectOneImg from "@/public/project1.png";
import projectTwoImg from "@/public/project2.png";
import projectThreeImg from "@/public/project3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Electronics Engineer",
    location: "Funskool (india) pvt. ltd, Corlim, Goa",
    description:
      "Worked on PCB layouts used in toys and gained valuable experience in a fast-paced environment while meeting productivity and quality expectations.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Front-End Developer Bootcamp + Internship",
    location: "Banglore",
    description:
      "Gained proficiency in ReactJS and Javascript, Core Web Vital, and Bootstrap while working on various projects.Developed a strong understanding of the entire web development process, including design, development, and deployment.Built a responsive website using React, Tailwind CSS, and Hooks for efficient state management.Created an e-commerce website with a user-friendly interface and an easy checkout process. Developed a to-do list application with local storage and dynamic task updates using React state",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022 ",
  },

  {
    title: "ReactJs Developer",
    location: "Syslog Infotech, Remote",
    description:
      "Developed an interactive layout, using HTML, CSS, JavaScript, and ReactJS to generate an improved user experience and ensure high-quality design and cross-browser compatibility.Contributed actively in requirement gathering and user story design",
    icon: React.createElement(FaReact),
    date: "September-2022 - April-2023",
  },

  {
    title: "Frontend (ReactJs) Developer",
    location: "Blue Infinity Tech LLP, Ahmedabad",
    description:
      "Developing responsive user interfaces using React.js and modern web technologies. Collaborating with the design team to implement pixel-perfect UI/UX designs. Implementing efficient state management using Redux, and Router and utilizing React hooks for enhanced functionality",
    icon: React.createElement(FaReact),
    date: "May-2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ecommerce Shop",
    description:
      "I have Built a responsive website using ReactJS, Tailwind CSS, and Router. Utilized reactive programming to handle user interactions. Integrated Git for version control, and API for the data.",
    tags: ["React", "Tailwind CSS", "React-Router"],
    imageUrl: projectThreeImg,
  },
  {
    title: "Recipe Finder ",
    description:
      "Developed a recipe finder app using ReactJS, Hooks, and Edamam API for recipe data. Implemented search and filter functionality to help users find recipes based on ingredients or dietary restrictions. Developed a UI with responsive design using CSS",
    tags: ["React", "Hooks", "CSS"],
    imageUrl: projectTwoImg,
  },
  {
    title: "JS Ecommerce Shop",
    description:
      "I have Created this eCommerce website using HTML, CSS, and JavaScript to provide a user-friendly and engaging online shopping experience.Implemented a responsive design, making the website accessible on desktop, tablet, and mobile devices.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: projectOneImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "RTK Query",
  "Node.js(Basics)",
  "Git",
  "Tailwind",
  "Redux",
  "Chakra UI",
  "Framer Motion",
] as const;
