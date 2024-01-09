import React, { useState, useEffect } from "react";
import { Skills } from "../utils/Skills";
import { useSelector } from "react-redux";

export const AbilitiesCards = () => {
  const [abilities, setAbilities] = useState([]);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  useEffect(() => {
    setAbilities(Skills());
  }, []);

  return (
    <div className="container-cards">
      {abilities.map((ability) => (
        <div key={ability.name} className={`card ${isDarkMode ? "dark" : ""}`}>
          <img src={ability.img} loading="lazy" alt={ability.name} width={40} height={40} />
          <h3 className={`title-abilities-cards ${isDarkMode ? "dark" : ""}`}>{ability.name}</h3>
        </div>
      ))}
    </div>
  );
};
