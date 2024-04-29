import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import engineerImage from './alex.jpg';
import skillsImage from './alex.jpg';
import experienceImage from './experience.jpg';
import schoolProjectsImage from './school-projects.jpg';
import sportsImage from './sports.jpg';
import storiesImage from './stories.jpg';
import introVideo from './intro-video.mp4';

const Home = () => (
  <div className="content">
    <div className="intro">
      <img src={engineerImage} alt="Engineer" className="engineer-image" />
      <div className="intro-text">
      <h2>Welcome to My Portfolio</h2>
      
      <h1>ALEX LEMA</h1>
        <p>Dynamic Computer Engineering graduate with a proven track record in software development and hardware design. Proficient in JavaScript, React, and C++, C, with hands-on experience in creating robust web and software applications. Adept at problem-solving and optimizing solutions for peak performance. Strong understanding of object-oriented programming and design principles, coupled with successful execution in all phases of software development, including design, coding, testing, debugging, implementation, and source management. Proven ability to collaborate effectively within diverse teams and lead projects to successful outcomes.</p>

      </div>
    </div>
  </div>
);

   /*<img src={skillsImage} alt="Skills" className="section-image" />*/

const Skills = () => (
  <div className="content">
    <video controls className="intro-video">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    <h2>Skills</h2>
    <p>Here are some of my skills:</p>
    <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Node.js</li>
      <li>...</li>
    </ul>
  </div>
);

const Experience = () => (
  <div className="content">
    <img src={experienceImage} alt="Experience" className="section-image" />
    <h2>Experience</h2>
    <p>Here's a summary of my work experience:</p>
    <p>Company A - Position A</p>
    <p>Company B - Position B</p>
  </div>
);

const SchoolProjects = () => (
  <div className="content">
    <img src={schoolProjectsImage} alt="School Projects" className="section-image" />
    <h2>School Projects</h2>
    <p>Here are some of my school projects:</p>
    <p>Project A - Description</p>
    <p>Project B - Description</p>
  </div>
);

const SportsAndPastimes = () => (
  <div className="content">
    <img src={sportsImage} alt="Sports and Pastimes" className="section-image" />
    <h2>Sports and Pastimes</h2>
    <p>Here are some of my sports and pastime activities:</p>
    <p>Sport A - Description</p>
    <p>Hobby B - Description</p>
  </div>
);

const Stories = () => (
  <div className="content">
    <img src={storiesImage} alt="Stories" className="section-image" />
    <h2>Stories</h2>
    <p>Here are some of my stories:</p>
    <p>Story A - Description</p>
    <p>Story B - Description</p>
  </div>
);

const App = () => (
  <Router>
    <div className="container">
    <div className="content">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/school-projects">School Projects</Link></li>
          <li><Link to="/sports-and-pastimes">Sports and Pastimes</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          {/* Add links for other routes */}

        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/school-projects" element={<SchoolProjects />} />
        <Route path="/sports-and-pastimes" element={<SportsAndPastimes />} />
        <Route path="/stories" element={<Stories />} />
        {/* Add routes for other components */}
        {/* Add routes for other components */}
      </Routes>
      </div>
    </div>
  </Router>
);

export default App;
