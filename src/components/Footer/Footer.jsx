import React from "react";
import { FaLinkedin, FaTelegramPlane, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import s from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    navigate("/contacts");
  };

  return (
    <footer className={s.footer}>
      <div className={s.footer_content}>
        <p className={s.footer_text}>
          Created by Morozov Ivan &copy; 2023 | Dusseldorf (Germany) | +49 1575
          2647752 |{" "}
          <span className={s.email_link} onClick={handleEmailClick}>
            morosow.iwan@gmail.com
          </span>
          .
        </p>
        <div className={s.social_icons}>
          <a
            href="https://api.whatsapp.com/send?phone=4915752647752"
            target="_blank"
            rel="noopener noreferrer"
            className={s.icon_link}
          >
            <IoLogoWhatsapp className={s.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-morozov-840440a3/"
            className={s.icon_link}
          >
            <FaLinkedin className={s.icon} />
          </a>
          <a
            href="https://telegram.me/barkasa15"
            target="_blank"
            rel="noopener noreferrer"
            className={s.icon_link}
          >
            <FaTelegramPlane className={s.icon} />
          </a>
          <a href="https://github.com/barkasa" className={s.icon_link}>
            <FaGithub className={s.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
