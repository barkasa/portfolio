// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import s from "./ContactsPage.module.css";
// import successImage from "../../assets/success.png";

// const ContactsPage = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubjectChange = (e) => {
//     setSubject(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (name && email && subject && message) {
//       setIsSending(true);

//       // Отправка сообщения на почту
//       // Ваш код для отправки сообщения на почту

//       // Установка флага успешной отправки
//       setIsSent(true);
//       setIsSending(false);
//     }
//   };

//   const handleGoBack = () => {
//     navigate("/designe");
//   };

//   return (
//     <div className={s.wrapper_app}>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <p style={{ color: "red", textAlign: "center" }}>
//           WARNING!!! emailing through the Contact form is temporarily not
//           working.
//         </p>
//       </div>
//       <div className={s.container}>
//         {isSent ? (
//           <div className={s.success_container}>
//             <img src={successImage} alt="Success" className={s.success_image} />
//             <button className={s.back_button} onClick={handleGoBack}>
//               Go back to Gallery
//             </button>
//           </div>
//         ) : (
//           <form className={s.form} onSubmit={handleSubmit}>
//             <div className={s.form_container}>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={handleNameChange}
//                 required
//                 pattern="[A-Za-zА-Яа-яЁё\s]+"
//                 className={s.form_input}
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//                 className={s.form_input}
//               />
//               <input
//                 type="text"
//                 placeholder="Your Subject"
//                 value={subject}
//                 onChange={handleSubjectChange}
//                 required
//                 pattern="[A-Za-zА-Яа-яЁё\s]+"
//                 className={s.form_input}
//               />
//               <textarea
//                 placeholder="Your Message"
//                 value={message}
//                 onChange={handleMessageChange}
//                 required
//                 className={s.form_textarea}
//                 style={{ resize: "vertical" }}
//               />
//               <button
//                 type="submit"
//                 className={s.form_button}
//                 disabled={isSending}
//               >
//                 {isSending ? "Sending..." : "SEND MESSAGE"}
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContactsPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./ContactsPage.module.css";
import successImage from "../../assets/success.png";

const ContactsPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://formspree.io/f/mkgjwpvq?language=en",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json", // Убедитесь, что сервер принимает JSON
          },
        }
      );

      if (response.ok) {
        setIsSent(true);
        setErrorMessage(""); // очищаем ошибку
      } else {
        throw new Error("Form submission error");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to submit the form. Try again.");
    }
  };

  const handleGoBack = () => {
    navigate("/portfolio");
  };

  return (
    <div className={s.wrapper_app}>
      <div className={s.container}>
        {isSent ? (
          <div className={s.success_container}>
            <img src={successImage} alt="Success" className={s.success_image} />
            {/* <p className={s.success_text}>
              Спасибо! Ваше сообщение успешно отправлено.
            </p> */}
            <button className={s.back_button} onClick={handleGoBack}>
              Back to the start page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.form_container}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                pattern="[A-Za-zА-Яа-яЁё\s]+"
                className={s.form_input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={s.form_input}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                pattern="[A-Za-zА-Яа-яЁё\s]+"
                className={s.form_input}
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={s.form_textarea}
                style={{ resize: "vertical" }}
              />
              <button type="submit" className={s.form_button}>
                SEND A MESSAGE
              </button>
            </div>
          </form>
        )}
        {errorMessage && (
          <div className={s.error_message}>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
