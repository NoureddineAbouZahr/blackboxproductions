import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="BLACK BOX" />
      </div>
      <ul className="navbar-links">
        <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
