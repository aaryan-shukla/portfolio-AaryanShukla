import React, { useState, useEffect } from "react";
import "./Styling Files/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Aaryan Shukla</a>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Experience</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        {isMobile && (
          <div
            className={`navbar-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}>
            <div className="hamburger-menu-bar"></div>
          </div>
        )}
      </div>
    </nav>
  );
}
