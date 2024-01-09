import React from "react";
import { useSelector } from "react-redux";

export const AboutMe = () => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode)

  return (
    <div className="container-about-me" id="aboutme">
      <h1 className={`title-content-about-me ${isDarkMode ? "dark" : ""}`}>Acerca de mí</h1>
      <p className={`content-about-me ${isDarkMode ? "dark" : ""}`}>Mi camino comenzó como estudiante de arquitectura, donde pronto me di cuenta de que mi verdadera pasión yace en otro ámbito. Esto me llevó a explorar diversas oportunidades, y finalmente descubrí mi pasión por la programación.</p>
      <p className={`content-about-me ${isDarkMode ? "dark" : ""}`}>En este campo, encuentro un espacio donde puedo dar rienda suelta a mi creatividad al resolver problemas a través de la lógica y la inteligencia.</p>
      <p className={`content-about-me ${isDarkMode ? "dark" : ""}`}>Lo que más me cautiva de la programación es su capacidad para materializar ideas y conceptos en forma de software funcional.</p>
      <p className={`content-about-me ${isDarkMode ? "dark" : ""}`}>En mi búsqueda laboral, anhelo un ambiente que fomente la colaboración y el trabajo en equipo porque soy una persona que cree en la sinergia de mentes creativas y en cómo estas pueden lograr resultados sorprendentes.</p>
      <p className={`content-about-me ${isDarkMode ? "dark" : ""}`}>Estoy emocionado por descubrir qué me depara el destino en esta emocionante y nueva trayectoria dentro de la programación.</p>
    </div>
  );
};
