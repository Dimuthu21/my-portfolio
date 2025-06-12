import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Profile" />
      <h1><span>I'm Dimuthu.</span> A Passionate Computer Engineering Student.</h1>
      <p>
        I am an enthusiastic and detail-oriented Computer Engineering undergraduate from the University of Jaffna,
        specializing in software development, web technologies, and innovative tech solutions. 
        Eager to learn and build impactful projects that solve real-world problems.
      </p>

      <div className="hero-action"> 
        {/* Connect with Me button scrolls to Contact */}
        <AnchorLink href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>

        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
