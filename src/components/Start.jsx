import React from "react";
import MemojiLight from "../assets/MemojiLight.webp";
import MemojiDark from "../assets/MemojiDark.png";
import { GitHubIcon } from "../common/icons/page/Github";
import { LinkedInIcon } from "../common/icons/page/Linkedin";
import CVIcon from "../common/icons/page/cv.svg";
import { useSelector } from "react-redux";
import "../styles/Start.css"

export const Start = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="container-start" id="start">
      <div className="avatar">{isDarkMode ? <img src={MemojiDark} loading="lazy" alt="Memoji Dark" /> : <img src={MemojiLight} loading="lazy" alt="Memoji Light" />}</div>
      <div className="content-start">
        <h1 className={`title-content-start ${isDarkMode ? "dark" : ""}`}>Gastón Ariel Rabinovich</h1>
        <h2 className={`subtitle-content-start ${isDarkMode ? "dark" : ""}`}>Full Stack Developer</h2>
        <div className="networks-start">
          <a href="https://github.com/GRabinovich">
            <GitHubIcon className={`img-start ${isDarkMode ? "dark" : ""}`} />
          </a>
          <a href="https://www.linkedin.com/in/gast%C3%B3n-ariel-rabinovich-276711283/" target="_blank">
            <LinkedInIcon className={`img-start ${isDarkMode ? "dark" : ""}`} />
          </a>
          <div className="container-button-download-cv">
            <a href="https://drive.google.com/file/d/1AcsYORevGZgN08YwklnRTpf6pUlHha8M/view?usp=sharing" target="_blank" style={{ textDecoration: "none" }}>
              <button className={`button-download-cv ${isDarkMode ? "dark" : ""}`}>
                Descargar CV <img className="img-cv" src={CVIcon} alt="CV Icon" width={28} height={28} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
