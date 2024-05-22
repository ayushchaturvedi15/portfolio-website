/*
  File: Services.js
  Author: Ayush Chaturvedi
  StudentID: 301378080
  Date: 2024-05-22
*/

import React from 'react';
import './Services.css';

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern websites.",
    image: "/Assets/web.jpg"
  },
  {
    title: "Mobile Apps",
    description: "Creating mobile applications for iOS and Android.",
    image: "/Assets/mobile.jpg"
  },
  {
    title: "General Programming",
    description: "Custom programming solutions.",
    image: "/Assets/programming.jpg"
  },
  {
    title: "PEGA Developer",
    description: "Building responsive and modern websites and Application using PEGA",
    image: "/Assets/pega.jpg"
  },
  {
    title: "Python Programming development",
    description: "Building responsive and modern websites using Python and its Framework.",
    image: "/Assets/python.jpg"
  },  
  {
    title: "Agile Methdology",
    description: "Knowledge of Agile, including JIRA, Confluence, etc.",
    image: "/Assets/agile.jpg"
  }
];

const Services = () => {
  return (
    <div className="services">
      <h1>My Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
