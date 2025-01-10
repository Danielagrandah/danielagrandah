import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleNavbar}>
        ☰
      </button>
      <div className="navbar-content">
        <div className="profile">
          <img
            src="images/foto01.png" 
            alt="Profile"
            className="profile-img"
          />
          <h2 className="profile-name">Daniela</h2>
        </div>
        <ul className="nav-links">
          <li><a href="#about">Acerca de mí</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#education">Educación</a></li>
          <li><a href="#projects">Proyectos</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
