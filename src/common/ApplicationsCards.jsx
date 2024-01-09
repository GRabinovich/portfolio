import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../state/actionsModal";
import { Applications } from "../utils/Applications";
import { Modal } from "./Modal";

export const ApplicationsCards = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);

  useEffect(() => {
    setApplications(Applications());
  }, []);

  const handleAppClick = (app) => {
    setSelectedApp(app);
    dispatch(openModal());
  };

  const closeApp = () => {
    setSelectedApp(null);
    dispatch(closeModal());
  };

  return (
    <div className={`container-applications ${isDarkMode ? "dark" : ""}`}>
      {applications.map((app) => (
        <motion.div key={app.name} className="container-app" onClick={() => handleAppClick(app)} whileHover={{ scale: 1.05 }}>
          <img className="img-app" src={app.img} alt={app.name} />
          <h1 className={`title-app ${isDarkMode ? "dark" : ""}`}>{app.name}</h1>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedApp && (
          <>
            <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} exit={{ opacity: 0 }} onClick={closeApp}></motion.div>
            <motion.div key={selectedApp.name} className={`fullscreen ${isDarkMode ? "dark" : ""}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Modal selectedApp={selectedApp} closeApp={closeApp} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
