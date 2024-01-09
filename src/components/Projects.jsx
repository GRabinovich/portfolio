import React from "react";
import { ApplicationsCards } from "../common/ApplicationsCards";
import { useSelector } from "react-redux";

export const Projects = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="container-projects" id="projects">
      <h1 className={`title-projects ${isDarkMode ? "dark" : ""}`}>Proyectos</h1>
      <ApplicationsCards />
    </div>
  );
};
