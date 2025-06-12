import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {  
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <AnchorLink href="#home" className={menu === "home" ? "active" : ""}>Home</AnchorLink>
        </li>
        <li onClick={() => setMenu("about")}>
          <AnchorLink href="#about" className={menu === "about" ? "active" : ""}>About Me</AnchorLink>
        </li>
        <li onClick={() => setMenu("portfolio")}>
          <AnchorLink href="#portfolio" className={menu === "portfolio" ? "active" : ""}>Portfolio</AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")}>
          <AnchorLink href="#contact" className={menu === "contact" ? "active" : ""}>Contact</AnchorLink>
        </li>
      </ul>

      {/* Fix for "Connect With Me" - scroll to Contact */}
      <AnchorLink href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
}

export default Navbar;
