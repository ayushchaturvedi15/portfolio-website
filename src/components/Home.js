/*
  File: Home.js
  Author: Ayush Chaturvedi
  StudentID: 301378080
  Date: 2024-05-22
*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>I blend tech prowess with obsessive attention to detail, driving deadlines and collaborating seamlessly.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
};

export default Home;
