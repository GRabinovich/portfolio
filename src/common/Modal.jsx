import React from "react";
import { Tags } from "./Tags";
import CrossIcon from "./icons/page/cross.svg";
import { useSelector } from "react-redux";

export const Modal = ({ selectedApp, closeApp }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="modal">
      <div className="subcontainer-app-left">
        <h1 className={`title-app ${isDarkMode ? "dark" : ""}`}>{selectedApp.name}</h1>
        <p className={`description-app ${isDarkMode ? "dark" : ""}`}>{selectedApp.description}</p>
        <div className="container-tags">
          {selectedApp.technologies.map((tech) => (
            <Tags key={tech} name={tech} />
          ))}
        </div>
      </div>
      <div className="subcontainer-app-right">
        <div className="container-button-close">
          <button className="button-close" onClick={closeApp}>
            <img src={CrossIcon} alt="Cross Icon" className="image-button-close" />
          </button>
        </div>
        <div className="container-img-app">
          <img className="img-app" src={selectedApp.img} alt={selectedApp.name} width={300} height={300} />
        </div>

        <div className="container-app-buttons">
          {selectedApp.repoLinks.link ? (
            <a href={selectedApp.repoLinks.link} target="_blank">
              <button className={`app-buttons ${isDarkMode ? "dark" : ""}`}>Código</button>
            </a>
          ) : (
            <>
              <a href={selectedApp.repoLinks.backEndLink} target="_blank">
                <button className={`app-buttons ${isDarkMode ? "dark" : ""}`}>Back End</button>
              </a>
              <a href={selectedApp.repoLinks.frontEndLink} target="_blank">
                <button className={`app-buttons ${isDarkMode ? "dark" : ""}`}>Front End</button>
              </a>
            </>
          )}

          {!selectedApp.demo ? (
            <>
              <button className="disabled-button">Demo</button>
              <p className="message-disabled-button">*La demo aún no está disponible porque el proyecto sigue en desarrollo</p>
            </>
          ) : (
            <a href={selectedApp.demo} target="_blank">
              <button className={`app-buttons ${isDarkMode ? "dark" : ""}`}>Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
