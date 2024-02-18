import React from "react";
import SendIcon from "../common/icons/page/send.svg";
import { useSelector } from "react-redux";

export const Form = ({ form, sendEmail, formData, setFormData, emptyName, emptyEmail, emptyMessage }) => {
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={`${isDarkMode ? "dark" : ""}`}>
        <div className="container-label-input">
          <label>Nombre:</label>
          <input type="text" name="user_name" value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} />
        </div>
        {emptyName ? <p className="message-incomplete-input">*Complete este campo para poder mandar el mensaje correctamente.</p> : ""}
        <div className="container-label-input">
          <label>Email:</label>
          <input type="email" name="user_email" value={formData.user_email} onChange={(e) => setFormData({ ...formData, user_email: e.target.value })} />
        </div>
        {emptyEmail ? <p className="message-incomplete-input">*Complete este campo para poder mandar el mensaje correctamente.</p> : ""}
        <div className="container-label-input">
          <label>Mensaje:</label>
          <textarea name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        </div>
        {emptyMessage ? <p className="message-incomplete-input">*Complete este campo para poder mandar el mensaje correctamente.</p> : ""}
        <div className="container-send-form-button">
          <button className={`send-form-button ${isDarkMode ? "dark" : ""}`} type="submit" value="Send">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
              <img className="send-icon" src={SendIcon} alt="Send Icon" />
              </div>
            </div>
            <span>Enviar</span>
          </button>
        </div>
      </form>
    </>
  );
};
