/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [EmailSendSuccess, setemailSendSuccess] = useState(false);
  const [emailSendError, setEmailSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1f7cp9",
        "template_eh9ppcs",
        form.current,
        "zXfB81EWEqwQNM0A6"
      )
      .then(
        () => {
          setemailSendSuccess(true);
          setEmailSendError(false);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setemailSendSuccess(false);
          setEmailSendError(true);
        }
      );
  };

  return (
    <div className="form">
      <div className="form__title">
        <h2>
          {" "}
          <span>&#47;&#47;</span> Formulaire de contact
        </h2>
      </div>
      <div className="form__inputs">
        <form ref={form} onSubmit={sendEmail}>
          <div className="form__group">
            <label>Nom</label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form__group">
            <label>Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form__group">
            <label>Message</label>
            <textarea name="message" required />
          </div>
          <div className="form__button">
            <input
              type="submit"
              value="Envoyer"
              className="form__button--value"
            />
          </div>
        </form>
      </div>
      {EmailSendSuccess && <p>Message bien envoyé</p>}
      {emailSendError && (
        <p>Echec lors de l'envoi du message. Veuillez réessayer</p>
      )}
    </div>
  );
};
export default Contact;
