import React from "react";
import { useSelector } from "react-redux";

export const Tags = ({ name }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div key={name} className={`tag ${isDarkMode ? "dark" : ""}`}>
      {name}
    </div>
  );
};
