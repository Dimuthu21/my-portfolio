import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>Dimuthu Shalinda</h2>
          <p>Passionate Developer | Tech Enthusiast | Problem Solver</p>
        </div>
        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Dimuthu21" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-bottom">© 2025 Dimuthu Shalinda. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
