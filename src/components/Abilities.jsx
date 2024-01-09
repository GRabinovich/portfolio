import React from "react";
import { AbilitiesCards } from "../common/AbilitiesCards";
import { useSelector } from "react-redux";

export const Abilities = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="container-abilities" id="abilities">
      <h1 className={`title-content-abilities ${isDarkMode ? "dark" : ""}`}>Habilidades</h1>
      <AbilitiesCards />
    </div>
  );
};
