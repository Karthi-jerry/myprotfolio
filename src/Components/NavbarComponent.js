import React from 'react';

import './NavbarComponent.css'
import { Link } from 'react-router-dom';



function NavbarComponent() {
  return (
    <nav className="navbar">
      <h1 className="logo">I'm Karthick</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutMe">About Me</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/Projects">Projects</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
