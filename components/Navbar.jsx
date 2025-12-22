"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaFileDownload } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">Prashanna</span>
          <span className="logo-sub">Junior Web Developer</span>
        </div>

        <div className="nav-menu">
          <ul className="nav-links">
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('certificates')}>Certificates</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>

          <div className="nav-actions">
            <a 
              href="/prashannapudasainiCV.pdf" 
              download 
              className="cv-download"
            >
              <FaFileDownload /> CV
            </a>
            
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </div>
        </div>

        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}