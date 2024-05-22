/*
  File: Projects.js
  Author: Ayush Chaturvedi
  StudentID: 301378080
  Date: 2024-05-22
*/

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "The American Institute of Certified Public Accountants (AICPA- USA)",
    description: "Maintaining Web Application and Customer Support. Creating Enrolment, Peer-Review, and Update Peer-Review cases on the PRIMA application portal and providing solutions for Service Requests. Auditing and Fixing using Development Environment on PEGA and PRIMA application portal. Ticket handling using the JIRA platform. Working on Data-Fixes and Code-Fixes for the AICPA organization.",
    image: "/Assets/AICPA.png"
  },
  {
    title: "Bank Locker Management Application",
    description: "PEGA: System Architect and Low-Code App Development. Development of Application using PEGA development environment. Implementation of Technical Rules containing Validation, Rule Set, Creating Case Type and Flow. Implementation of SLA and dealing with bugs and code fixes in the Development Environment.",
    image: "/Assets/banklocker.jpg"
  },
  {
    title: "PULL-OVER: Car rental Web Application",
    description: "PHP, Python, SQL, and Xampp. Back-end development on PHP. Front-end development on Python. Using Xampp for creating and updating the back-end Database and adding it to the application repository.",
    image: "/Assets/car rental.jpg"
  },
  {
    title: "Online Bookstore Database Application",
    description: "Developed an online bookstore e-commerce platform to facilitate book purchasing and order management. Designed and implemented the database schema and ER diagram. Developed the backend using C# and Python, integrating it with a MySQL database. Created a responsive frontend using React, ensuring a seamless user experience across devices. Integrated Stripe for secure payment processing. Implemented search and filtering features to enhance product discovery.",
    image: "/Assets/onlinebookstore.jpg"
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
