import React, { useState, useEffect } from "react";
import LogoLight from "../assets/LogoLight.webp";
import LogoDark from "../assets/LogoDark.png";
import { Link } from "react-scroll";
import { lightMode, darkMode } from "../state/actionsDarkMode";
import { useDispatch, useSelector } from "react-redux";
import MoonIcon from "../common/icons/page/moon.svg";
import SunIcon from "../common/icons/page/sun.svg";
import "../styles/Navbar.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleModeToggle = () => {
    if (isDarkMode) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#0e0220" : "#fafafa";
  }, [isDarkMode]);

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""} ${isDarkMode ? "dark" : ""}`}>
      <div className="navbar-content">
        {isDarkMode ? (
          <img src={LogoDark} className="navbar-logo dark" alt="Logo Dark" />
        ) : (
          <img src={LogoLight} className="navbar-logo" alt="Logo Light" />
        )}
        <div className={`navbar-toggle`} onClick={toggleMenu}>
          <div className={`bar ${isDarkMode ? "dark" : ""}`}></div>
          <div className={`bar ${isDarkMode ? "dark" : ""}`}></div>
          <div className={`bar ${isDarkMode ? "dark" : ""}`}></div>
        </div>
        <ul className={`navbar-list ${isMenuOpen ? "open" : ""} ${isDarkMode ? "dark" : ""}`}>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`}>
            <Link to="start" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`}>
            <Link to="aboutme" smooth={true} duration={500}>
              Acerca de mí
            </Link>
          </li>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`}>
            <Link to="abilities" smooth={true} duration={500}>
              Habilidades
            </Link>
          </li>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`}>
            <Link to="projects" smooth={true} duration={500}>
              Proyectos
            </Link>
          </li>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`}>
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
          <li className={`navbar-item ${isDarkMode ? "dark" : ""}`} onClick={handleModeToggle}>
            {isDarkMode ? <img src={MoonIcon} alt="Moon Icon" /> : <img src={SunIcon} alt="Sun Icon" />}
          </li>
        </ul>
      </div>
    </nav>
  );
};