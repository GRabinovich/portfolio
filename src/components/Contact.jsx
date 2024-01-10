import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { MailIcon } from "../common/icons/page/Mail";
import { MapIcon } from "../common/icons/page/Map";
import { Form } from "../common/Form";
import { useSelector } from "react-redux";
import { Toaster, toast } from "sonner";
import "../styles/Contact.css";

export const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [emptyName, setEmptyName] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);
  const isDarkMode = useSelector((state) => state.darkMode.darkMode);

  const sendEmail = (e) => {
    e.preventDefault();

    let incompleteForm = false;

    if (!formData.user_name) {
      setEmptyName(true);
      incompleteForm = true;
    } else {
      setEmptyName(false);
    }

    if (!formData.user_email) {
      setEmptyEmail(true);
      incompleteForm = true;
    } else {
      setEmptyEmail(false);
    }

    if (!formData.message) {
      setEmptyMessage(true);
      incompleteForm = true;
    } else {
      setEmptyMessage(false);
    }

    if (!incompleteForm) {
      sendForm("service_45i9rf5", "template_ug908dc", form.current, "zV7tX71adBY5h3OS4").then(
        (res) => {
          console.log(res.text);

          toast("Correo enviado correctamente!", { type: "success" });

          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast("Error al enviar el correo", { type: "error" });
        }
      );
    }
  };

  return (
    <div className="container-contact" id="contact">
      <div className="subcontainer-contact-left">
        <h1 className={`title-contact ${isDarkMode ? "dark" : ""}`}>Contacto</h1>
        <div className="container-subtitle-contact">
          <MailIcon className={`img-start ${isDarkMode ? "dark" : ""}`} />
          <p className={`subtitle-contact ${isDarkMode ? "dark" : ""}`}>garabinovich@gmail.com</p>
        </div>
        <div className="container-subtitle-contact">
          <MapIcon className={`img-start ${isDarkMode ? "dark" : ""}`} />
          <p className={`subtitle-contact ${isDarkMode ? "dark" : ""}`}>Resistencia, Chaco, Argentina</p>
        </div>
      </div>
      <div className="subcontainer-contact-right">
        <Form form={form} sendEmail={sendEmail} formData={formData} setFormData={setFormData} emptyName={emptyName} emptyEmail={emptyEmail} emptyMessage={emptyMessage} />
        <Toaster/>
      </div>
    </div>
  );
};
