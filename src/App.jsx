import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Start } from "./components/Start";
import { AboutMe } from "./components/AboutMe";
import { Abilities } from "./components/Abilities";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const App = () => {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);

  return (
    <main>
      {!isModalOpen && <Navbar />}
      <Start />
      <div className="container-about-me-abilities">
        <AboutMe />
        <Abilities />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
