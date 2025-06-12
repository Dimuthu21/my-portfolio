import React from 'react';
import './About.css';
import skill from '../../assets/skill.jpg';

function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={skill} alt="skill" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am Dimuthu Shalinda, an enthusiastic Computer Engineering undergraduate passionate about building modern, responsive websites, experimenting with Machine Learning, and creating user-friendly designs. I love solving real-world problems using technology.</p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>Programming Languages</p>
              <hr style={{ width: "85%" }} />
            </div>
            <ul>
              <li>Java (Strong)</li>
              <li>JavaScript (Strong)</li>
              <li>Python </li>
              <li>C/C++ </li>
            </ul>

            <div className="about-skill">
              <p>Web Development</p>
              <hr style={{ width: "90%" }} />
            </div>
            <ul>
              <li>React.js (Strong)</li>
              <li>CSS3 (Strong)</li>
              <li>JavaScript Core </li>
              <li>HTML</li>
            </ul>

            <div className="about-skill">
              <p>UI/UX Design Tools</p>
              <hr style={{ width: "75%" }} />
            </div>
            <ul>
              <li>Figma (Strong)</li>
              <li>Canva </li>
            </ul>

            <div className="about-skill">
              <p>AI & ML (Beginner)</p>
              <hr style={{ width: "70%" }} />
            </div>
            <ul>
              <li>Deep Learning (Strong)</li>
              <li>Machine Learning (Strong)</li>
              <li>Artificial Intelligence </li>
            </ul>

            <div className="about-skill">
              <p>Tools & Version Control</p>
              <hr style={{ width: "85%" }} />
            </div>
            <ul>
              <li>Git & GitHub (Strong)</li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
