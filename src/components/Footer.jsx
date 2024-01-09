import React from "react";
import { useSelector } from "react-redux";
import "../styles/Footer.css"

export const Footer = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`container-footer ${isDarkMode ? "dark" : ""}`}>
      <p>Copyright © Gastón Ariel Rabinovich 2024</p>
    </div>
  );
};
