import React, { useState } from 'react';
import './Mywork.css';
import software from '../../assets/software.png';
import database from '../../assets/database.jpg';
import embedded from '../../assets/embedded.jpg';
import robotics from '../../assets/robotics.jpg';
import research from '../../assets/research.jpg';

function Mywork() {
  const [showMoreCompleted, setShowMoreCompleted] = useState(false);
  const [showMoreOngoing, setShowMoreOngoing] = useState(false);

  const completedProjects = [
    {
      img: software,
      title: 'Software Development',
      desc: 'Developed a user-friendly, scalable software solution to automate tasks for Management Officers at the AR Office of our university.'
    },
    {
      img: database,
      title: 'Database System',
      desc: 'Designed and implemented an efficient database system for managing laboratory reservations.'
    },
    {
      img: embedded,
      title: 'Embedded System',
      desc: 'Developed an embedded system for a Smart Greenhouse with real-time data processing and sensor integration.'
    },
    {
      img: robotics,
      title: 'Robotics',
      desc: 'Built an autonomous robot capable of obstacle detection while rotational navigation around objects.'
    },
    // Add more completed projects here if needed
  ];

  const ongoingProjects = [
    {
      img: research,
      title: 'Research in Lightweight Model',
      desc: 'Currently researching improving lightweight deep learning models for plant disease recognition'
    },
    // Add more ongoing projects here if needed
  ];

  return (
    <div id='portfolio' className='mywork'> {/* Added id='portfolio' */}
      <div className="mywork-title">
        <h1>Completed Projects</h1>
      </div>

      <div className="projects-container">
        {completedProjects.slice(0, showMoreCompleted ? completedProjects.length : 4).map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {completedProjects.length > 4 && (
        <button className="show-more-btn" onClick={() => setShowMoreCompleted(!showMoreCompleted)}>
          {showMoreCompleted ? 'Show Less' : 'Show More'}
        </button>
      )}

      <div className="mywork-title">
        <h1>Ongoing Projects</h1>
      </div>

      <div className="projects-container">
        {ongoingProjects.slice(0, showMoreOngoing ? ongoingProjects.length : 1).map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {ongoingProjects.length > 1 && (
        <button className="show-more-btn" onClick={() => setShowMoreOngoing(!showMoreOngoing)}>
          {showMoreOngoing ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default Mywork;
