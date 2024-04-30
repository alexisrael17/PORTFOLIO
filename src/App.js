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
      <h1>ALEX LEMA</h1>
      <h2>Welcome to My Portfolio</h2>
      
        <p class="portfolio-description">Dynamic Computer Engineering graduate with a proven track record in software development and hardware design. Proficient in JavaScript, React, and C++, C, with hands-on experience in creating robust web and software applications. Adept at problem-solving and optimizing solutions for peak performance. Strong understanding of object-oriented programming and design principles, coupled with successful execution in all phases of software development, including design, coding, testing, debugging, implementation, and source management. Proven ability to collaborate effectively within diverse teams and lead projects to successful outcomes.</p>

      </div>
    </div>
  </div>
);

   /*<img src={skillsImage} alt="Skills" className="section-image" />
       <video controls className="intro-video">
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
   
   
   
   */

const Skills = () => (
  <div className="content">
    <h2>Skills: </h2>
    <p>Programming Languages:</p>
    <ul>
      <li>C++</li>
      <li>C</li>
      <li>C#</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>Java</li>
      <li>SQL</li>
      <li>Verilog</li>
      <li>Assembly</li>
    </ul>
    <p>Web Technologies:</p>
    <ul>
      <li>JavaScript</li>
      <li>React</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Sencha EXT Js.js</li>
    </ul>
    <p>Hardware:</p>
    <ul>
      <li>Arduino</li>
      <li>Pic32</li>
      <li>Circuit analysis</li>
    </ul>
    <p>Tools:</p>
    <ul>
      <li>Visual Studio</li>
      <li>Matlab</li>
      <li>AutoCAD</li>
      <li>OrCAD-Pspice</li>
      <li>Microsoft Office.js</li>
      <li>MPLABX</li>
      <li>PHPStorm</li>
      <li>Altium</li>
      <li>LaTeX</li>
    </ul>
    <p>Communication:</p>
    <ul>
      <li>Public speaking</li>
      <li>Technical writing</li>
      <li>Reporting</li>
    </ul>
    <p>Other Skills:</p>
    <ul>
      <li>Bilingual: English, Spanish </li>
    </ul>
  </div>
);
/* <img src={experienceImage} alt="Experience" className="section-image" />*/
const Experience = () => (
  <div className="content">
  
    <h2>Experiences:</h2>
    <p class="workPlace">
 Junior Software Developer 
OATI Inc | Bloomington, MN 
:</p>
May 2022 - December 2022
    <ul>
      <li>Developed full stack solutions using JavaScript, CSS, HTML, Sencha Ext JS, and SQL</li>
      <li>Assisted in creation of project timelines, milestones, and deliverables for effective project management.</li>
      <li>Participated in code reviews to maintain high coding standards and best practices within the team.</li>
    </ul>

    <p class="workPlace">
    Electrical Support Technician
    Minnetronix Medical Inc | St. Paul, MN
:</p>
June 2021 - December 2021 
    <ul>
      <li>Assembled and repaired medical devices according to blueprints and AutoCAD drawings</li>
      <li>Installed, dismantled and reconstructed equipment required by customer or order.</li>
      <li>Collaborated with engineers to develop solutions for complex technical problems.</li>
      
    </ul>

    <p class="workPlace">
    Software Development Intern
Brion Finlay Engineering LLC | Maple Grove, MN 
:</p>
October 2020 - April 2021 
    <ul>
      <li>Created web applications and components using React, HTML, and CSS</li>
      <li>Corrected errors in software designs during development and after installation.</li>
      <li>Kept up to date on web developments and trends.</li>
      
    </ul>

    <p class="workPlace">
    Quality Tester
Lind Electronics | Minnetonka, MN 
:</p>
uly 2020 - October 2020 
    <ul>
      <li>Conducted PCB testing for opens, shorts, and other faults</li>
      <li>Maintained documentation related to test strategies, plans, cases, scripts, and results.</li>
      <li>Trained new team members on the company's testing procedures and tools.</li>
      
    </ul>


    <p class="workPlace">
    Math Tutor
Minneapolis Community & Technical College | Minneapolis, MN 
:</p>
June 2016 - May 2017 
    <ul>
      <li>Provided tutoring in math, physics, and computer science</li>
      <li>Supported students with homework help, lesson reinforcement and personalized attention.</li>
      <li>Collaborated with fellow tutors to share best practices and improve the overall effectiveness of the tutoring program.</li>
      
    </ul>

    <p class="workPlace">
    Uber Driver 
    Self-Employed
:</p>
Jun 2018 - Current 
    <ul>
      <li>Provided transportation services to passengers in a safe and efficient manner</li>
      <li>Listened to customer requests and specifications and made suggestions to appropriately fulfill needs.</li>
      <li>Planned and executed strategies to increase business and drive profit growth.</li>
      
    </ul>


    <p class="workPlace">
    Electrician
Self-Employed 
:</p>
January 2023 - Current 
    <ul>
      <li>Read and interpreted blueprints and mechanical diagrams to visualize and plan for upcoming work.</li>
      <li>Connected wiring in electrical circuits and networks and checked component compatibility.</li>
      <li>Followed all safety processes and procedures during electrical work.</li>
      
    </ul>



  </div>
);
const Education = () => (
  <div className="content">
    <h2>Schools: </h2>


    <p>
B.S. in Computer Engineering
University of Minnesota - Twin Cities, Minneapolis, MN</p>
<p>May 2022</p>
    <ul>
      <li>Relevant Coursework: Digital Design (Verilog), Microcontrollers (MPLAB), Advanced Algorithms and Data Structures, Database Systems (SQL Server),</li>
      <li>Computer Architecture (C), Artificial Intelligence (Python), Signals and Communications Systems (OrCAD-Pspice)</li>

      
    </ul>

    <p>A.S. in Mathematics
Minneapolis Community and Technical College, Minneapolis, MN</p>
    <p>May 2017</p>
    <ul>
      <li>Relevant Coursework: Object-Oriented Programming with C++, Discrete Mathematics</li>
      
    </ul>


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

const Links = () => (
  <div className="content">
    <h2>Click on the following options: </h2>
    <div className="external-links">
    <a href="https://www.linkedin.com/in/alex-lema/" target="_blank">LinkedIn</a>
    <a href="https://github.com/alexisrael17" target="_blank">GitHub</a>
        {/* Add more external links as needed */}
   </div>    
  </div>
);


/*
          <li><Link to="/school-projects">School Projects</Link></li>
          <li><Link to="/sports-and-pastimes">Sports and Pastimes</Link></li>
          <li><Link to="/stories">Stories</Link></li>
          
        <Route path="/school-projects" element={<SchoolProjects />} />
        <Route path="/sports-and-pastimes" element={<SportsAndPastimes />} />
        <Route path="/stories" element={<Stories />} />

*/
const App = () => (
  <Router>
    <div className="container">
    <div className="content">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/external-links">Links</Link></li>
          {/* Add links for other routes */}

        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        

        <Route path="/external-links" element={<Links />} />
        {/* Add routes for other components */}
        {/* Add routes for other components */}
      </Routes>
      </div>
    </div>
  </Router>
);

export default App;
